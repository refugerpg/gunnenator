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

var smve = {
  pistols : [
    {name: "Roth-Steyr 1907", cartridge:"8mm Roth-Steyr", year: 1907, weight:1.03, country:"at", barrel: 131, length: 233, velocity: 332, cap: 10}, // Proprietary round
    {name: "Mauser M1912", cartridge:"7.62mm", year:1912, country: "at", weight:1.25, barrel: 140, velocity: 433, cap:8}, // Can't find much more info
    {name: "Webley & Scott Self-Loading .455 1912", year:1912, cartridge:".455 W&S Auto", weight:0.68, length: 216, barrel: 127, velocity: 220, cap: 6, country:"gb"}, // Proprietary round
    {name: "Webley & Scott Self-Loading .455 Mark I Navy", year:1912, cartridge:".455 W&S Auto", weight: 0.68, length: 216, barrel: 127, velocity: 220, cap:6, country: "gb"}, // Proprietary round
    {name: "Steyr Model 1917", year: 1917, cartridge:"9x19mm", weight:0.99, length:216, barrel:128, velocity:335, cap:6, country:"at"}, // Can't find much more info
    {name: "Smith & Wesson .44 Triple Lock", cartridge:".44 Special", country:"us", year:1908,weight:1.08,length:298, barrel: 185, velocity:198, cap:6},
    {name: "Unceta Victoria", country:"es", year:1911, cartridge:".25 ACP", weight:0.57,length:146,barrel:81,velocity:229,cap:7},
    {name: "Remington 51", country:"us", year:1918, cartridge:".32 ACP", weight:0.6, length:168, barrel: 83},
    {name: "Colt Detective Special", country:"us", year:1927, cartridge:".38 Special", weight:0.6, length:171, barrel:54, velocity:213, cap:6},
    {name: "Smith & Wesson .357 Model 27", country:"us", year:1935, cartridge:".357 Magnum", weight:1.45, barrel:[102,154], velocity:198, cap:6},
    {name: "Nambu Type 14", country:"jp", year:1906, cartridge:"8mm Nambu", weight:0.9, length:227, barrel:121, velocity:335, cap:8},
    {name: "Star Model A", alias: ["Model A","Model B"], country:"es", year:1924, cartridge:[".45 ACP","9x19mm"], weight:1.1, length:215, barrel:122},
    {name: "Beretta Modello 1935", country:"it", year:1934, cartridge:"9mm Short", weight:0.65, length:152, barrel:95},
    {name: "Type 94", country:"jp", year:1934, cartridge:".8mm Nambu", weight:0.688, length:193, barrel:96},
    {name: "Tokarev TT30", alias:["TT30","TT33"], country:"su", year:[1930,1933], cartridge:"7.62x25mm", weight:0.83, length:194, barrel:116},
    {name: "Lahti L-35", country:"fi", year:1929, cartridge:"9x19mm", weight:1.2, length:245, barrel:107, velocity:335.3, cap:8},
    {name: "Radom wz35", country:"pl", year:1935, cartridge:"9x19mm", weight:1.022, length:197, barrel:115, velocity:350, cap:8},
    {name: "cz. 38", country:"cz", year:1938, cartridge:"9mm Short", weight: 0.909, length:1987, barrel:119, velocity:296, cap:8},
    {name: "Welrod", country:"gb", year:1940, cartridge:".32 ACP", weight: 1.090, length:310, barrel:95, cap:8},
    {name: "Liberator M1942", country:"us", year:1942, cartridge:".45 ACP", weight:0.454, length:141, barrel:102, velocity:250, cap:1},
    {name: "Smith & Wesson 36 'Chief's Special", country:"us", year:1950, cartridge:".38 Special", length:176, barrel:47.6, cap:5},
    {name: "Smith & Wesson Centennial", alias:[".38 Special",".357 Magnum"], country:"us", year:1952, cartridge:[".38 Special",".357 Magnum"], barrel:[50.8,76], cap: 5},
    {name: "Colt Trooper Mk V", country:"us", year:1953, cartridge:".357 Magnum", weight:1.2, length:260, barrel:203, velocity:455, cap:6}
  ],
  smgs: [
    {name: "Sten", alias:["Mk I","Mk II","Mk III","Mk IV"], country:"gb", year:[1940,1942,1943,1944,1944], cartridge:"9x19mm", weight:[3.1,2.95,2.95,,3.86], length:[760,762,762,,762], barrel: 196, velocity:[365,380,380,380,380], cap:32},
    {name: "Steyr-Solothurn S1-100", country:"at", year:1930, cartridge:"9x19mm", weight:4.48, length:850, barrel:200, velocity:418, cap:32, rof:500},
    {name: "ZK 383", country:"cz", year:1938, cartridge:"9x19mm", weight:4.83, length:875, barrel:325, velocity:365, cap:30},
    {name: "Lanchester", country:"gb", year:1941, cartirdge:"9x19mm", weight:4.34, length:850, barrel:203, velocity:380, cap:50, rof:600},
    {name: "Type 100", alias:["1942","1944"], country:"jp", year:[1942,1944], cartridge:"9x19mm", weight:3.83, length:890, barel:228, velocity:335, cap:30, rof:[450,800]},
    {name: "Pratchett", year:1944, country:"gb", cartridge:"9x19mm", weight:2.7, length:685,barrel:195, velocity:395, cap:32, rof:550},
    {name: "Thompson M1921", alias: ["M1921","M1928"], year:[1921,1928], country:"us", cartridge:".45 ACP", weight:4.88, length:857,barrel:266,velocity:280, cap:50, rof:[800,700]},
    {name: "Reising Model 55", year:1941, country:"us", cartridge:".45 ACP", weight:2.89, length:787, barrel:266, velocity:280, cap:25, rof:500},
    {name: "Thompson M1", year:1942, country:"us", cartridge:".45 ACP", weight:4.74, length:813, barrel:267, velocity:280, cap:30, rof:700},
    {name: "United Defense M42", year:1942, country:"us", cartridge:".45 ACP", weight:4.1, length:820, barrel:279, velocity:335.3, cap:25, rof:900},
    {name: "Star S135", alias:["700 RPM","300 RPM"], year:1935, country:"es", cartridge:"9mm Largo", weight:3.74, length:900, barrel:269, velocity:410, cap:30,rof:[700,300]},
    {name: "Moschetto Auto Beretta 38", year:1938, country:"it", cartridge:"9x19mm", weight:2.72, length:798, barrel:198, velocity:395, cap:34},
    {name: "MAS 38", year:1938, country:"fr", cartridge:"7.65mm Longue", weight:4.1, length:832, barrel:247, velocity:395, cap:32, rof:500},
    {name: "Furrer MP41/44", year:1941, country:"ch", cartridge:"9x19mm", weight:5.2, length:775, barrel:247, velocity:395, cap:40, rof:800},
    {name: "MP3008", year:1945, country:"de", cartridge:"9x19mm", weight:3.2, length:760, barrel:196, velocity:365, cap:32},
    {name: "Suomi Model 31", year:1931, country:"fi", cartridge:"9x19mm", weight:4.87, length:870, barrel: 319, velocity:400, cap:71, rof:900},
    {name: "PPD-1934/38", year:1934, country:"su", cartridge:"7.62x25mm", weight:5.69, length:780, barrel:269, velocity:488, cap:71, rof:800},
    {name: "PPsh-41", year:1941, country:"su", cartridge:"7.62x25mm", weight:3.64, length:838, barrel:266, velocity:490, cap:71, rof:900},
    {name: "PPS-42", year:1942, country:"su", cartridge:"7.62x25mm", weight:2.95, length:820, barrel:254, velocity:500, cap:35, rof:650},
    {name: "PPS-43", year:1943, country:"su", cartridge:"7.62x25mm", weight:3.36, length:820, barrel:254, velocity:500, cap:35, rof:650},
    {name: "Konepistooli M44", year:1944, country:"fi", cartridge:"9x19mm", weight:2.8, length:825, barrel:247, velocity:395, rof:650, cap:71},
    {name: "Owen", country:"au", year:1941, cartridge:"9x19mm", weight:4.21, length:813, barrel:247, velocity:380, cap:33, rof:700},
    {name: "Austen", country:"au", year:1942, cartridge:"9x19mm", weight:3.98, length:845, barrel:196, velocity:380, cap:28, rof:500},
    {name: "Hyde-Inland M2", country:"us", year:1942, cartridge:".45 ACP", weight:4.19, length:813, barrel:305, velocity:292, cap:35, rof:500},
    {name: "M3", alias:["M3","M3A1","Silenced M3A1"], country:"us", year:[1942,1944,1944], cartridge:".45 ACP", weight:[4.65,3.7,3.7], length:[745,762,762], barrel:203, velocity:[280,275,275], cap:30, rof:450}
  ],
  carbines: [
  ],
  rifles: [
    {name: "Fusil FN-Mauser Mle 1889", year: 1889, country:"be", cartridge:"7.63mm", weight:4.01, length:1270, barrel:780, velocity:610,cap:5}, // Vague information
    {name: "Mannlicher M1895", rof: 35, year:1895, country:"at", cartridge:"8x50mm Mannlicher", weight:3.78, length:1270, barrel: 765, velocity: 619, cap:5}, // Proprietary cartridge
    {name: "Lebel Berthier Mle 1907/15 carbine", year: 1907, country:"fr", cartridge:"8mm", weight: 3.6, length:1306, barrel: 797, velocity: 725, cap:3},
    {name: "Fusil Berthier Mle 1907/15", year:1907, country:"fr", cartridge:"8mm", weight:3.8, length:1306, barrel:797, velocity:640, cap:3},
    {name: "Krag-Jorgensen", year:1886, country:"no", cartridge:".30-40 Krag", weight:3.375, length:986, barrel:520, velocity:580, cap:5},
    {name: "Ross", year:1903, country:"ca", cartridge:".303 British", weight:4.48, length:1285, barrel:765, velocity:792, cap:5},
    {name: "Mousqueton Berthier Mle 1892", year:1916, country:"fr", cartridge:"8mm", weight:3.1, length: 945, barrel:453, velocity:640, cap:5},
    {name: "Fucile Modello 91", country: "it", year:1891, cartridge:"6.5mm", weight: 3.8, length: 1285, barrel:780, velocity: 630, cap: 6},
    {name: "Arisaka Type 30", country:"jp", year:1897, cartridge:"6.5x50mm", weight: 3.95, length:1280, barrel:600, velocity: 765, cap: 5}, // like whatever, Japan
    {name: "Arisaka 38th Year Rifle", country: "jp", year:1905, cartridge:"6.5x50mm", weight:4.2, length:1275, barrel: 797.5, velocity:731, cap:5}, // ^^^
    {name: "Villar-Perosa M1915", alias:["M1915","M1918"], country:"it", year:[1915,1918], cartridge:"9mm Glisenti", weight:[6.5,3.62], length:[558.8,901.69], barrel:320, velocity:[320,301.82], cap: [50,25], rof:350}, // Proprietary round
    {name: "Type 97", country:"jp", year:1937, cartridge:"6.5mm Arisaka", weight:3.95, length:1280, barrel:797,velocity:762.1, cap:5},
    {name: "Type 99", alias:["Type 1","Type 2"], country:"jp", year:1939, cartridge:"7.7mm Arisaka", weight:3.7, length:1120, barrel:657, velocity:730, cap:5},
    {name: "Fusil MAS36", country:"fr", year:1936, cartridge:"7.5x54mm", weight:3.7, length:1020, barrel:575, velocity:853.6, cap:5},
  ],
  lmgs : [
    {name: "Hotchkiss M1922/26", country:"fr", year:1922, cartridge:"6.5mm", weight:9.5, length:1215, barrel:575, velocity:745, cap:25, rof:500},
    {name: "Fusil Mitrailleur Mle 24/29", country:"fr", year:1924, cartridge:"7.5mm M29", weight:9.25, length: 1080, barrel:500, velocity:825, cap:25, rof:500},
    {name: "vz. 30", country:"cz", year:1930, cartridge:"7.92x57mm", weight:9.6, length:1160, barrel:627, velocity:762, cap:30, rof:500},
    {name: "vz. 33", country:"cz", year:1933, cartridge:"7.92x57mm", weight:10.25, length:1150, barrel:635, velocity:730, cap:30, rof:500},
    {name:"Bren", alias:["Mk I","Mk II"], country:"gb", year:[1937,1941], cartridge:".303 British", weight:10.25, length:1150, barrel:[635,625], velocity:730, cap:30, rof: 500},
    {name: "Type 11", country:"jp", year:1922, cartridge:"6.5mm Arisaka",weight:10.2, length:1155, barrel:749, velocity:731, cap:30, rof:400},
    {name: "Type 96", country:"jp", year:1936, cartridge:"6.5mm Arisaka", weight:9, length:1055, barrel:555, velocity:730, cap:30, rof:550},
    {name: "Browning M1919A4", country:"us", year:1936, cartridge:".30-06 Springfield", weight:15.05, length:1041, barrel:610, velocity:853, cap:250, rof:500},
  ],
  gpmgs : [
    {name: "Degtyarev DP", country:"su", year:1928, cartridge:"7.62x54mm", weight:9.12, length:1290, barrel:605, velocity:840, cap:47, rof:475},
    {name: "Fucile Mitragliatore Breda Modello 30", country:"it", year:1930, cartridge:"6.5mm M95", weight:10.2, length:1230, barrel:520, velocity:610, cap:20, rof:475},
    {name: "Solothurn MG30", country:"de", year:1930, cartridge:"7.5mm Schmidt-Rubin", weight:7.7, length:1175, barrel:595, velocity:800, cap:25, rof:500},
    {name: "Maschinengewehr MG13", country:"de", year:1930, cartridge:"7.92x57mm", weight:13.3, length:1443, velocity:890, cap:25, rof:600},
    {name: "Breda Model 30", country:"de", year:1930, cartridge:"6.5mm", weight:10.2, length:1230, barrel:520, velocity:610, cap:20, rof:475},
    {name: "Maschinengewehr MG34", country:"de", year:1936, cartridge:"7.62x57mm", weight:12.1, length:1219, barrel:627, velocity:762, cap:75, rof:850},
    {name: "Vickers-Berthier", country:"gb", year:1940, cartridge:".303 British", weight:9.85, length:1185, barrel:558, velocity:730, cap:225, rof:600}
  ],
  snipers : [
    {name: "Type 99 Sniper", country:"jp", year:1939, cartridge:"7.7mm Arisaka", weight:3.7, length:1120, barrel:657, velocity:730, cap:5},
    {name: "Kar 98K Sniper", country:"de", year:1935, cartridge:"7.92x59mm", weight:3.9, length:1110, barrel:600, velocity:645, cap:5},
    {name: "Springfield Model 1903A3", country:"us", year:1942, cartridge:".30-06", weight:3.94, length:1097, barrel:610, velocity:853, cap:5},
    {name: "Lee-Enfield Rifle No.4 Mk. 1 Sniper", country:"gb", year:1942, cartridge:".303 British", weight:4.11, length:1128, barrel:640, velocity:751, cap:10},
    {name: "De Lisle Carbine", country:"gb", year:1943, cartridge:".45 ACP", weight:3.7, length:960, barrel:210, velocity:260, cap:7},
    {name: "Garand M1C", country:"us", year:1944, cartridge:".30-06 Springfield", weight:4.37, length:1103, barrel:610, velocity:853, cap:8}
  ]
};

//1 oz = 0.0283495kg

var opsandtactics = {
  "pistols" : {
    weapons: [
      {name: "American Derringer COP 4-shot", alias: [".357 Magnum",".38 Special"], cap: 4, weight: 0.79, cartridge:[".357 Magnum",".38 Special"]},
      {name: "Beretta 3032 Tomcat", cartridge:".32 ACP", cap:7, weight: 0.395},
      {name: "Beretta 21 Bobcat", cartridge:".25 ACP", cap:8, weight: 0.312},
      {name: "Bond Arms Texas Defender", alias:[".45 Long Colt",".410 gauge"], cartridge:[".45 Long Colt",".410 gauge"], cap:2, weight:0.566},
      {name: "Cobra Derringer", cap: 2, cartridge:".38 Special", weight:0.395},
      {name: "CZ 92", cap:8, cartridge:".25 ACP", weight:0.283},
      {name: "Davis Derringer", cap:2, cartridge:".22 RL", weight:0.283},
      {name: "Downsizer WSP", alias:["9x19mm",".45 ACP"], cap: 1, weight:0.198, cartridge:["9x19mm",".45 ACP"]},
      {name: "IMI Micro Desert Eagle", cartridge:".380 ACP", cap:6, weight:0.397},
      {name: "Jennings J22", cartridge:".22 LR", cap:6, weight:0.34},
      {name: "Jennings-Bryco Model 38", cartridge:".32 ACP", cap:6, weight:0.34},
      {name: "North American Arms Mini Revolver", cartridge:".22 WMR", cap:5, weight:0.141},
      {name: "Taurus 732 TCP", cartridge:".32 ACP", weight:0.283, cap:6},
      {name: "Taurus P22", cartridge:".22 LR", weight:0.34, cap:8},
      {name: "Beretta Px4 Storm", alias:["Standard","Compact", "Subcompact"], cartridge:"9x19mm", weight:[0.96,0.77,0.74], cap:[15,15,13], barrel:102},
      {name: "Colt Detective Special", cartridge:".38 Special", cap:6, weight: 0.595},
      {name: "Hi-Point Model C", cartridge:"9x19mm", cap:8, weight: 0.822},
      {name: "Hi-Point Model 40W", cartridge:".40 S&W", cap:8, weight:0.99},
      {name: "Jennings JA-NINE", cartridge:"9x19mm", cap:12, weight:0.85},
      {name: "Kahr K9", cartridge:"9x19mm", cap:7, weight:0.708},
      {name: "Ruger SP101", alias: [".357 Magnum",".38 Special"], cartridge:".357 Magnum", cap:5, weight:0.793},
      {name: "Colt Gov't 70", cartridge:".45 ACP", cap:7, weight: 1.11},
      {name: "Taurus Judge", alias:[".357 Magnum",".38 Special"], cartridge:[".357 Magnum",".38 Special"], weight:0.822},
      {name: "Taurus Model 65", alias:[".357 Magnum",".38 Special"], cartridge:[".357 Magnum",".38 Special"], weight:1.01},
      {name: "Benelli MP90S Match", cartridge:".22 LR", cap:5, weight:1.11},
      {name: "Beretta U22 Neos", cartridge:".22 LR", cap:10, weight:0.99},
      {name: "Hamerelli 150", cartridge:".22 LR", cap:1, weight:1.13},
      {name: "H&K MK23 SOCOM", cartridge:".45 ACP", cap:12, weight:1.36},
      {name: "Kel-Tec PMR-30", cartridge:".22 WMR", cap:30, weight:0.396},
      {name: "LAR Grizzly Mk. V", cartridge:".50 AE", cap:7, weight:1.42},
      {name: "Rossi Ranch Hand Lever Action", cartridge:[".38 Special",".44 Magnum"], cap: 6, weight:1.81},
      {name: "Ruger Mark II MK4", cartridge:".22 LR", cap:10, weight:1.30},
      {name: "Ruger Redhawk", cartridge:[".44 Magnum",".44 Special"], cap:6, weight:1.44},
      {name: "Taurus Raging Bull", cartridge:[".454 Casul",".45 Long Colt"], cap:5, weight:1.44},
    ]
  }
};

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
      barrel: [11.4],
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
    {name: "Knight Suppressed Revolver", cartridge: "5.56mm", cap: 6, country: "us"},
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
    {name: "OTs-23 Drotik", cartridge: "5.45mm", cap: 24, country: "ru"},
    {name: "OTs-27 Berdysh", cartridge: ["9x18mm","9x19mm"], cap: 18, country: "ru"},
    {name: "OTs-33 Pernach", cartridge: "9x18mm", cap: 27, country: "ru"},
    {name: "P9 Gurza", cartridge: "9x21mm Russian", cap: 18, country: "ru"},
    {name: "P96", cartridge: "9x18mm", cap: 18, country: "ru"},
    {name: "P96S", cartridge: ".380 ACP", cap: 10, country: "ru"},
    {name: "PM Makarov", cartridge: "9x18mm", cap: 8, country: "ru"},
    {name: "PMm Makarov", cartridge: "9x18mm", cap: 12, country: "ru"},
    {name: "PSM", cartridge: "5.45mm", cap: 8, country: "ru"},
    {name: "PSS Vul", cartridge: "7.62mm", cap: 6, country: "ru"},
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
    {name: "Mekanika Uru", alias: ["Mekanika Uru","Mekanika Uru Carbine"], cartridge:"9x19mm", cap: 30, country: "br"},
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
    {name: "Sa 58/98 Bulldog", alias:["Sa 58/98","Sa 58/98S"], cartridge: "9x19mm", cap: 30, country: "cz"},
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
    {name: "vz. 52", cartridge:"7.62x39mm", cap:30, country: "cz"},
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
      shortname: "handguns",
      name: "Handgun",
      weapons: [
        {name: "AMT Backup", alias:[".45 ACP","9x19mm",".38 Special"], cartridge: [".45 ACP","9x19mm",".38 Special"], rof: 40, weight: 0.51, length: 130, sr: 120, cap: [5,6,5], country: "us", year:1988},
        {name: "AMT Longslide Hardballer", cartridge: ".45 ACP", rof: 40, velocity: 305, weight: 1.306, length: 267, sr: 230, cap: 7, country: "us", year: 1980},
        {name: "APS Stechkin", cartridge: "9x18mm", rof: 750, sr: 190, length: 225, weight: 1.22, velocity: 340, cap: 20, country: "su", year: 1951},
        {name: "Astra A-100", alias: ["9x19mm",".45 ACP",".40 S&W"], cartridge: ["9x19mm",".45 ACP",".40 S&W"], rof: 40, sr: 150, length: 190, weight: 0.96, cap: [17,9,10], country: "es", year:1990},
        {name: "Benelli B76", cartridge: "9x19mm", rof: 40, cap: 8, weight: 0.97, length: 205, sr: 135, country: "it", year:1976},
        {name: "Beretta 93R", cartridge: "9x19mm", rof: 750, velocity: 375, weightMin: 1.160, weightMax: 1.556, length: 240, sr: 160, cap: 15, wiki: "Beretta_93R", country: "it", description: "The Beretta 93R is a selective fire machine pistol, designed and manufactured by Italian firearms manufacturer Beretta in the 1970s for police and military use, that is derived from their semi-automatic Beretta 92. The 'R' stands for Raffica, which is Italian for 'volley', 'flurry' or 'burst'. (Wikipedia)", year:1979},
        {name: "Beretta M1951", cartridge: "9x19mm", rof: 32, velocity: 350, weightMin: 0.813, weightMax: 0.966, length: 203, barrel: 114, sr: 140, cap: 8, country: "it", year:1949},
        {name: "Beretta Model 1915", rof: 30, year: 1915, cartridge:".32 ACP", weight: 0.57, length: 149, sr:118, barrel:84, velocity:266, cap:7, country:"it"},
        {name: "Beretta Model 81", cap: 12, cartridge: ".32 ACP", rof: 36, velocity: 300, weightMin: 0.616, weightMax: 0.765, length: 172, barrel: 97, sr: 124, cost: 500, country: "it", year: 1976},
        {name: "Beretta Model 84", cap: 13, cartridge: ".380 ACP", rof: 36, velocity: 280, weightMin: 0.606, weightMax: 0.786, length: 172, barrel: 97, sr: 124, cost: 500, country: "it", year:1976},
        {name: "Beretta Model 92", alias:["M92SB, M92SB-C"], cap: [15,13], cartridge: "9x19mm", rof: [45,39], velocity: 390, weightMin: 0.872, weightMax: 1.158, length: [217,197], barrel: [125,109], sr: [155,146], cost: 650, country: "it", year: 1972},
        {name: "Beretta Model 92F", alias:["92F", "92F-C"], cap: [15,13], cartridge: "9x19mm", rof: [45,39], velocity: 390, weightMin: [0.859,0.801], weightMax: [1.145,1.056], length: [217,197], barrel: [125,109], sr: [155,146], cost: 700, country: "it",year:1985},
        {name: "Browning Hi-Power", cartridge: "9x19mm", velocity: 350, weightMin: 0.810, weightMax: 0.986, rof: 40, length: 200, barrel: 118, sr: 159, cap: 13, country: "us", wiki:"Browning_Hi-Power", year:1935},
        {name: "Browning Model 1900", rof: 30, cartridge:".32 ACP", year: 1900, country:"be", weight: 0.62, barrel: 102, length:163, sr: 120, velocity: 259, cap: 7, wiki:"FN_M1900"},
        {name: "Colt M1911", alias: ["M1911","M1911A1"], cartridge: ".45 ACP", rof: 35, velocity: [252,262], cap: 7, weightMin: 1.049, weightMax: 1.271, length: [219,216], barrel: 127, sr: 165, cost: 400, country: "us", year:[1911,1924]},
        {name: "Colt M1911 Ace", cartridge: ".45 ACP", year:1911, country:"us", rof:35, weight: 1.1, length: 216, barrel: 127, sr: 165, velocity:262, cap:7},
        {name: "Colt Model 1903 Pocket Hammerless", alias: ["M1903","M1908"], cartridge: [".32 ACP",".380 ACP"], year: 1903, country:"be", weight:0.9, length: 205, sr:140, barrel:107, velocity: [259,300], cap: [8.7]},
        {name: 'Colt Python', alias: ['6" barrel','2.5" barrel','4" barrel','8" barrel'], cartridge: ".357 Magnum", cap: 6, rof: 40, length: [245,236,240,250], sr: [169,129,149,178], weight: [1.3,1.1,1.2,1.4], velocity: [519,336,460,573], country: "us", year:1955},
        {name: "CZ-75, CZ-85", cartridge: "9x19mm", velocity: 369, weightMin: 0.98, weightMax: 1.180, rof: 40, length: 203, barrel:120, sr: 160, cap: 15, country: "cz", year:1975},
        {name: "Detonics Combat Master", cartridge: ".45 ACP", rof: 30, cap: 7, velocity: 237, weightMin: 0.820, weightMax: 1.010, length: 171, sr: 101, cost: 700, country: "us", year:1975},
        {name: "Dreyse M1907", cartridge:".32 ACP", rof: 30, year: 1907, weight:0.71, length: 160, sr: 125, barrel: 92, velocity: 300, cap: 7, country:"de"},
        {
          name: "FN BDA",
          alias:["FN BDA-9S","FN BDA-9C"],
          cartridge: "9x19mm",
          velocity: [356,350],
          weightMin: [0.850,0.708],
          weightMax: [1.088,0.847],
          rof: 40, length: [200,173],
          barrel: [118,96],
          sr: [176,152],
          cap: [14,7],
          wiki: "Browning_BDA",
          country: "be",
          year: 1983
        },
        {name: "FN Five-seveN", cartridge: "5.7x28mm", velocity: 650, length: 208, sr: 178, weight: 0.62, rof: 40, cap: 20, country: "be", year:1998},
        {name: "FN FNP", alias: ["FN FP-9","FN FP-9M","FN FNP-40","FN FNP-45","FN FNP-357"], cartridge: ["9x19mm","9x19mm",".40 S&W",".45 ACP",".357 SIG"], weight: [0.7,0.703,0.757,0.919,0.7], rof: 40, length: [188,179,188,199,188], cap: [16,15,14,15,15], sr: [160,150,160,170,160], barrel: [4,3.791,4,4.5,4], country: "be", year:2006},
        {name: "FN Model 1910", rof: 30, alias: [".380 ACP",".32 ACP"], cartridge: [".380 ACP",".32 ACP"], year: 1910, country:"be", weight: 0.57, length: 154, sr: 138, barrel: 88.5, velocity: [299,310], cap: [7,9]},
        {name: "Frommer Stop", year:1912, rof: 30, cartridge:[".32 ACP",".380 ACP"], country:"hu", weight:0.61, length:165, sr: 136, barrel:95, velocity: [280,300], cap: 7},
        {name: "H&K P7", alias:["H&K P7K3","H&K P7M13","H&K P7M8","H&K P7PT8"], cartridge: [".32 ACP","9x19mm","9x19mm","9x19mm"], rof: [24,39,24,24], velocity: [291,351,351,400], cap: [8,13,8,8], weightMin: [0.748,0.850,0.794,0.720], weightMax: [0.850,1.131,0.959,0.818], length: [160,175,171,170], barrel: [97,105,105,105], sr: [139,148,148,148], cost: [600,1100,900,900], country: "de", year: 1976},
        {name: "H&K P9S", alias: ["9x19mm",".45 ACP"], cartridge: ["9x19mm",".45 ACP"], rof: 27, velocity: [350,260], cap: [9,7], weightMin: [0.789,0.848], weightMax: [1.014,1.030], length: 192, sr: 147, cost: 1100, country: "de", year:1969},
        {name: "H&K USP", alias: ["USP Compact","USP Tactical"], cartridge: ".45 ACP", rof: 40, length: [180,219], sr: [148,183], weight: [0.725,0.861], cap: 8, country: "de", year:1993},
        {name: "H&K VP70M, VP70Z", cartridge: "9x19mm", rof: 360, velocity: 360, cap: 18, weightMin: 0.816, weightMax: 1.131, length: 203, barrel: 116, sr: 175, country: "de", year:1970},
        {name: "IMI Desert Eagle", alias: [".50 Action Express", ".44 Magnum"], cartridge: [".50 Action Express",".44 Magnum"], length: 273, sr: 219, rof: [24,27], velocity: [443,376], weightMin: [1.780,1.653], weightMax: [2.091,1.913], cap: [8,9], cost: [700,600], country :"il", year:1982},
        {name: "Langenhan", cartridge:".32 ACP", year:1914, country:"de", weight:0.77, length:165, sr: 132, barrel:101.5, velocity: 282, cap: 8, rof:30},
        {name: "Luger", alias: ["Luger","Artillery Luger"], rof: 30, cartridge:"9x19mm", year:[1908,1913], country:"de",weight:0.96, barrel: [127,203], length:[222,298], sr:[200,277], velocity:[351,390], cap:[8,32]},
        {name: "MAB PA-15", cartridge: "9x19mm", velocity: 350, weightMin: 1.090, weightMax: 1.365, rof: 40, length: 203, barrel: 114, sr: 158, cap: 15, country: "fr", year:1975},
        {name: "Makarov", cartridge: "9x18mm", length: 162, sr: 129, velocity: 315, weight: 0.73, rof: 40, cap: 8, country: "su", year:1951},
        {name: "Manurhin MR73", alias: ["10.2cm barrel","13.2cm barrel","15.2cm barrel","20.3cm barrel","7.6cm barrel"], cartridge:".357 Magnum", rof:24, cap: 6, velocity: [410,428,468,504,385], weightMin: [0.95,1.05,1.07,1.17,0.89], weightMax: [1.046,1.146,1.166,1.266,0.986], length: [233,264,283,334,205], barrel: [102,132,152,203,76], sr: [142,172,192,243,117], country: "fr", year:1973},
        {name: "Mk. 22 mod 0", cartridge: "9x19mm", length: 216, sr: 134, velocity: 274, weightMin: 0.737, weightMax: 0.954, cap: 8, rof: 40, country: "us", year:1967},
        {name: "MP-443 Grach", cartridge: "9x19mm", velocity: 450, rof: 40, length: 198, sr: 166, weightMin: 0.950, weightMax: 1.150, cap: 17, country: "ru", year: 2003},
        {name: "PB/6P9", cartridge: "9x18mm", rof: 24, velocity: 290, weightMin: 0.972, weightMax: 1.098, cap: 8, length: 297, sr: 130, country: "su", year:1967},
        {name: "Ruger GS-32N", cartridge: ".357 Magnum", rof: 24, velocity: 385, cap: 6, weightMin: 0.964, weightMax: 1.060, length: 197, sr: 150, cost: 300, country: "us", year:1971},
        {name: "S&W ASP", cartridge: "9x19mm", rof: 35, velocity: 347, cap: 7, weightMin: 0.624, weightMax: 0.765, length: 171, sr: 51, cost: 1100, country: "us", year:1970},
        {name: "S&W Model 19", alias : ["10.2cm barrel","15.3cm barrel","6.6cm barrel"], cartridge: ".357 Magnum", velocity: [368,387,331], length: [241,292,190], weightMin: [0.992,1.152,0.879], weightMax: [1.088,1.248,0.975],  sr: [149,200,113], cap: 6, rof: 24, cost: 350, country: "us", year: 1957},
        {name: "S&W Model 29", alias: ["10.2cm barrel","16.5cm barrel","21.3cm barrel","29 cm barrel"], cartridge:".44 Magnum", velocity: [425,448,459,475], length: [239,302,349,410], sr: [117,180,228,305], weightMin: [1.219,1.332,1.460,1.644], weightMax: [1.365,1.478,1.606,1.790], cap: 6, rof: 24, country: "us", year:1955},
        {name: "S&W Model 439", cartridge: "9x19mm", length: 194, sr: 141, weightMin: 0.779, weightMax: 0.946, cap: 8, rof: 24, velocity: 356, cost: 450, country: "us", year:1980},
        {name: "S&W Model 459", cartridge: "9x19mm", length: 194, sr: 141, weightMin: 0.947, weightMax: 1.021, cap: 14, rof: 45, velocity: 355, cost: 500, country: "us", year:1980},
        {name: "S&W Model 469", cartridge: "9x19mm", rof: 35, velocity: 360, cap: 12, weightMin: 0.666, weightMax: 0.881, length: 149, sr: 130, cost: 400, country: "us", year:1983},
        {name: "S&W Model 645", cartridge: ".45 ACP", rof: 24, velocity: 259, weightMin: 0.974, weightMax:1.238, cap: 8, length: 221, sr: 170, cost: 550, country: "us", year:1985},
        {
          name: "SIG P220",
          cartridge: [".357 SIG",".45 ACP","9x19mm"],
          rof: 40,
          velocity: [355,245,345],
          weightMin: [0.750,0.730,0.750],
          weightMax: [0.940,0.951, 0.918],
          length: 198,
          barrel: 112,
          sr: 160,
          cap:[9,7,9],
          cost: 700,
          country: "ch",
          year: 1975
        },
        {name: "SIG P226", cartridge: "9x19mm", rof: 40, velocity: 345, weightMin: 0.750, weightMax: 1.025, length: 196, sr: 160, cost: 750, cap: 15, country: "ch", year:1984},
        {name: "SIG P230", alias: [".32 ACP",".380 ACP","9x18mm"], cartridge: [".32 ACP",".380 ACP","9x18mm"], rof: 40, cost: 500, length: 168, sr: 120, velocity: [300,300,320], weightMin: [0.465,0.460,0.690], weightMax: [0.578,0.568,0.801], cap: [8,7,7], country: "ch", year:1977},
        {name: "Steyr GB", cartridge: "9x19mm", velocity: 336, weightMin: 0.845, weightMax: 1.190, rof: 40, length: 216, sr: 164, cap: 18, barrel: 136, country: "at", wiki: "Steyr GB", year:1981},
        {name: "Steyr-Hahn", cartridge:"9x19mm", year: 1911, country:"at", rof: 30, weight: 1.02, barrel: 128, sr: 165, length:216, cap:8, wiki:"Steyr_M1912"},
        {name: "Walther P1, Walther P38", cartridge: "9x19mm", rof: 32, velocity: 369, cap: 8, weightMin: 0.772, weightMax: 0.970, length: 218, barrel: 124, sr: 180, cost: 900, country: "de", year:1938},
        {name: "Walther P5", cartridge: "9x19mm", rof: 24, velocity: 346, cap: 8, weightMin: 0.795, weightMax: 0.993, length: 180, barrel: 90, sr: 134, cost: 1100, country: "de", year:1977},
        {name: "Walther P99", cartridge: "9x19mm", rof: 40, length: 180, sr: 155, velocity: 408, weight: 0.68, cap: 15, country: "de", year:1997},
        {name: "Walther PP", cartridge: ".32 ACP", velocity: 291, rof: 30, cap: 7, weightMin: 0.690, weightMax: 0.690, length: 173, barrel:99, sr: 113, cost: 600, country: "de", year:1929},
        {name: "Walther PPK", cartridge: ".32 ACP", rof: 30, velocity: 291, cap: 6, weightMin: 0.590, weightMax: 0.792, length: 155, barrel: 84, sr: 110, cost: 500, country: "de", year:1931},
        {name: "UZI Pistol", cartridge:"9x19mm", rof:40, velocity:350, cap:20, weightMin:1.89, weightMax:2.29, length:240, barrel:115, sr:175, cost:600, country:"il", year:1984}
      ]
    },
    {
      shortname: "smgs",
      name: "Submachine gun",
      weapons : [
        {name: "AEK-919K 'Kashtan'", cartridge: "9x18mm", weight: 1.65, length: 325, rof: 900, cap: 30, sr: 150, country: "su", year:1990},
        {name: "Agram 2000", cartridge: "9x19mm", cap:32, weight: 1.8, length: 482, rof: 800, sr: 372, country: "cr", year:2000},
        {name: "Arsenal Shipka", alias: ["9x18mm","9x19mm"], cartridge: ["9x18mm","9x19mm"], rof: 700, weight: 2.2, length: 338, sr: 242, cap: [32,25], country: "bg", year:1996},
        {name: "Beretta MX4", cartridge: "9x19mm", weight: 2.48, rof: 700, length: 647, velocity: 390, cap: 30, sr: 320, country: "it", year:2003},
        {name: "Brugger & Thomet MP9", cartridge:"9x19mm", weight: 1.4, rof: 900, length: 303, velocity: 400, cap: 30, sr: 190, country: "ch", year:2004, wiki:"Brügger_%26_Thomet_MP9"},
        {name: "Carl Gustav m/45", cartridge:"9x19mm", weightMin: 3.900, weightMax: 4.559, rof: 600, velocity: 370, length: 552, sr: 359, cap:36, country: "se", year:1945},
        {name: "Colt 9mm", alias: ["Colt 9mm","Colt 9mm Suppressed"], cartridge: "9x19mm", rof: 900, velocity: [397,285], cap: 32, weightMin: [2.608,3.062], weightMax: [3.219,3.628], length: [651,697], sr: 368, country: "us", year:1982},
        {name: "CS/LS2", cartridge: "9x19mm", rof: 400, velocity: 321, weight: 2.0, length: 450, cap: 30, sr: 165, country: "cn", year:2006},
        {name: "CZ Skorpion EVO 3", cartridge: "9x19mm", rof: 1150, velocity: 370, cap: 30, weightMin: 2.72, weightMax: 3.26, length: 410, sr: 240, country: "cz", year:2009},
        {name: "CZW 438 M9", cartridge:"9x19mm", weight:2.7, length:445, sr:309, cap:30, rof:780, year: 2002, country: "cz"},
        {name: "Daewoo K7", cartridge: "9x19mm", rof: 1100, cap: 30, weight: 4, length: 620, sr: 360, velocity: 285, country : "kr", year:2001},
        {name: "Dux", alias: ["Model 53","Model 59"], cartridge:"9x19mm", weight:[3.5,3], rof: [500,550], length: [615,580], sr: 360, velocity:390, cap:[50,32], year:[1953,1959], country: "de"},
        {name: "F1A1", cartridge: "9x19mm", weight: 3.26, length: 715, rof: 600, sr: 212, cap:32, country:"au", year:1963},
        {name: "FAMAE SAF", cartridge: "9x19mm", alias: ["SAF", "SAF Silencada"], weight: 2.7, length: 410, rof: 1200, sr:328, cap:30, country:"cl", year: 1993},
        {name: "Floro MK-9", cartridge:"9x19mm", cap:32, rof: 825, velocity: 400, length: 46, weightMin:3.18, weightMax: 3.2, sr: 233, country: "ph", year:2001},
        {name: "ARES FMG", cartridge: "9x19mm", rof: 650, velocity: 378, cap: 25, weightMin: 2.250, weightMax: 2.854, length: 262, sr: 100, country: "us", year:1984},
        {name: "FMK-3 Mod 2", cartridge: "9x19mm", cap:40, country: "ar", weight: 3.4, length: 523, rof: 650, sr: 360, year: 1973},
        {name: "FN P90", cartridge: "5.7x28mm", rof: 950, velocity: 735, weight: 2.6, length:415, sr: 370, cap: 40, country: "be", year:1991},
        {name: "Franchi LF-57", cartridge:"9x19mm", cap:40, country: "it", weight: 3.17, length: 419, rof: 500, sr: 342, year: 1956},
        {name: "H&K MP2000", cartridge: "9x19mm", rof: 875, velocity: 366, weightMin: 2.781, weightMax: 3.221, length: 387, sr: 292, cap: 30, country: "de", year:1987},
        {name: "H&K MP5 SD", alias: ["MP5 SD2, MP5 SD3, MP5 SD4, MP5 SD5"], rof: 800, velocity: 285, weightMin: [3.1,3.4,3.1,3.4], weightMax: [3.63,3.93,3.63,3.93], length: [780,610,780,610], sr: 340, cap: 30, country: "de", year:1970},
        {name: "H&K MP5", alias: ["MP5A2","MP5A3","MP5A4","MP5A5","MP5/10","MP5/40"], cartridge:["9x19mm","9x19mm","9x19mm","9x19mm","10mm Auto",".40 S&W"], rof: 650, velocity: [400,400,400,400,425,315], weightMin: [2.54,2.88,2.54,2.88,2.7,2.7], weightMax: [2.71,4.104,2.71,4.104,2.7,2.7], length:[680,490,680,490,490,490],sr:340,cap:30, country:"de",year:1970},
        {name: "H&K MP5K, H&K MP5KA4", cartridge: "9x19mm", rof: 900, velocity: 375, weightMin: 2.0, weightMax: 2.3, length: 325, sr: 260, cap: 15, country: "de", year:1991},
        {name: "H&K MP5KA1, H&K MP5KA5", cartridge: "9x19mm", rof: 900, velocity: 375, weightMin: 2.0, weightMax: 2.3, length: 325, sr: 190, cap: 15, country: "de", year:1991},
        {name: "H&K MP7", cartridge: "4.6x30mm", rof: 900, velocity: 715, weight: 1.2, length:505, sr: 143, cap: 50, country: "de", year:2001},
        {name: "H&K UMP-45", alias:["UMP-45","UMP-9"], cartridge: [".45 ACP","9x19mm"], length: 450, sr: 325, rof: 650, weight: 2.65, cap: 30, country: "de",year:1999},
        {name: "Ingram MAC-10", alias: ["9x19mm",".45 ACP"], cartridge: ["9x19mm",".45 ACP"], rof: [1090,1145], velocity: [366,280], cap: [32,30], weightMin: 2.840, weightMax: 3.424, length: 269, sr: 210, cost: 300, country: "us", year:1970},
        {name: "Ingram MAC-11", alias: [".380 ACP", "9x19mm"], cartridge: [".380 ACP","9x19mm"], rof: 1200, velocity: [293,366], cap: 32, weightMin: [1.59,1.701], weightMax: [2.100,2.179], length: [248,330], sr: [176,230], country: "us", year:1972},
        {name: "Intratec TEC-9", cartridge:"9x19mm", cap: 20, country: "us", velocity: 360, length: 317, sr: 271, weight: 1.4, rof:850, year: 1985},
        {name: "Jatimatic", cartridge: "9x19mm", rof: 625, velocity: 411, weightMin: 1.650, weightMax: 2.280, length: 375, sr: 290, cap: 40, country: "fi", year:1984},
        {name: "KRISS Vector", cartridge: ".45 ACP", rof: 1200, sr: 216, length: 620, velocity: 280, weight: 2.7, cap: 25, country: "us", year:2009},
        {name: "LaFrance M16K-45", cartridge:".45 ACP", rof: 625, velocity: 260, weight: 3.9, length: 676, sr: 350, cap:30, country:"us", year:1982},
        {name: "Lusa A2", cartridge:"9x19mm", cap: 30, country: "pt", rof: 900, weight: 2.8, length: 451, sr: 285, year: 1983, wiki: "Lusa_submachine_gun"},
        {name: "M3", alias:["M3","M3A1"], cartridge: ".45 ACP", rof: 450, velocity: 280, cap: 30, weight: [3.70,3.61], length: 579, sr: 276, country: "us", wiki:"M3_submachine_gun", year:1942},
        {
          name: "Madsen",
          alias: ["Madsen M1946", "Madsen M1950", "Madsen M1953"],
          cartridge:"9x19mm",
          weight: [3.15,3.15,3.2],
          length: [550,530,530],
          rof: [480, 550,550],
          sr: 342,
          cap: 32,
          country: "dk",
          year: [1946,1950,1953],
          wiki:"Madsen_M-50"
        },
        {name: "MAT-49", cartridge: "9x19mm", rof: 600, velocity: 354, weightMin: 3.640, weightMax : 4.760, length: 460, sr: 378, cap: 32, country: "fr", wiki:"MAT-49",year:1949},
        {name: "Micro Uzi", cartridge: "9x19mm", rof: 1250, velocity: 350, weightMin: 1.95, weightMax: 2.350, length: 267, sr: 175, cap: 25, country: "il", year:1986, wiki:"Uzi"},
        {name: "Milcor BXP", cartridge: "9x19mm", rof: 1000, cap: 32, weight: 2.5, length: 387, sr: 100, country: "za", wiki:"Milcor_BXP",year:1984},
        {name: "Minebea PM-9", cartridge: "9x19mm", weight: 2.8, length: 399, rof: 1100, cap: 25, sr: 275, country: "jp",year:1990,cost:2540,wiki:"Minebea_PM-9"},
        {name: "Mini UZI", cartridge: "9x19mm", rof: 950, velocity: 350, weightMin: 2.7, weightMax: 3.1, length: 360, sr: 235, cap: 20, country: "il", wiki:"Uzi", year:1980},
        {name: "MP 18", cartridge:"9x19mm", rof:500, velocity: 380, cap:32, weightMin:4.18, weightMax:5, length: 832, sr: 383, country: "de", year:1918, wiki:"MP_18"},
        {name: "MP 40", cartridge:"9x19mm", rof: 525, velocity: 400, cap:32, weight:3.97, length:630, sr: 404, country:"de", year:1938, wiki:"MP_40"},
        {name: "PM-12S", cartridge: "9x19mm", rof: 550, velocity: 381, weightMin: 3.240, weightMax: 3.850, length: 418, sr: 285, cap: 32, country: "it", year:1959,wiki:"Beretta_M12"},
        {name: "PM-63 RAK", cartridge:"9x18mm", velocity: 320, weight:1.6, length:583, cap:25, rof:650, sr: 153, country: "pl", year:1964, wiki:"PM-63_RAK"},
        {name: "PP-19 Bizon", cartridge: "9x18mm", rof: 650, length: 425, weight: 2.1, velocity: 320, sr: 220, cap: 64, country: "ru", year:1996, wiki:"Bizon_SMG"},
        {name: "PP-2000", cartridge: "9x19mm", weight: 1.4, length:340, rof: 600, cap: 20, sr: 245, country: "ru", wiki:"PP-2000", year:2004},
        {name: "PP-90M1", cartridge: "9x19mm", weight: 1.7, length: 424, velocity: 320, rof: 800, cap: 64, sr: 240, country: "ru", wiki:"PP-90M1", year:1990},
        {name: "QCW-05", cartridge: "5.8x21mm", length: 500, weight: 2.2, velocity: 321, rof: 900, sr: 180, cap: 50, country: "cn", wiki:"QCW-05",year:2005},
        {name: "S&W M76", cartridge: "9x19mm", rof: 750, velocity: 381, cap: 36, weightMin: 3.289, weightMax: 3.969, length: 514, sr: 287, country: "us", wiki:"Smith_%26_Wesson_M76", year:1967},
        {name: "Sa vz. 23", alias: ["Sa vz. 23","Sa vz. 24","Sa vz. 25","Sa vz. 26"], cartridge:["9x19mm","7.62x25mm","9x19mm","7.62x25mm"], weight: [3.5,3.5,3.27,3.27], length: [686,445,686,445], rof: 650, cap: [40,32,40,32], sr: 288, country: "cz", year:[1948,1948,1952,1952], wiki: "Sa_vz._23"},
        {
          name: "SIG-Sauer MPX",
          alias: ["MPX-P","MPX-K","MPX-SD"],
          cartridge: "9x19mm",
          rof: 850,
          weight: [2.1,1.9,2.0,2.9],
          velocity: [380,355,380,285],
          length: [460,338,409,688],
          cap: 30,
          sr: [270,270,218,371],
          country: "ch",
          wiki:"SIG-Sauer_MPX",
          year:2014
        },
        {
          name: "Skorpion",
          alias: ["vz. 61","vz. 63", "vz. 64","vz. 68"],
          length:269,
          sr: 148,
          weight:1.3,
          cartridge: [".32 ACP",".380 ACP","9x18mm","9x19mm"],
          velocity: [317,292,320,320],
          rof: [840,900,900,900],
          cap: 20,
          country: "cz",
          year:[1961,1963,1964,1968],
          wiki:"Škorpion_vz._61"
        },
        {name: "Spectre M-4", cartridge: "9x19mm", rof: 850, velocity: 399, weightMin: 2.903, weightMax: 3.793, length: 350, sr: 309, cap: 50, country: "it", year:1983},
        {name: "ST Kinetics CPW", alias:["9x19mm","4.6x30mm","5.7x28mm"], cartridge: ["9x19mm","4.6x30mm","5.7x28mm"], weight:1.5, cap:30, rof: 1000, length: 350, sr:257, country: "sg", year:2007},
        {name: "Sten Mk. II", cartridge: "9x19mm", weight:3.2, cap: 32, rof: 500, velocity:365, length:762, sr: 236, country:"gb", wiki:"Sten", year:1941},
        {name: "Sterling", alias: ["L2A3","L34A1","Mk. 7"], cartridge: "9x19mm", rof: [550,550,560], velocity: [390,307,365], cap: 68, weight:[2.7,2.9,2.2], length: [483,660,391], sr: [410,502,321], country: "gb", wiki:"Sterling_submachine_gun", year:1944},
        {name: "Steyr AUG Para", cartridge: "9x19mm", rof: 700, velocity: 400, weightMin:3.300, weightMax: 3.921, length: 665, sr: 192, cap: 32, country: "at", wiki: "Steyr_AUG", year: 1988},
        {name: "Steyr MPi 69", alias:["MPi 69","MPi 81"], cartridge: "9x19mm", rof: [550,700], velocity: 381, weightMin: 2.930, weightMax: 3.551, length: 465, sr: 326, cap: 32, country: "at", wiki:"Steyr_MPi_69", year:[1969,1981]},
        {name: "Steyr TMP", cartridge:  "9x19mm", rof: 875, velocity: 400, weight: 1.3, length: 282, sr: 188, cap: 30, country: "at", wiki:"Steyr_TMP", year:1989},
        {name: "Uzi", cartridge: "9x19mm", rof: 600, velocity: 400, cap: 32, weightMin: 3.5, weightMax: 4.104, sr: 309, length: 470, country: "il", year:1953},
        {name: "Viking", cartridge: "9x19mm", rof: 650, velocity: 400, cap: 36, weightMin: 2.722, weightMax: 3.352, length: 387, sr: 258, country: "us", year:1984},
        {name: "Walther MP-K, MP-L", cartridge: "9x19mm", rof: 550, velocity: 356, weightMin: 2.8, weightMax: 3.384, length: 368, sr: 270, cap: 32, country: "de", year:1963},
        {name: "Star Model Z-62, Z-70/B", cartridge: "9x19mm", rof: 550, velocity: 381, cap: 20, weightMin: 2.870, weightMax: 3.430, length: 480, sr: 370, country: "es", wiki:"Star_Model_Z62", year:1962},
        {name: "Z-84", alias: ["Short","Long"], cartridge: "9x19mm", rof: 600, velocity: 362, cap: 30, weightMin: [3.100,3.150], weightMax: [3.700,3.750], length: [410,465], sr: 330, country: "es", year: 1984, wiki:"Star_Model_Z84"},
      ]
    },
    {
      shortname: "carbines",
      name: "Carbine",
      weapons: [
        {name: "9A-91", cartridge: "9x39mm", rof: 700, velocity: 270, weight: 2.1, length: 605, sr: 134, cap: 30, country: "ru", year:1993, wiki:"9A-91"},
        {name: "AAC Honey Badger PDW", alias: ["supersonic","subsonic"], cartridge: ['300 AAC Blackout, supersonic','300 AAC Blackout, subsonic'], velocity: [640,300], rof: 800, length: 740, sr: 312, weight: 2.9, cap: 30, country: "us", year:2011, wiki:"AAC_Honey_Badger_PDW"},
        {name: "AC-556", alias: ["AC-556","AC-556K"], cartridge: "5.56x45mm", rof: 750, velocity: [990,828], weightMin: [3.147,2.892], weightMax: [3.731,3.476], length: [946,584], sr: [445,363], cap: [30,20], country: "us", wiki:"Ruger_Mini-14#AC-556", year:1973},
        {name: "ACE 21", cartridge: "5.56x45mm", rof: 700, cap: 35, velocity: 710, weight: 2.8, length: 650, sr: 292.5, country: "il", wiki:"Galil_ACE", year:2010},
        {name: "AK-105", cartridge: "5.45x39mm", rof: 600, velocity: 735, weightMin: 3.2, weightMax: 3.751, length: 586, sr: 240, cap: 30, country: "ru", wiki:"AK-105", year: 2001},
        {name: "AKS-74U", cartridge: "5.45x39mm", rof: 700, velocity: 735, weightMin: 2.5, weightMax: 3.051, length: 420, sr: 240, cap: 30, country: "su", year:1974, wiki:"AK-74#AKS-74U"},
        {name: "Ak 5C", cartridge: "5.56x45mm", rof: 650, velocity: 870, weightMin: 4.0, weightMax: 4.5, length: 852, sr: 513, cap: 30, country: "se", wiki:"Ak_5", year:2006},
        {name: "AMD 65", cartridge: "7.62x39mm", rof: 650, cap: 30, weight: 3.8, length: 648, sr: 300, country:"hu", year:1965, wiki:"AMD_65"},
        {name: "Beretta SC-70 Short", cartridge: "5.56x45mm", rof: 600, velocity: 885, weightMin: 3.445, weightMax: 4.066, length: 596, sr: 455, cap: 30, country: "it", year:1985, wiki:"Beretta_AR70/90"},
        {name: "Beretta SCS-70/90", cartridge: "5.56x45mm", rof: 680, velocity: 841, weightMin: 3.790, weightMax: 4.273, length: 647, sr: 514, cap: 30, country: "it", year:1985, wiki:"Beretta_AR70/90"},
        {name: "Barrett M468", cartridge:"6.8 SPC", rof:750, cost: 2700, velocity:810, length: 898.5, sr: 453, weight: 3.31, country: "us", cap: 28, year:2006},
        {name: 'Barrett REC-7', alias: ['8" barrel', '16" barrel'], cartridge: "5.56x45mm", weight: [2.74,3.46], rof: 750, length: [651,845], barrel: [203.2,406.4], sr: 395, cap: 30, year: 2007, cost: 2520, country: "us", wiki:"Barrett_REC7"},
        {name: "C8", cartridge: "5.56x45mm", rof: 900, weightMin: 2.7, weightMax: 3.2, cap: 30, length: 760, sr: 380, velocity: 900, country: "ca", wiki: "Colt_Canada_C7_rifle", year:1984},
        {name: "Colt M4", alias: ["Colt M4","Colt M4A1"], cartridge: "5.56x45mm", rof: [360,825], velocity: 840, weight: 2.9, length: 840, sr: 368, cap: 30, country: "us", wiki:"M4_carbine", year:1994},
        {name: "CAR-15", cartridge: "5.56x45mm", rof: 750, velocity: 838, weightMin:2.78, weightMax: 3.254, length: 711, sr: 374, cap: 30, country: "us", year:1962, wiki:"CAR-15"},
        {name: "CETME LC", cartridge: "5.56x45mm", rof: 725, velocity: 832, weightMin: 3.4, weightMax: 3.883, length: 665, sr: 440, cap: 30, country: "es", wiki:"CETME_Model_L", year:1986},
        {name: "CZ 2000 Compact", cartridge:"5.56x45mm", weight: 2.6, length: 435, sr: 355, rof: 800, velocity: 735, cap:30, country: "cz", wiki:"ČZ_2000", year:1991},
        {name: "Floro PDW", cartridge:"5.56x45mm", cap:30, length: 450, sr: 390, weightMin: 2.80, weightMax: 3.26, rof: 750, country: "ph", year:2004, wiki:"Floro_PDW"},
        {name: "FN SCAR PDW", cartridge: "5.56x45mm", rof: 625, velocity: 622, weight: 2.5, length: 632, sr: 336, cap: 30, country: "be", wiki:"FN_SCAR", year: 2011},
        {name: "FN SCAR-L CQB", cartridge: "5.56x45mm", rof: 600, velocity: 797, weight: 3.4, length: 787, sr: 385, cap: 30, country: "be", wiki:"FN_SCAR", year:2004},
        {name: "IMI Galil SAR", cartridge: "5.56x45mm", rof: 650, velocity: 920, weightMin: 3.65, weightMax: 4.467, length: 614, sr: 475, cap: 35, country: "il", wiki:"IMI_Galil#SAR", year:1972},
        {name: "H&K HK33KA1", cartridge: "5.56x45mm", rof: 700, velocity: 880, weightMin: 3.969, weightMax: 4.524, length: 675, sr: 480, cap: 30, country: "de", year:1968, wiki:"Heckler_%26_Koch_HK33"},
        {name: "H&K HK53", cartridge: "5.56x45mm", rof: 700, velocity: 750, weightMin: 3.048, weightMax: 3.603, length: 563, sr: 390, cap: 25, country: "de", year:1968},
        {name: "H&K G41K", cartridge: "5.56x45mm", rof: 850, velocity: 870, weightMin: 4.309, weightMax: 4.792, length: 740, sr: 566, cap: 30, country: "de", wiki:"Heckler_%26_Koch_G41", year:1981},
        {name: "H&K G36C", cartridge: "5.56x45mm", rof: 750, velocity: 762, weight: 2.8, length: 720, sr: 315, cap: 30, country: "de", year:1995, wiki:"Heckler_%26_Koch_G36#Variants"},
        {name: "H&K G36K", cartridge: "5.56x45mm", rof: 750, velocity: 830, weight: 3.5, length: 860, sr: 315, cap: 30, country: "de", year:1995, wiki:"Heckler_%26_Koch_G36#Variants"},
        {name: "H&K HK416", cartridge: "5.56x45mm", rof: 850, velocity: 882, weight: 3.0, length: 804, sr: 317, cap: 30, country: "de", year:2004, wiki:"Heckler_%26_Koch_HK416"},
        {name: "M16A1 Carbine", cartridge: "5.56x45mm", rof: 750, velocity: 922, weightMin: 2.631, weightMax: 3.105, length: 806, sr: 374, cap: 30, country: "us", year:1971, wiki:"CAR-15#Colt_Model_653_M16A1_Carbine"},
        {name: "M16A2 Carbine", cartridge: "5.56x45mm", rof: 770, velocity: 841, weightMin: 2.676, weightMax: 3.159, length: 757, sr: 368, cap: 30, year:1982, country: "us"},
        {name: "M16A2 Commando", cartridge: "5.56x45mm", rof: 800, velocity: 796, weightMin: 2.608, weightMax: 3.091, length: 681, sr: 368, cap: 30, year:1982, country: "us"},
        {name: "M1 Carbine", alias:["M1","M2"], country:"us", year:1942, cartridge:".30 Carbine", weight:2.5, length:905, barrel:457, velocity:595, cap:15, sr:550, rof:[40,875]},
        {name: "Mini-Beryl", cartridge:"5.56x45mm", rof: 700, velocity: 770, sr: 225, weightMin: 3.0, length: 525, cap:30,country:"pl", wiki:"Kbk_wz._1996_Mini-Beryl", year:1997},
        {name: "MTAR-21", cartridge: "5.56x45mm", rof: 825, velocity: 870, weight: 3.0, length: 590, sr: 310, cap: 30, country: "il", year:2009, wiki:"IMI_Tavor_TAR-21#Micro_Tavor_.28X95.29"},
        {name: "QBZ-95B", cartridge: "5.8x42mm Light", weight: 2.9, rof: 800, velocity: 790, length: 609, sr: 285, cap: 30, country: "cn", wiki:"QBZ-95#QBZ-95B_.28Carbine.29", year:1997},
        {name: 'Remington R5 RGP', alias: ['10.5" barrel', '14.5" barrel'], cartridge: "5.56x45mm", weight: [2.97557,3.15247], length: [688,777], barrel:[270,370], sr: 273, cap: 30, cost: 841, rof: 750, country: "us", year:2006, wiki:"R5_RGP"},
        {name: "SIG SG 543", cartridge: "5.56x45mm", rof: 725, velocity: 875, weightMin: 3.0, weightMax: 3.606, length: 720, sr: 495, cap: 30, country: "ch", year:1969, wiki:"SIG_SG_540"},
        {name: "SIG SG-551", cartridge: "5.56x45mm", rof: 800, velocity: 882, weightMin: 3.405, weightMax: 3.881, length: 600, sr: 466, cap: 30, country: "de", year: 1986, wiki:"SIG_SG_550"},
        {name: "SIG SG-552", cartridge: "5.56x45mm", rof: 700, velocity: 725, weight: 3.2, length: 730, sr: 360, cap: 30, country: "ch", year:1998, wiki:"SIG_SG_550"},
        {name: "SIG SG-553", cartridge: "5.56x45mm", rof: 700, velocity: 725, weight: 3.2, length: 730, sr: 339, cap: 30, country: "ch", year:2008, wiki:"SIG_SG_550"},
        {name: "SKS", cartridge: "7.62x39mm", rof: 40, velocity: 735, weight: 3.9, length: 1020, sr: 440, cap: 20, country: "su", year:1945, wiki:"SKS"},
        {name: "Steyr AUG", cartridge: "5.56x45mm", rof: 700, velocity: 882, weightMin: 3.175, weightMax: 3.683, length: 635, sr: 192, cap: 30, country: "at", year:1978, wiki:"Steyr_AUG"},
        {name: "Vektor R5 Carbine", cartridge: "5.56x45mm", weight: 3.7, rof:675, velocity: 920, cap: 35, length: 615, sr: 445, country: "za", wiki:"Vektor_R4", year:1989},
        {name: "Vektor R6 PDW", cartridge: "5.56x45mm", weight: 3.6, rof:585, velocity: 825, cap: 35, length: 565, sr: 425, country: "za", wiki:"Vektor_R4", year:2008},
      ]
    },
    {
      shortname: "assaultrifles",
      name: "Assault rifle",
      weapons: [
        {name: "A-91M", alias: ["A-91M 7.62", "A-91M 5.56"], cartridge: ["7.62x39mm","5.56x45mm"], velocity: [715,910], rof: 700, weightMin: 3.97, weightMax: 4.3, length: 660, sr: 288, cap:30, country:"ru", year:1991, wiki:"A-91"},
        {name: "AEK-971", cartridge: "5.45x39mm", rof: 900, velocity: 880, weight: 3.3, length: 720, cap: 30, sr: 370, country: "su", year: 1984, wiki:"AEK-971"},
        {name: "AK-107", cartridge:"5.45x39mm", rof: 850, velocity: 900, weight: 3.8, length: 700, cap: 30, sr: 400, country:"ru", year: 1995, wiki:"AK-107"},
        {name: "AK-12", cartridge: "5.45x39mm", rof: 650, velocity: 900, weight: 3.3, length: 725, cap: 30, sr: 605, country: "ru", year: 2011, wiki:"AK-12"},
        {name: "AK-47", cartridge: "7.62x39mm", rof: 600, velocity: 715, weight: 4.37, length:870, sr:378, cap: 30, country: "su", year:1947, wiki:"AK-47"},
        {name: "AK-74", alias: ["AK-74","AK-74M"], cartridge: "5.45x39mm", rof: 650, velocity: 890, weightMin: [3.07,3.4], weightMax: [3.951,4.621], length:930, sr:394, cap: 30, country: "su", year:[1974,1991]},
        {name: "AKM", cartridge: "7.62x39mm", rof: 600, velocity: 715, weightMin: 3.150, weightMax: 3.967, length:876, sr:394, cap: 30, country: "su", year: 1959, wiki:"AKM"},
        {name: "AN-94", cartridge: "5.45x39mm", rof: 600, velocity: 900, weight: 3.85, length:728, sr: 700, cap: 30, country: "ru", year:1994, wiki:"AN-94"},
        {name: "AR-18", cartridge: "5.56x45mm", rof: 800, velocity: 1000, weightMin: 3.170, weightMax: 4.78, cap: 40, length: 736, sr: 508, cost: 500, country: "us", year:1963, wiki:"ArmaLite_AR-18"},
        {name: "AS Val", cartridge: "9x39mm", rof: 900, velocity: 295, weight: 2.5, length: 615, cap: 20, sr: 295, country: "su", wiki:"AS_Val", year:1987},
        {name: "Beretta ARX-160", cartridge: "5.56x45mm", weight: 3.1, rof: 700, cap: 30, length: 680, sr: 425, country: "it", wiki:"Beretta_ARX_160", year:2008},
        {name: "Beretta AR-70/90", cartridge: "5.56x45mm", rof: 680, velocity: 945, weightMin: 3.990, weightMax: 4.473, length: 751, sr: 555, cap: 30, cost: 1250, country: "it", wiki:"Beretta_AR70/90", year:1985},
        {name: "Beryl", cartridge:"5.56x45mm", rof: 700, velocity: 920, weightMin: 3.35, length: 742, sr: 490, cap:30, country:"pl", wiki:"Kbs_wz._1996_Beryl", year:1997},
        {name: "Bushmaster M17S", cartridge:"5.56x45mm", rof: 120, weight: 3.7, length: 760, sr: 125, cap:30, country: "au", year:1992, wiki:"Bushmaster_M17S"},
        {name: "CETME Model L", cartridge: "5.56x45mm", rof: 675, velocity: 875, weightMin: 3.4, weightMax: 3.883, length: 925, sr: 440, cap: 30, country: "es", wiki:"CETME_Model_L", year:1986},
        {name: "C7A1", cartridge: "5.56x45mm", rof: 800, weightMin: 3.3, weightMax: 3.9, cap: 30, length: 1020, sr: 560, velocity: 900, country: "ca", wiki:"Colt_Canada_C7_rifle", year:1994},
        {name: "Colt CM901", cartridge: "5.56x45mm", rof: 825, weight: 4.3, length: 870, cap: 30, sr: 450, country: "us", year:2012, wiki:"Colt_CM901"},
        {
            name: "Colt M16",
            alias: ["Colt M16A1","Colt M16A2","Colt M16A2 HBAR","Colt M16A3","Colt M16A4"],
            cartridge:"5.56x45mm",
            rof:[700,825,45,825,360],
            velocity:[948,948,1000,948,948],
            weight:[2.89,3.77,4.066,3.77,3.4],
            length:[986,991,1006,1006,1000],
            sr: 500,
            cap:30,
            country:"us",
            year:[1967,1982,1982,1982,1990],
            wiki: ["M16_rifle#XM16E1_and_M16A1_.28Colt_Model_603.29","M16_rifle#M16A2","M16_rifle#M16A2","M16_rifle#M16A3","M16_rifle#M16A4"]
        },
        /*{name: "Colt M16A1", cartridge: "5.56x45mm", rof: 700, velocity: 948, weight: 2.89, length: 986, sr: 500, cap:30, country: "us", wiki:"M16_rifle#XM16E1_and_M16A1_.28Colt_Model_603.29", year:1967},
        {name: "Colt M16A2", alias: ["Colt M16A2","Colt M16A2 HBAR"], cartridge: "5.56x45mm", rof: [825,45], velocity: [1000,948], weight: [3.77,4.066], length: [1006,991], sr: 500, cap:30, country: "us", year:1982, wiki:"M16_rifle#M16A2"},
        {name: "Colt M16A3", cartridge: "5.56x45mm", rof: 825, velocity: 948, weight: 3.77, length: 1006, sr: 500, cap:30, country: "us", wiki:"M16_rifle#M16A3", year:1982},
        {name: "Colt M16A4", cartridge: "5.56x45mm", rof:360, velocity: 948, length: 1000, barrel: 508, weight: 3.4, sr: 500, cap:30, country: "us", wiki:"M16_rifle#M16A4", year:1990},*/
        {name: "CZ 2000", cartridge:"5.56x45mm", weight: 3.0, length: 615, sr: 530, rof: 800, velocity: 910, cap: 30, country: "cz", wiki:"ČZ_2000", year:1991},
        {name: "CZ-805 BREN", cartridge: "5.56x45mm", rof: 750, sr: 365, length: 585, cap: 30, weight: 3.41, country: "cz", wiki:"CZ-805_BREN", year:2011},
        {name: "FAD", cartridge: "5.56x45mm", rof: 550, cap: 30, weight: 3.6, length: 810, velcoity: 963, sr: 410, country: "pe", wiki:"FAD_assault_rifle", year:2008},
        {name: "FAMAS F1", cartridge: "5.56x45mm", rof: 950, velocity: 960, weightMin: 3.780, weightMax: 4.235, length: 757, sr: 330, cap: 30, country: "fr", wiki:"FAMAS", year:1981},
        {name: "FAMAS G2", cartridge: "5.56x45mm", rof: 1050, velocity: 925, weight: 3.8, length: 757, sr: 330, cap: 30, country: "fr", wiki:"FAMAS#FAMAS_G2", year:1994},
        {name: "FN CAL", cartridge:"5.56x45mm", cap:20, weight: 3.35, length: 980, sr: 420, rof: 850, country: "be", wiki:"FN_CAL", year:1966},
        {name: "FN F2000", cartridge: "5.56x45mm", rof: 850, velocity: 900, weight: 3.39, length: 688, sr: 280, cap: 30, country: "be", year:2001, wiki:"FN_F2000"},
        {name: "FN FNC", cartridge: "5.56x45mm", rof: 700, velocity: 915, weightMin: 3.8, weightMax: 4.412, length: 997, sr: 513, cap: 30, cost:1250, country: "be", year:1979, wiki:"FN_FNC"},
        {name: "FN SCAR-L", alias: ["FN SCAR-L", "FN SCAR-LB"], cartridge: "5.56x45mm", rof: 600, velocity: [877,909], weight: [3.5,3.6], length: [889,990], sr: 385, cap: 30, country: "be", year:2004, wiki:"FN_SCAR"},
        {name: "Galil AR", cartridge: "5.56x45mm", rof: 650, velocity: 980, weightMin: 4.300, weightMax: 5.117, length: 742, sr: 475, cap: 35, country: "il", wiki:"IMI_Galil#AR", year:1972},
        {name: "H&K G41, G41A2", cartridge: "5.56x45mm", rof: 900, velocity: 910, weightMin: 4.1, weightMax: 4.583, length: 997, sr: 566, cap: 30, country: "de", wiki:"Heckler_%26_Koch_G41", year:1984},
        {name: "H&K HK33", alias:["H&K HK33A2", "H&K HK33A3"], cartridge: "5.56x45mm", rof: 750, velocity: 920, weightMin: 3.651, weightMax: 4.206, length: 920, sr: 480, cap: 30, country: "de", year:1968},
        {name: "Imbel IA-2", cartridge: "5.56x45mm", rof: 750, weight: 3.38, length: 600, sr: 460, cap: 30, country: "br", wiki:"IMBEL_IA2", year:2012},
        {name: "KH2002", cartridge: "5.56x45mm", rof: 825, cap: 30, weight: 3.7, length: 730, velocity: 925, sr: 375, country: "ir", year:2003, wiki:"KH-2002"},
        {name: "L85", alias: ["L85A1","L85A2"],cartridge: "5.56x45mm", rof: 700, velocity: 940, weightMin: 3.82, weightMax: 4.98, length: 785, sr: 335, cap: 30, country: "gb", wiki:"SA80#L85_Rifle", year:[1985,2000]},
        {name: "MSBS Radon", alias:["MSBS-K","MSBS-B"], cartridge: "5.56x45mm", rof: 775, weight: [3.65,3.55], length: [980,720], sr: [410,330], cap: 30, country: "pl", wiki:"MSBS_Radon", year:2014},
        {name: "OTs-14 Groza", cartridge:"9x39mm", rof:750, velocity:300, weight: 2.7, cap:30, length:610, sr: 173, country: "ru", year:1994, wiki:"OTs-14_Groza"},
        {name: "QBZ-95", cartridge: "5.8x42mm Light", weight: 3.25, rof: 650, velocity: 930, length: 745, sr: 285, cap: 30, country: "cn", wiki:"QBZ-95", year:1995},
        {name: "Remington ACR", cartridge: ["5.56x45mm","6.8 SPC"], rof: 800, weightMin: 3.6, weightMax: 4.4, length: 660, cap: 30, velocity: [890,800], sr: 300, country: "us", wiki:"Adaptive_Combat_Rifle", year:2010},
        {name: "Ruger Mini-14", cartridge: "5.56x45mm", rof: 40, velocity: 1005, weightMin: 2.900, weightMax: 3.484, length: 946, sr: 561, cap: 20, country: "us", year:1973, wiki:"Ruger_Mini-14"},
        {name: "SAR 80", cartridge: "5.56x45mm", rof: 700, velocity: 970, weightMin: 3.4, weightMax: 3.883, length: 970, sr: 517, cap: 30, country: "il", wiki:"SAR_80", year:1984},
        {name: "SC-2005", cartridge: "5.56x45mm", length: 825, weight: 3.5, velocity: 950, rof: 550, cap: 30, sr: 520, country: "pe", wiki:"Desarrollos_Industriales_Casanave_SC-2005", year:2005},
        {name: "SIG SG 540", cartridge: "5.56x45mm", rof: 725, velocity: 875, weightMin: 3.590, weightMax: 4.196, length: 720, sr: 495, cap: 30, country: "ch", wiki:"SIG_SG_540", year:1977},
        {name: "SIG SG 550", cartridge: "5.56x45mm", rof: 800, velocity: 931, weightMin: 4.005, weightMax: 4.481, length: 770, sr: 540, cap: 30, country: "ch", wiki:"SIG_SG_550", year:1986},
        {name: "Steyr AUG", cartridge: "5.56x45mm", rof: 700, velocity: 921, weightMin: 3.583, weightMax: 4.091, length: 790, sr: 310, cap: 30, country: "at", year:1978, wiki:"Steyr_AUG"},
        {name: "StG 44", cartridge: "7.92x33mm", rof: 575, velocity: 685, weightMin: 4.62, weightMax: 5.13, length: 940, sr: 450, cap: 30, country: "de", year:1942, wiki:"StG_44"},
        {name: "TAR-21", cartridge: "5.56x45mm", rof: 775, velocity: 920, weight: 3.27, length: 720, sr: 267, cap: 30, country: "il", wiki:"IMI_Tavor_TAR-21", year:2001},
        {name: "vz. 58", cartridge:"7.62x39mm", rof: 800, velocity: 705, weight: 3.1, length: 845, sr: 353, cap:30, country: "cz", wiki:"Vz._58", year:1959},
        //{name: "XM8", cartridge: "5.56x45mm", rof: 750, velocity: 900, weight: 3.4, length: 838, cap: 30, sr: 190},
        {name: "ZM LR-300", cartridge: "5.56x45mm", rof: 950, weight: 3.1, cap: 30, sr: 245, length: 546, country: "us", wiki:"LR-300", year:2000},
      ]
    },
    {
      shortname: "rifles",
      name: "Rifle",
      weapons: [
        {name: "Fusil Lebel Mle 1886", rof: 15, year:1886, country:"fr", cartridge:"8mm Lebel",weight:4.254, length: 1303, barrel:798, sr:640, velocity:725, cap:8},
        {name: "Gewehr 98", cartridge:"7.92x57mm", velocity: 878, rof: 10, cap: 5, length: 1250, barrel: 740, sr: 612, weight:4.2, country:"de", year:1898},
        {name: "Gewehr 43", cartridge:"7.92x57mm", velocity: 853.6, rof: 45, cap: 10, length: 1130, sr:570, weight: 4.1, country: "de", year:1943},
        {name: "Karabiner 98k", cartridge:"7.92x57mm", velocity: 860, rof: 10, weightMin:3.7, weightMax:4.1, length: 1110, sr: 495.3, country: "de", cap:5,  year: 1935},
        {name: "M1917 Enfield Rifle", rof: 15, year: 1917, country: "us", cartridge:".30-06 Springfield", weight: 4.17, length: 1175, sr: 800, barrel:660, velocity:823, cap:6},
        {name: "Magazine Lee-Enfield", rof: 15, year: 1895, country:"gb", cartridge:".303 British", weight: 4.17, length: 1257, sr: 735, barrel:540, velocity: 751, cap: 10},
        {name: "Pattern 1914 Enfield Rifle", rof: 15, year:1914, country:"gb", cartridge:".303 British", weight: 4.35, length:1175, sr: 800, barrel: 660, velocity:762, cap:5},
        {name: "Short Magazine Lee-Enfield", alias:["Mk I","Mk II","Mk III"], rof: 15, year: [1904,1906,1907], country:"gb", cartridge:".303 British", weight:[4.14,4.14,3.93], length: [1129,1129,1133], sr: 735, barrel:640, velocity: 751, cap:10},
        {name: "Lee-Enfield Rifle No. 4 Mk. I", cartridge:".303 British", rof:15, cap: 10, length: 1128, weight: 4.11, velocity: 751, sr: 735, year:1939, country: "gb"},
        {name: "Lee-Enfield Rifle No. 5 (Jungle Carbine)", cartridge:".303 British", rof:10, cap: 10, length: 1000, weight: 3.24, velocity: 610, sr:590, year:1944, country: "gb"},
        {name: "Mosin-Nagant Rifle", rof: 10, year:1891, country:"ru", cartridge:"7.62x54mm", weight: 4.37, length:1305, sr:686, barrel:802, velocity:810, cap:5},
        {name: "Mosin-Nagant M1938", cartridge:"7.62x54mm", velocity: 800, rof: 10, cap: 5, length: 1020, sr: 419, weight:3.45, country:"su", year:1938},
        {name: "M1903 Springfield", cartridge:".30-06 Springfield", rof: 10, cap: 5, velocity: 853, weight: 3.9, length: 1115, sr:560, year:1903, country:"us"},
        {name: "M1 Garand", cartridge:".30-06 Springfield", rof: 45, cap:8, length: 1103, weight: 4.37, velocity: 853, sr: 708.6, year:1936, country:"us"},
        {name: "Tokarev AVT-40", cartridge:"7.62x54mm", rof: 750, weight:3.90, length:1226, sr: 593, velocity: 840, country:"su", cap: 10, year:1940},
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
      {name: "M14", cartridge: "7.62x51mm", rof: 725, velocity: 850, length: 1126, sr: 708, weight: 4.1, cap: 20, country: "us", wiki: "M14 rifle", description: "M14 rifle, officially the United States Rifle, 7.62 mm, M14, is an American selective fire automatic rifle that fires 7.62×51mm NATO (.308 Winchester) ammunition. It gradually replaced the M1 Garand in U.S. Army service by 1961 and in U.S. Marine Corps service by 1965. It was the standard issue infantry rifle for U.S. military personnel in the Contiguous United States, Europe, and South Korea from 1959 until it was replaced by the M16 rifle in 1970.", img:"m14.jpg"},
      {name: "M39 EMR", cartridge: "7.62x51mm", rof: 750, velocity: 865, length: 1120, sr: 708, weight: 7.5, cap: 20, country: "us"},
      {name: "Mk. 14 EBR", cartridge: "7.62x51mm", rof: 750, velocity: 853, length: 889, sr: 708, weight: 5.1, cap: 20, country: "us"},
      {name: "Madsen LAR", cartridge: "7.62x51mm", weight: 4.64, length: 1074, sr: 580, rof: 575, cap: 20, country: "dk"},
      {name: "L1A1 SLR", cartridge:"7.62x51mm", rof: 120, velocity: 823, length: 1143, weight: 4.337, sr: 597, cap:20, country: "gb"},
      {name: "Kel-Tec RFB", alias: ["Sporter","Carbine","Target"], cartridge: "7.62x51mm", weight: [3.9,3.7,5.1], length: [813,660,1016], sr: 236, velocity: [870,810,930], rof: 260, cap:20, country: "us"},
      {name: "SC-2010", cartridge: "7.62x51mm", length: 825, weight: 3.5, velocity: 820, rof: 550, cap: 20, sr: 520, country: "pe", wiki:"Desarrollos_Industriales_Casanave_SC-2005", year:2005},
      {name: "SVU-AS", cartridge: "7.62x54mm", rof: 650, cap: 20, weight: 4.4, length: 900, sr: 432, velocity: 830, country: "ru"}
      ],
    },
    {
      shortname: "lmgs",
      name: "Light machine gun",
      weapons: [
        {name: "Chauchat", alias: ["8mm Lebel",".30-06 Springfield"], country:"fr", year:1915, cartridge:["8mm Lebel",".30-06 Springfield"], weight:9, length:1145, sr: 585, barrel:470, velocity: [700,853], rof:250, cap: 20, wiki:"Chauchat"},
        {name: "M1918 BAR", country:"us", year:1917, cartridge:".30-06 Springfield", weight:7.25, length:1194, sr: 784, barrel:610, velocity:853, cap:20, rof:575},
        {name: 'Ares "Shrike"', cartridge: "5.56x45mm", weight: 3.4, length:711, rof: 725, sr: 375, cap: 100, country: "us"},
        {name: "AUG HBAR", cartridge: "5.56x45mm", weightMin: 5.443, weightMax: 6.114, cap: 42, rof: 680, velocity: 958, length: 889, sr:310, country: "at"},
        {name: "Charlton Automatic Rifle", cartridge:".303 British", rof: 600, cap: 30, weight: 7.3, length: 1150, sr: 735, velocity: 744, year: 1941, country: "nz"},
        {name: "CZ 2000 LMG", cartridge:"5.56x45mm", weight: 4.1, length: 1050, sr: 920, rof: 800, velocity: 960, cap:75, country: "cz"},
        {name: "FN HAMR IAR", cartridge: "5.56x45mm", weight: 4.63, length: 876.3, sr: 435, rof: 650, cap: 100, country: "be"},
        {name: "FG42", cartridge:"7.92x57mm", weight: 4.53, length: 940, sr: 555, cap: 20, velocity: 740, rof: 900, country: "de", year:1942},
        {name: "H&K HK23E", cartridge: "5.56x45mm", rof: 800, velocity: 950, weightMin: 8.750, weightMax: 10.174, cap: 100, length: 1030, sr: 685, cost: 2350, country: "de"},
        {name: "H&K M27 IAR", cartridge: "5.56x45mm", weight:3.6, length: 840, sr: 370, rof: 850, cap: 30, country: "de"},
        {name: "H&K MG4", cartridge: "5.56x45mm", weight: 8.2, length: 1030, sr: 490, velocity: 920, rof: 890, cap: 200, country: "de"},
        {name: "H&K MG4E", cartridge: "5.56x45mm", weight: 7.9, length: 1030, sr: 490, velocity: 920, rof: 775, cap: 200, country: "de"},
        {name: "H&K MG4KE", cartridge: "5.56x45mm", weight: 7.7, length: 950, sr: 490, velocity: 880, rof: 775, cap: 200, country: "de"},
        {name: "IMI Negev", cartridge: "5.56x45mm", weight: 7.5, length: 890, cap: 150, velocity: 915, sr: 440, rof: 1000, country: "il"},
        {name: "LSAT", cartridge: "5.56x45mm", weight: 4.5, length: 917, sr: 430, rof: 650, velocity: 920, cap: 100, country: "us"},
        {name: "Lewis Gun Mk I", alias: [".303 British",".30-06 Springfield","7.92x57mm"], country:"us", year: 1914, cartridge: [".303 British",".30-06 Springfield","7.92x57mm"], weight: 11.8, barrel:665, length:965, sr: 615, velocity: 600, cap:47, rof:550},
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
