<script lang="ts">
  import { rollOnTable } from "../../lib/tables";
  import { navigate } from "svelte-routing";
  import { content } from "../../App.svelte";
  import RollIcon from "../../assets/d20.svg";
  import PlusIcon from "../../assets/plus.svg";
  import {
    actionTable,
    humanoidDamageTable,
    personalityTraitsTable,
    professionTable,
    speciesTable,
    thematicTable,
  } from "../../data/everlight";
  import { femaleNames, lastNames, maleNames } from "../../data/names";
  import { getRandomItem } from "../../lib/random";

  let sentence = $state("");
  let names = [maleNames, femaleNames];

  function getName() {
    const list = getRandomItem(names);
    const firstName = getRandomItem(list);
    const lastName = getRandomItem(lastNames);

    return `${firstName} ${lastName}`;
  }

  function generate() {
    const name = getName();
    const damage = rollOnTable(humanoidDamageTable);
    const descriptor = rollOnTable(personalityTraitsTable);
    const species = rollOnTable(speciesTable);
    const type = rollOnTable(professionTable);
    const verb = rollOnTable(actionTable);
    const something = rollOnTable(thematicTable);

    sentence = `${name} is a ${descriptor.description} ${species.description} ${type.description} who ${verb.description} ${something.description} and does ${damage.description} damage.`;
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
  <h4 class="text-2xl font-bold mb-3">Random NPC</h4>

  <div class="flex flex-col gap-3">
    <div>
      <div class="flex pr-3 gap-1 items-center">
        <div>Generate</div>
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
