const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => {
  container.classList.add('show-nav')
  close.classList.remove('displaynone')
  open.classList.add('displaynone')
})

close.addEventListener('click', () => {
  container.classList.remove('show-nav')
  open.classList.remove('displaynone')
  close.classList.add('displaynone')
})