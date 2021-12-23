let weapons = [
    "HAVOC Rifle",
    "VK-47 Flatline",
    "Hemlok Burst AR",
    "R-301 Carbine",
    "Alternator SMG",
    "Prowler Burst PDW",
    "R-99 SMG",
    "Volt SMG",
    "C.A.R. SMG",
    "Devotion LMG",
    "L-STAR EMG",
    "M600 Spitfire",
    "Rampage LMG",
    "G7 Scout",
    "Triple Take",
    "30-30 Repeater",
    "Bocek Compound Bow",
    "Charge Rifle",
    "Longbow DMR",
    "Kraber .50-Cal Sniper",
    "Sentinel",
    "EVA-8 Auto",
    "Mastiff Shotgun",
    "Mozambique Shotgun",
    "Peacekeeper",
    "RE-45 Auto",
    "P2020",
    "Wingman"
];

for (let i = 0; i < 30; i++) {

    let n1 = Math.floor(Math.random() * weapons.length);
    let n2 = Math.floor(Math.random() * weapons.length);

    console.log(weapons[n1] + ", " + weapons[n2]);
}