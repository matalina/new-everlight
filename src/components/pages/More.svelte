<script lang="ts">
  import RandomNPC from "./../more-options/RandomNPC.svelte";
  import Page from "../ui/Page.svelte";
  import RandomTables from "../more-options/RandomTables.svelte";
  import RandomCreature from "../more-options/RandomCreature.svelte";
  import RandomDamage from "../more-options/RandomDamage.svelte";
  import Inspiration from "../more-options/Inspiration.svelte";
</script>

<Page back="/">
  <h3 class="text-3xl font-bold mb-3">More Options</h3>

  <div class="flex flex-col gap-2">
    <RandomTables />
    <Inspiration />
    <RandomNPC />
    <RandomCreature />
    <RandomDamage />
  </div>
</Page>
