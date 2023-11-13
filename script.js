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

  let d = new DNAString("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")
  console.log( `${d.characterCounts["A"]} ${d.characterCounts["C"]} ${d.characterCounts["G"]} ${d.characterCounts["T"]}` )

  d = new DNAString("GATGGAACTTGACTACGTAAATT")
  console.log( d.transcribeToRNA().string )
  
  d = new DNAString("AAAACCCGGT")
  console.log( d.reverseComplement().string )

  let r = new RNAString("AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA")
  console.log( r.toProtein().string )

  d = new DNAString("GATATATGCATATACTT")
  let f = new DNAString("ATAT")
  console.log( d.substringLocations(f,true).join(" ") )
}

function draw() {
  background("white");
  let inputString = "Use the following keys to change functionality. Note that using the large data will take additional time.\n\n" +
  Object.values(problems).reduce( (str, problem) => str += `${problem.display.key} - ${problem.display.name}\n`, "") + 
  `l - ${useLargeDataSets ? "Don't" : ""} Use Large Data Sets`

  if( results ) {
    inputString += "\n\n" + results
  }
  
  text( inputString, 20, 20, width/2, height )

}



function keyPressed() {
  if( key === "l" ) {
    useLargeDataSets = !useLargeDataSets
    redraw()
  } else {
    const problem = Object.values(problems).filter( p => p.display.key === key )[0]
    if( problem ) {
      this[`load${problem.display.abbreviation}Data`]()
        .then( (data) => this[`solve${problem.display.abbreviation}`](data))
        .then( 
          (data) => {
            results = data.msg
            navigator.clipboard.writeText(data.output)
            .then( () => results += "\nsolution copied to clipboard" )
            .catch( (e) => rejected( e, "Solution printed to console, if there is one." ) )
          },
          )
        .catch(rejected)
        .finally(redraw) 
    }
  }
}

function rejected(e, additionalContext = "") {
  fill('red')
  results = e.msg + additionalContext
  // console.log(e)
}
