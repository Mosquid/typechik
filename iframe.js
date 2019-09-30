window.addEventListener('message', handleMessage)

function handleMessage(msg) {
  const style = document.querySelector('#external')

  style.innerHTML = msg.data
  
  const evt = document.createEvent('Event')
  
  setTimeout(function() {
    dispatchEvent(new Event('recalc'));
  }, 100)
}