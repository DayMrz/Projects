const boxes = document.querySelectorAll('.box');
const show = document.querySelector('.show');


window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4 //innerHeight: returns the interior height of the window in pixels

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
