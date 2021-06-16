const panels = document.querySelectorAll('.panel');
const container = document.querySelector('.container');
const openNav = document.querySelector('#open');
const closeNav = document.querySelector('#close');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })

}

openNav.addEventListener('click', () => {
    container.classList.add('show-nav')
})
closeNav.addEventListener('click', () => {
    container.classList.remove('show-nav')
})


