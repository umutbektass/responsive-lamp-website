/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// Menu hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach((i) => i.addEventListener('click', linkAction))

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY > 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SWIPER POPULAR ===============*/


const popularSwiler = new Swiper('.popular__content', {
    // Optional parameters
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,

    // If we need pagination


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            centeredSlides: false
        }
    }

});


/*=============== CHOOSE FAQ ===============*/
const faqItems = document.querySelectorAll('.choose__faq-item')

// 1. Select each item
faqItems.forEach(item => {
    const faqHeader = item.querySelector('.choose__faq-header')

    // 2.Select each button click
    faqHeader.addEventListener('click', () => {
        // 7. Select the current faq-open class
        const open = document.querySelector('.faq-open');
        
        // 5. Call the toggleItem function
        toggleItem(item)
    }
    )
})

// 3. Create function to display the content
const toggleItem = (item) => {
    // 3.1 Select each faq content
    const faqContent = item.querySelector('.choose__faq-content')

    // 6. If the same item contains the faq-open class, remove
    if (item.classList.contains('faq-open')) {
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')
    }
    else {
        // 4. Add max-height to the content and add the faq-open class

        faqContent.style.height = faqContent.scrollHeight + 'px'
        item.classList.add('faq-open')
    }
}


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
