
window.addEventListener('resize', () =>{
    
    if(innerWidth >= 481 && document.querySelector('header').id === 'header-mobile-open'){
        toggleMobileMenu()
    }
})

const toggleMobileMenu = function(){
    const header = document.querySelector('header')
    if(header.id === 'header-initial'){
      header.id = 'header-mobile-open'
      toggleButtons(true)
      toggleSocialMedia(true)
    } else {
        header.id = 'header-initial'
        toggleButtons(false)
        toggleSocialMedia(false)
    }

  }

  const toggleButtons = function(isOpen) {
    //querySelectorAll returns results in order of HTML, so the classNames are reversed when toggling
    if(isOpen){
        const buttons = document.querySelectorAll('.menu-button-open, .menu-button-closed')
        buttons[0].className = 'menu-button-closed'
        buttons[1].className = 'menu-button-open'
    } else {
        const buttons = document.querySelectorAll('.menu-button-open, .menu-button-closed')
        buttons[0].className = 'menu-button-open'
        buttons[1].className = 'menu-button-closed'
    }
  }

  const toggleSocialMedia = function(isOpen){
    if(isOpen){
        document.getElementById('dropdown-social-media-hidden').id = 'dropdown-social-media'
    } else {
        document.getElementById('dropdown-social-media').id = 'dropdown-social-media-hidden'
    }
  }