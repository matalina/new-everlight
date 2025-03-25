import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import { createContent } from './data/models/content.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app;