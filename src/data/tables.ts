import type { RandomTable } from "./types";

export const emptyTable: RandomTable = {
  name: '',
  description: '',
  diceFormula: '',
  table: [
    { min: 0, max: 0, description: '' },
  ],
}

export const dcTable: RandomTable = {
  name: 'DC Table',
  description: 'Skill/Task checks',
  diceFormula: '1d20',
table: [
  { min: 1, max: 1, description: 'Fail, and' },
  { min: 2, max: '-6', description: 'Fail, but' },
  { min: '-5', max: '-1', description: 'Success, but' },
  { min: '+0', max: '+4', description: 'Success' },
  { min: '+5', max: 20, description: 'Success, and' },
],
}

export const oracle: RandomTable = {
name: 'Oracle',
description: 'Answer to Yes/No questions',
diceFormula: '1d20',
table: [
  { min: 1, max: 1, description: 'No, and' },
  { min: 2, max: 9, description: 'No, but' },
  { min: 10, max: 14, description: 'Yes, but' },
  { min: 15, max: 19, description: 'Yes' },
  { min: 20, max: null, description: 'Yes, and' },
],
}

export const inspirationCategories: RandomTable = {
  name: 'Inspiration Categories',
  description: 'Random inspiration categories',
  diceFormula: '1d8',
  table: [
    { min: 1, max: 1, description: 'Verbs' },
    { min: 2, max: 2, description: 'Nouns' },
    { min: 3, max: 3, description: 'Adjectives' },
    { min: 4, max: 4, description: 'Emotions' },
    { min: 5, max: 5, description: 'Motivations' },
    { min: 6, max: 6, description: 'Benefits' },
    { min: 7, max: 7, description: 'Environments' },
    { min: 8, max: 8, description: 'Complications' },
  ],
};

export const weather: RandomTable = {
name: 'Weather',
description: 'Random weather',
diceFormula: '1d20',
table: [
  { min: 1, max: 1, description: 'Unseasonably Cold' },
  { min: 2, max: 3, description: 'Chilly' },
  { min: 4, max: 7, description: 'Precipitation' },
  { min: 8, max: 13, description: 'Clear' },
  { min: 14, max: 17, description: 'Overcast' },
  { min: 18, max: 19, description: 'Warm' },
  { min: 20, max: 20, description: 'Unseasonably Hot' },
],
};

export const timeDay: RandomTable = {
name: 'Time of Day',
description: 'Random time of day',
diceFormula: '1d4',
table: [
  { min: 1, max: 1, description: 'Morning' },
  { min: 2, max: 2, description: 'Afternoon' },
  { min: 3, max: 3, description: 'Evening' },
  { min: 4, max: 4, description: 'Night/Late' },
],
};

export const season: RandomTable = {
name: 'Seasons',
description: 'Random season',
diceFormula: '1d4',
table: [
  { min: 1, max: 1, description: 'Winter' },
  { min: 2, max: 2, description: 'Spring' },
  { min: 3, max: 3, description: 'Summer' },
  { min: 4, max: 4, description: 'Fall/Autumn' },
],
};

export const moonPhases: RandomTable = {
name: 'Moon Phases',
description: 'Random moon phases',
diceFormula: '1d8',
table: [
  { min: 1, max: 1, description: 'New Moon' },
  { min: 2, max: 2, description: 'Waning Crescent' },
  { min: 3, max: 3, description: 'Third Quarter' },
  { min: 4, max: 4, description: 'Waning Gibbous' },
  { min: 5, max: 5, description: 'Full Moon' },
  { min: 6, max: 6, description: 'Waxing Gibbous' },
  { min: 7, max: 7, description: 'First Quarter' },
  { min: 8, max: 8, description: 'Waxing Crescent' },
],
};

export const daysWeek: RandomTable = {
name: 'Days of the Week',
description: 'Random days of the week',
diceFormula: '1d8',
table: [
  { min: 1, max: 1, description: 'Monday' },
  { min: 2, max: 2, description: 'Tuesday' },
  { min: 3, max: 3, description: 'Wednesday' },
  { min: 4, max: 4, description: 'Thursday' },
  { min: 5, max: 5, description: 'Friday' },
  { min: 6, max: 6, description: 'Saturday' },
  { min: 7, max: 7, description: 'Sunday' },
  { min: 8, max: 8, description: 'Roll again' },
],
};