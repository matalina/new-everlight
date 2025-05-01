import type { RandomTable } from './types';
import { daysWeek, moonPhases, season, timeDay, weather } from './tables';
import { actionTable, clueTable, creatureDescriptorTable, creatureDispositionTable, creatureMotivationTable, huntersFocusTable, mishapTable, professionTable, realmTable, speciesTable, thematicTable } from './everlight';

/* Table Options */

export const moreTables: {[key: string]: RandomTable} = {
  [clueTable.name]: clueTable,
  [mishapTable.name]: mishapTable,

  [weather.name]: weather,
  [season.name]: season,
  [timeDay.name]: timeDay,
  [moonPhases.name]: moonPhases,
  [daysWeek.name]: daysWeek,
  
  [huntersFocusTable.name]: huntersFocusTable,
  [realmTable.name]: realmTable,
  [speciesTable.name]: speciesTable,
  [creatureDescriptorTable.name]: creatureDescriptorTable,
  [creatureDispositionTable.name]: creatureDispositionTable,
  [creatureMotivationTable.name]: creatureMotivationTable,
  [professionTable.name]: professionTable,
  [actionTable.name]: actionTable,
  [thematicTable.name]: thematicTable,
};


export const statuses = [
  {
    status: 'Solid',
    target: 3,
    guidance: 'Scene situation is dull, nothing interesting is happening',
  },
  {
    status: 'Stable',
    target: 6,
    guidance: 'Events are underway and are proceeding as expected',
  },
  {
    status: 'Average',
    target: 9,
    guidance: 'Situation has the potential for the unexpected',
  },
  {
    status: 'Unstable',
    target: 12,
    guidance: 'Events require players to be on high alert',
  },
  {
    status: 'Insane',
    target: 15,
    guidance: 'Players in constant danger, anything could happen',
  },
  {
    status: 'Chaos',
    target: 18,
    guidance: 'Situation is beyond all control',
  },
];