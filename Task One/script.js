const addButtons = document.getElementById('add-buttons')
let count = 0

addButtons.addEventListener('click', function () {
    const countButton = document.getElementById('count-button')
    const par = document.getElementById('par')
    par.textContent = ' '
    count++
    let button = document.createElement('button')
    button.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'm-2' , 'border' , 'border-width-2')
    let content = button.textContent = ` BUTTON ${count} `
    countButton.appendChild(button)
    button.addEventListener('click', function () {
        const resulet = document.getElementById('resulet')
        resulet.textContent = ` CLIKED ON ${content} `
    })

})

