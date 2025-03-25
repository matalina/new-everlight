<script lang="ts" module>
  import { createContent } from './data/models/content.svelte';

  export let content = createContent();
</script>

<script>
  import { Route, Router } from 'svelte-routing';
  import Story from './components/pages/Story.svelte';
  import More from './components/pages/More.svelte';
  import Settings from './components/pages/Settings.svelte';


  let url = $state('');
</script>

<div id="app" class="mx-auto lg:w-1/2">
  <Router {url}>
    <div class="layout p-3 border h-full">
      <section class="">
        <Route path="/"><Story /></Route>
        <Route path="/more"><More /></Route>
        <Route path="/settings"><Settings/></Route> 
      </section>
    </div>
  </Router>
</div>

<style lang="postcss">
 .layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 65px auto;
  }
</style>
