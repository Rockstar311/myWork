function sel(a) {
    return document.querySelector(a);
}

var man = sel('.man');

var left = sel('.left');
var right = sel('.right');
var up = sel('.up');
var down = sel('.down');

var step = 10;
var timeStep = 100;
var imgXPosition = ['-400px', '-145px', '-273px', '-20px'];
var imgYPosition = ['-65px', '-130px', '-193px', '-258px'];
var nextStepOrNot = true;

function move(e, timeStep) {

    if (nextStepOrNot) {
        if (e.keyCode == 37 || e.keyCode == 39) {
            var a = parseInt(man.style.left) || 0
        } else {
            var a = parseInt(man.style.top) || 0
        }
        var b = 0;
        var time = 0;

        for (var i = 0; i <= imgYPosition.length; i++) {
            setTimeout(function () {
                if (b == 0) {
                    if(e.keyCode == 37){
                         man.style.backgroundPositionX = imgXPosition[0];
                    }
                    else if(e.keyCode == 39){
                         man.style.backgroundPositionX = imgXPosition[1];
                    }
                     else if(e.keyCode == 38){
                         man.style.backgroundPositionX = imgXPosition[2];
                    }
                     else if(e.keyCode == 40){
                         man.style.backgroundPositionX = imgXPosition[3];
                    }
                   

                } else {
                    man.style.backgroundPositionY = imgYPosition[b - 1];

                }

                switch (e.keyCode) {
                case 37:
                    {
                        a -= step;
                        man.style.left = a + "px";
                        break;
                    }
                case 38:
                    {
                        a -= step;
                        man.style.top = a + "px";
                        break;
                    }
                case 39:
                    {
                        a += step;
                        man.style.left = a + "px";
                        break;
                    }
                case 40:
                    {
                        a += step;
                        man.style.top = a + "px";
                        break;
                    }

                }


                b++;
                if (b == 5) {
                    nextStepOrNot = true;
                } else {
                    nextStepOrNot = false;
                }

            }, time);
            time += timeStep;
        }
    }


}

function clickRight() {
    var a = parseInt(man.style.left) || 0
    a += step;


    setTimeout(function () {
        man.style.backgroundPositionX = "-145px";
        a += step;
        man.style.left = a + "px";
    }, 100)
    setTimeout(function () {
        man.style.backgroundPositionY = "-65px";
        a += step;
        man.style.left = a + "px";
    }, 200);
    setTimeout(function () {
        man.style.backgroundPositionY = "-130px";
        a += step;
        man.style.left = a + "px";
    }, 300);
    setTimeout(function () {
        man.style.backgroundPositionY = "-193px";
        a += step;
        man.style.left = a + "px";
    }, 400);
    setTimeout(function () {
        man.style.backgroundPositionY = "-258px";
        a += step;
        man.style.left = a + "px";
    }, 500);
}

function clickUp() {
    var a = parseInt(man.style.top) || 0
    a -= step;


    setTimeout(function () {
        man.style.backgroundPositionX = "-273px";
        man.style.top = a + "px";
        a -= step;
    }, 100)
    setTimeout(function () {
        man.style.backgroundPositionY = "-65px";
        man.style.top = a + "px";
        a -= step;
    }, 200);
    setTimeout(function () {
        man.style.backgroundPositionY = "-130px";
        man.style.top = a + "px";
        a -= step;
    }, 300);
    setTimeout(function () {
        man.style.backgroundPositionY = "-193px";
        man.style.top = a + "px";
        a -= step;
    }, 400);
    setTimeout(function () {
        man.style.backgroundPositionY = "-258px";
        man.style.top = a + "px";

    }, 500);
}

function clickDown() {
    var a = parseInt(man.style.top) || 0
    a += step;


    setTimeout(function () {
        man.style.top = a + "px";
        man.style.backgroundPositionX = "-20px";
        a += step;
    }, 100)
    setTimeout(function () {
        man.style.top = a + "px";
        man.style.backgroundPositionY = "-65px";
        a += step;
    }, 200);
    setTimeout(function () {
        man.style.top = a + "px";
        man.style.backgroundPositionY = "-130px";
        a += step;
    }, 300);
    setTimeout(function () {
        man.style.top = a + "px";
        man.style.backgroundPositionY = "-193px";
        a += step;
    }, 400);
    setTimeout(function () {
        man.style.top = a + "px";
        man.style.backgroundPositionY = "-258px";

    }, 500);
}

//left.addEventListener('click', clickLeft);
//right.addEventListener('click', clickRight);
//up.addEventListener('click', clickUp);
//down.addEventListener('click', clickDown);

window.addEventListener("keydown", function (e) {
    //    switch (e.keyCode) {
    //    case 38:
    //        {
    //            clickUp();
    //            break;
    //        }
    //    case 40:
    //        {
    //            clickDown();
    //            break;
    //        }
    //    case 37:
    //        {
    //            clickLeft();
    //            break;
    //        }
    //    case 39:
    //        {
    //            clickRight();
    //            break;
    //        }
    //
    //    }
    move(e, timeStep);

})