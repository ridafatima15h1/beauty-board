var chartDonut = document.getElementById("donutChart");
var donutChart = new Chart(chartDonut, {
    type: 'pie',
    data: {
        datasets: [{
            data: [12, 5],
            backgroundColor: [
                ' #da2680',
                ' #42c3eb'
            ],
            borderColor: [
                ' #da2680',
                ' #42c3eb'
            ],
            borderWidth: 1
        }]
    }
});

var continueBtn = document.getElementById("continue-btn");
var cancelBtn = document.getElementById("cancel-btn");
var popUp = document.getElementById("pop-up");
var blur = document.getElementById("blur");

var popUpFlag = false;

continueBtn.onclick = function () {
    popUpOpen();
}

cancelBtn.onclick = function () {
    popUpClose();
}

function popUpOpen() {
    if(popUpFlag != true) {
        popUp.style.display = "block";
        blur.style.display = "block";
        var popUpFlag = true;
    }
}

function popUpClose() {
    if(popUpFlag != false) {
        popUp.style.display = "none";
        blur.style.display = "none";
        var popUpFlag = false;
    }
}