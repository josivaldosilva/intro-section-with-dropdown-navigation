const menuIcons = document.querySelectorAll('.c-icon-menu')
const navMenu = document.querySelector('.c-mobile-nav')
const backdrop = document.querySelector('.c-backdrop')

const mobileFirArrow = document.querySelector('.mobile-f-arrow') 
const mobileSecArrow = document.querySelector('.mobile-s-arrow') 
const mobileSecDroppedList = document.querySelector('.s-mob')
const mobileFirDroppedList = document.querySelector('.f-mob')

const desktopFirArrow = document.querySelector('.mobile-f-arrow') 
const desktopSecArrow = document.querySelector('.mobile-s-arrow') 
const desktopSecDroppedList = document.querySelector('.s-mob')
const desktopFirDroppedList = document.querySelector('.f-mob')


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

// Mobile drodown menu

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
