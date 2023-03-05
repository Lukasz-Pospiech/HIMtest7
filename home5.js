window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const get = id => document.getElementById(id);


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

window.addEventListener("load", function() {


    const burger = get('containerHamburger');
    burger.addEventListener("touchstart", function(event) {
      if (event.changedTouches[0]) {
          burger.classList.toggle("change");
      }
  }, false);

    let menuState = "closed";
    const menuItems = document.querySelectorAll(".menuItems");
    const menuDiv = get('menuDiv');
    burger.addEventListener("touchstart", function(event) {
        if (event.changedTouches[0]) {
            if (menuState === "closed") {
              menuDiv.classList.remove("closeMenu");
              menuDiv.classList.add("openMenu");
              
                menuState = "open";
            }
            else if (menuState === "open") {
              menuDiv.classList.remove("openMenu");
              menuDiv.classList.add("closeMenu");

                menuState = "closed";
            }
        }
    }, false);


  

    
     







});


