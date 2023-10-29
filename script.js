GeneticString.CHARACTER_SETS = {
  "DNAString": DNAString.NUCLEOTIDES,
  "RNAString": RNAString.NUCLEOTIDES,
  "ProteinString": ProteinString.PROTEINS
}

let useLargeDataSets = false 
let currentProblem
let dataReady = false
let results

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textWrap(WORD);
  noLoop();
}

function draw() {
  background("white");
  let inputString = "Use the following keys to change functionality. Note that using the large data will take additional time.\n\n" +
  Object.values(problems).reduce( (str, problem) => str += `${problem.display.key} - ${problem.display.name}\n`, "") + 
  `l - ${useLargeDataSets ? "Don't" : ""} Use Large Data Sets`

  if( results ) {
    inputString += "\n" + results
  }
  
  text( inputString, 20, 20, width/2, height )

  //   navigator.clipboard.writeText(currentProblem.solution)
  //   .then( () => text( "solution copied to clipboard", 200, 10 ) )
  //   .catch( (e) => {
  //     fill('red');
  //     text( `${e}. Solution printed to console, if there is one.`, 200, 10, width-220) ;
  //     console.log( currentProblem.solution );
  //   })

}



function keyPressed() {
  if( key === "l" ) {
    useLargeDataSets = !useLargeDataSets
    redraw()
  } else {
    const problem = Object.values(problems).filter( p => p.display.key === key )[0]
    if( problem ) {
      this[`load${problem.display.abbreviation}Data`]()
        .then( (data) => this[`solve${problem.display.abbreviation}`](data) )
        .then( (data) => {
          results = data.msg
          navigator.clipboard.writeText(data.output)
          .then( () => results += "\nsolution copied to clipboard" )
          .catch( (e) => {
            fill('red');
            results = `\n${e}. Solution printed to console, if there is one.`
            console.log( data.output );
          })
        })
        .catch( e => console.log(e))//results = e.msg )
        .finally(() => {
          redraw
        }) 
    }
  }
}


