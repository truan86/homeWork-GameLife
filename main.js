var random = function () {
    if (Math.random() < 0.2) {
        return true;
    }
    return false;
};

//create a field
var field = document.getElementById('gamefield');
var str = '';
var intervalID;
for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 20; j++) {
        str += '<div class="point" id="x' + i + '_y' + j + '"></div>';
    }
}
field.innerHTML = str;

//button random
document.getElementById('random').onclick = function () {
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            var point = document.getElementById('x' + i + '_y' + j);
            if (random()) {
                point.style.backgroundColor = 'red';
            }
            else {
                point.style.backgroundColor = 'white';
            }
        }
    }
};


var game = function () {
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            var point = document.getElementById('x' + i + '_y' + j);
            var neighbor = 0;

            for (var g = i - 1; g < i + 2; g++) {
                if (g < 0 || g > 19) {
                    continue;
                }
                for (var k = j - 1; k < j + 2; k++) {
                    if (k < 0 || k > 19 || (g == i && k == j)) {
                        continue;
                    }
                    var checkNeighbor = document.getElementById('x' + g + '_y' + k);
                    if (checkNeighbor.style.backgroundColor == 'red') {
                        neighbor = neighbor + 1;
                    }
                }
            }
            if (neighbor == 3 && point.style.backgroundColor == 'white') {
                point.style.backgroundColor = 'red';
            }
            if (point.style.backgroundColor == 'red' && (neighbor == 2 || neighbor == 3)) {
                point.style.backgroundColor == 'red';
            }
            else {

                point.style.backgroundColor = 'white';
            }
        }
    }
};

//button step
document.getElementById('step').onclick = function () {
    game();
};
//button start
document.getElementById('start').onclick = function(){
    intervalID = setInterval(function () {
        game();
    }, 200);
};

document.getElementById('stop').onclick = function(){
    clearInterval(intervalID);
};
