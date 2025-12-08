export const downloadFile = (name: string, content: string | Blob) => {
  const blob =
    content instanceof Blob
      ? content
      : new Blob([content], { type: 'text/plain' })

  const url = window.URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = name

  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)

  window.URL.revokeObjectURL(url)
}

export const stripExtension = (name: string) =>
  name.split('.').slice(0, -1).join('.')
