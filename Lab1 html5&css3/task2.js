let redRange = document.getElementById('red');
let greenRange = document.getElementById('green');
let blueRange = document.getElementById('blue');
let h1 = document.getElementById('h1');



redRange.addEventListener('input', ()=> {
  updateColor();
  return redRange.value;
});

greenRange.addEventListener('input', ()=> {
  updateColor();
  return greenRange.value; 
});

blueRange.addEventListener('input',()=> {
  updateColor();
  return blueRange.value;
})

function updateColor() {

    h1.style.color = "rgb(" + redRange.value + "," + greenRange.value + "," + blueRange.value + ")";
  }
updateColor();
