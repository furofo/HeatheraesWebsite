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
   
  }
  window.onload = function() {
    /*
    //set height of mobile restaruant logo to div containing fa fa bars
    let mobileLogoPic = document.getElementsByClassName("mobile-logo");
    console.log(mobileLogoPic[0])
    console.log(mobileLogoPic[0].clientHeight);
    //for mobile potrait
    let fafaBars = document.getElementsByClassName("icon");
    // for mobile landscape
    let aLink = document.getElementsByTagName('a');
    console.log(mobileLogoPic[0]);
    console.log(fafaBars[0]);
    console.log(fafaBars[0].clientHeight);
    // leave some room for some padding simple math simple dazoooo
    if(mobileLogoPic[0].clientHeight != undefined){
      console.log("image was resized");
      mobileLogoPic[0].style.height = fafaBars[0].clientHeight - 20 + "px";
    }

    else {
      mobileLogoPic[0].style.height = aLink[0].clientHeight - 20 + "px";
    }
    

    //see if in landscape mode
    if (window.matchMedia("(orientation: landscape)").matches) {
      // you're in LANDSCAPE mode
      console.log("landscape mode yay you11")
   }
   */
 
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