import type { RandomTable } from "./types";

export const realmTable: RandomTable = {
  name: "Realm",
  description: "Different realms of existence",
  diceFormula: "1d4",
  table: [
    { min: 1, max: 1, description: "The Iron Veil" },
    { min: 2, max: 2, description: "The Wyld" },
    { min: 3, max: 3, description: "The Nether" },
    { min: 4, max: 4, description: "roll again" }
  ]
};

export const ironVeilTable: RandomTable = {
  name: "The Iron Veil",
  description: "Creatures found in The Iron Veil realm",
  diceFormula: "1d10",
  table: [
    { min: 1, max: 1, description: "Ferai" },
    { min: 2, max: 2, description: "Drakari" },
    { min: 3, max: 3, description: "Animal" },
    { min: 4, max: 4, description: "Automation" },
    { min: 5, max: 5, description: "Mechanical" },
    { min: 6, max: 6, description: "Ghost" },
    { min: 7, max: 7, description: "Undead" },
    { min: 8, max: 8, description: "Draconic" },
    { min: 9, max: 9, description: "Ooze/Slime" },
    { min: 10, max: 10, description: "Insect" }
  ]
};

export const wyldTable: RandomTable = {
  name: "The Wyld",
  description: "Creatures found in The Wyld realm",
  diceFormula: "1d10",
  table: [
    { min: 1, max: 1, description: "Aelith" },
    { min: 2, max: 2, description: "Animal" },
    { min: 3, max: 3, description: "Insect" },
    { min: 4, max: 4, description: "Ooze/Slime" },
    { min: 5, max: 5, description: "Plant" },
    { min: 6, max: 6, description: "Chimera" },
    { min: 7, max: 7, description: "Golem" },
    { min: 8, max: 8, description: "Ghost" },
    { min: 9, max: 9, description: "Elemental" },
    { min: 10, max: 10, description: "Fey" }
  ]
};

export const netherTable: RandomTable = {
  name: "The Nether",
  description: "Creatures found in The Nether realm",
  diceFormula: "1d10",
  table: [
    { min: 1, max: 1, description: "Noctari" },
    { min: 2, max: 2, description: "Animal" },
    { min: 3, max: 3, description: "Insect" },
    { min: 4, max: 4, description: "Ooze/Slime" },
    { min: 5, max: 5, description: "Undead" },
    { min: 6, max: 6, description: "Ghost" },
    { min: 7, max: 7, description: "Chimera" },
    { min: 8, max: 8, description: "Golem" },
    { min: 9, max: 9, description: "Shadow" },
    { min: 10, max: 10, description: "Fiend" }
  ]
};

export const creatureMotivationTable: RandomTable = {
  name: "CreatureMotivation",
  description: "What drives the creature's actions",
  diceFormula: "1d20",
  table: [
    { min: 1, max: 1, description: "Destroys everything" },
    { min: 2, max: 2, description: "Defends itself" },
    { min: 3, max: 3, description: "Seeks knowledge" },
    { min: 4, max: 4, description: "Hungers for flesh" },
    { min: 5, max: 5, description: "Craves blood" },
    { min: 6, max: 6, description: "Feeds on life-force" },
    { min: 7, max: 7, description: "Defies explanation" },
    { min: 8, max: 8, description: "Seeks a host" },
    { min: 9, max: 9, description: "Feeds on fear" },
    { min: 10, max: 10, description: "Hates relentlessly" },
    { min: 11, max: 11, description: "Defends its domain" },
    { min: 12, max: 12, description: "Protects something" },
    { min: 13, max: 13, description: "Explores endlessly" },
    { min: 14, max: 14, description: "Struggles to survive" },
    { min: 15, max: 15, description: "Alters itself" },
    { min: 16, max: 16, description: "Fixates obsessively" },
    { min: 17, max: 17, description: "Seeks vengeance" },
    { min: 18, max: 18, description: "Inflicts suffering" },
    { min: 19, max: 19, description: "Seeks power" },
    { min: 20, max: 20, description: "Loves deeply" }
  ]
};

export const creatureDispositionTable: RandomTable = {
  name: "CreatureDisposition",
  description: "The creature's general temperament or personality",
  diceFormula: "1d20",
  table: [
    { min: 1, max: 1, description: "Cunning" },
    { min: 2, max: 2, description: "Vicious" },
    { min: 3, max: 3, description: "Wrathful" },
    { min: 4, max: 4, description: "Patient" },
    { min: 5, max: 5, description: "Feral" },
    { min: 6, max: 6, description: "Loyal" },
    { min: 7, max: 7, description: "Enigmatic" },
    { min: 8, max: 8, description: "Malevolent" },
    { min: 9, max: 9, description: "Stoic" },
    { min: 10, max: 10, description: "Relentless" },
    { min: 11, max: 11, description: "Proud" },
    { min: 12, max: 12, description: "Deceitful" },
    { min: 13, max: 13, description: "Melancholy" },
    { min: 14, max: 14, description: "Inquisitive" },
    { min: 15, max: 15, description: "Savage" },
    { min: 16, max: 16, description: "Resilient" },
    { min: 17, max: 17, description: "Cruel" },
    { min: 18, max: 18, description: "Devoted" },
    { min: 19, max: 19, description: "Paranoid" },
    { min: 20, max: 20, description: "Tranquil" }
  ]
};

export const creatureDescriptorTable: RandomTable = {
  name: "Creature Descriptor",
  description: "Physical or visual characteristics of the creature",
  diceFormula: "1d20",
  table: [
    { min: 1, max: 1, description: "Shadowed" },
    { min: 2, max: 2, description: "Hulking" },
    { min: 3, max: 3, description: "Twisted" },
    { min: 4, max: 4, description: "Ancient" },
    { min: 5, max: 5, description: "Unstable" },
    { min: 6, max: 6, description: "Stonebound" },
    { min: 7, max: 7, description: "Whispering" },
    { min: 8, max: 8, description: "Thorned" },
    { min: 9, max: 9, description: "Frozen" },
    { min: 10, max: 10, description: "Shifting" },
    { min: 11, max: 11, description: "Radiant" },
    { min: 12, max: 12, description: "Masked" },
    { min: 13, max: 13, description: "Hollow" },
    { min: 14, max: 14, description: "Keen-eyed" },
    { min: 15, max: 15, description: "Bloodied" },
    { min: 16, max: 16, description: "Weathered" },
    { min: 17, max: 17, description: "Barbed" },
    { min: 18, max: 18, description: "Glowing" },
    { min: 19, max: 19, description: "Cracked" },
    { min: 20, max: 20, description: "Ethereal" }
  ]
};

export const creatureNamePatternTable: RandomTable = {
  name: "Creature Name Pattern",
  description: "Pattern for generating creature names using syllable tables",
  diceFormula: "1d20",
  table: [
    { min: 1, max: 1, description: "[four][one]'[two][three]" },
    { min: 2, max: 2, description: "[four][two]" },
    { min: 3, max: 3, description: "[four][two][one]" },
    { min: 4, max: 4, description: "[one]'[three][two][four]" },
    { min: 5, max: 5, description: "[one]'[two][four]" },
    { min: 6, max: 6, description: "[one][three]" },
    { min: 7, max: 7, description: "[one][three]'[four]" },
    { min: 8, max: 8, description: "[one][two]" },
    { min: 9, max: 9, description: "[one][two]'[three]" },
    { min: 10, max: 10, description: "[one][two]'[four][three]" },
    { min: 11, max: 11, description: "[one][two][three]" },
    { min: 12, max: 12, description: "[one][two][three][four]" },
    { min: 13, max: 13, description: "[three][one]" },
    { min: 14, max: 14, description: "[three][one][four]" },
    { min: 15, max: 15, description: "[three][one][four][two]" },
    { min: 16, max: 16, description: "[two]'[one]" },
    { min: 17, max: 17, description: "[two][four]" },
    { min: 18, max: 18, description: "[two][three]'[one][four]" },
    { min: 19, max: 19, description: "[two][three][four]" },
    { min: 20, max: 20, description: "[two][three][one]" }
  ]
};

export const creatureOneSyllableTable: RandomTable = {
  name: "Creature One",
  description: "First syllable options for creature names",
  diceFormula: "1d20",
  table: [
    { min: 1, max: 1, description: "Va" },
    { min: 2, max: 2, description: "Kry" },
    { min: 3, max: 3, description: "Xe" },
    { min: 4, max: 4, description: "Tha" },
    { min: 5, max: 5, description: "Lo" },
    { min: 6, max: 6, description: "Mir" },
    { min: 7, max: 7, description: "Kel" },
    { min: 8, max: 8, description: "Bra" },
    { min: 9, max: 9, description: "Yv" },
    { min: 10, max: 10, description: "Tar" },
    { min: 11, max: 11, description: "Vol" },
    { min: 12, max: 12, description: "Zan" },
    { min: 13, max: 13, description: "Dar" },
    { min: 14, max: 14, description: "Sul" },
    { min: 15, max: 15, description: "Zek" },
    { min: 16, max: 16, description: "Tyx" },
    { min: 17, max: 17, description: "Ul" },
    { min: 18, max: 18, description: "Xir" },
    { min: 19, max: 19, description: "Quo" },
    { min: 20, max: 20, description: "Esh" }
  ]
};

export const creatureTwoSyllableTable: RandomTable = {
  name: "Creature Two",
  description: "Second syllable options for creature names",
  diceFormula: "1d20",
  table: [
    { min: 1, max: 1, description: "Zor" },
    { min: 2, max: 2, description: "Sha" },
    { min: 3, max: 3, description: "Rin" },
    { min: 4, max: 4, description: "Vor" },
    { min: 5, max: 5, description: "Gre" },
    { min: 6, max: 6, description: "Dru" },
    { min: 7, max: 7, description: "Xal" },
    { min: 8, max: 8, description: "Sy" },
    { min: 9, max: 9, description: "Quin" },
    { min: 10, max: 10, description: "Nel" },
    { min: 11, max: 11, description: "Ther" },
    { min: 12, max: 12, description: "Lys" },
    { min: 13, max: 13, description: "Phy" },
    { min: 14, max: 14, description: "Hex" },
    { min: 15, max: 15, description: "Oza" },
    { min: 16, max: 16, description: "Jor" },
    { min: 17, max: 17, description: "Vey" },
    { min: 18, max: 18, description: "Brax" },
    { min: 19, max: 19, description: "Syn" },
    { min: 20, max: 20, description: "Myr" }
  ]
};

export const creatureThreeSyllableTable: RandomTable = {
  name: "Creature Three",
  description: "Third syllable options for creature names",
  diceFormula: "1d20",
  table: [
    { min: 1, max: 1, description: "thal" },
    { min: 2, max: 2, description: "mor" },
    { min: 3, max: 3, description: "vok" },
    { min: 4, max: 4, description: "dus" },
    { min: 5, max: 5, description: "nak" },
    { min: 6, max: 6, description: "zan" },
    { min: 7, max: 7, description: "bor" },
    { min: 8, max: 8, description: "thys" },
    { min: 9, max: 9, description: "lar" },
    { min: 10, max: 10, description: "zix" },
    { min: 11, max: 11, description: "dak" },
    { min: 12, max: 12, description: "tor" },
    { min: 13, max: 13, description: "vren" },
    { min: 14, max: 14, description: "kri" },
    { min: 15, max: 15, description: "myn" },
    { min: 16, max: 16, description: "skar" },
    { min: 17, max: 17, description: "gri" },
    { min: 18, max: 18, description: "neth" },
    { min: 19, max: 19, description: "zol" },
    { min: 20, max: 20, description: "thok" }
  ]
}

export const creatureFourSyllableTable: RandomTable = {
  name: "Creature Four",
  description: "Fourth syllable options for creature names",
  diceFormula: "1d20",
  table: [
    { min: 1, max: 1, description: "ek" },
    { min: 2, max: 2, description: "is" },
    { min: 3, max: 3, description: "ul" },
    { min: 4, max: 4, description: "an" },
    { min: 5, max: 5, description: "oth" },
    { min: 6, max: 6, description: "ir" },
    { min: 7, max: 7, description: "ith" },
    { min: 8, max: 8, description: "en" },
    { min: 9, max: 9, description: "ox" },
    { min: 10, max: 10, description: "um" },
    { min: 11, max: 11, description: "ur" },
    { min: 12, max: 12, description: "ish" },
    { min: 13, max: 13, description: "el" },
    { min: 14, max: 14, description: "om" },
    { min: 15, max: 15, description: "uth" },
    { min: 16, max: 16, description: "id" },
    { min: 17, max: 17, description: "as" },
    { min: 18, max: 18, description: "on" },
    { min: 19, max: 19, description: "ar" },
    { min: 20, max: 20, description: "un" }
  ]
};

  export const humanoidDamageTable: RandomTable = {
  name: "Humanoid Damage",
  description: "Damage types commonly associated with Humanoid creatures",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Physical (weapon)" },
    { min: 2, max: 2, description: "Elemental (fire)" },
    { min: 3, max: 3, description: "Psychic" },
    { min: 4, max: 4, description: "Shadow" },
    { min: 5, max: 5, description: "Chaos" },
    { min: 6, max: 6, description: "Toxic (poison)" }
  ]
};

export const beastDamageTable: RandomTable = {
  name: "Beast Damage",
  description: "Damage types commonly associated with Beast creatures",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Physical (claw)" },
    { min: 2, max: 2, description: "Physical (bite)" },
    { min: 3, max: 3, description: "Physical (gore)" },
    { min: 4, max: 4, description: "Physical (tail whip)" },
    { min: 5, max: 5, description: "Toxic (disease)" },
    { min: 6, max: 6, description: "Toxic (venom)" }
  ]
};

export const mechanicalDamageTable: RandomTable = {
  name: "Mechanical Damage",
  description: "Damage types commonly associated with Mechanical creatures",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Physical (slash)" },
    { min: 2, max: 2, description: "Toxic (radiation)" },
    { min: 3, max: 3, description: "Physical (stomp)" },
    { min: 4, max: 4, description: "Physical (punch)" },
    { min: 5, max: 5, description: "Elemental (lightning)" },
    { min: 6, max: 6, description: "Radiant (light)" }
  ]
};

export const draconicDamageTable: RandomTable = {
  name: "Draconic Damage",
  description: "Damage types commonly associated with Draconic creatures",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Elemental (fire)" },
    { min: 2, max: 2, description: "Physical (claw)" },
    { min: 3, max: 3, description: "Physical (bite)" },
    { min: 4, max: 4, description: "Physical (tail whip)" },
    { min: 5, max: 5, description: "Psychic" },
    { min: 6, max: 6, description: "Physical (wing buffet)" }
  ]
};


export const ElementalDamageTable: RandomTable = {
  name: "Elemental Damage",
  description: "Damage types commonly associated with Elemental creatures",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Elemental (fire)" },
    { min: 2, max: 2, description: "Elemental (air)" },
    { min: 3, max: 3, description: "Elemental (water)" },
    { min: 4, max: 4, description: "Elemental (earth)" },
    { min: 5, max: 5, description: "Elemental (lightning)" },
    { min: 6, max: 6, description: "Elemental (ice)" }
  ]
};

export const feyDamageTable: RandomTable = {
  name: "Fey Damage",
  description: "Damage types commonly associated with Fey creatures",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Chaos" },
    { min: 2, max: 2, description: "Physical (weapon)" },
    { min: 3, max: 3, description: "Physical (claw)" },
    { min: 4, max: 4, description: "Pshycic (pact/oath)" },
    { min: 5, max: 5, description: "Psychic (cunning)" },
    { min: 6, max: 6, description: "Psychic" }
  ]
};

export const fiendDamageTable: RandomTable = {
  name: "Fiend Damage",
  description: "Damage types commonly associated with Fiend creatures",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Elemental (fire)" },
    { min: 2, max: 2, description: "Shadow" },
    { min: 3, max: 3, description: "Physical (claw)" },
    { min: 4, max: 4, description: "Physical (tail)" },
    { min: 5, max: 5, description: "Psychic (possession)" },
    { min: 6, max: 6, description: "Toxic" }
  ]
};

export const etherealDamageTable: RandomTable = {
  name: "Ethereal Damage",
  description: "Damage types commonly associated with Ethereal creatures",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Pschyic (damage)" },
    { min: 2, max: 2, description: "Necrotic" },
    { min: 3, max: 3, description: "Shadow" },
    { min: 4, max: 4, description: "Psychic (possession)" },
    { min: 5, max: 5, description: "Physical (thrown)" },
    { min: 6, max: 6, description: "Psychic (fear)" }
  ]
};

export const golemDamageTable: RandomTable = {
  name: "Golem Damage",
  description: "Damage types commonly associated with Golem creatures",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Physical" },
    { min: 2, max: 2, description: "Toxic" },
    { min: 3, max: 3, description: "Physical (stun)" },
    { min: 4, max: 4, description: "Shadow (blast)" },
    { min: 5, max: 5, description: "Elemental (earth)" },
    { min: 6, max: 6, description: "Chaos (blast)" }
  ]
};

export const insectDamageTable: RandomTable = {
  name: "Insect Damage",
  description: "Damage types commonly associated with Insect creatures",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Toxic" },
    { min: 2, max: 2, description: "Physical (pinchers)" },
    { min: 3, max: 3, description: "Physical (bite)" },
    { min: 4, max: 4, description: "Psychic (fear)" },
    { min: 5, max: 5, description: "Physical (wing buffet)" },
    { min: 6, max: 6, description: "Physical (claw)" }
  ]
};

export const oozeSlimeDamageTable: RandomTable = {
  name: "Ooze/Slime Damage",
  description: "Damage types commonly associated with Ooze and Slime creatures",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Toxic" },
    { min: 2, max: 2, description: "Physical (engulf)" },
    { min: 3, max: 3, description: "Necrotic" },
    { min: 4, max: 4, description: "Physical (slam)" },
    { min: 5, max: 5, description: "Physical (stuck)" },
    { min: 6, max: 6, description: "Physical (punch)" }
  ]
};

export const plantDamageTable: RandomTable = {
  name: "Plant Damage",
  description: "Damage types commonly associated with Plant creatures",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Physical (vine whip)" },
    { min: 2, max: 2, description: "Physical (root entangle)" },
    { min: 3, max: 3, description: "Toxic" },
    { min: 4, max: 4, description: "Physical (crush)" },
    { min: 5, max: 5, description: "Physical (thorns)" },
    { min: 6, max: 6, description: "Chaos" }
  ]
};

export const undeadDamageTable: RandomTable = {
  name: "Undead Damage",
  description: "Damage types commonly associated with Undead creatures",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Necrotic" },
    { min: 2, max: 2, description: "Shadow" },
    { min: 3, max: 3, description: "Physical (weapon)" },
    { min: 4, max: 4, description: "Physical (bite)" },
    { min: 5, max: 5, description: "Toxic (disease)" },
    { min: 6, max: 6, description: "Physical (grapple)" }
  ]
};

export const clueTable: RandomTable = {
  name: "Clue",
  description: "Evidence left behind by creature attacks",
  diceFormula: "3d10",
  table: [
    { min: 3, max: 3, description: "Slash marks" },
    { min: 4, max: 4, description: "Piercing wounds" },
    { min: 5, max: 5, description: "Crushed bones" },
    { min: 6, max: 6, description: "Scorched marks" },
    { min: 7, max: 7, description: "Burns" },
    { min: 8, max: 8, description: "Shadow residue" },
    { min: 9, max: 9, description: "Chaos residue" },
    { min: 10, max: 10, description: "Toxic residue" },
    { min: 11, max: 11, description: "Claw marks" },
    { min: 12, max: 12, description: "Bite marks" },
    { min: 13, max: 13, description: "Lightning scars" },
    { min: 14, max: 14, description: "Horrified looks" },
    { min: 15, max: 15, description: "Wind blown" },
    { min: 16, max: 16, description: "Water logged" },
    { min: 17, max: 17, description: "Frozen" },
    { min: 18, max: 18, description: "Decayed wounds" },
    { min: 19, max: 19, description: "Cracks in walls/ground" },
    { min: 20, max: 20, description: "Suffocation" },
    { min: 21, max: 21, description: "Radiation poisoning" },
    { min: 22, max: 22, description: "Psychic residue" },
    { min: 23, max: 23, description: "Sulfur" },
    { min: 24, max: 24, description: "Chilled area" },
    { min: 25, max: 25, description: "Webbing" },
    { min: 26, max: 26, description: "Slime coating" },
    { min: 27, max: 27, description: "Petals/Tendrils left behind" },
    { min: 28, max: 28, description: "Drained blood" },
    { min: 29, max: 29, description: "Drained energy" },
    { min: 30, max: 30, description: "Caterization" }
  ]
};