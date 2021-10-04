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