let currentProblem = {};

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textWrap(WORD);
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
    currentProblem.solution = currentProblem.f();
  } 
  if( currentProblem.solution ) {
    if( currentProblem.displaySolution ) {
      currentProblem.displaySolution();
    }
    
    navigator.clipboard.writeText(currentProblem.solution)
    .then( () => text( "solution copied to clipboard", 200, 10 ) )
    .catch( (e) => {
      fill('red');
      text( `${e}. Solution printed to console, if there is one.`, 200, 10, width-220) ;
      console.log( currentProblem.solution );
    })
  }
}

const bindings = {
  "1":"countingDNANucleotides", // values need to match keys in the problems object
  "2":"translatingRNAtoProteins",
  "3":"findingAMotif",
}

function keyPressed() {
  if( key in bindings ) {
    currentProblem = problems[bindings[key]]
    loadProblemData();
  }
}

function loadProblemData() {
  if( currentProblem.testData.type === "string" || currentProblem.testData.type === "array") {
    currentProblem.data = currentProblem.testData.payload;
    redraw();
  } else if( currentProblem.testData.type === "file" ) {
    currentProblem.data = loadStrings( 
      currentProblem.testData.payload, 
      () => {
        if( currentProblem.testData.postLoad ) {
          currentProblem.testData.postLoad()
        } else {
          defaultPostLoadFunction()
        }
        redraw()
      }
    );
  }
}

