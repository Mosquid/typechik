(function() {
  initDOMEvents()
})()

function dispatch(ctx, e) {
  const val = e.target.value
  
  ctx.postMessage(val, '*')
}

function initDOMEvents() {
  const textarea = document.querySelector('#css')
  const iframe = document.querySelector('iframe')
  const cWin = iframe.contentWindow

  textarea.addEventListener('change', dispatch.bind(null, cWin))
}