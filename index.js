
window.addEventListener('resize', () =>{
    
    if(innerWidth >= 481 && document.querySelector('header').id === 'header-mobile-open'){
        toggleMobileMenu();
    }
})

const toggleMobileMenu = function(){
    const header = document.querySelector('header')
    if(header.id === 'header-initial'){
      header.id = 'header-mobile-open';
      toggleButtons(true);
      toggleSocialMedia(true);
    } else {
        header.id = 'header-initial';
        toggleButtons(false);
        toggleSocialMedia(false);
    }

  }

  const toggleButtons = function(isOpen) {
    //querySelectorAll returns results in order of HTML, so the classNames are reversed when toggling
    if(isOpen){
        const buttons = document.querySelectorAll('.menu-button-open, .menu-button-closed');
        buttons[0].className = 'menu-button-closed';
        buttons[1].className = 'menu-button-open';
    } else {
        const buttons = document.querySelectorAll('.menu-button-open, .menu-button-closed');
        buttons[0].className = 'menu-button-open';
        buttons[1].className = 'menu-button-closed';
    }
  }

  const toggleSocialMedia = function(isOpen){
    if(isOpen){
        document.getElementById('dropdown-social-media-hidden').id = 'dropdown-social-media';
    } else {
        document.getElementById('dropdown-social-media').id = 'dropdown-social-media-hidden';
    }
  }

  const featureSelectedToggler = function(numTab){
      const tabs = document.querySelectorAll('.button-wrapper');
      
      tabs.forEach((tab) => {
          tab.classList.remove('selected');
      })
  
      tabs[numTab].classList.add('selected');
  
      featurePicInfoToggler(numTab);
    }

  const featurePicInfoToggler = function (numTab){
    const tabs = document.querySelectorAll('.picture-info');
    
    tabs.forEach((tab) => {
        tab.classList.add('hidden');
    })

    tabs[numTab].classList.remove('hidden');
  }


  const toggleAccordion = function(num){
    const tab = document.querySelectorAll('.accordion-content');
    if(tab[num].classList.contains('content-hidden')){
      tab[num].classList.remove('content-hidden');
      tab[num].classList.add('content-visible');
    } else {
      tab[num].classList.remove('content-visible');
      tab[num].classList.add('content-hidden');
    }

    rotateAccordionIcon(num);
  }

  const rotateAccordionIcon = function(num){
    const icon = document.querySelectorAll('.accordion-icon');
    icon[num].classList.toggle('open');

  }


  const emailValidator = function(){
    const emailInput = document.querySelector('input');
    const value = emailInput.value;

    let validEmail = validateEmail(value);
    displayEmailResult(validEmail);

  }

  const validateEmail = function(email) {
      let re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  const displayEmailResult = function(bool){
    const pTag = document.getElementById('email-error-message');
    const emailInput = document.querySelector('input');
    const inputDiv = document.getElementById('input-container');
    if(bool){
      pTag.innerHTML = 'Success!'
      inputDiv.style.backgroundColor = '#77dd77';
    } else {
      inputDiv.style.backgroundColor = 'hsl(0, 94%, 66%)';
      pTag.innerHTML = "Whoops, make sure it's an email.";
    }

    setTimeout(() => {
      inputDiv.style.backgroundColor = 'transparent';
      pTag.innerHTML = '';
    }, 3000);
  }


  

