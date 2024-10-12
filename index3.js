const svgIcon = document.getElementById("heartIcon");

svgIcon.addEventListener("click", function () {
  // Toggle between black and red fill colors
  if (this.style.fill === "red") {
    this.style.fill = "black";
  } else {
    this.style.fill = "red";
  }
});
