const menuIcons = document.querySelectorAll('.c-icon-menu')
const navMenu = document.querySelector('.c-mobile-nav')
const backdrop = document.querySelector('.c-backdrop')

const mobileFirArrow = document.querySelector('.mobile-f-arrow') 
const mobileSecArrow = document.querySelector('.mobile-s-arrow') 
const mobileSecDroppedList = document.querySelector('.s-mob')
const mobileFirDroppedList = document.querySelector('.f-mob')

const desktopFirFather = document.querySelector('.f-father') 
const desktopSecFather = document.querySelector('.s-father') 
const desktopSecDroppedList = document.querySelector('.s-desk')
const desktopFirDroppedList = document.querySelector('.f-desk')


menuIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        backdrop.classList.toggle('active')
        navMenu.classList.toggle('active')
        mobileFirArrow.src = 'assets/images/icon-arrow-down.svg'
        mobileFirDroppedList.classList.remove('drop')
        mobileSecArrow.src = 'assets/images/icon-arrow-down.svg'
        mobileSecDroppedList.classList.remove('drop')
    })
})

// Mobile dropdown menu

mobileFirArrow.addEventListener('click', e => {
    
    mobileFirDroppedList.classList.toggle('drop')
    
   if(mobileFirDroppedList.getAttribute('class') == 'f-dropdown-list f-mob drop'){
        mobileFirArrow.src = 'assets/images/icon-arrow-up.svg'
   }else {
        mobileFirArrow.src = 'assets/images/icon-arrow-down.svg'
   }
})


mobileSecArrow.addEventListener('click', e => {
    
    mobileSecDroppedList.classList.toggle('drop')

   if(mobileSecDroppedList.getAttribute('class') == 's-dropdown-list s-mob drop'){
        mobileSecArrow.src = 'assets/images/icon-arrow-up.svg'   
   }else {
        mobileSecArrow.src = 'assets/images/icon-arrow-down.svg'
   }
})


//Desktop Dropdown menu

function firstDrop(){
    
    desktopFirDroppedList.classList.toggle('drop')
    if(desktopFirDroppedList.getAttribute('class') == 'f-dropdown-list f-desk drop'){
        desktopFirArrow.src = 'assets/images/icon-arrow-up.svg'
    }else {
        desktopFirArrow.src = 'assets/images/icon-arrow-down.svg'
    }
}


function secondDrop(){
   
    desktopSecDroppedList.classList.toggle('drop')
    if(desktopSecDroppedList.getAttribute('class') == 's-dropdown-list s-desk drop'){
        desktopSecArrow.src = 'assets/images/icon-arrow-up.svg'
    }else {
        desktopSecArrow.src = 'assets/images/icon-arrow-down.svg'
    }
}

