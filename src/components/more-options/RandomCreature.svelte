<script lang="ts">
  import {
    beastDamageTable,
    creatureDescriptorTable,
    creatureDispositionTable,
    creatureMotivationTable,
    draconicDamageTable,
    ElementalDamageTable,
    etherealDamageTable,
    feyDamageTable,
    fiendDamageTable,
    golemDamageTable,
    humanoidDamageTable,
    insectDamageTable,
    ironVeilTable,
    mechanicalDamageTable,
    netherTable,
    oozeSlimeDamageTable,
    plantDamageTable,
    undeadDamageTable,
    wyldTable,
  } from "../../data/everlight";
  import type { RandomTable } from "../../data/types";
  import { rollOnTable } from "../../lib/tables";
  import { navigate } from "svelte-routing";
  import { content } from "../../App.svelte";
  import RollIcon from "../../assets/d20.svg";
  import PlusIcon from "../../assets/plus.svg";

  // a [disposition] [descriptor] [type] who [motivation] from [realm].
  // Humanoid: Aelith, Ferai, Noctari, Drakari
  // Beast: Chimera, Animal
  // Mech: Automation, Mechanical
  // Ethereal: Ghost, Shadow

  let realm = $state("");
  let realms: { [key: string]: RandomTable } = {
    "The Iron Veil": ironVeilTable,
    "The Wyld": wyldTable,
    "The Nether": netherTable,
  };
  let sentence = $state("");

  function getCreatureTable(creature: string) {
    const types: { [key: string]: RandomTable } = {
      aelith: humanoidDamageTable,
      ferai: humanoidDamageTable,
      noctari: humanoidDamageTable,
      drakari: humanoidDamageTable,
      chimera: beastDamageTable,
      animal: beastDamageTable,
      automation: mechanicalDamageTable,
      mechanical: mechanicalDamageTable,
      ghost: etherealDamageTable,
      shadow: etherealDamageTable,
      undead: undeadDamageTable,
      draconic: draconicDamageTable,
      "ooze/slime": oozeSlimeDamageTable,
      insect: insectDamageTable,
      plant: plantDamageTable,
      elemental: ElementalDamageTable,
      golem: golemDamageTable,
      fey: feyDamageTable,
      fiend: fiendDamageTable,
    };

    return types[creature.toLowerCase()];
  }

  function generate() {
    const table: RandomTable = realms[realm];

    const creature = rollOnTable(table);
    const damage = rollOnTable(getCreatureTable(creature.description));
    const disposition = rollOnTable(creatureDispositionTable);
    const descriptor = rollOnTable(creatureDescriptorTable);
    const motivation = rollOnTable(creatureMotivationTable);

    sentence = `A ${disposition.description} ${descriptor.description} ${creature.description} who ${motivation.description} from ${realm} that does ${damage.description} damage.`;
  }

  function saveToStory() {
    content.add({
      type: "table",
      output: sentence,
    });
    navigate("/");
  }
</script>

<div>
  <h4 class="text-2xl font-bold mb-3">Random Creature</h4>

  <div class="flex flex-col gap-3">
    <div>
      <div class="flex pr-3">
        <select class="" bind:value={realm}>
          <option value="">Select Realm</option>
          {#each Object.keys(realms) as realm}
            <option value={realm}>{realm}</option>
          {/each}
        </select>
        <button
          class="w-[48px] flex items-center justify-center"
          onclick={generate}
        >
          <img src={RollIcon} alt="Roll" class="h-[24px]" />
        </button>
      </div>
    </div>
    <div class="flex grow gap-3 justify-between items-center">
      {#if sentence}
        <div class="">{@html sentence}</div>
        <div>
          <button class="w-[48px]" onclick={saveToStory}>
            <img src={PlusIcon} alt="Roll" class="h-[24px]" />
          </button>
        </div>
      {/if}
    </div>
  </div>
</div>
