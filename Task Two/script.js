let cardButtons = document.getElementById('buttons')
let image = document.getElementById('card-image')
let imageError = document.getElementById('image-error')
let title = document.getElementById('title')
    let imgUrl = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1CXuQ-iIUUqvCjLN133kck99bmsUfKZxY3Y0Wsb_kRA&s=10',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qMIJwzlna-0AcKTdf54VetUAATi_aRiTQ5O3Zrkfpg&s=10',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBk0ICGeQh_oz3jE3VlDbko8KN_WaavgfgSIPV_ZNUNg&s',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmAMaUrEdvdA_TVcW0ycWhgHTfmDpCxiNKmnyLKbAKCQ&s',
         null
    ]
image.src = imgUrl[0]
image.alt = 'Image #1'
for (let i = 0; i < 5; i++) {
    const button = document.createElement('button')
    let text
    if (imgUrl[i]) {
        text = `Image #${i + 1}`
    } else {
        text = 'Image Error'
    }


    button.textContent = text
    button.classList.add(
        'px-3',
        'py-1',
        'rounded-md',
        'bg-gray-200',
        'text-gray-800',
        'text-[9px]',
        'font-medium',
        'transition',
        'duration-200',
        'hover:bg-emerald-600',
        'hover:text-white'
    )
    cardButtons.appendChild(button)
    button.addEventListener('click', function () {
        title.textContent = text
        if (imgUrl[i]) {
            image.src = imgUrl[i]
            image.alt = text
            image.style.display = 'block'
            imageError.style.display = 'none'
        }
        else {
            image.style.display = 'none'
            imageError.style.display = 'flex'
        }
    })
}


