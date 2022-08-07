

function colors(){
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;
    
    var button = document.getElementById('output')
    
    var bgColor = document.body.style.backgroundColor = 'rgb('+ red + ',' + green + ',' + blue + ')'

    button.textContent = bgColor
}