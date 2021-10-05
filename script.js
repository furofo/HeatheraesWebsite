/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    console.log("function clicked");
    let x = document.getElementById("myTopnav");
    console.log(x);
    if (x.className === "topnav") {
      x.className += " responsive";
      console.log(x);
    } else {
      x.className = "topnav";
    }
  }

  window.onload = function() {
    //set height of mobile restaruant logo to div containing fa fa bars
    let mobileLogoPic = document.getElementsByClassName("mobile-logo");
    let fafaBars = document.getElementsByClassName("icon");
    console.log(mobileLogoPic[0]);
    console.log(fafaBars[0]);
    console.log(fafaBars[0].clientHeight);
    // leave some room for some padding simple math simple dazoooo
    mobileLogoPic[0].style.height = fafaBars[0].clientHeight - 20 + "px";
  }