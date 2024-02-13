import { h, reactive, nextTick, ref } from 'vue'

const linkAttrs = reactive<{
  link: string | null
  filename: string | null
}>({
  link: null,
  filename: null
})
const linkRef = ref()
export function useFileSaver(linkText?: string) {
  function FileSaver() {
    return h(
      'a',
      {
        href: linkAttrs.link,
        download: linkAttrs.filename,
        class: 'hidden',
        ref: linkRef
      },
      [linkText ?? 'download link']
    )
  }
  async function saveAs(objectUrl?: string, name?: string) {
    if (!objectUrl || !name) return
    linkAttrs.filename = name
    linkAttrs.link = objectUrl

    await nextTick()
    if (linkRef.value) {
      linkRef.value.click()
      linkAttrs.filename = null
      linkAttrs.link = null
    }
  }
  return {
    FileSaver,
    saveAs
  }
}
