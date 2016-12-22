window.addEventListener("load", function () {
    var labelCheck = document.getElementsByClassName("search__checkboxLabel")[0];
    var checkbox = document.getElementsByClassName("search__checkbox")[0];

    labelCheck.addEventListener("click", function () {
        if (checkbox.checked) {
            labelCheck.style.backgroundImage = "url(../img/Unchecked-Box.png)";
            for (var i = 0; i < searchDropdownItem.length; i++) {
                if (searchDropdownItem[i].className.search("active") != -1) {
                    searchDropdownItem[i].className = searchDropdownItem[i].className.replace("active", " ");
                }
            }
        } else {
            labelCheck.style.backgroundImage = "url(../img/Checked-Box.png)";
            for (var i = 0; i < searchDropdownItem.length; i++) {
                if (searchDropdownItem[i].className.search("active") == -1) {
                    searchDropdownItem[i].className += " active";
                }

            }
        }
    }, false)

    var searchDropdownItem = document.getElementsByClassName("search__dropdownItem");
    for (var i = 0; i < searchDropdownItem.length; i++) {
        searchDropdownItem[i].addEventListener("click", function () {
            if (this.className.search("active") == -1) {
                this.className += " active";
            } else {
                this.className = this.className.replace("active", " ");
            }
        }, false)
    }


    var searchButtonCategories = document.getElementsByClassName("search__button-categories")[0];
    searchButtonCategories.addEventListener("click", function () {
        var searchDropdownMenu = document.getElementsByClassName("search__dropdownMenu")[0];
        var searchInputGroup = document.getElementsByClassName("search__input-group")[0];
        var searchInput = document.getElementsByClassName("search__input")[0];
        var searchGo = document.getElementsByClassName("search__go")[0];



        if (this.className.search("active") == -1) {
            this.className += " active";

            searchDropdownMenu.style.display = "block";
            searchInputGroup.style.borderBottomLeftRadius = "0px";
            searchInputGroup.style.borderBottomRightRadius = "0px";
            searchInputGroup.style.borderBottom = "0px";

            searchInput.style.boxSizing = "content-box";
            searchInput.style.paddingBottom = "8px";
            searchInput.style.backgroundPositionY = "7px";
            searchInput.style.borderBottom = "1px solid #e8e8e8";

            searchGo.style.borderBottom = "1px solid #e8e8e8";

        } else {
            this.className = this.className.replace("active", " ");

            searchDropdownMenu.style.display = "none";
            searchInputGroup.style.borderBottomLeftRadius = "4px";
            searchInputGroup.style.borderBottomRightRadius = "4px";
            searchInputGroup.style.borderBottom = "1px solid #e8e8e8";

            searchInput.style.boxSizing = "border-box";
            searchInput.style.paddingBottom = "0";
            searchInput.style.backgroundPositionY = "7px";
            searchInput.style.borderBottom = "0";

            searchGo.style.borderBottom = "0px solid #e8e8e8";
        }
    }, false)


    var magazinesContentInfinity = document.getElementsByClassName('magazines__contentInfinity')[0];
    var sizeMagazine = parseInt(getComputedStyle(document.getElementsByClassName('magazines')[0]).width);
    var maxBackDown;
    var backdown = 0;

    window.addEventListener('resize', function () {
        sizeMagazine = parseInt(getComputedStyle(document.getElementsByClassName('magazines')[0]).width);
        
        maxBackDown = backdown - sizeMagazine;
    }, false);


    for (var i = 0; i < magazinesContentInfinity.childElementCount; i++) {
        backdown += 240;
    }
     backdown +=10;
    maxBackDown = backdown - sizeMagazine;


    var magazinesLeft = document.getElementsByClassName('magazines__left')[0];
    var magazinesRight = document.getElementsByClassName('magazines__right')[0];

    magazinesRight.addEventListener('click', function () {
        var left = parseInt(getComputedStyle(magazinesContentInfinity).left);
        if (left >= -maxBackDown ) {
            left -= 250;
            magazinesContentInfinity.style.left = left + 'px';
        }
        else{
             magazinesContentInfinity.style.left = -maxBackDown - 50  + 'px';
        }
    }, false);
    
    magazinesLeft.addEventListener('click', function () {
        var left = parseInt(getComputedStyle(magazinesContentInfinity).left);
        if (left < 0) {
            left += 250;
            magazinesContentInfinity.style.left = left + 'px';
        }
        else{
             magazinesContentInfinity.style.left = 0 + 'px';
}
       
    }, false)

}, false)