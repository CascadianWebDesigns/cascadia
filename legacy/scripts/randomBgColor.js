window.onload = function() {
    var startRange = 85;
    var endRange = 185;

    var red = Math.floor(Math.random() * endRange) + startRange;
    var green = Math.floor(Math.random() * endRange) + startRange;
    var blue = Math.floor(Math.random() * endRange) + startRange;

    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
};

function getInvert(color){
  return Math.abs(color - 255);
}

function getGrayScale(r, g, b){
  return (r + g + b / 3);
}
