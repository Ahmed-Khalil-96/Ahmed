let line = document.getElementById("myLine");
let svgWidth = 300; 
let svgHeight = 300; 

function animateLine() {
  let x = 0;
  let y = 0;
  const animationInterval = setInterval(() => {
    x += 5; 
    y += 5;

    line.setAttribute("x2", x);
    line.setAttribute("y2", y);

    if (x >= svgWidth || y >= svgHeight) {
      clearInterval(animationInterval);
      alert("Animation ended");
    }
  }, 50); 
}

animateLine();
