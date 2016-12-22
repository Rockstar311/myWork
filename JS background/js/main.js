var getClass = function (a) {
    return document.getElementsByClassName(a)[0];
}




getClass('buttonCoolor').addEventListener('click', function () {
    var chooseColor = getClass('chooseColor');

    if (getComputedStyle(chooseColor).display == "none" || chooseColor.isBackImg) {

        chooseColor.style.display = "flex";
        var colorDiv = chooseColor.children;
        var colorHSL = 0;

        for (var i = 0; i < colorDiv.length; i++) {
            colorDiv[i].style.backgroundColor = "hsl(" + colorHSL + ", 100%, 50%)";
            colorDiv[i].style.backgroundImage = '';
            colorHSL += 40;

            if (!chooseColor.isAddEventClickColor) {
                chooseColor.children[i].addEventListener('click', function () {
                    if (this.style.backgroundColor) {
                        document.body.style.backgroundImage = "none";
                        document.body.style.backgroundColor = this.style.backgroundColor;
                    }
                    chooseColor.isAddEventClickColor = true;

                })
            }
        }

        chooseColor.isBackColor = true;
        chooseColor.isBackImg = false;

    } else if (chooseColor.isBackColor) {
        chooseColor.style.display = "none";
        chooseColor.isBackColor = false;
    }

});


getClass('buttonImg').addEventListener('click', function () {

    var chooseColor = getClass('chooseColor');
    if (getComputedStyle(chooseColor).display == "none" || chooseColor.isBackColor) {

        chooseColor.style.display = "flex";
        var colorDiv = chooseColor.children;

        var imgUrl = 1;

        for (var i = 0; i < colorDiv.length; i++) {
            colorDiv[i].style.backgroundImage = "url(img/" + imgUrl + ".jpg)";
            colorDiv[i].style.backgroundColor = "";
            imgUrl += 1;
            if (!chooseColor.isAddEventClickImg) {
                chooseColor.children[i].addEventListener('click', function () {
                    if (this.style.backgroundImage) {
                        document.body.style.backgroundColor = "none";
                        document.body.style.backgroundImage = this.style.backgroundImage;
                    }
                    chooseColor.isAddEventClickImg = true;
                })
            }

        }
        chooseColor.isBackImg = true;
        chooseColor.isBackColor = false;

    } else if (chooseColor.isBackImg) {
        chooseColor.style.display = "none";
        chooseColor.isBackImg = false;
    }

});