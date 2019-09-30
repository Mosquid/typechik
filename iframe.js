window.addEventListener('message', handleMessage)

function handleMessage(msg) {
  const style = document.querySelector('#external')

  style.innerHTML = msg.data
}