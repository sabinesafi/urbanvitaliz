---
layout: empty
scripts:
    - src: "./build/bundle.js"
      defer: true
      async: false
      crossorigin: "anonymous"
styles:
    - href: "./build/bundle.css"
---

<div class="svelte-main"></div>

<style>
    main{
        width: 100%;
        padding: 0 calc( max(5px, ( 100vw - 80em ) / 2 ));
    }

</style>