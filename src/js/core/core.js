module.exports = function($http, config, $injector) {

  var core = {};
  var dice = require('dice-coefficient');

  var countries =  { "af":"Afghan","al":"Albanian","dz":"Algerian","ad":"Andorran","ao":"Angolan","ag":"Antiguan","ar":"Argentinian","am":"Armenian","au":"Australian","at":"Austrian","az":"Azerbaijani","bs":"Bahamian","bh":"Bahraini","bd":"Bangladeshi","bb":"Barbadian","by":"Belarusian","be":"Belgian","bz":"Belizean","bj":"Beninese","bt":"Bhutanese","bo":"Bolivian","ba":"Bosnian","bw":"Botswanan","br":"Brazilian","bn":"Bruneian","bg":"Bulgarian","bf":"Burkinan","mm":"Burmese","bi":"Burundi","kh":"Cambodian","cm":"Cameroonian","ca":"Canadian","cv":"Cape Verdean","cf":"Central African Republic","td":"Chadian","cl":"Chilean","cn":"Chinese","co":"Colombian","km":"Comoran","cg":"Congolese","cd":"Congolese","cr":"Costa Rican","hr":"Croatian","cu":"Cuban","cy":"Cypriot","cz":"Czech","dk":"Danish","dj":"Djiboutian","dm":"Dominican","do":"Dominican Republic","tl":"East Timorese","ec":"Ecuadorean","eg":"Egyptian","sv":"Salvadorean","gq":"Equatorial Guinean","er":"Eritrean","ee":"Estonian","et":"Ethiopian","fj":"Fiji","fi":"Finnish","fr":"French","ga":"Gabonese","gm":"Gambian","ge":"Georgian","de":"German","gh":"Ghanaian","gr":"Greek","gd":"Grenadian","gt":"Guatemalan","gn":"Guinean","gw":"Guinea-Bissau","gy":"Guyanese","ht":"Haitian","hn":"Honduran","hu":"Hungarian","is":"Icelandic","in":"Indian","id":"Indonesian","ir":"Iranian","iq":"Iraqi","ie":"Irish","il":"Israeli","it":"Italian","ci":"Ivorian","jm":"Jamaican","jp":"Japanese","jo":"Jordanian","kz":"Kazakh","ke":"Kenyan","ki":"Kiribati","kp":"North Korean","kr":"South Korean","":"Kosovan","kw":"Kuwaiti","kg":"Kyrgyz","la":"Lao","lv":"Latvian","lb":"Lebanese","ls":"Lesotho","lr":"Liberian","ly":"Libyan","li":"Liechtenstein","lt":"Lithuanian","lu":"Luxembourg","mk":"Macedonian","mg":"Malagasy","mw":"Malawian","my":"Malaysian","mv":"Maldivian","ml":"Malian","mt":"Maltese","mh":"Marshall Islander","mr":"Mauritanian","mu":"Mauritian","mx":"Mexican","fm":"Micronesian","md":"Moldovan","mc":"Monegasque","mn":"Mongolian","me":"Montenegrin","ma":"Moroccan","mz":"Mozambican","na":"Namibian","nr":"Nauruan","np":"Nepalese","nl":"Dutch","nz":"New Zealand","ni":"Nicaraguan","ne":"Niger","ng":"Nigerian","no":"Norwegian","om":"Omani","pk":"Pakistani","pw":"Palauan","pa":"Panamanian","pg":"Papua New Guinean","py":"Paraguayan","pe":"Peruvian","ph":"Philippine","pl":"Polish","pt":"Portuguese","qa":"Qatari","ro":"Romanian","ru":"Russian","rw":"Rwandan; Rwandese","kn":"Kittitian/Nevisian","lc":"St Lucian","vc":"St Vincent","ws":"Samoan","sm":"San Marino","st":"of Sao Tome and Principe","sa":"Saudi Arabian","sn":"Senegalese","rs":"Serbian","sc":"Seychelles","sl":"Sierra Leone","sg":"Singaporean","sk":"Slovak","si":"Slovenian","sb":"Solomon Islands","so":"Somali","za":"South African","ss":"South Sudanese","es":"Spanish","lk":"Sri Lankan","sd":"Sudanese","sr":"Surinamese","sz":"Swazi","se":"Swedish","ch":"Swiss","sy":"Syrian","tj":"Tajik","tz":"Tanzanian","th":"Thai","tg":"Togolese","to":"Tongan","tt":"Trinidadian/Tobagan","tn":"Tunisian","tr":"Turkish","tm":"Turkmen","tv":"Tuvaluan","ug":"Ugandan","ua":"Ukrainian","ae":"UAE","us":"American","uy":"Uruguayan","uz":"Uzbek","vu":"Vanuatu","va":"Vatican","ve":"Venezuelan","vn":"Vietnamese","ye":"Yemeni","zm":"Zambian","zw":"Zimbabwean"};

  core.get = function(request) {

    var engine = $injector.get(config.get());
    var filter = engine.filter;

    function calculateItem(index, options) {

      var weaponParam = weapons.weapons[index];
      var compare = {};
      var bMultiple = false;
      var multipleFields = [];
      var variants = -1;
      var variantArray = [];


      weaponParam.href = encodeURI(config.baseURL + "/#/" + options.typeShortName + "/" + weaponParam.name.replace("/","%2F")).replace("&", "%26") + "/";
      weaponParam.flag = config.baseURL + "/img/flags/" + weaponParam.country + ".png";
      weaponParam.nationality = countries[weaponParam.country];

      for (var key in weaponParam) {
        if (Array.isArray(weaponParam[key])) {
          bMultiple = true;
          if (variants !== -1 && variants != weaponParam[key].length) {
            return false;
          }
          variants = weaponParam[key].length;
          multipleFields.push(key);
        }
      }

      if (bMultiple) {
        var itemToPush;
        for (var i=0; i < variants; i++) {
          var toCalculate = JSON.parse(JSON.stringify(weaponParam));
          for (var k=0; k < multipleFields.length; k++) {
            var field = multipleFields[k];
            toCalculate[field] = weaponParam[field][i];
          }
          var calculatedVariant = engine.calculate(toCalculate, ammo[toCalculate.cartridge], options);
          if (i === 0) {
            itemToPush = calculatedVariant;
          } else {
            variantArray.push(calculatedVariant);
          }
        }
        if (!bSimilar || index == similar.index) {
          response.data.push(itemToPush);
        } else {
          itemToPush.similarity = (100 * dice(compareTo, itemToPush.similar)).toFixed(2);
          response.similar.push(itemToPush);
        }
        itemToPush.variants = variantArray;
      } else {
        var calculated = engine.calculate(weaponParam, ammo[weaponParam.cartridge], options);
        if (!bSimilar || index == similar.index) {
          response.data.push(calculated);
        } else {
          calculated.similarity = (100 * dice(compareTo, calculated.similar)).toFixed(2);
          response.similar.push(calculated);
        }
      }
    }

    var ammo    = request.data.ammo;
    var format  = request.format;
    var weapons = request.data.weapons;
    var similar = request.similar;
    var bSimilar = similar ? similar.checkSimilar : false;

    var response = {};
        response.data = [];
        response.columns = engine.columns;
    if (bSimilar) {
      response.similar = [];
      calculateItem(similar.index, {
        "typeShortName" : similar.type,
        "typeLongName" : weapons.name,
        "format" : format,
        "similar" : true,
        "compareTo" : true
      });
      var compareTo;
      if (response.data[0].similar !== undefined) {
        compareTo = response.data[0].similar;
      } else {
        bSimilar = false;
      }
    }

    var options = {
      "typeShortName" : weapons.shortname,
      "typeLongName" :  weapons.name,
      "format" :        format,
      "similar" :       bSimilar
    };

    for (var weapon = 0; weapon < weapons.weapons.length; weapon++) {
      if (weapon !== similar.index) {
        calculateItem(weapon, options);
      }
    }

    if (bSimilar) {
      response.similar.sort(function(a,b) {
        if (a.similarity < b.similarity){
          return 1;
        } else if (a.similarity > b.similarity) {
          return -1;
        }
        return 0;
      });
      if (request.similarLength !== -1) {
        response.similar = response.similar.slice(0,request.similarLength);
      }
    }

    return response;
  };
  return core;
};
