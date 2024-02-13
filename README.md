# vue-file-saver

Simple alternative `file-saver` for Vue

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
