const swiperOne = new Swiper('.slider__main', {
    slidesPerView: 3,
    spaceBetween: 24,
  
    navigation: {
      nextEl: '.slider__main-next',
      prevEl: '.slider__main-prev',
    },
    
    pagination: {
      el: '.slider__main-pagination',
      clickable: true,
      dynamicBullets: true,
      
    },

    breakpoints: {
      
      320: {
          slidesPerView: 1,
      },
      
      480: {
          slidesPerView: 1,
      },

      768: {
          slidesPerView: 2,
      },

      1100: {
        slidesPerView: 3,  
    }
    },
  
  watchOverflow: true,
  mousewhell: true,
  keyboard: true,
    
  });
  
  /* Второй слайдер*/
  const swiperTwo = new Swiper('.present__slider', {
    slidesPerView: 'auto',
  
    navigation: {
      nextEl: '.present__slider-next',
      prevEl: '.present__slider-prev',
    },
    
    pagination: {
      el: '.present__slider-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    watchOverflow: true,
    mousewhell: true,
    keyboard: true,
    
  });
  
  /* Третий слайдер*/
  const swiperThree = new Swiper('.services__slider', {
    slidesPerView: 'auto',
  
    navigation: {
      nextEl: '.services__slider-next',
      prevEl: '.services__slider-prev',
    },
    
    pagination: {
      el: '.services__slider-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    watchOverflow: true,
    mousewhell: true,
    keyboard: true,
    
  });
  
  
  /* Добавлят и убирает активный класс для кнопки*/
  const tabItems = Array.from(document.querySelectorAll('.services__box-button'));
  const contentItems = Array.from(document.querySelectorAll('.services__block'));
  
  const clearActiveClass = (element, className = 'is-active') => {
    element.find(item => item.classList.remove(`${ className }`))
  }
  
  const setActiveClass = (element, index, className = 'is-active') => {
    element[index].classList.add(`${ className }`)
  }
  
  const checkoutTabs = (item, index) => {
    item.addEventListener('click', () => {
      
      if (item.classList.contains('is-active')) return
  
      clearActiveClass(tabItems);
      clearActiveClass(contentItems);
  
      setActiveClass(tabItems, index);
      setActiveClass(contentItems, index);
    })
  }
tabItems.forEach(checkoutTabs);
  


//Форма отправки запроса
const form = document.forms["form"];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements["button"];

formArr.forEach((el) => {
  if (el.hasAttribute("data-reg")) {
    el.setAttribute("is-valid", "0");
    validFormArr.push(el);
  }
});

form.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

function inputHandler({ target }) {
  if (target.hasAttribute("data-reg")) {
    inputCheck(target);
  }
}

function inputCheck(el) {
  const inputValue = el.value;
  const inputReg = el.getAttribute("data-reg");
  const reg = new RegExp(inputReg);
  if (reg.test(inputValue)) {
    el.setAttribute("is-valid", "1");
    el.style.border = "1px solid rgb(0, 196, 0)";
  } else {
    el.setAttribute("is-valid", "0");
    el.style.border = "1px solid rgb(255, 0, 0)";
  }
}

function buttonHandler(e) {
  const allValid = [];
  validFormArr.forEach((el) => {
    allValid.push(el.getAttribute("is-valid"));
  });
  const isAllValid = allValid.reduce((acc, current) => {
    return acc && current;
  });

  if (!Boolean(Number(isAllValid))) {
    e.preventDefault();
  }
}



//Скролл основного меню и добавлнения фона 
const headerBox = document.querySelector('.header__box'),
      menu = document.querySelector('.header__menu');
let scrollpos = window.scrollY;
const scrollChange = 80;
const addClassScroll = () => headerBox.classList.add('header__active-scroll'),
      addClassMenu = () => menu.classList.add('header__menu-scroll');

const removeClassScroll = () => headerBox.classList.remove('header__active-scroll'),
      removeClassMenu = () => menu.classList.remove('header__menu-scroll');

window.addEventListener('scroll', () => { 
  scrollpos = window.scrollY;
  if (scrollpos >= scrollChange) {
    addClassScroll();
    addClassMenu();
  } else {
    removeClassScroll();
    removeClassMenu();
  }
});


//Кнопка мобильного меню
const burgerMobile = document.getElementById('burger');
const header = document.querySelector('header');

burgerMobile.addEventListener('click', () => {
  header.classList.toggle('open');
})







 
