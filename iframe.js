window.addEventListener('message', handleMessage)

function handleMessage(msg) {
  const style = document.querySelector('#external')

  style.innerHTML = msg.data
  
  const evt = document.createEvent('Event')
  evt.initEvent('load', false, false)
  window.dispatchEvent(evt)
}