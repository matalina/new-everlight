<script lang="ts">
  import { navigate } from "svelte-routing";
  import { content } from "../../App.svelte";
  import RollIcon from "../../assets/d20.svg";
  import PlusIcon from "../../assets/plus.svg";
  import { rollOnTable } from "../../lib/tables";
  import { moreTables } from "../../data/constants";

  const tables = $derived(Object.keys({ ...moreTables }));

  let result: string = $state("");
  // svelte-ignore state_referenced_locally
  let value: string = $state(moreTables[tables[0]].name);

  function getResult() {
    const answer = rollOnTable(moreTables[value]);
    result = `<strong>${value}</strong>: ${answer.description}<br/><small>(${answer.roll.output})</small>`;
  }

  function saveToStory() {
    content.add({
      type: "table",
      output: result,
    });
    navigate("/");
  }
</script>

<div>
  <h4 class="text-2xl font-bold mb-3">Random Tables</h4>

  <div class="flex flex-col gap-3">
    <div>
      <div class="flex pr-3">
        <select class="border" bind:value>
          {#each tables as table}
            <option value={table}>{table}</option>
          {/each}
        </select>
        <button
          class="w-[48px] flex items-center justify-center"
          onclick={getResult}
        >
          <img src={RollIcon} alt="Roll" class="h-[24px]" />
        </button>
      </div>
    </div>
    <div class="flex grow gap-3 justify-between items-center">
      {#if result}
        <div class="">{@html result}</div>
        <div>
          <button class="w-[48px]" onclick={saveToStory}>
            <img src={PlusIcon} alt="Roll" class="h-[24px]" />
          </button>
        </div>
      {/if}
    </div>
  </div>
</div>
