function showShape () {
    var shapeInput = document.getElementById("shapeInput");
    var rectangleArea = document.getElementById("rectangleArea")
    var circleArea = document.getElementById("circleArea");
    var squareArea = document.getElementById("squareArea");
    var ellipseArea = document.getElementById("ellipseArea");
    var error = document.getElementById("error");

    var rectangleInput = document.getElementById("rectangleInput").checked;
    var circleInput = document.getElementById("circleInput").checked;
    var squareInput = document.getElementById("squareInput").checked;
    var ellipseInput = document.getElementById("ellipseInput").checked;

    var hideShape = function() {
        shapeInput.classList.add("hidden");
    };
    var showShape = function(){
        shapeInput.classList.remove("hidden");
    };

    var showError = function () {
        error.classList.remove("hidden");
    }

    var hideError = function () {
        error.classList.add("hidden");
    }

    if(rectangleInput) {
        rectangleArea.classList.remove("hidden");
        hideShape();
    }
    else if(circleInput) {
        circleArea.classList.remove("hidden");
        hideShape();
    }
    else if(squareInput){
        squareArea.classList.remove("hidden");
        hideShape();
    }
    else if(ellipseInput) {
        ellipseArea.classList.remove("hidden");
        hideShape();
    }
    else {
        showError();
    }
}

function showHideError () {
    var error = document.getElementById("error");
    var rectangleLengthError = document.getElementById("rectangleLengthError");
    var circleDiameterError = document.getElementById("circleDiameterError");
    var squareLengthError = document.getElementById("squareLengthError");
    var rectangleBreadthError = document.getElementById("rectangleBreadthError");
    var ellipseXError =  document.getElementById("ellipseXError");
    var ellipseYError =  document.getElementById("ellipseYError");
    var isError = document.getElementsByClassName('error__input');
    if (isError) {
        error.classList.add("hidden");
        rectangleLengthError.classList.add("hidden");
        rectangleBreadthError.classList.add("hidden");
        circleDiameterError.classList.add("hidden");
        squareLengthError.classList.add("hidden");
        ellipseXError.classList.add("hidden");
        ellipseYError.classList.add("hidden");
    }
    else {
        error.classList.remove("hidden");
        rectangleLengthError.classList.remove("hidden");
        rectangleBreadthError.classList.remove("hidden");
    }
}

function submitRectangleValue () {
    var rectangleValue = document.getElementById("rectangleValue");
    var rectangleOutput = document.getElementById("rectangleOutput");
    var rectangleLengthError = document.getElementById("rectangleLengthError");
    var rectangleBreadthError = document.getElementById("rectangleBreadthError");
    var rectangleLength = document.getElementById("rectangleLength").value;
    var rectangleBreadth = document.getElementById("rectangleBreadth").value;

    if (rectangleLength && rectangleBreadth && !isNaN(rectangleLength) && !isNaN(rectangleBreadth) ) {
        rectangleValue.classList.add("hidden");
        rectangleOutput.classList.remove("hidden");
        rectangleArea (rectangleLength, rectangleBreadth);
    }

    else {
        if(!rectangleLength || isNaN(rectangleLength)){
            rectangleLengthError.classList.remove("hidden");
        }
        if(!rectangleBreadth || isNaN(rectangleBreadth)){
            rectangleBreadthError.classList.remove("hidden")
        }
    }
}

function rectangleArea (rectangleLength, rectangleBreadth) {

    var rectangleOutputValue = document.getElementById("rectangleOutputValue");
    var rectangleWidthEnter = document.getElementById("rectangleWidthEnter");
    var rectangleHeightEnter = document.getElementById("rectangleHeightEnter");
    var rectangleArea =  Math.round(rectangleLength * rectangleBreadth) ;

    rectangleWidthEnter.innerText = rectangleLength;
    rectangleHeightEnter.innerText = rectangleBreadth;
    rectangleOutputValue.innerText = rectangleArea ;
}

function submitCircleValue () {
    var circleValue = document.getElementById("circleValue");
    var circleOutput = document.getElementById("circleOutput");
    var circleDiameterError = document.getElementById("circleDiameterError");
    var circleDiameter = document.getElementById("circleDiameter").value;

    if (circleDiameter && !isNaN(circleDiameter) ) {
        circleValue.classList.add("hidden");
        circleOutput.classList.remove("hidden");
        circleArea(circleDiameter);
    }
    else {
        if(!circleDiameter || isNaN(circleDiameter)) {
            circleDiameterError.classList.remove("hidden");
        }
    }
}

function circleArea(circleDiameter) {
    var	circleRadiusValue = (circleDiameter / 2);
    var circleOutputEnter = document.getElementById("circleOutputEnter");
    var	circleOutputValue = document.getElementById("circleOutputValue");

    circleOutputEnter.innerText = circleDiameter;
    circleOutputValue.innerText = Math.round(Math.PI*(circleRadiusValue * circleRadiusValue));
}

function submitSquareValue () {
    var squareValue = document.getElementById("squareValue");
    var squareOutput = document.getElementById("squareOutput");
    var squareLengthError = document.getElementById("squareLengthError");
    var squareLength =  document.getElementById("squareLength").value;

    if (squareLength && !isNaN(squareLength)) {
        squareValue.classList.add("hidden");
        squareOutput.classList.remove("hidden");
        squareArea(squareLength);
    }
    else {
            if(!squareLength || isNaN(squareLength)){
                squareLengthError.classList.remove("hidden");
            }
    }
}

function squareArea (squareLength) {
    var squareOutputValue = document.getElementById("squareOutputValue");
    var squareOutputEnter =  document.getElementById("squareOutputEnter");
    var squareOutputValueArea = Math.round(squareLength * squareLength);

    squareOutputEnter.innerText = squareLength;
    squareOutputValue.innerText = squareOutputValueArea;
}

function submitEllipseValue () {
    var ellipseValue = document.getElementById("ellipseValue");
    var ellipseOutput = document.getElementById("ellipseOutput");
    var ellipseX =  document.getElementById("ellipseX").value;
    var ellipseY =  document.getElementById("ellipseX").value;
    var ellipseXError =  document.getElementById("ellipseXError");
    var ellipseYError =  document.getElementById("ellipseYError");

    if(ellipseX && ellipseY && !isNaN(ellipseX) && !isNaN(ellipseY)) {
        ellipseValue.classList.add("hidden");
        ellipseOutput.classList.remove("hidden");
        ellipseArea(ellipseX, ellipseY);
    }
    else {
            if(!ellipseX || isNaN(ellipseX)) {

                ellipseXError.classList.remove("hidden");

            }
            if(!ellipseY || isNaN(ellipseY)) {
                ellipseYError.classList.remove("hidden");
            }
    }
}

function ellipseArea (ellipseX, ellipseY) {
    var ellipseOutputValue = document.getElementById("ellipseOutputValue");
    var ellipseXEnter = document.getElementById("ellipseXEnter");
    var ellipseYEnter = document.getElementById("ellipseYEnter");

    ellipseXEnter.innerText = ellipseX;
    ellipseYEnter.innerText = ellipseY;
    ellipseOutputValue.innerText =  Math.round(Math.PI*(ellipseX * ellipseY));
}

function hideFlow () {
    document.getElementById("rectangleArea").classList.add("hidden");
    document.getElementById("circleArea").classList.add("hidden");
    document.getElementById("squareArea").classList.add("hidden");
    document.getElementById("ellipseArea").classList.add("hidden");
    document.getElementById("shapeInput").classList.remove("hidden");


    document.getElementById("rectangleValue").classList.remove("hidden");
    document.getElementById("circleValue").classList.remove("hidden");
    document.getElementById("squareValue").classList.remove("hidden");
    document.getElementById("squareValue").classList.remove("hidden");

    document.getElementById("rectangleLength").value =  "";
    document.getElementById("rectangleBreadth").value =  "";
    document.getElementById("circleDiameter").value =  "";
    document.getElementById("squareLength").value =  "";
    document.getElementById("ellipseX").value =  "";
    document.getElementById("ellipseY").value =  "";



    var shape = document.getElementsByName("shape");

    for(var i = 0; i < shape.length; i++){
        shape[i].checked = false;
    }
}
function starOver () {
    var rectangleOutput = document.getElementById("rectangleOutput");
    var circleOutput = document.getElementById("circleOutput");
    var squareOutput = document.getElementById("squareOutput");
    var ellipseOutput = document.getElementById("ellipseOutput");

    rectangleOutput.classList.add("hidden");
    circleOutput.classList.add("hidden");
    squareOutput.classList.add("hidden");
    ellipseOutput.classList.add("hidden");

    hideFlow ();
}



