const apiUrl = 'https://eu-gb.functions.cloud.ibm.com/api/v1/web/mosquid%40gmail.com_dev/load-external-css/weather.json';

(function() {
  initDOMEvents()
})()

function dispatch(ctx, e) {
  const val = e.target.value
  
  ctx.postMessage(val, '*')
}

function setIframeHeight(e) {
  const iframe = e.target
  let height
  
  if (iframe instanceof Node) {
    height = iframe.contentWindow.document.body.scrollHeight
  } else {
    height = iframe.document.body.scrollHeight
  }
  document.querySelector('iframe').style.height = height + 'px'
}

async function getExternalCSS() {
  const input = document.querySelector('input')
  const val = input.value
  
  if (!val) return
  
  const data = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url: val
    })
  }).then(e => e.json())

  if (!data.body.code) return
  
  document.querySelector('textarea').value = data.body.code
  document.querySelector('textarea').dispatchEvent(new Event('change'))
}

function initDOMEvents() {
  const textarea = document.querySelector('#css')
  const iframe = document.querySelector('iframe')

  iframe.addEventListener('load', setIframeHeight)

  const cWin = iframe.contentWindow

  cWin.addEventListener('recalc', setIframeHeight)
  for (let i of ['change', 'keyup', 'input', 'blur'])
    textarea.addEventListener(i, dispatch.bind(null, cWin))
}