const sidebar = document.querySelector('#container')
/** grid-template-columns: minmax(100px, 200px) auto */
let state = 1
function toggle() {
    if (state === 1) {
        sidebar.style.gridTemplateColumns = 'minmax(100px, 100px) auto'
        state = 0
    } else {
        sidebar.style.gridTemplateColumns = 'minmax(100px, 250px) auto'
        state = 1
    }
}