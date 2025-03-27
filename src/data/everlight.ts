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

export const speciesTable: RandomTable = {
  name: "Species",
  description: "Different species",
  diceFormula: "1d5",
  table: [
    { min: 1, max: 1, description: "Aelith (Fey Elf)" },
    { min: 2, max: 2, description: "Noctari (Shadow Elf)" },
    { min: 3, max: 3, description: "Ferai (Human)" },
    { min: 4, max: 4, description: "Drakari (Dragon)" },
    { min: 5, max: 5, description: "Half-blood" },
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

export const personalityTraitsTable: RandomTable = {
  name: "Personality Traits",
  description: "A table of personality traits",
  diceFormula: "1d100",
  table: [
    { min: 0, max: 0, description: "ambitious" },
    { min: 1, max: 1, description: "analytical" },
    { min: 2, max: 2, description: "creative" },
    { min: 3, max: 3, description: "charismatic" },
    { min: 4, max: 4, description: "determined" },
    { min: 5, max: 5, description: "motivated" },
    { min: 6, max: 6, description: "resourceful" },
    { min: 7, max: 7, description: "supportive" },
    { min: 8, max: 8, description: "passionate" },
    { min: 9, max: 9, description: "organized" },
    { min: 10, max: 10, description: "rebellious" },
    { min: 11, max: 11, description: "adventurous" },
    { min: 12, max: 12, description: "independent" },
    { min: 13, max: 13, description: "loyal" },
    { min: 14, max: 14, description: "strategic" },
    { min: 15, max: 15, description: "diligent" },
    { min: 16, max: 16, description: "driven" },
    { min: 17, max: 17, description: "confident" },
    { min: 18, max: 18, description: "outgoing" },
    { min: 19, max: 19, description: "disciplined" },
    { min: 20, max: 20, description: "bold" },
    { min: 21, max: 21, description: "clever" },
    { min: 22, max: 22, description: "thoughtful" },
    { min: 23, max: 23, description: "honest" },
    { min: 24, max: 24, description: "strong" },
    { min: 25, max: 25, description: "optimistic" },
    { min: 26, max: 26, description: "inventive" },
    { min: 27, max: 27, description: "patient" },
    { min: 28, max: 28, description: "witty" },
    { min: 29, max: 29, description: "compassionate" },
    { min: 30, max: 30, description: "inspiring" },
    { min: 31, max: 31, description: "courageous" },
    { min: 32, max: 32, description: "fun-loving" },
    { min: 33, max: 33, description: "organized" },
    { min: 34, max: 34, description: "respectful" },
    { min: 35, max: 35, description: "reliable" },
    { min: 36, max: 36, description: "dynamic" },
    { min: 37, max: 37, description: "humorous" },
    { min: 38, max: 38, description: "kind" },
    { min: 39, max: 39, description: "quick-witted" },
    { min: 40, max: 40, description: "imaginative" },
    { min: 41, max: 41, description: "focused" },
    { min: 42, max: 42, description: "cooperative" },
    { min: 43, max: 43, description: "playful" },
    { min: 44, max: 44, description: "detail-oriented" },
    { min: 45, max: 45, description: "adaptable" },
    { min: 46, max: 46, description: "empathetic" },
    { min: 47, max: 47, description: "ambitious" },
    { min: 48, max: 48, description: "generous" },
    { min: 49, max: 49, description: "disciplined" },
    { min: 50, max: 50, description: "loyal" },
    { min: 51, max: 51, description: "brave" },
    { min: 52, max: 52, description: "fearless" },
    { min: 53, max: 53, description: "practical" },
    { min: 54, max: 54, description: "humble" },
    { min: 55, max: 55, description: "insightful" },
    { min: 56, max: 56, description: "energetic" },
    { min: 57, max: 57, description: "intuitive" },
    { min: 58, max: 58, description: "approachable" },
    { min: 59, max: 59, description: "hard-working" },
    { min: 60, max: 60, description: "perceptive" },
    { min: 61, max: 61, description: "generous" },
    { min: 62, max: 62, description: "assertive" },
    { min: 63, max: 63, description: "optimistic" },
    { min: 64, max: 64, description: "dedicated" },
    { min: 65, max: 65, description: "humble" },
    { min: 66, max: 66, description: "caring" },
    { min: 67, max: 67, description: "driven" },
    { min: 68, max: 68, description: "collaborative" },
    { min: 69, max: 69, description: "thoughtful" },
    { min: 70, max: 70, description: "dynamic" },
    { min: 71, max: 71, description: "patient" },
    { min: 72, max: 72, description: "tech-savvy" },
    { min: 73, max: 73, description: "visionary" },
    { min: 74, max: 74, description: "goal-oriented" },
    { min: 75, max: 75, description: "respectful" },
    { min: 76, max: 76, description: "charming" },
    { min: 77, max: 77, description: "friendly" },
    { min: 78, max: 78, description: "motivating" },
    { min: 79, max: 79, description: "energetic" },
    { min: 80, max: 80, description: "thoughtful" },
    { min: 81, max: 81, description: "open-minded" },
    { min: 82, max: 82, description: "supportive" },
    { min: 83, max: 83, description: "resourceful" },
    { min: 84, max: 84, description: "smart" },
    { min: 85, max: 85, description: "kind-hearted" },
    { min: 86, max: 86, description: "calm" },
    { min: 87, max: 87, description: "professional" },
    { min: 88, max: 88, description: "adaptable" },
    { min: 89, max: 89, description: "practical" },
    { min: 90, max: 90, description: "sociable" },
    { min: 91, max: 91, description: "disciplined" },
    { min: 92, max: 92, description: "creative" },
    { min: 93, max: 93, description: "motivated" },
    { min: 94, max: 94, description: "efficient" },
    { min: 95, max: 95, description: "inspiring" },
    { min: 96, max: 96, description: "loyal" },
    { min: 97, max: 97, description: "active" },
    { min: 98, max: 98, description: "obsessive" },
    { min: 99, max: 99, description: "focused" }
  ]
};

export const professionTable: RandomTable = {
  name: "Profession",
  description: "Different professions or occupations",
  diceFormula: "1d38",
  table: [
    { min: 1, max: 1, description: "Academic" },
    { min: 2, max: 2, description: "Adventurer" },
    { min: 3, max: 3, description: "Athlete" },
    { min: 4, max: 4, description: "Blue Collar Worker" },
    { min: 5, max: 5, description: "Celebrity" },
    { min: 6, max: 6, description: "Creative" },
    { min: 7, max: 7, description: "Criminal" },
    { min: 8, max: 8, description: "Dilettante" },
    { min: 9, max: 9, description: "Doctor" },
    { min: 10, max: 10, description: "Emergency Services Worker" },
    { min: 11, max: 11, description: "Entrepreneur" },
    { min: 12, max: 12, description: "Investigator" },
    { min: 13, max: 13, description: "Law Enforcement Worker" },
    { min: 14, max: 14, description: "Military Soldier" },
    { min: 15, max: 15, description: "Religious Worker" },
    { min: 16, max: 16, description: "Rural Worker" },
    { min: 17, max: 17, description: "Student" },
    { min: 18, max: 18, description: "Technician" },
    { min: 19, max: 19, description: "White Collar Worker" },
    { min: 20, max: 20, description: "Slayer" },
    { min: 21, max: 21, description: "Exorcist" },
    { min: 22, max: 22, description: "Tracker" },
    { min: 23, max: 23, description: "Bounty Hunter" },
    { min: 24, max: 24, description: "Inquisitor" },
    { min: 25, max: 25, description: "Hexblade" },
    { min: 26, max: 26, description: "Alchemist" },
    { min: 27, max: 27, description: "Binder" },
    { min: 28, max: 28, description: "Diviner" },
    { min: 29, max: 29, description: "Gadgeteer" },
    { min: 30, max: 30, description: "CyberHunter" },
    { min: 31, max: 31, description: "Forensic Occultist" },
    { min: 32, max: 32, description: "Ritualist" },
    { min: 33, max: 33, description: "Mercy Killer" },
    { min: 34, max: 34, description: "Monster Turncoat" },
    { min: 35, max: 35, description: "Lone Wolf" },
    { min: 36, max: 36, description: "Defector" },
    { min: 37, max: 37, description: "Enforcer" },
    { min: 38, max: 38, description: "Cursed Hunter" },
  ]
};

export const actionTable: RandomTable = {
  name: "Action",
  description: "A table of actions or verbs",
  diceFormula: "1d100",
  table: [
    { min: 0, max: 0, description: "Assesses" },
    { min: 1, max: 1, description: "Blazes" },
    { min: 2, max: 2, description: "Carves" },
    { min: 3, max: 3, description: "Dismantles" },
    { min: 4, max: 4, description: "Engulfs" },
    { min: 5, max: 5, description: "Forges" },
    { min: 6, max: 6, description: "Guides" },
    { min: 7, max: 7, description: "Hunts" },
    { min: 8, max: 8, description: "Illuminates" },
    { min: 9, max: 9, description: "Juggles" },
    { min: 10, max: 10, description: "Kindles" },
    { min: 11, max: 11, description: "Lurks" },
    { min: 12, max: 12, description: "Manipulates" },
    { min: 13, max: 13, description: "Navigates" },
    { min: 14, max: 14, description: "Observes" },
    { min: 15, max: 15, description: "Pierces" },
    { min: 16, max: 16, description: "Quashes" },
    { min: 17, max: 17, description: "Ravages" },
    { min: 18, max: 18, description: "Shrouds" },
    { min: 19, max: 19, description: "Twists" },
    { min: 20, max: 20, description: "Unleashes" },
    { min: 21, max: 21, description: "Vanquishes" },
    { min: 22, max: 22, description: "Weaves" },
    { min: 23, max: 23, description: "Yields" },
    { min: 24, max: 24, description: "Zaps" },
    { min: 25, max: 25, description: "Analyzes" },
    { min: 26, max: 26, description: "Breaks" },
    { min: 27, max: 27, description: "Conjures" },
    { min: 28, max: 28, description: "Defends" },
    { min: 29, max: 29, description: "Evokes" },
    { min: 30, max: 30, description: "Fabricates" },
    { min: 31, max: 31, description: "Gambles" },
    { min: 32, max: 32, description: "Harmonizes" },
    { min: 33, max: 33, description: "Incites" },
    { min: 34, max: 34, description: "Jolts" },
    { min: 35, max: 35, description: "Keeps" },
    { min: 36, max: 36, description: "Lunges" },
    { min: 37, max: 37, description: "Mends" },
    { min: 38, max: 38, description: "Nullifies" },
    { min: 39, max: 39, description: "Outmaneuvers" },
    { min: 40, max: 40, description: "Plots" },
    { min: 41, max: 41, description: "Quells" },
    { min: 42, max: 42, description: "Reflects" },
    { min: 43, max: 43, description: "Smolders" },
    { min: 44, max: 44, description: "Transforms" },
    { min: 45, max: 45, description: "Unravels" },
    { min: 46, max: 46, description: "Ventures" },
    { min: 47, max: 47, description: "Whispers" },
    { min: 48, max: 48, description: "Exudes" },
    { min: 49, max: 49, description: "Yearns" },
    { min: 50, max: 50, description: "Absorbs" },
    { min: 51, max: 51, description: "Barricades" },
    { min: 52, max: 52, description: "Clashes" },
    { min: 53, max: 53, description: "Devours" },
    { min: 54, max: 54, description: "Erodes" },
    { min: 55, max: 55, description: "Flickers" },
    { min: 56, max: 56, description: "Grasps" },
    { min: 57, max: 57, description: "Heeds" },
    { min: 58, max: 58, description: "Impales" },
    { min: 59, max: 59, description: "Jostles" },
    { min: 60, max: 60, description: "Kneads" },
    { min: 61, max: 61, description: "Leverages" },
    { min: 62, max: 62, description: "Marches" },
    { min: 63, max: 63, description: "Negotiates" },
    { min: 64, max: 64, description: "Orchestrates" },
    { min: 65, max: 65, description: "Plunges" },
    { min: 66, max: 66, description: "Quirks" },
    { min: 67, max: 67, description: "Resonates" },
    { min: 68, max: 68, description: "Stalks" },
    { min: 69, max: 69, description: "Traverses" },
    { min: 70, max: 70, description: "Upholds" },
    { min: 71, max: 71, description: "Vexes" },
    { min: 72, max: 72, description: "Wields" },
    { min: 73, max: 73, description: "Yammers" },
    { min: 74, max: 74, description: "Zones" },
    { min: 75, max: 75, description: "Anchors" },
    { min: 76, max: 76, description: "Banishes" },
    { min: 77, max: 77, description: "Charges" },
    { min: 78, max: 78, description: "Devises" },
    { min: 79, max: 79, description: "Emboldens" },
    { min: 80, max: 80, description: "Flourishes" },
    { min: 81, max: 81, description: "Grapples" },
    { min: 82, max: 82, description: "Hinders" },
    { min: 83, max: 83, description: "Invokes" },
    { min: 84, max: 84, description: "Jars" },
    { min: 85, max: 85, description: "Lacerates" },
    { min: 86, max: 86, description: "Magnifies" },
    { min: 87, max: 87, description: "Nullifies" },
    { min: 88, max: 88, description: "Obliterates" },
    { min: 89, max: 89, description: "Probes" },
    { min: 90, max: 90, description: "Quickens" },
    { min: 91, max: 91, description: "Rallies" },
    { min: 92, max: 92, description: "Scorches" },
    { min: 93, max: 93, description: "Thwarts" },
    { min: 94, max: 94, description: "Unites" },
    { min: 95, max: 95, description: "Ventures" },
    { min: 96, max: 96, description: "Wrecks" },
    { min: 97, max: 97, description: "Expels" },
    { min: 98, max: 98, description: "Yanks" },
    { min: 99, max: 99, description: "Zealously Pursues" }
  ]
};

export const thematicTable: RandomTable = {
  name: "Thematic Table",
  description: "A table of thematic elements",
  diceFormula: "1d100",
  table: [
    { min: 0, max: 0, description: "Artifacts" },
    { min: 1, max: 1, description: "Blades" },
    { min: 2, max: 2, description: "Chains" },
    { min: 3, max: 3, description: "Darkness" },
    { min: 4, max: 4, description: "Echoes" },
    { min: 5, max: 5, description: "Flames" },
    { min: 6, max: 6, description: "Gears" },
    { min: 7, max: 7, description: "Havoc" },
    { min: 8, max: 8, description: "Illusions" },
    { min: 9, max: 9, description: "Journeys" },
    { min: 10, max: 10, description: "Keepsakes" },
    { min: 11, max: 11, description: "Lanterns" },
    { min: 12, max: 12, description: "Myths" },
    { min: 13, max: 13, description: "Nightmares" },
    { min: 14, max: 14, description: "Oaths" },
    { min: 15, max: 15, description: "Portals" },
    { min: 16, max: 16, description: "Quests" },
    { min: 17, max: 17, description: "Ruins" },
    { min: 18, max: 18, description: "Shadows" },
    { min: 19, max: 19, description: "Treasures" },
    { min: 20, max: 20, description: "Umbra" },
    { min: 21, max: 21, description: "Visions" },
    { min: 22, max: 22, description: "Whispers" },
    { min: 23, max: 23, description: "Yearnings" },
    { min: 24, max: 24, description: "Zephyrs" },
    { min: 25, max: 25, description: "Ambitions" },
    { min: 26, max: 26, description: "Barriers" },
    { min: 27, max: 27, description: "Charms" },
    { min: 28, max: 28, description: "Destinies" },
    { min: 29, max: 29, description: "Embers" },
    { min: 30, max: 30, description: "Fates" },
    { min: 31, max: 31, description: "Glimmers" },
    { min: 32, max: 32, description: "Hopes" },
    { min: 33, max: 33, description: "Incantations" },
    { min: 34, max: 34, description: "Jinxes" },
    { min: 35, max: 35, description: "Keys" },
    { min: 36, max: 36, description: "Labyrinths" },
    { min: 37, max: 37, description: "Mirages" },
    { min: 38, max: 38, description: "Nexus" },
    { min: 39, max: 39, description: "Omens" },
    { min: 40, max: 40, description: "Powers" },
    { min: 41, max: 41, description: "Quagmires" },
    { min: 42, max: 42, description: "Riddles" },
    { min: 43, max: 43, description: "Secrets" },
    { min: 44, max: 44, description: "Tethers" },
    { min: 45, max: 45, description: "Urns" },
    { min: 46, max: 46, description: "Vortexes" },
    { min: 47, max: 47, description: "Wells" },
    { min: 48, max: 48, description: "Xenoliths" },
    { min: 49, max: 49, description: "Yarns" },
    { min: 50, max: 50, description: "Anomalies" },
    { min: 51, max: 51, description: "Beasts" },
    { min: 52, max: 52, description: "Curses" },
    { min: 53, max: 53, description: "Dragons" },
    { min: 54, max: 54, description: "Entities" },
    { min: 55, max: 55, description: "Forces" },
    { min: 56, max: 56, description: "Guardians" },
    { min: 57, max: 57, description: "Hexes" },
    { min: 58, max: 58, description: "Icons" },
    { min: 59, max: 59, description: "Jesters" },
    { min: 60, max: 60, description: "Keeps" },
    { min: 61, max: 61, description: "Legends" },
    { min: 62, max: 62, description: "Mysteries" },
    { min: 63, max: 63, description: "Nullities" },
    { min: 64, max: 64, description: "Oracles" },
    { min: 65, max: 65, description: "Pantheons" },
    { min: 66, max: 66, description: "Quarries" },
    { min: 67, max: 67, description: "Relics" },
    { min: 68, max: 68, description: "Sigils" },
    { min: 69, max: 69, description: "Truths" },
    { min: 70, max: 70, description: "Unseen" },
    { min: 71, max: 71, description: "Vaults" },
    { min: 72, max: 72, description: "Wardens" },
    { min: 73, max: 73, description: "Yearnings" },
    { min: 74, max: 74, description: "Zones" },
    { min: 75, max: 75, description: "Allegiances" },
    { min: 76, max: 76, description: "Burdens" },
    { min: 77, max: 77, description: "Covenants" },
    { min: 78, max: 78, description: "Dread" },
    { min: 79, max: 79, description: "Echoes" },
    { min: 80, max: 80, description: "Fragments" },
    { min: 81, max: 81, description: "Glyphs" },
    { min: 82, max: 82, description: "Harbingers" },
    { min: 83, max: 83, description: "Inscriptions" },
    { min: 84, max: 84, description: "Judgments" },
    { min: 85, max: 85, description: "Laments" },
    { min: 86, max: 86, description: "Mantras" },
    { min: 87, max: 87, description: "Nexus" },
    { min: 88, max: 88, description: "Offerings" },
    { min: 89, max: 89, description: "Paradoxes" },
    { min: 90, max: 90, description: "Quagmires" },
    { min: 91, max: 91, description: "Rites" },
    { min: 92, max: 92, description: "Symbols" },
    { min: 93, max: 93, description: "Tomes" },
    { min: 94, max: 94, description: "Undercurrents" },
    { min: 95, max: 95, description: "Vanities" },
    { min: 96, max: 96, description: "Wonders" },
    { min: 97, max: 97, description: "Expanse" },
    { min: 98, max: 98, description: "Yesterdays" },
    { min: 99, max: 99, description: "Zeniths" }
  ]
};

export const huntersFocusTable: RandomTable = {
  name: "Hunter's Focus",
  description: "Different focuses or methods used by hunters",
  diceFormula: "1d20",
  table: [
    { min: 1, max: 1, description: "Slays with Brutal Efficiency" },
    { min: 2, max: 2, description: "Sacrifices Everything" },
    { min: 3, max: 3, description: "Wields Custom-made weapons" },
    { min: 4, max: 4, description: "Outmaneuvers with Cunning Tactics" },
    { min: 5, max: 5, description: "Hunts with Ruthless Precision" },
    { min: 6, max: 6, description: "Channels Forbidden magic" },
    { min: 7, max: 7, description: "Harnesses Runes and Sigils" },
    { min: 8, max: 8, description: "Performs Rituals" },
    { min: 9, max: 9, description: "Drinks Monsters for their Powers" },
    { min: 10, max: 10, description: "Reads Omens and Visions" },
    { min: 11, max: 11, description: "Communes with Ghosts" },
    { min: 12, max: 12, description: "Binds Creatures to their Will" },
    { min: 13, max: 13, description: "Unravels Occult Mysteries" },
    { min: 14, max: 14, description: "Analyzes Crime Scenes" },
    { min: 15, max: 15, description: "Reads Magical Auras" },
    { min: 16, max: 16, description: "Uses Enhanced Senses" },
    { min: 17, max: 17, description: "Infiltrates Supernatural Societies" },
    { min: 18, max: 18, description: "Works Undercover" },
    { min: 19, max: 19, description: "Scavenges and Repurposes" },
    { min: 20, max: 20, description: "Uses Disguises and False Identities" }
  ]
};