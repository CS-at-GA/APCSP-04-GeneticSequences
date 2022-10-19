let currentProblem = {};

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
}

function draw() {
  background("white");
  const x = 10;
  let y = 10;
  let dy = 20;
  for( let k of Object.keys(bindings) ) {
    text( `${k}: ${problems[bindings[k]].text}`, x, y );
    y += dy;
  }
  if( currentProblem.data ) {
    currentProblem.f();
  }
}

const bindings = {
  "c":"countingDNANucleotides", // values need to match keys in the problems object
}

function keyPressed() {
  if( key in bindings ) {
    currentProblem = problems[bindings[key]]
    loadProblemData();
  }
}

function loadProblemData() {
  if( currentProblem.testData.type === "string" ) {
    currentProblem.data = currentProblem.testData.payload;
    redraw();
  } else if( currentProblem.testData.type === "file" ) {
    currentProblem.data = loadStrings( 
      currentProblem.testData.payload, 
      () => {
        if( currentProblem.testData.postLoad ) {
          currentProblem.testData.postLoad()
        }
        redraw()
      }
    );
  }
}

