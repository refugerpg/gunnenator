/*

PASSED
CBJ-MS - proprietary round
MSMC - proprietary round


Pistols
MP412
QSZ-92
FN57
Unica 6
Taurus Raging Bull
CZ-52
Chiappa Rhino
Fort-12
GP-100
Gsh18
H&K HK45C
H&K USP Compact
Mateba Unica
OTs-33
S&W M469
Taurus Model 44
TT-33

Shotguns
W1200
M1014
SPAS-12
AA-12
Striker
Ranger
Model 1887
Saiga-12
KSG
M1216
QBS-09
UTS-15
DBV-12

Assault rifles
Vepr
SAR-21
XM8 - get proper sight radius measurement

Carbines
XM8 PDW

LMGS
XM8 LSW

MMGS
M240
Pecheneg
Type 67
AA 7.62
Mk. 48
PKM
Bren L4
L7A2

Sniper rifles
FN SCAR SSR
VKS
Lynx
L115
USR
M21
R700
Intervention
RSASS
AS-50
L118A
MSR
FN Ballista
CS-LR4
M40A5
Scout Elite
SV-98
JNG-90
.338-Recon
M98B
SRR-61
FY-JS
GOL Magnum
SR338
CS5
Barrett M82
Barrett M99
DSR-50


*/

var wl = {
  "pistols" : {
    weapons : [
    {name: "AEK 906", alias: ["AEK 906, AEK 906-1"], cartridge: ["9x18mm","9x19mm"], cap: 6, country: "ru"},
    {name: "AMT .44 Automag", cartridge: ".44 AMP", cap: 7, country: "us"},
    {name: "Arminius Vindicator", cartridge: [".357 Magnum",".38 Special"], cap: 6, country: "de"},
    {name: "ASAI AG onePRO", cartridge: ["9x19mm", ".45 ACP", ".400"], cap: [16, 10, 10], country: "ch"},
    {name: "Astra Model 960", cartridge: ".38 Special", cap: 6, country: "es"},
    {name: "Astra Police", cartridge: ".357 Magnum", cap: 6, country: "es"},
    {name: "AT 2000 S, AT 2000 PS", cartridge: "9x19mm", cap: 15, country: "ch"},
    {name: "AT 2000 P", cartridge: "9x19mm", cap: 13, country: "ch"},
    {name: "AT 2000 H", cartridge: "9x19mm", cap: 10, country: "ch"},
    {name: "Baikal 441", cartridge: ".25 ACP", cap: 8, country: "ru"},
    {name: "Baikal 442", cartridge: ["9x18mm", "9x19mm"], cap: [8, 8], country: "ru"},
    {name: "Benelli MP3-S", cartridge: "9x19mm", cap: 8, country: "it"},
    {name: "Benelli MP95", cartridge: ".22 LR", cap: 6, country: "it"},
    {name: "Beretta M9 Mil-Spec", cartridge: "9x19mm", cap: 15, country: "it"},
    {name: "Beretta Model 84", cartridge: ".380 ACP", cap: 13, country: "it"},
    {name: "Beretta Model 85", cartridge: ".380 ACP", cap: 8, country: "it"},
    {name: "Beretta Model 86", cartridge: ".380 ACP", cap: 8, country: "it"},
    {name: "Beretta Model 87", cartridge: ".22 LR", cap: 8, country: "it"},
    {name: "Beretta Model 92", cartridge: "9x19mm", cap: 15, country: "it"},
    {name: "Beretta Model 92 Compact", cartridge: "9x19mm", cap: 13, country: "it"},
    {name: "Beretta Model 8000 Cougar", cartridge: "9x19mm", cap: 16, country: "it"},
    {name: "Beretta Model 8000 Mini-Cougar", cartridge: "9x19mm", cap: 16, country: "it"},
    {name: "Beretta Model 9000S", cartridge: "9x19mm", cap:12, country: "it"},
    {name: "Bernadelli P6", cartridge: ["9x19mm",".32 ACP",".380 ACP"], cap: [7,8,8], country: "it"},
    {name: "Bernadelli P.ONE", cartridge: "9x19mm", cap: 16, country: "it"},
    {name: "Bryco-Jennings Model 59", cartridge:"9x19mm", cap:8, country:"us"},
    {name: "Colt Anaconda", barrel: ['4"','8"'], cartridge:".44 Magnum", cap:6, country:"us"},
    {name: "Colt Delta Elite", cartridge: "10mm Auto", cap:7, country:"us"},
    {name: "Colt King Cobra", cartridge:".357 Magnum", cap:6, country:"us"},
    {name: "Colt Mark III 'Trooper'", barrel: 4, cartridge:".38 Special", cap:6, country:"us"},
    {name: "Colt Mark V", cartridge:".38 Special", cap:6, country:"us"},
    {name: "Colt Mustang", cartridge:".380 ACP", cap:6, country:"us"},
    {name: "Colt Python", cartridge:".357 Magnum", cap:6, country:"us"},
    {name: "Colt SOCOM", cartridge:".45 ACP", cap:12, country:"us"},
    {name: "Coonan Pistol", cartridge:".357 Magnum", cap:7, country:"us"},
    {name: "C7-75", alias: ["CZ-75 Compact","CZ-75 .40", "CZ-75 Auto"], cartridge: ["9x19mm",".40 S&W","9x19mm"], cap: [13,16,16], country: "cz"},
    {name: "CZ-85", cartridge: "9x19mm", cap: 15, country: "cz"},
    {name: "CZ-92", cartridge: ".25", cap: 8, country: "cz"},
    {name: "CZ-97B", cartridge: ".45 ACP", cap: 10, country: "cz"},
    {name: "CZ-100", cartridge: ["9x19mm",".40 S&W"], cap: [13,10], country: "cz"},
    {name: "CZ-101", cartridge: "9x19mm", cap: 7, country: "cz"},
    {name: "Daewoo DP51", cartridge: "9x19mm", cap: 13, country: "kr"},
    {name: "Daewoo DP51C", cartridge: "9x19mm", cap: 10, country: "kr"},
    {name: "DOG-1", cartridge: "12.5mm", cap: 5, country: "ru"},
    {name: "Downsizer", cartridge: ".45 ACP", cap: 1, country: "us"},
    {name: "Drel", cartridge: "5.45", cap: 10, country: "ru"},
    {name: "Falcon 400", cartridge: [".32 ACP",".380 ACP"], cap: 8, country: "es"},
    {name: "FEG Model P9R", cartridge: "9x19mm", cap: 14, country: "hu"},
    {name: "FN Forty-Nine", cartridge: ["9x19mm",".40 S&W"], cap: 10, country: "be"},
    {
      name: "Glock",
      alias: ["Glock 17","Glock 17C","Glock 17L",
        "Clock 18C","Glock 19","Glock 19C","Glock 20","Glock 21","Glock 22","Glock 23","Glock 24","Glock 25","Glock 26","Glock 27","Glock 28","Glock 29","Glock 30","Glock 31","Glock 32","Glock 33","Glock 34","Glock 35","Glock 36"],
      cartridge: ["9x19mm","9x19mm","9x19mm","9x19mm","9x19mm","9x19mm","10mm Auto",".45 ACP",".40 S&W",".40 S&W",".40 S&W",".380 ACP","9x19mm",".40 S&W",".380 ACP","10mm Auto","9x19mm",".357 SIG",".357 SIG",".357 SIG","9x19mm",".40 S&W",".45 ACP"],
      cap: [17,17,17,25,15,15,15,13,15,15,15,15,10,9,10,10,10,15,9,13,17,15,6],
      country: "at"
    },
    {name: "H&K HK4", cartridge: [".380 ACP", ".32 ACP", ".25 ACP", ".22 LR"], cap: 6, country: "de"},
    {name: "H&K Mk 23 SOCOM", cartridge: ".45 ACP", cap: 12, country: "de"},
    {name: "H&K P7 M8", cartridge: "9x19mm", cap: 8, country: "de"},
    {name: "H&K P7 M13", cartridge: "9x19mm", cap: 13, country: "de"},
    {name: "H&K P9S", cartridge: "9x19mm", cap: 9, country: "de"},
    {name: "H&K P2000", cartridge: "9x19mm", cap: 13, country: "de"},
    {name: "H&K USP", cartridge: "9x19mm", cap: 15, country: "de"},
    {name: "H&K USP Compact", cartridge: "9x19mm", cap: 13, country: "de"},
    {name: "H&K USP Match", cartridge: "9x19mm", cap: 18, country: "de"},
    {name: "H&K USP Tactical", cartridge: "9x19mm", cap: 12, country: "de"},
    {name: "Hammerli 160", cartridge: ".22 LR", cap: 1, country: "ch"},
    {name: 'Jericho 941 "Baby Eagle"' , cartridge: "9x19mm", cap: 16, country: "il"},
    {name: 'Jericho 941FB' , cartridge: "9x19mm", cap: 13, country: "il"},
    {name: 'Kareen Mk II' , cartridge: "9x19mm", cap: 13, country: "il"},
    {name: 'Kareen Mk II Compact' , cartridge: "9x19mm", cap: 10, country: "il"},
    {name: 'Kel-Tec P-11' , cartridge: "9x19mm", cap: 12, country: "us"},
    //{name: "Knight Suppressed Revolver", cartridge: "5.56mm", cap: 6, country: "us"},
    {name: "Korth Combat", cartridge: [".357 Magnum","9x19mm"], cap: 6, country: "de"},
    {name: "Korth Pistol", cartridge: "9x19mm", cap: 10, country: "de"},
    {name: "KSN Golan", cartridge: ["9x19mm",".40 S&W"], cap: 15, country: "il"},
    {name: "LEI Mark II", cartridge: ".22 LR", cap: 10, country: "gb"},
    {name: "Llama M-82", cartridge: "9x19mm", cap: 15, country: "es"},
    {name: "Llama M-87", cartridge: "9x19mm", cap: 15, country: "es"},
    {name: "M-43 Firestar", cartridge: "9x19mm", cap: 8, country: "es"},
    {name: "M-45 Firestar", cartridge: ".45 ACP", cap: 6, country: "es"},
    {name: "M-243 Firestar", cartridge: "9x19mm", cap: 13, country: "es"},
    {name: "M88", cartridge: "9x19mm", cap: 8, country: "yu"},
    {name: "M-105", cartridge: "9x19mm", cap: 9, country: "es"},
    {name: "M-205 Ultrastar", cartridge: "9x19mm", cap: 9, country: "es"},
    {name: "MAS M50", cartridge: "9x19mm", cap: 9, country: "fr"},
    {name: "Megastar", cartridge: ".45 ACP", cap: 12, country: "es"},
    {name: "MR-73 Gendamerie", cartridge: [".357 Magnum", "9x19mm"], cap: 6, country: "fr"},
    {name: "MR-443 Grach", cartridge: "9x19mm", cap: 17, country: "ru"},
    {name: "MR-444 Baghira", cartridge: ["9x19mm",".380 ACP"], cap: 15, country: "ru"},
    {name: "MR-445 Varyag", cartridge: ".40 S&W", cap: 15, country: "ru"},
    {name: "MR-445S Compact", cartridge: ".40 S&W", cap: 13, country: "ru"},
    {name: "MR-446 Viking", cartridge: "9x19mm", cap: 17, country: "ru"},
    {name: "Norinco Model 77B", cartridge: "9x19mm", cap: 9, country: "cn"},
    {name: "Norinco Type 67", cartridge: ".32 ACP", cap: 9, country: "cn"},
    {name: "Norinco Type 77", cartridge: ".32 ACP", cap: 7, country: "cn"},
    {name: "Norinco Type 80", cartridge: ".32 ACP", cap: 20, country: "cn"},
    {name: "Norinco Type 84", cartridge: ".32 ACP", cap: 20, country: "cn"},
    {name: "OTs-01 Kobalt", cartridge: "9x18mm", cap: 6, country: "ru"},
    {name: "OTs-20 Gnom", cartridge: "12.5mm", cap: 5, country: "ru"},
    {name: "OTs-21 Malysh", cartridge: "9x18mm", cap: 5, country: "ru"},
    //{name: "OTs-23 Drotik", cartridge: "5.45mm", cap: 24, country: "ru"},
    {name: "OTs-27 Berdysh", cartridge: ["9x18mm","9x19mm"], cap: 18, country: "ru"},
    {name: "OTs-33 Pernach", cartridge: "9x18mm", cap: 27, country: "ru"},
    //{name: "P9 Gurza", cartridge: "9x21mm Russian", cap: 18, country: "ru"},
    {name: "P96", cartridge: "9x18mm", cap: 18, country: "ru"},
    {name: "P96S", cartridge: ".380 ACP", cap: 10, country: "ru"},
    {name: "PM Makarov", cartridge: "9x18mm", cap: 8, country: "ru"},
    //{name: "PMm Makarov", cartridge: "9x18mm", cap: 12, country: "ru"},
    //{name: "PSM", cartridge: "5.45mm", cap: 8, country: "ru"},
    //{name: "PSS Vul", cartridge: "7.62mm", cap: 6, country: "ru"},
    {name: "R-92", cartridge: "9x18mm", cap:5, country: "ru"},
    {name: "R-92KS", cartridge: ".32 ACP", cap: 5, country: "ru"},
    {name: "Reutech ADP Mk II", cartridge: "9x19mm", cap: 15, country: "za"},
    {name: "ROMARM Model 92", cartridge: "9x19mm", cap: 15, country: "ro"},
    {name: "Ruger GP100", cartridge: [".357 Magnum",".38 Special"], cap: 6, country: "ro"},
    {name: "Ruger Mark II", cartridge: ".22 LR", cap: 10, country: "us"},
    {name: "Ruger P89", cartridge: "9x19mm", cap: 15, country: "us"},
    {name: "Ruger KP93", cartridge: "9x19mm", cap: 15, country: "us"},
    {name: "Ruger KP94L", cartridge: "9x19mm", cap: 15, country: "us"},
    {name: "Ruger P95", cartridge: "9x19mm", cap: 10, country: "us"},
    {name: "Ruger P97", cartridge: ".45 ACP", cap: 8, country: "us"},
    {name: "Ruger SP101", cartridge: [".38 Special","9x19mm",".22 LR"], cap: 5, country: "us"},
    {name: "Ruger Super Redhawk", cartridge: ".44 Magnum", cap: 6, country: "us"},
    {name: "S&W Model 64", cartridge: ".38 Special", cap: 6, country: "us"},
    {name: ["S&W Model 586","S&W Model 686"], cartridge: ".357 Magnum", cap: 6, country: "us"},
    {name: "S&W Model 642 Ladysmith", cartridge: ".38 Special", cap: 6, country: "us"},
    ]
  },
  "smgs" : {
    weapons : [
    {name: "A-9", cartridge: "9x19mm",cap:30,country:"ru"}, // can't find documentation
    {name: "A-7.62", cartridge: "7.62x25mm",cap:30, country:"ru"}, // ditto
    {name: "Benelli CB-M2", cartridge: "9x19mm", cap:30, country: "it"}, // proprietary round
    {name: "Cobray M-11", cartridge:"9x19mm", cap: 10, country: "us"}, // minor variant
    {name: "Colt Model 635", cartridge:"9x19mm", cap:30, country: "us"}, // can't find stats
    {name: "Mini-SAF", cartridge:"9x19mm", cap:20, country: "cl"}, // can't find stats
    {name: "Gepard", cartridge:["9x19mm","9x18mm"], cap: 40, country: "ru"}, // weird 9x30mm round
    {name: "GG-95", cartridge:"9x19mm", cap: 20, country: "fi"}, // same as Jatimatic
    {name: "MP5 Navy", cartridge:"9x19mm", cap: 30, country: "de"}, // minor variant
    {name: "Mekanika Uru", cartridge:"9x19mm", cap: 30, country: "br"},
    {name: "Mekanika Uru Carbine", cartridge: "9x19mm", cap: 30, country: "br"},
    {name: "Mendoza HM-3", cartridge: "9x19mm", cap: 32, country: "mx"},
    {name: "MGP-87", cartridge: "9x19mm", cap:32, country: "pe"},
    {name: "MGP-84", cartridge: "9x19mm", cap:32, country: "pe"},
    {name: "MGP-14", cartridge: "9x19mm", cap:32, country: "pe"},
    {name: "MGV-176", cartridge: ".22 LR", cap:176, country: "si"},
    {name: "Norinco Type 64", cartridge: "7.62x25mm", cap: 20, country: "cn"},
    {name: "Norinco Type 79", cartridge: "7.62x25mm", cap: 20, country: "cn"},
    {name: "Norinco Type 85", alias: ["Type 85","Type 85 Suppressed"], cartridge: "7.62x25mm", cap: 30, country: "cn"},
    {name: "OTs-02 Kiparis", cartridge: "9x18mm", cap: 30, country: "ru"},
    {name: "OTs-22", cartridge: "9x19mm", cap: 30, country: "ru"},
    {name: "Parker-Hale IDW", cartridge: "9x19mm", cap: 30, country: "gb"},
    {name: "PDW PS-2000", cartridge: "9x19mm", cap: 30, country: "sk"},
    {name: "PM-84 Glaubeyrt", cartridge: "9x18mm", cap: 25, country: "po"},
    {name: "PM-98", cartridge:"9x19mm", cap:25, country: "po"},
    {name: "PP-90", cartridge:"9x18mm", cap:30, country: "ru"},
    {name: "PP-91 Kedr", cartridge: ["9x18mm","9x19mm"], cap:30, country: "ru"},
    {name: "PP-93", cartridge: "9x18mm", cap: 30, country: "ru"},
    {name: "Romarm BORD", cartridge: "9x19mm", cap:25, country: "ro"},
    {name: "Romarm Model 96", cartridge: "9x19mm", cap: 30, country: "ro"},
    {name: "Ruger MP-9", cartridge:"9x19mm", cap:32, country: "us"},
    {name: "Sa 58/98 Bulldog", cartridge: "9x19mm", cap: 30, country: "cz"},
    {name: "Sa 58/98S", cartridge: "9x19mm", cap: 30, country: "cz"},
    {name: "Saab-Bofors CBJ-MS", cartridge: ["9x19mm","6.5x25mm"], cap:30, country: "se"},
    {name: "SCH-21 Gorda", cartridge: "9x19mm", cap: 30, country: "ge"},
    {name: "Socimi Type 821", cartridge: "9x19mm", cap: 32, country: "it"},
    {name: "SR-2", cartridge: "9x21mm", cap:30, country: "ru"},
    {name: "Star Z-70B", cartridge: "9x19mm", cap: 40, country: "es"},
    {name: "Star Z-84", cartridge:"9x19mm", cap:30, country: "es"},
    {name: "Sterling L2", alias: ["L2A1","L2A2","L2A3","L34A1"], cartridge:"9x19mm", cap:34, country: "gb"},
    {name: "Vigneron M2", cartridge:"9x19mm", cap:32, country: "be"},
    {name: "WZ-63", cartridge:"9x18mm", cap:25, country: "po"},
    ]
  },
  "shotguns" : {
    weapons: [
    {name: "Birmingham", alias: ["Mk. 5","Mk. 6"], cartridge: "12 gauge", cap: ["6","8"], country: "gb"},
    {name: "Benelli M3", alias: ["M3 Super 90", "M3 Special Applications"], cartridge: "12 gauge", cap: [7,5], country: "it"},
    {name: "M1014", cartridge:"12 gauge", cap: 6, country: "it"},
    {name: "Benelli Nova", cartridge:"12 gauge", cap: 8, country: "it"},
    {name: "Beretta M3P", cartridge: "12 gauge", cap: 5, country: "it"},
    {name: "Beretta RS200P", cartridge:"12 gauge", cap: 5, country: "it"},
    {name: "Browning BPS-SP", cartridge:"12 gauge", cap: 6, country: "be"},
    {name: "Daewoo USAS-12", cartridge:"12 gauge", cap: 12, country: "rk"},
    {name: "Fabarm SDASS", cartridge: "12 gauge", cap: 8, country: "it"},
    {name: "Fabarm FP6",cartridge:"12 gauge", cap: 5, country: "it"},
    {name: "Fabarm Tactical", cartridge:"12 gauge", cap:5, country: "it"},
    {name: "Franchi PA3", alias: ["PA3/470","PA3/345","PA3/215"], cartridge:"12 gauge", cap: [7,5,3], country: "it"},
    {name: "Franchi SPAS-15", cartridge: "12 gauge", cap:6, country: "it"},
    {name: "H&K HK512", cartridge: "12 gauge", cap:6, country:"de"},
    {name: "Ithaca MAG-10 Roadblocker", cartridge:"10 gauge", cap: 3, country: "us"},
    {name: "Ithaca Model 37", cartridge:"12 gauge", cap: 8, country:"us"},
    {name: "Ithaca Stakeout", cartridge:'12 gauge', cap: 5, country: "us"},
    {name: "Izhmash IZH-81M", cartridge:"12 gauge", cap: 7, country:"ru"},
    {name: "Izhmash MP-131K", cartridge:"12 gauge", cap:8, country: "ru"},
    {name: "KAC Masterkey", cartridge:"12 gauge", cap: 5, country: "us"},
    {name: "KS-23", alias: ["KS-23","KS-23M"], cartridge:"23mm", cap: 3, country: "ru"},
    {name: "Pancor Jackhammer", cartridge:"12 gauge", cap:10, country: "us"},
    {name: "Mossberg M9200", cartridge:"12 gauge",cap:5, country:"us"},
    {name: "Mossberg M9200A1", cartridge:"12 gauge", cap:5, country:"us"},
    {name: "Mossberg Model 500 Bullpup", cartridge:"12 gauge", cap: 7, country: "us"},
    {name: "Mossberg Model 500", alias:["M500 Persuader","M500 Cruiser","M500 Viking","M500 Mariner"], cartridge:"12 gauge", cap: 8, country: "us"},
    {name: "Mossberg Model 590", alias:["M590","M590A1"], cartridge:"12 gauge", cap: [9,6], country:"us"},
    {name: "Neostead", alias: ["Neostead", "Neostead Compact"], cartridge:"12 gauge", cap: [12,8], country: "za"},
    {name: "Norinco M98", cartridge:"12 gauge", cap: 5, country: "cn"},
    {name: "Norinco M2000", cartridge: "12 gauge", cap: 4, country: "cn"},
    {name: "Omega SPS-12", cartridge:"12 gauge", cap:10, country:"cn"},
    {name: "Remington Model 870", cartridge: "12 gauge", cap: 5, country: "us"},
    {name: "Remington M870 Mark 1", cartridge: "12 gauge", cap:7, country:"us"},
    {name: "Remington M870P", cartridge:"12 gauge", cap:7, country:"us"},
    {name: "Remington Model 11-48",cartridge:"12 gauge", cap: 4, country:"us"},
    {name: "Remington Model 11-87",cartridge:"12 gauge", cap: 5, country:"us"},
    {name: "Remington Model 1100",cartridge:"12 gauge",cap:5, country:"us"},
    {name: "Reutech Protecta", alias: ["Protecta","Bulldog"], cartridge:"12 gauge",cap:[12,11], country:"za"},
    {name: "RM-93", cartridge:"12 gauge", cap:7, country:"ru"},
    {name: "SAE Alsetex R05" , cartridge:"12 gauge", cap: 8, country:"fr"},
    {name: "Saiga-12",cartridge:"12 gauge",cap:7,country:"ru"},
    {name: "Saiga-20", cartridge:"20 gauge",cap:8, country:"ru"},
    {name: "S&W Model 3000", cartridge:"12 gauge", cap:6, country: "us"},
    {name: "Techno Arms MAG-7", cartridge:"12 gauge",cap:5, country:"za"},
    {name: "Viking Arms SOS", cartridge:"12 gauge", cap:7, country:"gb"},
    {name: "Kel-Tec KSG", cartridge:"12 gauge", cap: 14, country:"us", length: 663, weightMin: 3.13, weightMax: 3.86}
    ]
  },
  "rifles" : {
    weapons : [
    {name: "Alexander Arms Beowulf", cartridge:".50 Beowulf",cap:10,country:"us"},
    {name: "Alexander Arms Genghis", cartridge:".50 Beowulf",cap:10,country:"us"},
    {name: "vz. 52", cartridge:"7.62x45mm", cap:30, country: "cz"},
    {name: "Daewoo K1A1", cartridge:"5.56x45mm", cap:30, country: "kr"},
    {name: "Daewoo K2", cartridge:".280", cap:30, country: "kr"},
    {name: "FARA 83", cartridge:"5.56x45mm", cap:30, country: "kr"},
    {name: "Galil ARM", cartridge:"5.56x45mm", cap:35, country: "il"},
    {name: "Galil ARM", cartridge:"7.62x51mm", cap:25, country: "il"},
    {name: "Galil SAR", cartridge:"5.56x45mm", cap:35, country: "il"},
    {name: "Galil SAR", cartridge:"7.62x51mm", cap:25, country: "il"},
    {name: "Galil LMG", cartridge:"5.56x45mm", cap:50, country: "il"},
    {name: "Galil MAR", cartridge:"5.56x45mm", cap:35, country: "il"},
    {name: "H&K G36", cartridge:"5.56x45mm", cap:30, country: "de"},
    {name: "H&K G8", cartridge:"5.56x45mm", cap:30, country: "de"},
    {name: "Howa Type 89", cartridge:"5.56x45mm", cap:30, country: "jp"},
    {name: ["Imbel MD2","Imbel MD3"], cartridge:"5.56x45mm", cap:30, country: "br"},
    {name: ["Imbel MD2A1","Imbel MD3A1"], cartridge:"5.56x45mm", cap:30, country: "br"},
    {name: "IMBEL Model L", cartridge:"5.56x45mm", cap:30, country: "br"},
    {name: "IMBEL Model LC", cartridge:"5.56x45mm", cap:30, country: "br"},
    {name: "INSAS", cartridge:"5.56x45mm", cap:30, country: "in"},
    {name: "K3", cartridge:"5.45x39mm", cap:30, country: "am"},
    {name: "LAPA Modelle 03", cartridge:"5.56x45mm", cap:30, country: "br"},
    {name: "M4 CQB", cartridge:"5.56x45mm", cap:30, country: "us"},
    {name: "Carbon 15", cartridge:"5.56x45mm", cap:30, country: "us"},
    //{name: ["MAS49","MAS49/56"], cartridge:"7.5mm", cap:30, country: "us"},
    {name: "Norinco Type 97", cartridge: "5.56x45mm", cap: 30, country: "cn"},
    {name: "Norinco Type 68", cartridge: "7.62x39mm", cap: 15, country: "cn"},
    {name: "OTs-14 Groza", cartridge: ["9x39mm","7.62x39mm"], cap: 30, country: "ru"},
    {name: "SAR 21", cartridge: "5.56x45mm", cap: 30, country: "sg"},
    {name: "SR 88", cartridge: "5.56x45mm", cap: 30, country: "sg"},
    {name: "Stoner M63A1", cartridge: "5.56x45mm", cap: 30, country: "us"},
    {name: "Tantal wz/88", cartridge: "5.45x39mm", cap: 30, country: "us"},
    {name: "CTAR-21", cartridge: "5.56x45mm", cap: 30, country: "il"},
    {name: "Type 86", cartridge: "5.56x45mm", cap: 30, country: "tw"},
    {name: "Valmet M76", cartridge: ["7.62x39mm","5.56x45mm"], cap: 30, country: "fi"},
    {name: "Valmet M82", cartridge: "5.56x45mm", cap: 30, country: "fi"},
    {name: "Vektor CR21", cartridge: "5.56x45mm", cap: 35, country: "za"},
    {name: "Vikhr SR-3", cartridge: "9x39mm", cap: 20, country: "ru"},
    {name: "Sako M90", cartridge: "7.62x39mm", cap: 30, country: "fi"},
    {name: "Sako M95", cartridge: "7.62x39mm", cap: 30, country: "fi"},
    ]
  },
  "mgs" : {
    weapons: [
    {name: "6P41 Pecheneg", cartridge: "7.62x54mmR", cap: 100, country:"ru"},
    {name: "AAT-52", alias: ["AAT-52 Light","AAT-21 Heavy"], cartridge: "7.62x51mm", cap: 100, country: "fr"},
    {name: "Ameli", cartridge:"5.56x45mm", cap: 200, country:"es"},
    {name: "Beretta AS-70/90", cartridge:"5.56x45mm", cap: 30, country: "it"},
    {name: "Colt M16A2", cartridge:"5.56x45mm", cap: 30, country: "us"},
    {name: "FN MAG", cartridge:"7.62x51mm", cap: 100, country: "be"},
    {name: "FN Minimi", alias: ["Minimi","Minimi Para"], cartridge:"5.56x45mm", cap:200, country: "be"},
    {name: "H&K MG3", cartridge:"7.62x51mm", cap:200, country:"de"},
    {name: "H&K MG36", cartridge:"5.56x45mm", cap:100, country:"de"},
    {name: "H&K MG43", cartridge:"5.56x45mm", cap: 200, country: "de"},
    {name: "IMI Negev LMG", alias:["Negev","Negev Commando"], cartridge:"5.56x45mm", cap: 200, country:"il"},
    {name: "INSAS LMG", cartridge:"5.56x45mm", cap:30, country:"in"},
    {name: "L4A4 Bren", cartridge:"7.62x51mm", cap:30, country:"gb"},
    {name: "L7A2 GPMG", cartridge:"7.62x51mm", cap:100, country:"gb"},
    {name: "L86A1 LSW", cartridge:"5.56x45mm", cap: 30, country: "gb"},
    {name: "M60", alias: ["M60","M60E3 Assault","M60E3 Long","M60E4 Assault","M60E4 Long"], cartridge:"7.62x51mm", cap:100, country:"us"},
    {name: "M240", cartridge:"7.62x51mm", cap: 100, country: "us"},
    {name: "M249 Special Purpose Weapon", cartridge:"5.56x45mm", cap:200, country:"us"},
    {name: "M249 SAW", cartridge:"5.56x45mm", cap:200, country:"us"},
    {name: "Model 62 GPMG", cartridge:"7.62x51mm", cap: 100, country:"jp"},
    {name: "Model 59 'Rachot'", cartridge:"7.62x54mmR", cap: 100, country:"cz"},
    {name: "PK", alias:["PK","PKS","PKMS","PKM"], caliber:"7.62x51mmR", cap:100, country:"ru"},
    {name: "RPD",caliber:"7.62x39mm",cap:200,country:"ru"},
    {name: "RPK", caliber:"7.62x39mm", cap: 40, country:"ru"},
    {name: "RPK-74", caliber:"5.45x39mm", cap:45, country:"ru"},
    {name: "SAR-21 LMG", caliber:"5.56x45mm", cap: 30, country:"sg"},
    ]
  }
};

module.exports = function() {
  return [
    {
      shortname: "pistols",
      name: "Pistol",
      weapons: [
      //{name: "AMT Backup", cartridge: [".45 ACP","9x19mm",".38 Special"], rof: 40, weight: 0.51, length: 13, sr: 12, cap: [5,6,5], country: "us"},
      {name: "AMT Longslide Hardballer", cartridge: ".45 ACP", rof: 40, velocity: 305, weight: 1.306, length: 26.7, sr: 23, cap: 7, country: "us", year: 1980},
      {name: "APS Stechkin", cartridge: "9x18mm", rof: 750, sr: 19, length: 22.5, weight: 1.22, velocity: 340, cap: 20, country: "ru", year: 1951},
      {name: "Astra A-100", alias: ["9x19mm",".45 ACP",".40 S&W"], cartridge: ["9x19mm",".45 ACP",".40 S&W"], rof: 40, sr: 15, length: 19, weight: 0.96, cap: [17,9,10], country: "es", year:1990},
      {name: "Benelli B76", cartridge: "9x19mm", rof: 40, cap: 8, weight: 0.97, length: 20.5, sr: 13.5, country: "it", year:1976},
      {name: "Beretta 93R", cartridge: "9x19mm", rof: 750, velocity: 375, weightMin: 1.160, weightMax: 1.556, length: 240, sr: 160, cap: 15, wiki: "Beretta_93R", country: "it", description: "The Beretta 93R is a selective fire machine pistol, designed and manufactured by Italian firearms manufacturer Beretta in the 1970s for police and military use, that is derived from their semi-automatic Beretta 92. The 'R' stands for Raffica, which is Italian for 'volley', 'flurry' or 'burst'. (Wikipedia)", year:1979},
      {name: "Beretta M1951", cartridge: "9x19mm", rof: 32, velocity: 350, weightMin: 0.813, weightMax: 0.966, length: 203, sr: 140, cap: 8, country: "it", year:1949},
      {name: "Beretta M92SB, M92SB-C", cap: 15, cartridge: "9x19mm", rof: 45, velocity: 390, weightMin: 0.872, weightMax: 1.158, length: 217, sr: 155, cost: 650, country: "it", year: 1972},
      {name: "Beretta Model 81", cap: 12, cartridge: ".32 ACP", rof: 36, velocity: 300, weightMin: 0.616, weightMax: 0.765, length: 172, sr: 124, cost: 500, country: "it", year: 1976},
      {name: "Beretta Model 84", cap: 13, cartridge: ".380 ACP", rof: 36, velocity: 280, weightMin: 0.606, weightMax: 0.786, length: 172, sr: 124, cost: 500, country: "it", year:1976},
      {name: "Beretta Model 92F, Model 92F-C", cap: 15, cartridge: "9x19mm", rof: 45, velocity: 390, weightMin: 0.859, weightMax: 1.145, length: 217, sr: 155, cost: 700, country: "it",year:1985},
      {name: "Browning Hi-Power", cartridge: "9x19mm", velocity: 350, weightMin: 0.810, weightMax: 0.986, rof: 40, length: 200, sr: 159, cap: 13, country: "us", wiki:"Browning_Hi-Power", year:1935},
      {name: 'Colt Python', alias: ['6" barrel','2.5" barrel','4" barrel','8" barrel'], cartridge: ".357 Magnum", cap: 6, rof: 40, length: [245,236,240,250], sr: [169,129,149,178], weight: [1.3,1.1,1.2,1.4], velocity: [519,336,460,573], country: "us", year:1955},
      {name: "CZ-75, CZ-85", cartridge: "9x19mm", velocity: 369, weightMin: 0.98, weightMax: 1.180, rof: 40, length: 203, sr: 160, cap: 15, country: "cz", year:1975},
      {name: "Detonics Combat Master", cartridge: ".45 ACP", rof: 30, cap: 7, velocity: 237, weightMin: 0.820, weightMax: 1.010, length: 171, sr: 101, cost: 700, country: "us", year:1975},
      {name: "FN BDA", alias:["FN BDA-9C","FN BDA-9S"], cartridge: "9x19mm", velocity: [350,356], weightMin: [0.708,0.850], weightMax: [0.847,1.088], rof: 40, length: [173,200], sr: [152,176], cap: [7,14], wiki: "Browning_BDA", country: "be", year: 1983},
      {name: "FN Five-seveN", cartridge: "5.7x28mm", velocity: 650, length: 208, sr: 178, weight: 0.62, rof: 40, cap: 20, country: "be", year:1998},
      {name: "FN FNP", alias: ["FN FP-9","FN FP-9M","FN FNP-40","FN FNP-45"], cartridge: ["9x19mm","9x19mm",".40 S&W",".45 ACP"], weight: [0.7,0.703,0.757,0.919], rof: 40, length: [188,179,188,199], cap: [16,15,14,15], sr: [160,150,160,170], country: "be", year:2006},
      /*{name: "FN FNP-9M", cartridge: "9x19mm", weight: 0.703, rof: 40, length: 179, cap: 15, sr: 150, barrel: 3.791, country: "be"},
      {name: "FN FNP-40", cartridge: ".40 S&W", weight: 0.757, rof: 40, length: 188, cap: 14, sr: 160, barrel: 4, country: "be"},
      {name: "FN FNP-45", cartridge: ".45 ACP", weight: 0.919, rof: 40, length: 199, cap: 15, sr: 170, barrel: 4.5, country: "be"},
      {name: "FN FNP-357", cartridge: ".357 SIG", weight: 0.7, rof: 40, length: 188, cap: 15, sr: 160, barrel: 4}, need ammo data*/
      {name: "H&K P7", alias:["H&K P7K3","H&K P7M13","H&K P7M8","H&K P7PT8"], cartridge: [".32 ACP","9x19mm","9x19mm","9x19mm"], rof: [24,39,24,24], velocity: [291,351,351,400], cap: [8,13,8,8], weightMin: [0.748,0.850,0.794,0.720], weightMax: [0.850,1.131,0.959,0.818], length: [160,175,171,170], sr: [139,148,148,148], cost: [600,1100,900,900], country: "de", year: 1976},
      {name: "H&K P9S", cartridge: "9x19mm", rof: 27, velocity: 350, cap: 9, weightMin: 0.848, weightMax: 1.030, length: 192, sr: 147, cost: 1100, country: "de", year:1969},
      {name: "H&K USP", alias: ["USP Compact","USP Tactical"], cartridge: ".45 ACP", rof: 40, length: [180,219], sr: [148,183], weight: [0.725,0.861], cap: 8, country: "de", year:1993},
      {name: "H&K VP70M, VP70Z", cartridge: "9x19mm", rof: 360, velocity: 360, cap: 18, weightMin: 0.816, weightMax: 1.131, length: 203, sr: 175, country: "de", year:1970},
      {name: "IMI Desert Eagle", alias: [".50 Action Express", ".44 Magnum"], cartridge: [".50 Action Express",".44 Magnum"], length: 273, sr: 219, rof: [24,27], velocity: [443,376], weightMin: [1.780,1.653], weightMax: [2.091,1.913], cap: [8,9], cost: [700,600], country :"il", year:1982},
      {name: "Colt M1911", cartridge: ".45 ACP", rof: 35, velocity: 252, cap: 7, weightMin: 1.049, weightMax: 1.271, length: 219, sr: 165, cost: 400, country: "us", year:1911},
      {name: "MAB PA-15", cartridge: "9x19mm", velocity: 350, weightMin: 1.090, weightMax: 1.365, rof: 40, length: 203, sr: 158, cap: 15, country: "fr"},
      {name: "Makarov", cartridge: "9x18mm", length: 162, sr: 129, velocity: 315, weight: 0.73, rof: 40, cap: 8, country: "ru", year:1951},
      {name: "Manurhin MR73", alias: ["10.2cm barrel","13.2cm barrel","15.2cm barrel","20.3cm barrel","7.6cm barrel"], cartridge:".357 Magnum", rof:24, cap: 6, velocity: [410,428,468,504,385], weightMin: [0.95,1.05,1.07,1.17,0.89], weightMax: [1.046,1.146,1.166,1.266,0.986], length: [233,264,283,334,205], sr: [142,172,192,243,117], country: "fr", year:1973},
      {name: "Mk. 22 mod 0", cartridge: "9x19mm", length: 216, sr: 134, velocity: 274, weightMin: 0.737, weightMax: 0.954, cap: 8, rof: 40, country: "us", year:1967},
      {name: "MP-443 Grach", cartridge: "9x19mm", velocity: 450, rof: 40, length: 198, sr: 166, weightMin: 0.950, weightMax: 1.150, cap: 17, country: "ru", year: 2003},
      {name: "PB/6P9", cartridge: "9x18mm", rof: 24, velocity: 290, weightMin: 0.972, weightMax: 1.098, cap: 8, length: 297, sr: 130, country: "ru", year:1967},
      {name: "Ruger GS-32N", cartridge: ".357 Magnum", rof: 24, velocity: 385, cap: 6, weightMin: 0.964, weightMax: 1.060, length: 197, sr: 150, cost: 300, country: "us", year:1971},
      {name: "S&W ASP", cartridge: "9x19mm", rof: 35, velocity: 347, cap: 7, weightMin: 0.624, weightMax: 0.765, length: 171, sr: 51, cost: 1100, country: "us", year:1970},
      {name: "S&W Model 19", alias : ["10.2cm barrel","15.3cm barrel","6.6cm barrel"], cartridge: ".357 Magnum", velocity: [368,387,331], length: [241,292,190], weightMin: [0.992,1.152,0.879], weightMax: [1.088,1.248,0.975],  sr: [149,200,113], cap: 6, rof: 24, cost: 350, country: "us", year: 1957},
      {name: "S&W Model 29", alias: ["10.2cm barrel","16.5cm barrel","21.3cm barrel","29 cm barrel"], cartridge:".44 Magnum", velocity: [425,448,459,475], length: [239,302,349,410], sr: [117,180,228,305], weightMin: [1.219,1.332,1.460,1.644], weightMax: [1.365,1.478,1.606,1.790], cap: 6, rof: 24, country: "us"},
      {name: "S&W Model 439", cartridge: "9x19mm", length: 194, sr: 141, weightMin: 0.779, weightMax: 0.946, cap: 8, rof: 24, velocity: 356, cost: 450, country: "us"},
      {name: "S&W Model 459", cartridge: "9x19mm", length: 194, sr: 141, weightMin: 0.947, weightMax: 1.021, cap: 14, rof: 45, velocity: 355, cost: 500, country: "us"},
      {name: "S&W Model 469", cartridge: "9x19mm", rof: 35, velocity: 360, cap: 12, weightMin: 0.666, weightMax: 0.881, length: 149, sr: 130, cost: 400, country: "us"},
      {name: "S&W Model 645", cartridge: ".45 ACP", rof: 24, velocity: 259, weightMin: 0.974, weightMax:1.238, cap: 8, length: 221, sr: 170, cost: 550, country: "us"},
      //{name: "SIG P220", cartridge: [".357 SIG",".45 ACP","9x19mm"], rof: 40, velocity: [355,245,345], weightMin: [0.750,0.730,0.750], weightMax: [0.940,0.951, 0.918], length: 198, sr: 160, cap:[9,7,9], cost: 700, country: "ch"},
      {name: "SIG P226", cartridge: "9x19mm", rof: 40, velocity: 345, weightMin: 0.750, weightMax: 1.025, length: 196, sr: 160, cost: 750, cap: 15, country: "ch"},
      {name: "SIG P230", alias: ["SIG P230 (.32 ACP)","SIG P230 (.380 ACP)"], cartridge: [".32 ACP",".380 ACP"], rof: 40, cost: 500, length: 168, sr: 120, velocity: 300, weightMin: [0.465,0.460], weightMax: [0.578,0.568], cap: [8,7], country: "ch"},
      {name: "SIG P230 (9x18mm)", cartridge: "9x18mm", rof: 40, cost: 500, length: 168, sr: 120, velocity: 320, weightMin: 0.690, weightMax: 0.801, cap: 7, country: "ch"},
      {name: "Steyr GB", cartridge: "9x19mm", velocity: 336, weightMin: 0.845, weightMax: 1.190, rof: 40, length: 216, sr: 164, cap: 18, country: "at", wiki: "Steyr GB"},
      {name: "UZI Pistol", cartridge: "9x19mm", rof: 40, velocity: 350, weightMin:1.890, weightMax: 2.29, cap: 20, length: 240, sr: 175, cost: 600, country: "il"},
      {name: "Walther P1, Walther P38", cartridge: "9x19mm", rof: 32, velocity: 369, cap: 8, weightMin: 0.772, weightMax: 0.970, length: 218, sr: 180, cost: 900, country: "de"},
      {name: "Walther P5", cartridge: "9x19mm", rof: 24, velocity: 346, cap: 8, weightMin: 0.795, weightMax: 0.993, length: 180, sr: 134, cost: 1100, country: "de"},
      {name: "Walther P99", cartridge: "9x19mm", rof: 40, length: 180, sr: 155, velocity: 408, weight: 0.68, cap: 15, country: "de"},
      {name: "Walther PP", cartridge: ".32 ACP", velocity: 291, rof: 30, cap: 7, weightMin: 0.690, weightMax: 0.690, length: 173, sr: 113, cost: 600, country: "de"},
      {name: "Walther PPK, PPK/S", cartridge: ".32 ACP", rof: 30, velocity: 291, cap: 6, weightMin: 0.590, weightMax: 0.792, length: 155, sr: 110, cost: 500, country: "de"},
      ]
    },
    {
      shortname: "smgs",
      name: "Submachine gun",
      weapons : [
        {name: "AEK-919K 'Kashtan'", cartridge: "9x18mm", weight: 1.65, length: 325, rof: 900, cap: 30, sr: 150, country: "ru", year:1990},
        {name: "Agram 2000", cartridge: "9x19mm", cap:32, weight: 1.8, length: 482, rof: 800, sr: 372, country: "cr", year:2000},
        {name: "Arsenal Shipka", alias: ["9x18mm","9x19mm"], cartridge: ["9x18mm","9x19mm"], rof: 700, weight: 2.2, length: 338, sr: 242, cap: [32,25], country: "bg", year:1996},
        {name: "Beretta MX4", cartridge: "9x19mm", weight: 2.48, rof: 700, length: 647, velocity: 390, cap: 30, sr: 320, country: "it", year:2003},
        {name: "Carl Gustav m/45", cartridge:"9x19mm", weight: 3.35, rof: 600, velocity: 425, length: 550, sr: 390, cap:36, country: "se", year:1945},
        {name: "Colt 9mm", alias: ["Colt 9mm","Colt 9mm Suppressed"], cartridge: "9x19mm", rof: 900, velocity: [397,285], cap: 32, weightMin: [2.608,3.062], weightMax: [3.219,3.628], length: [651,697], sr: 368, country: "us", year:1982},
        {name: "CS/LS2", cartridge: "9x19mm", rof: 400, velocity: 321, weight: 2.0, length: 450, cap: 30, sr: 165, country: "cn", year:2006},
        {name: "CZ Skorpion EVO 3", cartridge: "9x19mm", rof: 1150, velocity: 370, cap: 30, weightMin: 2.72, weightMax: 3.26, length: 410, sr: 240, country: "cz", year:2009},
        {name: "CZW 438 M9", cartridge:"9x19mm", weight:2.7, length:445, sr:309, cap:30, rof:780, year: 2002, country: "cz"},
        {name: "Daewoo K7", cartridge: "9x19mm", rof: 1100, cap: 30, weight: 4, length: 620, sr: 360, velocity: 285, country : "kr", year:2001},
        {name: "Dux", alias: ["Model 53","Model 59"], cartridge:"9x19mm", weight:[3.5,3], rof: [500,550], length: [615,580], sr: 360, velocity:390, cap:[50,32], year:[1953,1959], country: "de"},
        {name: "F1A1", cartridge: "9x19mm", weight: 3.26, length: 715, rof: 600, sr: 212, cap:32, country:"au", year:1963},
        {name: "FAMAE SAF", cartridge: "9x19mm", alias: ["SAF", "SAF Silencada"], weight: 2.7, length: 410, rof: 1200, sr:328, cap:30, country:"cl"},
        {name: "Floro MK-9", cartridge:"9x19mm", cap:32, rof: 825, velocity: 400, length: 46, weightMin:3.18, weightMax: 3.2, sr: 233, country: "ph"},
        {name: "FMG-9", cartridge: "9x19mm", rof: 650, velocity: 378, cap: 25, weightMin: 2.250, weightMax: 2.854, length: 262, sr: 100, country: "us"},
        {name: "FMK-3 Mod 2", cartridge: "9x19mm", cap:40, country: "ar", weight: 3.4, length: 523, rof: 650, sr: 360},
        {name: "FN P90", cartridge: "5.7x28mm", rof: 950, velocity: 735, weight: 2.6, length:415, sr: 370, cap: 40, country: "be"},
        {name: "Franchi LF-57", cartridge:"9x19mm", cap:40, country: "it", weight: 3.17, length: 419, rof: 500, sr: 342, year: 1956},
        {name: "H&K MP2000", cartridge: "9x19mm", rof: 875, velocity: 366, weightMin: 2.781, weightMax: 3.221, length: 387, sr: 292, cap: 30, country: "de", year:1987},
        {name: "H&K MP5 SD", alias: ["MP5 SD2, MP5 SD3, MP5 SD4, MP5 SD5"], rof: 800, velocity: 285, weightMin: [3.1,3.4,3.1,3.4], weightMax: [3.63,3.93,3.63,3.93], length: [780,610,780,610], sr: 340, cap: 30, country: "de", year:1970},
        {name: "H&K MP5", alias: ["MP5A2","MP5A3","MP5A4","MP5A5","MP5/10","MP5/40"], cartridge:["9x19mm","9x19mm","9x19mm","9x19mm","10mm Auto",".40 S&W"], rof: 650, velocity: [400,400,400,400,425,315], weightMin: [2.54,2.88,2.54,2.88,2.7,2.7], weightMax: [2.71,4.104,2.71,4.104,2.7,2.7], length:[680,490,680,490,490,490],sr:340,cap:30, country:"de",year:1970},
        {name: "H&K MP5K, H&K MP5KA4", cartridge: "9x19mm", rof: 900, velocity: 375, weightMin: 2.0, weightMax: 2.3, length: 325, sr: 260, cap: 15, country: "de", year:1991},
        {name: "H&K MP5KA1, H&K MP5KA5", cartridge: "9x19mm", rof: 900, velocity: 375, weightMin: 2.0, weightMax: 2.3, length: 325, sr: 190, cap: 15, country: "de", year:1991},
        {name: "H&K MP7", cartridge: "4.6x30mm", rof: 900, velocity: 715, weight: 1.2, length:505, sr: 143, cap: 50, country: "de", year:2001},
        {name: "H&K UMP-45", alias:["UMP-45","UMP-9"], cartridge: [".45 ACP","9x19mm"], length: 450, sr: 325, rof: 650, weight: 2.65, cap: 30, country: "de",year:1999},
        {name: "Ingram MAC-10", alias: ["9x19mm",".45 ACP"], cartridge: ["9x19mm",".45 ACP"], rof: [1090,1145], velocity: [366,280], cap: [32,30], weightMin: 2.840, weightMax: 3.424, length: 269, sr: 210, cost: 300, country: "us"},
        {name: "Ingram MAC-11", alias: [".380 ACP", "9x19mm"], cartridge: [".380 ACP","9x19mm"], rof: 1200, velocity: [293,366], cap: 32, weightMin: [1.59,1.701], weightMax: [2.100,2.179], length: [248,330], sr: [176,230], country: "us"},
        {name: "Intratec TEC-9", cartridge:"9x19mm", cap: 20, country: "us", velocity: 360, length: 317, sr: 271, weight: 1.4, rof:850},
        {name: "Jatimatic", cartridge: "9x19mm", rof: 625, velocity: 411, weightMin: 1.650, weightMax: 2.280, length: 375, sr: 290, cap: 40, country: "fi", year:1984},
        {name: "KRISS Vector", cartridge: ".45 ACP", rof: 1200, sr: 216, length: 620, velocity: 280, weight: 2.7, cap: 25, country: "us"},
        {name: "LaFrance M16K-45", cartridge:".45 ACP", rof: 625, velocity: 260, weight: 3.9, length: 676, sr: 350, cap:30, country:"us"},
        {name: "Lusa A2", cartridge:"9x19mm", cap: 30, country: "us", rof: 900, weight: 2.8, length: 451, sr: 285},
        {name: "M3A1", cartridge: ".45 ACP", rof: 450, velocity: 280, cap: 30, weightMin: 3.470, weightMax: 4.455, length: 579, sr: 276, country: "us"},
        {name: "M45B", cartridge: "9x19mm", rof: 600, velocity: 370, cap: 36, weightMin: 3.900, weightMax: 4.559, length: 552, sr: 359, country: "us"},
        {name: "Madsen", alias: ["Madsen M1946", "Madsen M1950", "Madsen M1953"], cartridge:"9x19mm", weight: [3.15,3.15,3.2], length: [550,530,530], rof: [480, 550,550], sr: 342, cap: 32, country: "dk"},
        {name: "MAT 49", cartridge: "9x19mm", rof: 600, velocity: 354, weightMin: 3.640, weightMax : 4.760, length: 460, sr: 378, cap: 32, country: "fr"},
        {name: "Micro UZI", cartridge: "9x19mm", rof: 1250, velocity: 350, weightMin: 1.95, weightMax: 2.350, length: 267, sr: 175, cap: 25, country: "il"},
        {name: "Milcor BXP", cartridge: "9x19mm", rof: 1000, cap: 32, weight: 2.5, length: 387, sr: 100, country: "za"},
        {name: "Minebea PM-9", cartridge: "9x19mm", weight: 2.8, length: 399, rof: 1100, cap: 25, sr: 275, country: "jp"},
        {name: "Mini UZI", cartridge: "9x19mm", rof: 950, velocity: 350, weightMin: 2.7, weightMax: 3.1, length: 360, sr: 235, cap: 20, country: "il"},
        {name: "MP9 (Steyr TMP)", cartridge:  "9x19mm", rof: 875, velocity: 400, weight: 1.3, length: 282, sr: 188, cap: 30, country: "at"},
        {name: "PM-12S", cartridge: "9x19mm", rof: 550, velocity: 381, weightMin: 3.240, weightMax: 3.850, length: 418, sr: 285, cap: 32, country: "it"},
        {name: "PM-63 RAK", cartridge:"9x18mm", velocity: 320, weight:1.6, length:583, cap:25, rof:650, sr: 153, country: "pl", year:1964},
        {name: "PP-19 Bizon", cartridge: "9x18mm", rof: 650, length: 425, weight: 2.1, velocity: 320, sr: 220, cap: 64, country: "ru"},
        {name: "PP-2000", cartridge: "9x19mm", weight: 1.4, length:340, rof: 600, cap: 20, sr: 245, country: "ru"},
        {name: "PP-90M1", cartridge: "9x19mm", weight: 1.7, length: 424, velocity: 320, rof: 800, cap: 64, sr: 240, country: "ru"},
        {name: "QCW-05", cartridge: "5.8x21mm", length: 500, weight: 2.2, velocity: 321, rof: 900, sr: 180, cap: 50, country: "cn"},
        {name: "S&W Model 76", cartridge: "9x19mm", rof: 750, velocity: 381, cap: 36, weightMin: 3.289, weightMax: 3.969, length: 514, sr: 287, country: "us"},
        {name: "Sa vz. 23", alias: ["Sa vz. 23","Sa vz. 24","Sa vz. 25","Sa vz. 26"], cartridge:["9x19mm","7.62x25mm","9x19mm","7.62x25mm"], weight: [3.5,3.5,3.27,3.27], length: [686,445,686,445], rof: 650, cap: [40,32,40,32], sr: 288, country: "cz"},
        //{name: "SIG MPX", alias: ["MPX-P","MPX-K","MPX-SD"], cartridge: "9x19mm", rof: 850, weight: [2.1,1.9,2.0,2.9], velocity: [380,355,380,285], length: [460,338,409,688], cap: 30, sr: [270,270,218,371], country: "ch"},
        //{name: "Skorpion", alias: ["vz. 61","vz. 63", "vz. 64","vz. 68"], length:269, sr: 148, weight:1.3, cartridge: [".32 ACP",".380 ACP","9x18mm","9x19mm"], velocity: [317,292,320,320], rof: [840,900,900,900], cap: 20, country: "cz"},
        {name: "Spectre M-4", cartridge: "9x19mm", rof: 850, velocity: 399, weightMin: 2.903, weightMax: 3.793, length: 350, sr: 309, cap: 50, country: "it", year:1983},
        {name: "ST Kinetics CPW", alias:["9x19mm","4.6x30mm","5.7x28mm"], cartridge: ["9x19mm","4.6x30mm","5.7x28mm"], weight:1.5, cap:30, rof: 1000, length: 350, sr:257, country: "sg", year:2007},
        {name: "Sterling L2A3", cartridge: "9x19mm", rof: 550, velocity: 390, cap: 68, weightMin: 0.638, weightMax: 1.454, length: 483, sr: 410, country: "gb"},
        {name: "Sterling L34A1", cartridge: "9x19mm", rof: 550, velocity: 307, cap: 68, weightMin: 0.638, weightMax: 1.454, length: 660, sr: 502, country: "gb"},
        {name: "Sterling Mark 7 A4, Mark 7 A8", cartridge: "9x19mm", rof: 560, velocity: 356, cap: 68, weightMin: 0.276, weightMax: 1.454, length: 355, sr: 108, country: "gb"},
        {name: "Steyr AUG 9mm", cartridge: "9x19mm", rof: 700, velocity: 400, weightMin:3.300, weightMax: 3.921, length: 665, sr: 192, cap: 32, country: "at"},
        {name: "Steyr MPi 69, MPi 81", cartridge: "9x19mm", rof: 550, velocity: 381, weightMin: 2.930, weightMax: 3.551, length: 465, sr: 326, cap: 32, country: "at"},
        {name: "Uzi", cartridge: "9x19mm", rof: 600, velocity: 400, cap: 32, weightMin: 3.5, weightMax: 4.104, sr: 309, length: 470, country: "il", year:1953},
        {name: "Viking", cartridge: "9x19mm", rof: 650, velocity: 400, cap: 36, weightMin: 2.722, weightMax: 3.352, length: 387, sr: 258, country: "us"},
        {name: "Walther MP-K, MP-L", cartridge: "9x19mm", rof: 550, velocity: 356, weightMin: 2.8, weightMax: 3.384, length: 368, sr: 270, cap: 32, country: "de", year:1963},
        {name: "Z-62, Z-70/B", cartridge: "9x19mm", rof: 550, velocity: 381, cap: 20, weightMin: 2.870, weightMax: 3.430, length: 480, sr: 370, country: "es"},
        {name: "Z-84 Long", cartridge: "9x19mm", rof: 600, velocity: 362, cap: 30, weightMin: 3.150, weightMax: 3.750, length: 465, sr: 330, country: "es"},
        {name: "Z-84 Short", cartridge: "9x19mm", rof: 600, velocity: 362, cap: 30, weightMin: 3.100, weightMax: 3.700, length: 410, sr: 330, country: "es"},
      ]
    },
    {
      shortname: "carbines",
      name: "Carbine",
      weapons: [
      {name: "9A-91", cartridge: "9x39mm", rof: 700, velocity: 270, weight: 2.1, length: 605, sr: 134, cap: 30, country: "ru"},
      {name: "AAC Honey Badger", alias: ["supersonic","subsonic"], cartridge: ['300 AAC Blackout, supersonic','300 AAC Blackout, subsonic'], velocity: [640,300], rof: 800, length: 740, sr: 312, weight: 2.9, cap: 30, country: "us"},
      {name: "AC-556K", cartridge: "5.56x45mm", rof: 750, velocity: 828, weightMin: 3.147, weightMax: 3.731, length: 584, sr: 363, cap: 30, country: "us"},
      {name: "ACE 21", cartridge: "5.56x45mm", rof: 700, cap: 35, velocity: 710, weight: 2.8, length: 650, sr: 292.5, country: "il"},
      {name: "AK-105", cartridge: "5.45x39mm", rof: 600, velocity: 735, weightMin: 3.2, weightMax: 3.751, length: 586, sr: 240, cap: 30, country: "ru"},
      {name: "AKS-74U", cartridge: "5.45x39mm", rof: 700, velocity: 735, weightMin: 2.5, weightMax: 3.051, length: 420, sr: 240, cap: 30, country: "ru"},
      {name: "AK 5C", cartridge: "5.56x45mm", rof: 650, velocity: 870, weightMin: 4.0, weightMax: 4.5, length: 852, sr: 513, cap: 30, country: "se"},
      {name: "AMD 65", cartridge: "7.62x39mm", rof: 650, cap: 30, weight: 3.8, length: 648, sr: 300, country:"hu"},
      {name: "Beretta SC-70 Short", cartridge: "5.56x45mm", rof: 600, velocity: 885, weightMin: 3.445, weightMax: 4.066, length: 596, sr: 455, cap: 30, country: "it"},
      {name: "Beretta SCS-70/90", cartridge: "5.56x45mm", rof: 680, velocity: 841, weightMin: 3.790, weightMax: 4.273, length: 647, sr: 514, cap: 30, country: "it"},
      {name: 'Barrett REC-7', alias: ['8" barrel', '16" barrel'], cartridge: "5.56x45mm", weight: [2.74,3.46], rof: 750, length: [651,845], sr: 395, cap: 30, country: "us"},
      {name: "C8", cartridge: "5.56x45mm", rof: 900, weightMin: 2.7, weightMax: 3.2, cap: 30, length: 760, sr: 380, velocity: 900, country: "ca"},
      {name: "Colt M4", alias: ["Colt M4","Colt M4A1"], cartridge: "5.56x45mm", rof: [360,825], velocity: 840, weight: 2.9, length: 840, sr: 368, cap: 30, country: "us", wiki:"M4_carbine"},
      {name: "CAR-15", cartridge: "5.56x45mm", rof: 750, velocity: 838, weightMin:2.78, weightMax: 3.254, length: 711, sr: 374, cap: 30, country: "us"},
      {name: "CETME LC", cartridge: "5.56x45mm", rof: 725, velocity: 832, weightMin: 3.4, weightMax: 3.883, length: 665, sr: 440, cap: 30, country: "es"},
      {name: "CZ 2000 Compact", cartridge:"5.56x45mm", weight: 2.6, length: 435, sr: 355, rof: 800, velocity: 735, cap:30, country: "cz"},
      {name: "Floro International PDW", cartridge:"5.56x45mm", cap:30, length: 450, sr: 390, weightMin: 2.80, weightMax: 3.26, rof: 750, country: "ph"},
      {name: "FN SCAR PDW", cartridge: "5.56x45mm", rof: 625, velocity: 622, weight: 2.5, length: 632, sr: 336, cap: 30, country: "be"},
      {name: "FN SCAR-L CQB", cartridge: "5.56x45mm", rof: 600, velocity: 797, weight: 3.4, length: 787, sr: 385, cap: 30, country: "be"},
      {name: "Galil SAR", cartridge: "5.56x45mm", rof: 650, velocity: 920, weightMin: 3.65, weightMax: 4.467, length: 614, sr: 475, cap: 35, country: "il"},
      {name: "H&K HK33KA1", cartridge: "5.56x45mm", rof: 700, velocity: 880, weightMin: 3.969, weightMax: 4.524, length: 675, sr: 480, cap: 30, country: "de"},
      {name: "H&K HK53", cartridge: "5.56x45mm", rof: 700, velocity: 750, weightMin: 3.048, weightMax: 3.603, length: 563, sr: 390, cap: 25, country: "de", year:1975},
      {name: "H&K G41K", cartridge: "5.56x45mm", rof: 850, velocity: 870, weightMin: 4.309, weightMax: 4.792, length: 740, sr: 566, cap: 30, country: "de"},
      {name: "H&K G36C", cartridge: "5.56x45mm", rof: 750, velocity: 762, weight: 2.8, length: 720, sr: 315, cap: 30, country: "de"},
      {name: "H&K G36K", cartridge: "5.56x45mm", rof: 750, velocity: 830, weight: 3.5, length: 860, sr: 315, cap: 30, country: "de"},
      {name: "H&K HK416", cartridge: "5.56x45mm", rof: 850, velocity: 882, weight: 3.0, length: 804, sr: 317, cap: 30, country: "de"},
      {name: "M16A1 Carbine", cartridge: "5.56x45mm", rof: 750, velocity: 922, weightMin: 2.631, weightMax: 3.105, length: 806, sr: 374, cap: 30, country: "us"},
      {name: "M16A2 Carbine", cartridge: "5.56x45mm", rof: 770, velocity: 841, weightMin: 2.676, weightMax: 3.159, length: 757, sr: 368, cap: 30, country: "us"},
      {name: "M16A2 Commando", cartridge: "5.56x45mm", rof: 800, velocity: 796, weightMin: 2.608, weightMax: 3.091, length: 681, sr: 368, cap: 30, country: "us"},
      {name: "Mini-Beryl", cartridge:"5.56x45mm", rof: 700, velocity: 770, sr: 225, weightMin: 3.0, length: 525, cap:30,country:"pl"},
      {name: "MTAR-21", cartridge: "5.56x45mm", rof: 825, velocity: 870, weight: 3.0, length: 590, sr: 310, cap: 30, country: "il"},
      {name: "QBZ-95B", cartridge: "5.8x42mm Light", weight: 2.9, rof: 800, velocity: 790, length: 609, sr: 285, cap: 30, country: "cn"},
      {name: 'Remington R5 RGP', alias: ['10.5" barrel', '14.5" barrel'], cartridge: "5.56x45mm", weight: [2.97557,3.15247], length: [688,777], sr: 273, cap: 30, cost: 841, rof: 750, country: "us"},
      {name: "SIG 543", cartridge: "5.56x45mm", rof: 725, velocity: 875, weightMin: 3.0, weightMax: 3.606, length: 720, sr: 495, cap: 30, country: "ch"},
      {name: "SIG 551", cartridge: "5.56x45mm", rof: 800, velocity: 882, weightMin: 3.405, weightMax: 3.881, length: 600, sr: 466, cap: 30, country: "de"},
      {name: "SIG SG-552", cartridge: "5.56x45mm", rof: 700, velocity: 725, weight: 3.2, length: 730, sr: 360, cap: 30, country: "ch"},
      {name: "SIG SG-553", cartridge: "5.56x45mm", rof: 700, velocity: 725, weight: 3.2, length: 730, sr: 339, cap: 30, country: "ch"},
      {name: "SKS", cartridge: "7.62x39mm", rof: 40, velocity: 735, weight: 3.9, length: 1020, sr: 440, cap: 20, country: "ru"},
      {name: "Steyr AUG", cartridge: "5.56x45mm", rof: 700, velocity: 882, weightMin: 3.175, weightMax: 3.683, length: 635, sr: 192, cap: 30, country: "at"},
      {name: "Vektor R5 Carbine", cartridge: "5.56x45mm", weight: 3.7, rof:675, velocity: 920, cap: 35, length: 615, sr: 445, country: "za"},
      {name: "Vektor R6 PDW", cartridge: "5.56x45mm", weight: 3.6, rof:585, velocity: 825, cap: 35, length: 565, sr: 425, country: "za"},
      ]
    },
    {
      shortname: "assaultrifles",
      name: "Assault rifle",
      weapons: [
      {name: "A-91M", alias: ["A-91M 7.62", "A-91M 5.56"], cartridge: ["7.62x39mm","5.56x45mm"], velocity: [715,910], rof: 700, weightMin: 3.97, weightMax: 4.3, length: 660, sr: 288, cap:30, country:"ru"},
      {name: "AC-556", cartridge: "5.56x45mm", rof: 750, velocity: 990, weightMin: 2.892, weightMax: 3.476, length: 946, sr: 445, cap: 20, country: "us"},
      {name: "AEK-971", cartridge: "5.45x39mm", rof: 900, velocity: 880, weight: 3.3, length: 720, cap: 30, sr: 370, country: "ru"},
      {name: "AK-107", cartridge:"5.45x39mm", rof: 850, velocity: 900, weight: 3.8, length: 700, cap: 30, sr: 400, country:"ru"},
      {name: "AK-12", cartridge: "5.45x39mm", rof: 650, velocity: 900, weight: 3.3, length: 725, cap: 30, sr: 605, country: "ru"},
      {name: "AK-47", cartridge: "7.62x39mm", rof: 600, velocity: 715, weight: 4.37, length:870, sr:378, cap: 30, country: "ru"},
      {name: "AK-74", alias: ["AK-74","AK-74M"], cartridge: "5.45x39mm", rof: 650, velocity: 890, weightMin: [3.07,3.4], weightMax: [3.951,4.621], length:930, sr:394, cap: 30, country: "ru"},
      {name: "AKM", cartridge: "7.62x39mm", rof: 600, velocity: 715, weightMin: 3.150, weightMax: 3.967, length:876, sr:394, cap: 30, country: "ru"},
      {name: "AN-94", cartridge: "5.45x39mm", rof: 600, velocity: 900, weight: 3.85, length:728, sr: 700, cap: 30, country: "ru"},
      {name: "AR-18", cartridge: "5.56x45mm", rof: 800, velocity: 1000, weightMin: 3.170, weightMax: 4.78, cap: 40, length: 736, sr: 508, cost: 500, country: "us"},
      {name: "AS Val", cartridge: "9x39mm", rof: 900, velocity: 295, weight: 2.5, length: 615, cap: 20, sr: 295, country: "ru"},
      {name: "Beretta ARX-160", cartridge: "5.56x45mm", weight: 3.1, rof: 700, cap: 30, length: 680, sr: 425, country: "it"},
      {name: "Beretta AR-70/90", cartridge: "5.56x45mm", rof: 680, velocity: 945, weightMin: 3.990, weightMax: 4.473, length: 751, sr: 555, cap: 30, cost: 1250, country: "it"},
      {name: "Beryl", cartridge:"5.56x45mm", rof: 700, velocity: 920, weightMin: 3.35, length: 742, sr: 490, cap:30, country:"pl"},
      {name: "Bushmaster M17S", cartridge:"5.56x45mm", rof: 120, weight: 3.7, length: 760, sr: 125, cap:30, country: "au"},
      {name: "CETME L", cartridge: "5.56x45mm", rof: 675, velocity: 875, weightMin: 3.4, weightMax: 3.883, length: 925, sr: 440, cap: 30, country: "es"},
      {name: "C7A1", cartridge: "5.56x45mm", rof: 800, weightMin: 3.3, weightMax: 3.9, cap: 30, length: 1020, sr: 560, velocity: 900, country: "ca"},
      {name: "Colt CM901", cartridge: "5.56x45mm", rof: 825, weight: 4.3, length: 870, cap: 30, sr: 450, country: "us"},
      {name: "Colt M16A1", cartridge: "5.56x45mm", rof: 700, velocity: 948, weight: 2.89, length: 986, sr: 500, cap:30, country: "us"},
      {name: "Colt M16A2", alias: ["Colt M16A2","Colt M16A2 HBAR"], cartridge: "5.56x45mm", rof: [825,45], velocity: [1000,948], weight: [3.77,4.066], length: [1006,991], sr: 500, cap:30, country: "us"},
      {name: "Colt M16A3", cartridge: "5.56x45mm", rof: 825, velocity: 948, weight: 3.77, length: 1006, sr: 500, cap:30, country: "us"},
      {name: "CZ 2000", cartridge:"5.56x45mm", weight: 3.0, length: 615, sr: 530, rof: 800, velocity: 910, cap: 30, country: "cz"},
      {name: "CZ 805", cartridge: "5.56x45mm", rof: 750, sr: 365, length: 585, cap: 30, weight: 3.41, country: "cz"},
      {name: "FAD", cartridge: "5.56x45mm", rof: 550, cap: 30, weight: 3.6, length: 810, velcoity: 963, sr: 410, country: "pe"},
      {name: "FAMAS F1", cartridge: "5.56x45mm", rof: 950, velocity: 960, weightMin: 3.780, weightMax: 4.235, length: 757, sr: 330, cap: 30, country: "fr"},
      {name: "FAMAS F2", cartridge: "5.56x45mm", rof: 1050, velocity: 925, weight: 3.8, length: 757, sr: 330, cap: 30, country: "fr"},
      {name: "FN CAL", cartridge:"5.56x45mm", cap:20, weight: 3.35, length: 980, sr: 420, rof: 850, country: "be"},
      {name: "FN F2000", cartridge: "5.56x45mm", rof: 850, velocity: 900, weight: 3.39, length: 688, sr: 280, cap: 30, country: "be"},
      {name: "FN FNC", cartridge: "5.56x45mm", rof: 700, velocity: 915, weightMin: 3.8, weightMax: 4.412, length: 997, sr: 513, cap: 30, cost:1250, country: "be"},
      {name: "FN SCAR-L", alias: ["FN SCAR-L", "FN SCAR-LB"], cartridge: "5.56x45mm", rof: 600, velocity: [877,909], weight: [3.5,3.6], length: [889,990], sr: 385, cap: 30, country: "be"},
      {name: "Galil AR", cartridge: "5.56x45mm", rof: 650, velocity: 980, weightMin: 4.300, weightMax: 5.117, length: 742, sr: 475, cap: 35, country: "de"},
      {name: "H&K G41, G41A2", cartridge: "5.56x45mm", rof: 900, velocity: 910, weightMin: 4.1, weightMax: 4.583, length: 997, sr: 566, cap: 30, country: "de"},
      {name: "H&K HK33A2, H&K HK33A3", cartridge: "5.56x45mm", rof: 750, velocity: 920, weightMin: 3.651, weightMax: 4.206, length: 920, sr: 480, cap: 30, country: "de"},
      {name: "Imbel IA-2", cartridge: "5.56x45mm", rof: 750, weight: 3.38, length: 600, sr: 460, cap: 30, country: "br"},
      {name: "KH2002", cartridge: "5.56x45mm", rof: 825, cap: 30, weight: 3.7, length: 730, velocity: 925, sr: 375, country: "ir"},
      {name: "L85A2", cartridge: "5.56x45mm", rof: 700, velocity: 940, weightMin: 3.82, weightMax: 4.98, length: 785, sr: 335, cap: 30, country: "gb"},
      {name: "MSBS-K", cartridge: "5.56x45mm", rof: 775, weight: 3.65, length: 980, sr: 410, cap: 30, country: "pl"},
      {name: "MSBS-B", cartridge: "5.56x45mm", rof: 775, weight: 3.55, length: 720, sr: 330, cap: 30, country: "pl"},
      {name: "OTs-14 Groza", cartridge:"9x39mm", rof:750, velocity:300, weight: 2.7, cap:30, length:610, sr: 173, country: "ru"},
      {name: "QBZ-95", cartridge: "5.8x42mm Light", weight: 3.25, rof: 650, velocity: 930, length: 745, sr: 285, cap: 30, country: "cn"},
      {name: "Remington ACR", cartridge: "5.56x45mm", rof: 800, weightMin: 3.6, weightMax: 4.4, length: 660, cap: 30, velocity: 890, sr: 300, country: "us"},
      {name: "Ruger Mini-14", cartridge: "5.56x45mm", rof: 40, velocity: 1005, weightMin: 2.900, weightMax: 3.484, length: 946, sr: 561, cap: 20, country: "us"},
      {name: "SAR 80", cartridge: "5.56x45mm", rof: 700, velocity: 970, weightMin: 3.4, weightMax: 3.883, length: 970, sr: 517, cap: 30, country: "il"},
      {name: "SC-2010", cartridge: "5.56x45mm", length: 825, weight: 3.5, velocity: 950, rof: 550, cap: 30, sr: 520, country: "pe"},
      {name: "SIG 540", cartridge: "5.56x45mm", rof: 725, velocity: 875, weightMin: 3.590, weightMax: 4.196, length: 720, sr: 495, cap: 30, country: "ch"},
      {name: "SIG 550", cartridge: "5.56x45mm", rof: 800, velocity: 931, weightMin: 4.005, weightMax: 4.481, length: 770, sr: 540, cap: 30, country: "ch"},
      {name: "Steyr AUG", cartridge: "5.56x45mm", rof: 700, velocity: 921, weightMin: 3.583, weightMax: 4.091, length: 790, sr: 310, cap: 30, country: "at"},
      {name: "StG 44", cartridge: "7.92x33mm", rof: 575, velocity: 685, weightMin: 4.62, weightMax: 5.13, length: 940, sr: 450, cap: 30, country: "de"},
      {name: "TAR-21", cartridge: "5.56x45mm", rof: 775, velocity: 920, weight: 3.27, length: 720, sr: 267, cap: 30, country: "il"},
      {name: "vz. 58", cartridge:"7.62x39mm", rof: 800, velocity: 705, weight: 3.1, length: 845, sr: 353, cap:30, country: "cz"},
      //{name: "XM8", cartridge: "5.56x45mm", rof: 750, velocity: 900, weight: 3.4, length: 838, cap: 30, sr: 190},
      {name: "ZM LR-300", cartridge: "5.56x45mm", rof: 950, weight: 3.1, cap: 30, sr: 245, length: 546, country: "us"},
      ]
    },
    {
      shortname: "battlerifles",
      name: "Battle rifle",
      weapons: [
      {name: "Howa Type 64", cartridge: "7.62x51mm", rof: 475, cap: 20, length: 990, weightMin: 4.3, weightMax: 5.0, sr: 500, country: "jp"},
      {name: "Beretta BM 59", cartridge: "7.62x51mm", rof:750, cap: 20, length: 1095, weightMin:4.4, weightMax: 5.1, sr: 543, description: "The Beretta BM59 is an Italian-made rifle based on the M1 Garand rifle, but chambered in 7.62×51 mm NATO, and modified to use a detachable magazine.", country: "it"},
      {name: "CETME Model 58", cartridge:"7.62x51mm", rof: 575, cap:30, length: 1015, weight: 4.4, sr: 520, country: "es"},
      {name: "Galil ACE", alias: ["Galil ACE 52","Galil ACE 53"], cartridge: "7.62x51mm", rof: 650, cap: 25, length: [855,963], sr: [423,477], weightMin: [3.56,3.69], weightMax: [4.26,4.49], country:"il", wiki:"Galil_ACE", description: "The Galil ACE or IWI ACE is an Israeli assault rifle developed and manufactured by IWI and also produced under license by Indumil, RPC Fort and FAME S.A.C. It is produced in three calibres: 5.56x45mm NATO, 7.62×39mm, and 7.62x51mm NATO. The ACE family assault rifles are based upon the mechanism of the IMI Galil, but using a modernized design and materials to increase its accuracy and lower its weight, while maintaining the Galil's ergonomics, ease of maintenance and reliability under battle conditions."},
      {name: "FN FAL", cartridge: "7.62x51mm", rof: 700, velocity: 823, weightMin: 4.310, weightMax: 5.01, length: 1100, sr: 554, cap: 20, cost:600, wiki: "FN_FAL", country: "be", description: "The Fusil Automatique Léger ('Light Automatic Rifle') or FAL is a semi-automatic, selective fire battle rifle produced by the Belgian armaments manufacturer Fabrique Nationale de Herstal (FN). During the Cold War it was adopted by many North Atlantic Treaty Organization (NATO) countries, with the notable exception of the United States. It is one of the most widely used rifles in history, having been used by more than 90 countries."},
      {name: "DSA SA58 OSW", cartridge: "7.62x51mm", rof: 700, weight: 4.08233, length: 590, sr: 482.6, cap: 20, cost:1975, country:"us"},
      {name: "H&K G3A3", cartridge: "7.62x51mm", rof: 600, velocity: 800, length: 1026, sr: 572, weightMin: 4.40, weightMax: 5.192, cap: 20, cost:600, country: "de"},
      {name: "H&K G3A4", cartridge: "7.62x51mm", rof: 600, velocity: 800, length: 841, sr: 572, weightMin: 4.717, weightMax: 5.509, cap: 20, cost:600, country: "de"},
      {name: "H&K G3K", cartridge: "7.62x51mm", rof: 600, velocity: 740, weightMin: 4.400, weightMax: 5.192, length: 720, sr: 510, cap: 20, country: "de"},
      {name: "H&K G8A1", cartridge: "7.62x51mm", rof: 800, velocity: 800, weightMin: 9.148, weightMax: 9.940, length: 1030, sr: 685, cap: 20, country: "de"},
      {name: "Galil AR", cartridge: "7.62x51mm", rof: 650, velocity: 850, weightMin: 4.300, weightMax: 5.230, length: 810, sr: 475, cap: 25, country: "il"},
      {name: "Galil SAR", cartridge: "7.62x51mm", rof: 650, velocity: 800, weightMin: 3.750, weightMax: 4.680, length: 675, sr: 445, cap: 25, country: "il"},
      {name: "CETME C", cartridge: "7.62x51mm", rof: 600, velocity: 780, weightMin: 4.2, weightMax: 4.987, length: 1015, sr: 580, cap: 20, country: "es"},
      {name: "SIG 510-4", cartridge: "7.62x51mm", rof: 600, velocity: 790, weightMin: 4.463, weightMax: 5.273, length: 1016, sr: 593, cap: 20, country: "ch"},
      {name: "SIG 542", cartridge: "7.62x51mm", rof: 725, velocity: 820, weightMin: 3.357, weightMax: 4.109, length: 1019, sr: 518, cap: 20, country: "ch"},
      {name: "AR-10", cartridge: "7.62x51mm", sr: 548, length: 1050, weight: 4.3, cap: 20, rof:700, velocity:820, country: "us"},
      {name: "FN SCAR-H", alias: ["FN SCAR-H","FN SCAR-H STD", "FN SCAR-H CQB"], cartridge: "7.62x51mm", rof: 625, velocity: [763,853,747], weight: [3.58,3.7,3.49], length: [1067,965,889], sr: 415, cap: 20, country: "be"},
      {name: "H&K HK417", cartridge: "7.62x51mm", rof: 600, velocity: 775, length: 985, sr: 419, weight: 4.0, cap: 20, country: "de"},
      {name: "M14", cartridge: "7.62x51mm", rof: 725, velocity: 850, length: 1126, sr: 708, weight: 4.1, cap: 20, country: "us", wiki: "M14 rifle", description: "M14 rifle, officially the United States Rifle, 7.62 mm, M14, is an American selective fire automatic rifle that fires 7.62×51mm NATO (.308 Winchester) ammunition. It gradually replaced the M1 Garand in U.S. Army service by 1961 and in U.S. Marine Corps service by 1965. It was the standard issue infantry rifle for U.S. military personnel in the Contiguous United States, Europe, and South Korea from 1959 until it was replaced by the M16 rifle in 1970."},
      {name: "M39 EMR", cartridge: "7.62x51mm", rof: 750, velocity: 865, length: 1120, sr: 708, weight: 7.5, cap: 20, country: "us"},
      {name: "Mk. 14 EBR", cartridge: "7.62x51mm", rof: 750, velocity: 853, length: 889, sr: 708, weight: 5.1, cap: 20, country: "us"},
      {name: "Madsen LAR", cartridge: "7.62x51mm", weight: 4.64, length: 1074, sr: 580, rof: 575, cap: 20, country: "dk"},
      {name: "L1A1 SLR", cartridge:"7.62x51mm", rof: 120, velocity: 823, length: 1143, weight: 4.337, sr: 597, cap:20, country: "gb"},
      {name: "Kel-Tec RFB", alias: ["Sporter","Carbine","Target"], cartridge: "7.62x51mm", weight: [3.9,3.7,5.1], length: [813,660,1016], sr: 236, velocity: [870,810,930], rof: 260, cap:20, country: "us"},
      {name: "SVU-AS", cartridge: "7.62x54mm", rof: 650, cap: 20, weight: 4.4, length: 900, sr: 432, velocity: 830, country: "ru"}
      ],
    },
    {
      shortname: "lmgs",
      name: "Light machine gun",
      weapons: [
      {name: 'Ares "Shrike"', cartridge: "5.56x45mm", weight: 3.4, length:711, rof: 725, sr: 375, cap: 100, country: "us"},
      {name: "AUG HBAR", cartridge: "5.56x45mm", weightMin: 5.443, weightMax: 6.114, cap: 42, rof: 680, velocity: 958, length: 889, sr:310, country: "at"},
      {name: "CZ 2000 LMG", cartridge:"5.56x45mm", weight: 4.1, length: 1050, sr: 920, rof: 800, velocity: 960, cap:75, country: "cz"},
      {name: "FN HAMR IAR", cartridge: "5.56x45mm", weight: 4.63, length: 876.3, sr: 435, rof: 650, cap: 100, country: "be"},
      {name: "H&K HK23E", cartridge: "5.56x45mm", rof: 800, velocity: 950, weightMin: 8.750, weightMax: 10.174, cap: 100, length: 1030, sr: 685, cost: 2350, country: "de"},
      {name: "H&K M27 IAR", cartridge: "5.56x45mm", weight:3.6, length: 840, sr: 370, rof: 850, cap: 30, country: "de"},
      {name: "H&K MG4", cartridge: "5.56x45mm", weight: 8.2, length: 1030, sr: 490, velocity: 920, rof: 890, cap: 200, country: "de"},
      {name: "H&K MG4E", cartridge: "5.56x45mm", weight: 7.9, length: 1030, sr: 490, velocity: 920, rof: 775, cap: 200, country: "de"},
      {name: "H&K MG4KE", cartridge: "5.56x45mm", weight: 7.7, length: 950, sr: 490, velocity: 880, rof: 775, cap: 200, country: "de"},
      {name: "IMI Negev", cartridge: "5.56x45mm", weight: 7.5, length: 890, cap: 150, velocity: 915, sr: 440, rof: 1000, country: "il"},
      {name: "LSAT", cartridge: "5.56x45mm", weight: 4.5, length: 917, sr: 430, rof: 650, velocity: 920, cap: 100, country: "us"},
      {name: "L86A1", cartridge: "5.56x45mm", rof:775, velocity: 970, cap: 30, weightMin: 6.4, weightMax: 6.883, length: 900, sr:335, country: "gb"},
      {name: "Minimi", cartridge: "5.56x45mm", rof:850, velocity: 925, cap: 200, weightMin: 6.875, weightMax: 10, length: 1040, sr:495, country: "be"},
      {name: "Minimi Para", cartridge: "5.56x45mm", rof:850, velocity: 866, cap: 200, weightMin: 6.750, weightMax: 9.875, length: 736, sr:495, country: "be"},
      {name: "QBB-95", cartridge: "5.8x42mm Heavy", rof: 700, velocity: 970, weight: 3.95, length: 840, sr: 370, cap: 75, country: "cn"},
      {name: "QJY-88", alias: ["Light","Heavy"], cartridge: "5.8x42mm Heavy", rof: 700, velocity: 895, weight: [7.6,11.8], length: [1151,1321], sr: 740, cap: 200, country: "cn"},
      {name: "RPD", cartridge: "7.62x39mm", weight: 7.4, length: 1037, rof: 650, sr: 596.6, velocity: 735, cap: 100, country: "ru"},
      {name: "RPK", cartridge: "7.62x39mm", weight: 4.85, length: 1050, rof: 600, sr: 555, velocity: 745, cap: 40, country: "ru"},
      {name: "RPK-74", cartridge: "5.45x39mm", weight: 4.8, length: 1060, rof: 650, sr: 555, velocity: 960, cap: 45, country: "ru"},
      {name: "Stoner 63", cartridge: "5.56x45mm", rof:600, velocity: 840, cap: 200, weightMin: 4.912, weightMax: 8.037, length: 971, sr:541, country: "us"},
      {name: "Ultimax 100 Mark III", cartridge: "5.56x45mm", rof:500, velocity: 990, cap: 100, weightMin: 4.420, weightMax: 6.210, length: 1030, sr:472, country: "sg"},
      ]
    },
    {
      shortname: "mmgs",
      name: "Medium machine gun",
      weapons: [
      {name: "FN MAG", cartridge: "7.62x51mm", rof: 800, velocity: 840, weightMin: 10.85, weightMax: 13.844, cap: 100, length: 1260, sr: 848, country: "be"},
      {name: "H&K HK21E", cartridge: "7.62x51mm", rof: 800, velocity: 840, weightMin: 9.299, weightMax: 12.293, cap: 100, length: 1140, sr: 685, cost: 2350, country: "de"},
      {name: "MG3", cartridge: "7.62x51mm", rof: 1200, velocity: 820, weightMin: 10.523, weightMax: 11.946, cap: 50, length: 1225, sr: 430, cost: 2700, country: "de"},
      {name: "CETME Ameli", cartridge: "7.62x51mm", rof: 1200, velocity: 910, weightMin: 6.151, weightMax: 9.620, cap: 200, length: 970, sr: 343, country: "es"},
      {name: "M60", alias: ["M60","M60E3"], cartridge: "7.62x51mm", rof: [550,600], velocity: [910,823], weightMin: [10.51,8.505], weightMax: [13.504,11.499], cap: 100, length: [1105,1076], sr: [540,422], cost: [2600,3200], country: "us"}
      ]
    },
    {
      shortname: "shotguns",
      name: "Shotgun",
      weapons: [
      {name: "Armscor M30", alias: ["M30R", "M30P", "M30RP", "M30 SAS"], cartridge: "12 gauge", weight: [3.18, 2.72, 2.72, 3.63], sr: 623, length: 1016, rof: 16, cap: [7,4,5,7], country: "ph"},
      {name: "H&K HK512", cartridge: "12 gauge", rof: 21, velocity: 350, weightMin: 3.100, weightMax: 3.548, cap: 7, length: 1020, sr: 300, country: "de"},
      {name: "SPAS-12", cartridge: "12 gauge", rof: 240, velocity: 385, weightMin: 4.354, weightMax: 4.866, cap: 8, length: 710, sr: 379, country: "it"},
      {name: "SPAS-15", cartridge: "12 gauge", rof: 240, velocity: 339, weightMin: 3.8, weightMax: 4.410, cap: 6, length: 920, sr: 522, country: "it"},
      {name: "PA-3/215", cartridge: "12 gauge", rof: 12, velocity: 305, weightMin: 2.7, weightMax: 2.892, cap: 3, length: 470, sr: 215, country: "it"},
      {name: "Bernadelli B4", cartridge: "12 gauge", rof: 32, velocity: 350, weightMin: 3.45, weightMax: 4.302, cap: 8, length: 730, sr: 384, country: "it"},
      {name: "Benelli M1", alias: ["M1","M1 Entry","M1 Tactical"], rof: 28, cartridge: "12 gauge", cap: [7,5,5], sr: [406,299,406], length: [1009,902,1009], weight: [3.39,2.95,3.18], country: "it"},
      {name: "Beretta M3P", cartridge: "12 gauge", rof: 30, velocity: 339, weightMin: 3.21, weightMax: 3.86, length: 686, sr: 325, cap: 5, cost: 700, country: "it"},
      {name: "AAI CAWS", cartridge: "12 gauge", rof: 450, velocity: 594, weightMin: 4.082, weightMax: 4.889, length: 984, sr: 500, cap: 12, country: "us"},
      {name: "Pancor Jackhammer", cartridge: "12 gauge", rof: 240, velocity: 383, weightMin: 3.871, weightMax: 4.695, length: 787, cap: 10, sr: 260, country: "us"},
      {name: "Remington 1100", cartridge: "12 gauge", rof: 16, velocity: 367, weightMin: 3.175, weightMax: 3.381, length: 1076, cap: 4, sr: 359, cost: 450, country: "us"},
      {name: "Remington 7188", cartridge: "12 gauge", rof: 420, velocity: 381, weightMin: 3.657, weightMax: 4.015, length: 1029, cap: 7, sr: 333, country: "us"},
      //{name: "Armsel Striker", cartridge: "12 gauge", rof: 240, velocity: 362, weightMin: 4.2, weightMax: 4.986, length: 50, cap: 12, cost: 800, country: "za"},
      //{name: "HK CAWS", cartridge: "12 gauge", rof: 240, velocity: 488, weightMin: 4.32, weightMax: 5.299, length: 862, cap: 10, country: "de"},
      //{name: "Sidewinder Model SW-PC", cartridge: "12 gauge", rof: 20, velocity: 368, weightMin: 2.948, weightMax: 3.204, length: 622, sr:},
      //{name: "Remington 870P", cartridge: "12 gauge", rof: 21, velocity: 358, weightMin: 3.400, weightMax: 3.848, length: 770, sr:, country: "us"},
      //{name: "Ithaca Model 37", cartridge: "12 gauge", rof: 21, velocity: 358, weightMin: 3.04, weightMax: 3.448, length: 1001, country: "us"},
      //{name: "Ithaca Stakeout", cartridge: "12 gauge", rof: 22, velocity: 346, cap: 4, weightMin: 1.588, weightMax: 1.756, length: 584, country: "us"},
      //{name: "Mossberg M500 ATP6", cartridge: "12 gauge", rof: 18, velocity: 376, cap: 5, weightMin: 2.950, weightMax: 3.207, length: 958, cost: 250, country: "us"},
      //{name: "Mossberg M500 ATP8", cartridge: "12 gauge", rof: 24, velocity: 381, cap: 5, weightMin: 3.060, weightMax: 3.508, length: 1009, cost: 300, country: "us"},
      //{name: "Mossberg M500 ATP6C", cartridge: "12 gauge", rof: 18, velocity: 376, cap: 5, weightMin: 2.600, weightMax: 2.920, length: 711, cost: 250, country: "us"},
      //{name: "Mossberg M500 ATP8C", cartridge: "12 gauge", rof: 24, velocity: 381, cap: 5, weightMin: 2.720, weightMax: 3.168, length: 762, cost: 300, country: "us"},

      ]
    },
    {
      shortname: "sniperrifles",
      name: "Sniper rifle",
      weapons: [
      {name: "Steyr SSG 69", cartridge: "7.62x51mm", velocity: 860, rof: 20, weightMin: 4.535, weightMax: 4.728, length: 1140, sr: 505, cost: 900, cap:5, country: "at"},
      {name: "Steyr SSG 69 PII", cartridge: "7.62x51mm", velocity: 860, rof: 20, weightMin: 4.2, weightMax: 4.393, length: 1135, sr: 500, cost: 1800, cap:5, country: "at"},
      {name: "FR-F2", cartridge: "7.62x51mm", velocity: 820, rof: 15, weightMin: 5.340, weightMax: 5.8, length: 1200, sr: 600, cap:20, country: "fr"},
      {name: "Mauser SP-66", cartridge: "7.62x51mm", velocity: 762, rof: 9, weightMin: 6.123, weightMax: 6.199, length: 1140, sr: 505, cap:20, country: "de"},
      {name: "WA-2000", cartridge: ".300 Winchester Magnum", velocity: 980, rof: 18, weightMin: 7.91, weightMax: 8.31, length: 905, sr: 400, cap:6, country: "de"},
      {name: "H&K HK94 SG/1", cartridge: "9x19mm", velocity: 396, rof: 40, weightMin: 3.257, weightMax: 3.557, length: 1026, sr: 340, cap:15, country: "de"},
      {name: "H&K HK33 SG/1", cartridge: "5.56x45mm", velocity: 920, rof: 750, weightMin: 4.445, weightMax: 5, length: 920, sr: 480, cap:25, country: "de"},
      {name: "H&K G3 SG/1", cartridge: "7.62x51mm", velocity: 742, rof: 600, weightMin: 5.488, weightMax: 6.274, length: 1025, sr: 572, cap:20, country: "de"},
      {name: "H&K PSG-1", cartridge: "7.62x51mm", velocity: 788, rof: 40, weightMin: 8.1, weightMax: 8.886, length: 1208, sr: 674, cap:20, cost: 6000, country: "de"},
      {name: "Galil", cartridge: "7.62x51mm", velocity: 780, rof: 30, weightMin: 6.4, weightMax: 8.02, length: 840, sr: 475, cap:20, country: "il"},
      {name: "SVD", cartridge: "7.62x54mm", velocity: 830, rof: 20, weightMin: 4.3, weightMax: 4.611, length: 1225, sr: 580, cap:10, country: "ru"},
      {name: "L42A1", cartridge: "7.62x51mm", velocity: 838, rof: 30, weightMin: 4.430, weightMax: 4.892, length: 1181, sr: 830, cap:10, country: "gb"},
      {name: "L96A1", cartridge: "7.62x51mm", velocity: 782, rof: 30, weightMin: 6, weightMax: 6.453, length: 1175, sr:830, cap:10, country: "gb"},
      {name: "M21", cartridge: "7.62x51mm", velocity: 792, rof: 20, weightMin: 5.045, weightMax: 5.777, length: 112, sr: 678, cap:20, country: "us"},
      {name: "M42 SWS", cartridge: "7.62x51mm", velocity: 792, rof: 10, cap: 5, weightMin: 5.947, weightMax: 6.074, length:109, sr: 69},
      {name: "AR-15A2 Delta HBAR", cartridge: "5.56x45mm", rof: 45, velocity: 1000, cap: 30, weightMin: 4.536, weightMax: 5.019, length: 991, sr: 501, country: "us"},
      {name: "Mk. 20 SSR", cartridge: "7.62x51mm", velocity: 714, rof: 600, weight: 4.85, length: 1080, sr: 604.4, cap: 20, country: "us"},
      //{name: "M40A1", cartridge: "7.62x51mm", velocity: 777, rof: 10, weightMin: 6.570, weightMax: 6.697, length: 1117, sr: , country: "us"},
      //{name: "RAI Model 300", cartridge: "7.62x51mm", rof: 16, velocity: 800, weightMin: 6.442, weightMax: 6.776, cap: 5, length: 1390, cost: 8000},
      //{name: "RAI Model 500", cartridge: ".50 BMG", rof: 6, velocity: 888, weightMin: 15.153, weightMax: 15.271, cap: 1, length: 1390, cost: 9000},
      //{name: "SR-25 ECR", cartridge: "7.62x51mm", velocity: 783, length: 1000, sr: 500, weight: 4.7, cap: 20, country: "us"},
      //{name: "QBU-88", cartridge: "5.8x42mm Heavy", weight: 4.1, length: 920, sr: 455, cap: 10, country: "cn"},
      ]
    }
  ];
};
