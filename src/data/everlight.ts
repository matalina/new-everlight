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

export const damageTypesTable: RandomTable = {
  name: "Damage Types",
  description: "A table of various damage types",
  diceFormula: "1d8",
  table: [
    { min: 1, max: 1, description: "Physical (piercing, slashing, crushing weapons)" },
    { min: 2, max: 2, description: "Psychic (mental, psychic)" },
    { min: 3, max: 3, description: "Elemental (fire, air, earth, water)" },
    { min: 4, max: 4, description: "Necrotic (death, undead, spirits, blood magic)" },
    { min: 5, max: 5, description: "Radiant (divine, angelic, light)" },
    { min: 6, max: 6, description: "Shadow (shadows, Nether magic)" },
    { min: 7, max: 7, description: "Chaos (Faerie Magic)" },
    { min: 8, max: 8, description: "Toxic (poisons, venom, disease, radiation)" }
  ]
};

export const strainPhysicalTable: RandomTable = {
  name: "Physical Strain",
  description: "Minor physical strains or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Bruised ribs" },
    { min: 2, max: 2, description: "Sprained wrist" },
    { min: 3, max: 3, description: "Winded" },
    { min: 4, max: 4, description: "Mild cut" },
    { min: 5, max: 5, description: "Sore muscles" },
    { min: 6, max: 6, description: "Battered" }
  ]
};

export const lingeringTraumaPhysicalTable: RandomTable = {
  name: "Physical Lingering Trauma",
  description: "Lingering physical traumas or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Deep cut" },
    { min: 2, max: 2, description: "Concussion" },
    { min: 3, max: 3, description: "Nasty burn" },
    { min: 4, max: 4, description: "Dislocated joint" },
    { min: 5, max: 5, description: "Broken nose" },
    { min: 6, max: 6, description: "Swollen eye" }
  ]
};

export const debilitatingInjuryPhysicalTable: RandomTable = {
  name: "Physical Debilitating Injury",
  description: "Severe physical injuries that can hinder performance",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Fractured bone" },
    { min: 2, max: 2, description: "Torn muscle" },
    { min: 3, max: 3, description: "Internal bleeding" },
    { min: 4, max: 4, description: "Nerve damage" },
    { min: 5, max: 5, description: "Cracked ribs" },
    { min: 6, max: 6, description: "Deep puncture wound" }
  ]
};

export const lastingScarPhysicalTable: RandomTable = {
  name: "Physical Lasting Scar",
  description: "Severe and permanent physical scars or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Crippled limb" },
    { min: 2, max: 2, description: "Loss of fingers/toes" },
    { min: 3, max: 3, description: "Severe limp" },
    { min: 4, max: 4, description: "Organ damage" },
    { min: 5, max: 5, description: "Partial blindness/deafness" },
    { min: 6, max: 6, description: "Missing limb" }
  ]
};

export const strainPsychicTable: RandomTable = {
  name: "Psychic Strain",
  description: "Minor psychic strains or disturbances",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Distracted thoughts" },
    { min: 2, max: 2, description: "Irritability" },
    { min: 3, max: 3, description: "Difficulty focusing" },
    { min: 4, max: 4, description: "Mood swings" },
    { min: 5, max: 5, description: "Nervousness" },
    { min: 6, max: 6, description: "Restlessness" }
  ]
};

export const lingeringTraumaPsychicTable: RandomTable = {
  name: "Psychic Lingering Trauma",
  description: "Lingering psychic traumas or disturbances",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Recurring nightmares" },
    { min: 2, max: 2, description: "Persistent anxiety" },
    { min: 3, max: 3, description: "Flashbacks" },
    { min: 4, max: 4, description: "Insomnia" },
    { min: 5, max: 5, description: "Trust issues" },
    { min: 6, max: 6, description: "Self-doubt" }
  ]
};

export const debilitatingInjuryPsychicTable: RandomTable = {
  name: "Psychic Debilitating Injury",
  description: "Severe psychic injuries that can hinder performance",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Panic attacks" },
    { min: 2, max: 2, description: "Phobia" },
    { min: 3, max: 3, description: "Emotional numbness" },
    { min: 4, max: 4, description: "Depression" },
    { min: 5, max: 5, description: "Dissociation" },
    { min: 6, max: 6, description: "Identity Crisis" }
  ]
};

export const lastingScarPsychicTable: RandomTable = {
  name: "Psychic Lasting Scar",
  description: "Severe and permanent psychic scars or disturbances",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Paranoia" },
    { min: 2, max: 2, description: "Loss of confidence" },
    { min: 3, max: 3, description: "Loss of empathy" },
    { min: 4, max: 4, description: "Cynicism" },
    { min: 5, max: 5, description: "Trust Issues" },
    { min: 6, max: 6, description: "Amnesia" }
  ]
};

export const strainElementalTable: RandomTable = {
  name: "Elemental Strain",
  description: "Minor elemental strains or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Singed hair" },
    { min: 2, max: 2, description: "Bruised by force" },
    { min: 3, max: 3, description: "Frostbitten fingers" },
    { min: 4, max: 4, description: "Shocked by static" },
    { min: 5, max: 5, description: "Eyes irritated by dust" },
    { min: 6, max: 6, description: "Skin blistered by heat or acid" }
  ]
};

export const lingeringTraumaElementalTable: RandomTable = {
  name: "Elemental Lingering Trauma",
  description: "Lingering elemental traumas or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Persistent coughing" },
    { min: 2, max: 2, description: "Joints ache constantly" },
    { min: 3, max: 3, description: "Numb extremities" },
    { min: 4, max: 4, description: "Nerve damage causes twitching" },
    { min: 5, max: 5, description: "Blurred vision" },
    { min: 6, max: 6, description: "Nasty chemical burns" }
  ]
};

export const debilitatingInjuryElementalTable: RandomTable = {
  name: "Elemental Debilitating Injury",
  description: "Severe elemental injuries that can hinder performance",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Lungs scarred by heat" },
    { min: 2, max: 2, description: "Bones weakened/brittle" },
    { min: 3, max: 3, description: "Circulation permanently impaired" },
    { min: 4, max: 4, description: "Muscle control weakened" },
    { min: 5, max: 5, description: "Light sensitivity" },
    { min: 6, max: 6, description: "Thick scarred flesh" }
  ]
};

export const lastingScarElementalTable: RandomTable = {
  name: "Elemental Lasting Scar",
  description: "Severe and permanent elemental scars or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Suffers chronic breathing issues" },
    { min: 2, max: 2, description: "One limb permanently stiff or fragile" },
    { min: 3, max: 3, description: "Prone to severe cold sensitivity" },
    { min: 4, max: 4, description: "One hand partially paralyzed" },
    { min: 5, max: 5, description: "Partial or full blindness in one eye" },
    { min: 6, max: 6, description: "Flesh necrosis" }
  ]
};

export const strainNecroticTable: RandomTable = {
  name: "Necrotic Strain",
  description: "Minor necrotic strains or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Skin turns pale" },
    { min: 2, max: 2, description: "Sudden fatigue" },
    { min: 3, max: 3, description: "Faint black veins" },
    { min: 4, max: 4, description: "Teeth ache" },
    { min: 5, max: 5, description: "Tingling in limbs" },
    { min: 6, max: 6, description: "Echoes of whispers" }
  ]
};

export const lingeringTraumaNecroticTable: RandomTable = {
  name: "Necrotic Lingering Trauma",
  description: "Lingering necrotic traumas or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Cold to the touch" },
    { min: 2, max: 2, description: "Persistent muscle aches" },
    { min: 3, max: 3, description: "Flesh is slow to mend" },
    { min: 4, max: 4, description: "Brittle nails or hair" },
    { min: 5, max: 5, description: "Vision flickers between life and death" },
    { min: 6, max: 6, description: "Shadow clings unnaturally" }
  ]
};

export const debilitatingInjuryNecroticTable: RandomTable = {
  name: "Necrotic Debilitating Injury",
  description: "Severe necrotic injuries that can hinder performance",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Circulation weakens" },
    { min: 2, max: 2, description: "Chronic weakness" },
    { min: 3, max: 3, description: "Permanent nerve damage" },
    { min: 4, max: 4, description: "Weakened immune system" },
    { min: 5, max: 5, description: "Partial organ failure" },
    { min: 6, max: 6, description: "Soul partially consumed" }
  ]
};

export const lastingScarNecroticTable: RandomTable = {
  name: "Necrotic Lasting Scar",
  description: "Severe and permanent necrotic scars or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Necrotized limb" },
    { min: 2, max: 2, description: "Slowed Recovery" },
    { min: 3, max: 3, description: "Dead Flesh" },
    { min: 4, max: 4, description: "Prone to frequent illness and infections" },
    { min: 5, max: 5, description: "Missing or rotting extremities" },
    { min: 6, max: 6, description: "Presence unnerves the living" }
  ]
};

export const strainRadiantTable: RandomTable = {
  name: "Radiant Strain",
  description: "Minor radiant strains or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Eyes strained" },
    { min: 2, max: 2, description: "Skin feels raw" },
    { min: 3, max: 3, description: "Numb limbs" },
    { min: 4, max: 4, description: "Burning sensation" },
    { min: 5, max: 5, description: "Ringing in ears" },
    { min: 6, max: 6, description: "Heart races unnaturally" }
  ]
};

export const lingeringTraumaRadiantTable: RandomTable = {
  name: "Radiant Lingering Trauma",
  description: "Lingering radiant traumas or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Light sensitivity" },
    { min: 2, max: 2, description: "Skin permanently tender" },
    { min: 3, max: 3, description: "Glowing veins that fade slowly" },
    { min: 4, max: 4, description: "Phantom pain in injured areas" },
    { min: 5, max: 5, description: "Echoes of divine voices" },
    { min: 6, max: 6, description: "Feels detached from the mortal world" }
  ]
};

export const debilitatingInjuryRadiantTable: RandomTable = {
  name: "Radiant Debilitating Injury",
  description: "Severe radiant injuries that can hinder performance",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Partial blindness" },
    { min: 2, max: 2, description: "Flesh burns too easily" },
    { min: 3, max: 3, description: "Nerve over-sensitivity" },
    { min: 4, max: 4, description: "Flesh weakens, bruises easily" },
    { min: 5, max: 5, description: "Frequent migraines" },
    { min: 6, max: 6, description: "Touch disrupts magic around them" }
  ]
};

export const lastingScarRadiantTable: RandomTable = {
  name: "Radiant Lasting Scar",
  description: "Severe and permanent radiant scars or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Blinded" },
    { min: 2, max: 2, description: "Sunlight vulnerability" },
    { min: 3, max: 3, description: "Uncontrolled muscle spasms in bright light" },
    { min: 4, max: 4, description: "Continually glowing scars" },
    { min: 5, max: 5, description: "Tinnitus" },
    { min: 6, max: 6, description: "Healing magic resistance" }
  ]
};

export const strainShadowTable: RandomTable = {
  name: "Shadow Strain",
  description: "Minor shadow strains or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Cold shivers" },
    { min: 2, max: 2, description: "Dizziness" },
    { min: 3, max: 3, description: "Overwhelmed by dread" },
    { min: 4, max: 4, description: "Mind feels clouded" },
    { min: 5, max: 5, description: "Eyes are bloodshot" },
    { min: 6, max: 6, description: "Vision blackens" }
  ]
};

export const lingeringTraumaShadowTable: RandomTable = {
  name: "Shadow Lingering Trauma",
  description: "Lingering shadow traumas or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Persistent whispering voices" },
    { min: 2, max: 2, description: "Intense feeling of isolation" },
    { min: 3, max: 3, description: "Heart beats erratically" },
    { min: 4, max: 4, description: "Fear of light or brightness" },
    { min: 5, max: 5, description: "Disturbing feeling of being followed" },
    { min: 6, max: 6, description: "Constant sense of being watched" }
  ]
};

export const debilitatingInjuryShadowTable: RandomTable = {
  name: "Shadow Debilitating Injury",
  description: "Severe shadow injuries that can hinder performance",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Loss of warmth or sensation" },
    { min: 2, max: 2, description: "Vision distorted by shadows" },
    { min: 3, max: 3, description: "Breathing becomes shallow" },
    { min: 4, max: 4, description: "Loss of time perception" },
    { min: 5, max: 5, description: "Limbs lose coordination" },
    { min: 6, max: 6, description: "Reduced physical strength" }
  ]
};

export const lastingScarShadowTable: RandomTable = {
  name: "Shadow Lasting Scar",
  description: "Severe and permanent shadow scars or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Unidentifiable Pain" },
    { min: 2, max: 2, description: "Permanent shadow around the body, causing constant unease and discomfort" },
    { min: 3, max: 3, description: "Humming darkness, disturbing other living beings nearby" },
    { min: 4, max: 4, description: "Short Term Memory Loss" },
    { min: 5, max: 5, description: "Vision Problems" },
    { min: 6, max: 6, description: "Unnerving Presence" }
  ]
};

export const strainChaosTable: RandomTable = {
  name: "Chaos Strain",
  description: "Minor chaos strains or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Uncontrollable laughter" },
    { min: 2, max: 2, description: "Mind races" },
    { min: 3, max: 3, description: "Hallucinations" },
    { min: 4, max: 4, description: "Sudden bursts of energy" },
    { min: 5, max: 5, description: "Eyes constantly shifting in color" },
    { min: 6, max: 6, description: "Distorted body sensations" }
  ]
};

export const lingeringTraumaChaosTable: RandomTable = {
  name: "Chaos Lingering Trauma",
  description: "Lingering chaos traumas or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Perception of reality flickers" },
    { min: 2, max: 2, description: "Thoughts jumbled and random" },
    { min: 3, max: 3, description: "Speech patterns become erratic" },
    { min: 4, max: 4, description: "Reality bends around them" },
    { min: 5, max: 5, description: "Experience intense déjà vu" },
    { min: 6, max: 6, description: "Touch feels wrong or misplaced" }
  ]
};

export const debilitatingInjuryChaosTable: RandomTable = {
  name: "Chaos Debilitating Injury",
  description: "Severe chaos injuries that can hinder performance",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Body flickers or phases" },
    { min: 2, max: 2, description: "Sudden body alterations" },
    { min: 3, max: 3, description: "Unstable magic surges" },
    { min: 4, max: 4, description: "Erratic emotional outbursts" },
    { min: 5, max: 5, description: "Sudden involuntary transformations" },
    { min: 6, max: 6, description: "Spontaneous teleports" }
  ]
};

export const lastingScarChaosTable: RandomTable = {
  name: "Chaos Lasting Scar",
  description: "Severe and permanent chaos scars or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Body randomly shifts in shape, causing pain and confusion" },
    { min: 2, max: 2, description: "Arms or legs occasionally become unnaturally elongated or shortened" },
    { min: 3, max: 3, description: "One hand or foot glows faintly and uncontrollably" },
    { min: 4, max: 4, description: "Mood Swings" },
    { min: 5, max: 5, description: "Occasionally bursts into a creature form for short periods, losing control" },
    { min: 6, max: 6, description: "Body becomes intangible or transparent at random" }
  ]
};

export const strainToxicTable: RandomTable = {
  name: "Toxic Strain",
  description: "Minor toxic strains or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Nausea" },
    { min: 2, max: 2, description: "Cold sweats" },
    { min: 3, max: 3, description: "Shivering" },
    { min: 4, max: 4, description: "Muscle cramps" },
    { min: 5, max: 5, description: "Faint dizziness" },
    { min: 6, max: 6, description: "Sudden weakness" }
  ]
};

export const lingeringTraumaToxicTable: RandomTable = {
  name: "Toxic Lingering Trauma",
  description: "Lingering toxic traumas or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Persistent stomach cramps" },
    { min: 2, max: 2, description: "Faint taste of bitterness" },
    { min: 3, max: 3, description: "Skin becomes itchy and flushed" },
    { min: 4, max: 4, description: "Skin turns sickly yellow" },
    { min: 5, max: 5, description: "Vivid hallucinations" },
    { min: 6, max: 6, description: "Body feels distant or detached" }
  ]
};

export const debilitatingInjuryToxicTable: RandomTable = {
  name: "Toxic Debilitating Injury",
  description: "Severe toxic injuries that can hinder performance",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Poison interrupts metabolism" },
    { min: 2, max: 2, description: "Blood toxicity" },
    { min: 3, max: 3, description: "Severe internal damage" },
    { min: 4, max: 4, description: "Nervous system failure" },
    { min: 5, max: 5, description: "Mental disorientation" },
    { min: 6, max: 6, description: "Sepsis or blood poisoning" }
  ]
};

export const lastingScarToxicTable: RandomTable = {
  name: "Toxic Lasting Scar",
  description: "Severe and permanent toxic scars or injuries",
  diceFormula: "1d6",
  table: [
    { min: 1, max: 1, description: "Constantly weak" },
    { min: 2, max: 2, description: "Internal organ damage" },
    { min: 3, max: 3, description: "Heart or lungs permanently weakened" },
    { min: 4, max: 4, description: "Weakened limb" },
    { min: 5, max: 5, description: "Memory loss or confusion" },
    { min: 6, max: 6, description: "Constant fever or chills" }
  ]
};