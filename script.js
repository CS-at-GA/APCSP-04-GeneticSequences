let currentProblem = {};
let strings
GeneticString.CHARACTER_SETS = {
  "DNAString": DNAString.NUCLEOTIDES,
  "RNAString": RNAString.NUCLEOTIDES,
  "ProteinString": ProteinString.PROTEINS
}

function preload() {
  loadStrings('rosalind_lcsm.txt',postLoadFASTA)
}


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(255);
  textWrap(WORD);
  noLoop();

  // let strings = [
  //   new DNAString("GATTACA"),
  //   new DNAString("TAGACCA"),
  //   new DNAString("ATACA")
  // ]
  
  let ans = GSUtil.longestCommonSubstring(currentProblem.data)
  console.log( ans )
  
  // let s = new GeneticSequence("Jason")
  // console.log( s.characterCounts )

}

function draw() {
  background("white");
  const x = 10;
  let y = 10;
  let dy = 20;
  if( currentProblem ) {
    console.log(currentProblem )
  }
  //   navigator.clipboard.writeText(currentProblem.solution)
  //   .then( () => text( "solution copied to clipboard", 200, 10 ) )
  //   .catch( (e) => {
  //     fill('red');
  //     text( `${e}. Solution printed to console, if there is one.`, 200, 10, width-220) ;
  //     console.log( currentProblem.solution );
  //   })

}

const postLoadFASTA = (lines) => {
  console.log( "hello")
  let fastaStrings = [];
  let current;
  for( const line of lines ) {
    if( line.at(0) === ">" ) {
      if( current ) {
        fastaStrings.push( new DNAString(current.string) ) 
      } 
      current = {
        name: line.substring(1),
        string: ""
      }
    } else {
      current.string += line;
    }
  }
  fastaStrings.push( new DNAString(current.string) )
  currentProblem.data = fastaStrings
}