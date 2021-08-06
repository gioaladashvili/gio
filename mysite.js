//main//
const mainPage = document.getElementById("main");
const mainBtn = document.getElementById("homeBtn");

//work//
const myWork = document.getElementById("myWork");
const workBtn = document.getElementById("myWorkBtn");
const contaBtn = document.getElementById("contactBtn");

workBtn.addEventListener("click", workFun);
//workPage//
function workFun() {
  mainPage.classList.add("animeFlipPage");
  myWork.classList.add("animeFlipPage1");
  mainPage.classList.remove("revanimeFlipPage");
  myWork.classList.remove("revanimeFlipPage1");
  setTimeout(() => {
    mainPage.style.display = "none";
  }, 700);
  setTimeout(() => {
    myWork.style.display = "block";
  }, 700);
  $("#myWorkBtn").addClass("active border border-white text-info");
  $("#myWorkBtn").removeClass("text-white");
  $("#homeBtn").removeClass("active border border-white text-info");
  $("#homeBtn").addClass("text-white");
}

//homePage//

mainBtn.addEventListener("click", mainFun);
function mainFun() {
  mainPage.classList.add("revanimeFlipPage");
  myWork.classList.add("revanimeFlipPage1");
  mainPage.classList.remove("animeFlipPage");
  myWork.classList.remove("animeFlipPage1");
  setTimeout(() => {
    mainPage.style.display = "block";
  }, 700);
  setTimeout(() => {
    myWork.style.display = "none";
  }, 700);
  $("#myWorkBtn").removeClass("active border border-white text-info");
  $("#myWorkBtn").addClass("text-white");
  $("#homeBtn").removeClass("text-white");
  $("#homeBtn").addClass("active border border-white text-info");
}

//side Nav responcive//
var x = window.matchMedia("(min-width: 700px)");
x.addListener(myFunction);
myFunction(x);
function myFunction(x) {
  if (x.matches) {
    // If media query matches

    $("#sideIcon").addClass("d-none");
    $("#headNavCon").removeClass("d-none");
  } else {
    $("#sideIcon").removeClass("d-none");
    $("#headNavCon").addClass("d-none");
  }
}

//side bar meniu//
const sideBtn = document.getElementById("sideIcon");
var navWorkBtn = document.getElementById("navWorkBtn");
var navHomeBtn = document.getElementById("navHomeBtn");
var navContcBtn = document.getElementById("navContcBtn");

navWorkBtn.addEventListener("click", sideWorkNav);
//work page//
function sideWorkNav() {
  mainPage.classList.add("animeFlipPage");
  myWork.classList.add("animeFlipPage1");
  mainPage.classList.remove("revanimeFlipPage");
  myWork.classList.remove("revanimeFlipPage1");
  setTimeout(() => {
    mainPage.style.display = "none";
  }, 700);
  setTimeout(() => {
    myWork.style.display = "block";
  }, 700);
  closeNav();
}

//main page//
navHomeBtn.addEventListener("click", sideNavHome);

function sideNavHome() {
  mainPage.classList.add("revanimeFlipPage");
  myWork.classList.add("revanimeFlipPage1");
  mainPage.classList.remove("animeFlipPage");
  myWork.classList.remove("animeFlipPage1");
  setTimeout(() => {
    mainPage.style.display = "block";
  }, 700);
  setTimeout(() => {
    myWork.style.display = "none";
  }, 700);
  closeNav();
}

//copy to clipboard//
copyToClipboard = document.getElementById("copyClip");
copyToClipboard.addEventListener("click", copyFunction);

function copyFunction() {
  var copyText = document.getElementById("gmailValue");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

//ერთი modal გაქრობა როცა მეორე ამოდის //
var contactModal = document.getElementById("exampleModalCenter");
var gmailModal = document.getElementById("giomodal");

gmailModal.addEventListener("click", () => {
  console.log("gio");
});

//contact//
navContcBtn.addEventListener("click", () => {
  closeNav();
});

//side bar-გახსნა//
sideBtn.addEventListener("click", sideNavMenu);
function sideNavMenu() {
  document.getElementById("mySidenav").style.width = "250px";
}

//side bar-X-დახურვა//
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

$("[data-toggle=popover]").popover();

function beBetterEvery() {
  var txBetter = document.getElementById("better");
  var txEvery = document.getElementById("everyD");
  change = setInterval(changing, 3000);
  function changing() {
    if ((txBetter.style.display = "block")) {
      txBetter.style.display = "none";
      txEvery.style.display = "block";
    }
  }
  change1 = setInterval(changing1, 6000);
  function changing1() {
    if ((txEvery.style.display = "block")) {
      txEvery.style.display = "none";
      txBetter.style.display = "block";
    }
  }
}
beBetterEvery();
