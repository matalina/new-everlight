<script lang="ts">
  import type { RandomTable } from "../../data/types";
  import { rollOnTable } from "../../lib/tables";
  import { navigate } from "svelte-routing";
  import { content } from "../../App.svelte";
  import RollIcon from "../../assets/d20.svg";
  import PlusIcon from "../../assets/plus.svg";
  import {
    debilitatingInjuryChaosTable,
    debilitatingInjuryElementalTable,
    debilitatingInjuryNecroticTable,
    debilitatingInjuryPhysicalTable,
    debilitatingInjuryPsychicTable,
    debilitatingInjuryRadiantTable,
    debilitatingInjuryShadowTable,
    debilitatingInjuryToxicTable,
    lastingScarChaosTable,
    lastingScarElementalTable,
    lastingScarNecroticTable,
    lastingScarPhysicalTable,
    lastingScarPsychicTable,
    lastingScarRadiantTable,
    lastingScarShadowTable,
    lastingScarToxicTable,
    lingeringTraumaChaosTable,
    lingeringTraumaElementalTable,
    lingeringTraumaNecroticTable,
    lingeringTraumaPhysicalTable,
    lingeringTraumaPsychicTable,
    lingeringTraumaRadiantTable,
    lingeringTraumaShadowTable,
    lingeringTraumaToxicTable,
    strainChaosTable,
    strainElementalTable,
    strainNecroticTable,
    strainPhysicalTable,
    strainPsychicTable,
    strainRadiantTable,
    strainShadowTable,
    strainToxicTable,
  } from "../../data/everlight";

  let damageTypes: { [damage: string]: { [wound: string]: RandomTable } } = {
    physical: {
      strain: strainPhysicalTable,
      lingeringTrauma: lingeringTraumaPhysicalTable,
      debilitatingInjury: debilitatingInjuryPhysicalTable,
      lastingScar: lastingScarPhysicalTable,
    },
    psychic: {
      strain: strainPsychicTable,
      lingeringTrauma: lingeringTraumaPsychicTable,
      debilitatingInjury: debilitatingInjuryPsychicTable,
      lastingScar: lastingScarPsychicTable,
    },
    elemental: {
      strain: strainElementalTable,
      lingeringTrauma: lingeringTraumaElementalTable,
      debilitatingInjury: debilitatingInjuryElementalTable,
      lastingScar: lastingScarElementalTable,
    },
    necrotic: {
      strain: strainNecroticTable,
      lingeringTrauma: lingeringTraumaNecroticTable,
      debilitatingInjury: debilitatingInjuryNecroticTable,
      lastingScar: lastingScarNecroticTable,
    },
    radiant: {
      strain: strainRadiantTable,
      lingeringTrauma: lingeringTraumaRadiantTable,
      debilitatingInjury: debilitatingInjuryRadiantTable,
      lastingScar: lastingScarRadiantTable,
    },
    shadow: {
      strain: strainShadowTable,
      lingeringTrauma: lingeringTraumaShadowTable,
      debilitatingInjury: debilitatingInjuryShadowTable,
      lastingScar: lastingScarShadowTable,
    },
    chaos: {
      strain: strainChaosTable,
      lingeringTrauma: lingeringTraumaChaosTable,
      debilitatingInjury: debilitatingInjuryChaosTable,
      lastingScar: lastingScarChaosTable,
    },
    toxic: {
      strain: strainToxicTable,
      lingeringTrauma: lingeringTraumaToxicTable,
      debilitatingInjury: debilitatingInjuryToxicTable,
      lastingScar: lastingScarToxicTable,
    },
  };
  let damage = $state("");
  let wound = $state("");
  let woundTables = $derived(damageTypes[damage] || {});
  let sentence = $state("");

  function generate() {
    let result = rollOnTable(woundTables[wound]);
    sentence = result.description;
  }

  function saveToStory() {
    content.add({
      type: "table",
      output: sentence,
    });
    navigate("/");
  }

  function output(camelCase: string) {
    const result = camelCase.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
</script>

<div>
  <h4 class="text-2xl font-bold mb-3">Random Damage Wound</h4>

  <div class="flex flex-col gap-3">
    <div>
      <div class="flex pr-3">
        <select class="" bind:value={damage}>
          <option value="">Select Damage Type</option>
          {#each Object.keys(damageTypes) as type}
            <option value={type}>{output(type)}</option>
          {/each}
        </select>
        <select bind:value={wound}>
          <option value="">Select Damage Type</option>
          {#each Object.keys(woundTables) as type}
            <option value={type}>{output(type)}</option>
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
