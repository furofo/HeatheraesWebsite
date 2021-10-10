let inMobileMenu = false;

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMobileMenu() {
    
    console.log("function clicked");
    let x = document.getElementById("myTopnav");
    console.log(x);
    if (x.className === "topnav") {
      inMobileMenu = true;
      x.className += " responsive";
      console.log(x);
    } else {
      x.className = "topnav";
    }
  }

 
  addActive = function(el) {
  
    let aElementsToRemove = document.getElementsByTagName('a');
  
    for (let i = 0; i < aElementsToRemove.length; i++) {
      aElementsToRemove[i].classList.remove("active");
    }
    el.classList.add('active');
    if(inMobileMenu) {
      toggleMobileMenu();
    }
  }
  window.onload = function() {
  
 
   document.getElementById('footer-close-btn').onclick = function() {
     console.log("close button clicked yeeehawww!");
      document.getElementsByClassName('contact-footer')[0].style.display = "none";
   }

   document.getElementsByTagName("main")[0].onclick= function() {
     if(inMobileMenu) {
       toggleMobileMenu();
     }
   }
  }