function sel(a) {
    return document.querySelector(a);
}

function selAll(a) {
    return document.querySelectorAll(a);
}

var main = sel('.main');
var mainRow = main.children[0].children[0];
var mainLeftCol = mainRow.children[0];
var mainRightCol = mainRow.children[1];

var navBigLeft = mainLeftCol.children[0].children[0];
var navBigRight = sel('.subMenu');
var navigationButton = sel('.navigation__button');

var isOpenBigLeft = false;
var isOpenBigRight = false;

function OpenOrCloseMenu() {
    navBigLeft.classList.toggle("navBig__left_active100");
    mainLeftCol.classList.toggle('col-md-3');
    mainRightCol.classList.toggle('col-md-9');
    mainRightCol.classList.toggle('col_paddingLeft75')
    mainLeftCol.children[0].classList.toggle('navBig_active');
    navBigRight.classList.toggle(".subMenu_active");
    isOpenBigLeft = !isOpenBigLeft;
}

function OpenOrCloseSubMenu() {
    navBigLeft.classList.toggle('navBig__left_active50');
    navBigRight.classList.toggle('subMenu_active');
     mainLeftCol.classList.toggle('col-md-3');
    mainRightCol.classList.toggle('col-md-9');
    mainLeftCol.classList.toggle('col-md-6');
    mainRightCol.classList.toggle('col-md-6');
    isOpenBigRight = !isOpenBigRight;
}

navigationButton.addEventListener('click', function(){
    if(isOpenBigRight){
        OpenOrCloseSubMenu();
    }
    OpenOrCloseMenu();
});

var navBigItem = selAll('.navBig__link');

for (var i = 0; i < navBigItem.length; i++) {
    navBigItem[i].addEventListener('click', function(){
        OpenOrCloseSubMenu();
    })
}