<script lang="ts">
	import RandomNPC from './../more-options/RandomNPC.svelte';
  import Page from '../ui/Page.svelte';
  import RandomTables from '../more-options/RandomTables.svelte';
  import RandomCreature from '../more-options/RandomCreature.svelte';

</script>

<Page back="/">
  <h3 class="text-3xl font-bold mb-3">More Options</h3>

  <RandomTables />
  <RandomNPC />
  <RandomCreature />
</Page>