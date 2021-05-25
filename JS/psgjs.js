function myNavCollapse() {
  var x = document.getElementById("psgTopnav");
  if (x.className === "psgtopnav") {
    x.className += " responsive";
  } else {
    x.className = "psgtopnav";
  }
}