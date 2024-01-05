const farotate = document.querySelector('.fa-rotate')
const faxmark = document.querySelector('.fa-xmark')

farotate.addEventListener('click', () => {
    location.reload()
})
faxmark.addEventListener('click', () => {
    window.close()
})