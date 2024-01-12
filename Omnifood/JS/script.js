// Set date of the website to the current date
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// Make Mobile Navigation Works
const navBtn = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");

navBtn.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

// Making Sticky Nav
window.onscroll = function () {
  if (window.scrollY >= 500) headerEL.classList.add("sticky");
  else headerEL.classList.remove("sticky");
};

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
