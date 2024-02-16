# vue-file-saver
![size badge](https://deno.bundlejs.com/badge?q=vue-file-saver@latest&config={%22esbuild%22:{%22external%22:[%22vue%22]}})
![NPM Downloads](https://img.shields.io/npm/dm/vue-file-saver)
![NPM License](https://img.shields.io/npm/l/vue-file-saver)

Simple alternative `file-saver` for Vue


## Instalation 

```bash
pnpm add vue-file-saver
```
```bash
npm i vue-file-saver
```

## Usage

Add `FileSaver` component to your App.vue

```vue
<script setup>
   const { FileSaver } = useFileSaver()
</script>

<template>
    <!-- Your code... -->
    <FileSaver />
</template>
```

Use `saveAs` function in any component

```vue
<script setup>
    const { saveAs } = useFileSaver()
    
    function myDownloadFn() {
      saveAs(Blob, "my-file.txt")
    }
</script>

...
```
