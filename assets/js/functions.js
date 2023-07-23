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
const desktopFirArrow = document.querySelector('.desktop-f-arrow') 
const desktopSecArrow = document.querySelector('.desktop-s-arrow') 


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
    e.target.classList.toggle('called')
    const isCalled = mobileFirArrow.getAttribute('class')

   if(isCalled == 'mobile-f-arrow called'){
    mobileFirArrow.src = 'assets/images/icon-arrow-up.svg'
    mobileFirDroppedList.classList.add('drop')
   }else {
    mobileFirArrow.src = 'assets/images/icon-arrow-down.svg'
    mobileFirDroppedList.classList.remove('drop')
   }
})


mobileSecArrow.addEventListener('click', e => {
    e.target.classList.toggle('called')
    const isCalled = mobileSecArrow.getAttribute('class')

   if(isCalled == 'mobile-s-arrow called'){
    mobileSecArrow.src = 'assets/images/icon-arrow-up.svg'
   mobileSecDroppedList.classList.add('drop')
   }else {
    mobileSecArrow.src = 'assets/images/icon-arrow-down.svg'
    mobileSecDroppedList.classList.remove('drop')
   }
})


//Desktop Dropdown menu

function firstDrop(){
    desktopFirArrow.src = 'assets/images/icon-arrow-up.svg'
    desktopFirDroppedList.classList.add('drop')
}

function firstDropOff(){
    desktopFirDroppedList.classList.remove('drop')
    desktopFirArrow.src = 'assets/images/icon-arrow-down.svg'
}

function secondDrop(){
    desktopSecArrow.src = 'assets/images/icon-arrow-up.svg'
    desktopSecDroppedList.classList.add('drop')
}

function secondDropOff(){
    desktopSecArrow.src = 'assets/images/icon-arrow-down.svg'
    desktopSecDroppedList.classList.remove('drop')
}