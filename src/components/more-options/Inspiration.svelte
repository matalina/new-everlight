<script lang="ts">
  import { beastDamageTable, creatureDescriptorTable, creatureDispositionTable, creatureMotivationTable, draconicDamageTable, ElementalDamageTable, etherealDamageTable, feyDamageTable, fiendDamageTable, golemDamageTable, humanoidDamageTable, insectDamageTable, ironVeilTable, mechanicalDamageTable, netherTable, oozeSlimeDamageTable, plantDamageTable, undeadDamageTable, wyldTable } from "../../data/everlight";
  import type { RandomTable } from "../../data/types";
  import { rollOnTable } from "../../lib/tables";
  import { navigate } from 'svelte-routing';
  import { content } from '../../App.svelte';
  import RollIcon from '../../assets/d20.svg';
  import PlusIcon from '../../assets/plus.svg';
  import { adjectives, benefits, complications, emotions, environments, motivations, nouns, verbs } from "../../data/inspiration";
  import { inspirationCategories } from "../../data/tables";
  import { getRandomItem } from "../../lib/random";

let count = $state(3);
let sentence = $state('');

const lists: {[key:string]: string[]} = {
  verbs,
  nouns,
  adjectives,
  emotions,
  motivations,
  benefits,
  environments,
  complications,
};

function generate() {
  const words: string[] = [];
  for(let i = 0; i < count; i++) {
    const list = rollOnTable(inspirationCategories);
    words.push(getRandomItem(lists[list.description.toLowerCase()]))
  }

  sentence = `${words.join(', ').toLowerCase()}`;
}

function saveToStory() {
    content.add({
      type: 'table',
      output: sentence,
    });
    navigate('/');
  }
</script>

<div>
  <h4 class="text-2xl font-bold mb-3">Random Creature</h4>

  <div class="flex">
    <div>
      <div class="flex pr-3">
        <input
          type="number"
          class="w-[96px]"
          maxlength="5"
          bind:value={count}>
        <button
          class="w-[48px] flex items-center justify-center"
          onclick={generate}
        >
          <img src={RollIcon} alt="Roll" class="h-[24px]"/>
        </button>
      </div>
    </div>
    <div class="flex grow gap-3 justify-between items-center">
      {#if sentence}
        <div class="">{@html sentence}</div>
        <div>
          <button
            class="w-[48px]"
            onclick={saveToStory}
          >
            <img src={PlusIcon} alt="Roll" class="h-[24px]"/>
          </button>
      </div>
      {/if}
    </div>
  </div>
</div>