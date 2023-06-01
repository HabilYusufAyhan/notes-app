const menubar = document.querySelector(".navbarico");
const ico = document.querySelector(".navbarico");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const news = document.querySelector(".news");
const changedicon = document.querySelector(".navbarico i");
var firsttext, secondtext, thirdtext;
var counter = 1;
var isClickDisabled = false;
setTimeout(() => {
  first.style.width = 0;
  second.style.width = 0;
}, 300);
third.style.height = 0;
news.style.height = 0;
first.style.borderRadius = 0;
second.style.borderRadius = 0;
third.style.borderRadius = 0;
news.style.borderRadius = 0;
firsttext = first.textContent;
secondtext = second.textContent;
thirdtext = third.textContent;
newtext = news.textContent;
first.textContent = "";
second.textContent = "";
third.textContent = "";
news.textContent = "";

setTimeout(function () {
  ico.style.borderRadius = "50%";
  isClickDisabled = false;
  // Enable click event after the timeout
}, 500);
menubar.onclick = function () {
  changedicon.classList.remove("fa-bars-staggered");
  changedicon.classList.add("fa-bars");

  if (isClickDisabled) {
    return; // If click is disabled, exit the function
  }

  isClickDisabled = true; // Disable click event

  counter++;
  if (counter % 2 != 0) {
    setTimeout(() => {
      first.style.width = 0;
      second.style.width = 0;
    }, 300);
    third.style.height = 0;
    news.style.height = 0;
    first.style.borderRadius = 0;
    second.style.borderRadius = 0;
    third.style.borderRadius = 0;
    news.style.borderRadius = 0;
    firsttext = first.textContent;
    secondtext = second.textContent;
    thirdtext = third.textContent;
    newtext = news.textContent;
    first.textContent = "";
    second.textContent = "";
    third.textContent = "";
    news.textContent = "";

    setTimeout(function () {
      ico.style.borderRadius = "50%";
      isClickDisabled = false;
      // Enable click event after the timeout
    }, 500);
  } else {
    changedicon.classList.remove("fa-bars");
    changedicon.classList.add("fa-bars-staggered");
    ico.style.borderRadius = "0";
    first.style.borderRadius = "20px 0 0 20px";
    second.style.borderRadius = "0px 20px 20px 0px";
    third.style.borderRadius = "0px 0px 20px 20px";
    news.style.borderRadius = "20px 20px 0px 0px";
    setTimeout(function () {
      first.style.width = "80px";
      second.style.width = "80px";
      third.style.height = "50px";
      news.style.height = "50px";
      setTimeout(() => {
        first.textContent = firsttext;
        second.textContent = secondtext;
        third.textContent = thirdtext;
        news.textContent = newtext;
        isClickDisabled = false; // Enable click event after the timeout
      }, 200);
    }, 500);
  }
};
