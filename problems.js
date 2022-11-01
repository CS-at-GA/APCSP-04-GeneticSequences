const problems = {
  "countingDNANucleotides":{
    testData: {
      // type:"string",    
      // payload:"AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC",    
      type:"file",
      payload:"rosalind_dna_1_dataset.txt",
    },
    text: "Counting DNA Nucleotides",
    f: countingDNANucleotides
  },
  'translatingRNAtoProteins':{
    testData: {
      // type:"string",
      // payload:"AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA"
      type:"file",
      payload:"rosalind_prot.txt"
    },
  text: "Translating RNA to Proteins",
  f: rnaToProtein
  },
  'findingAMotif':{
    testData:{
      // type:"array",
      // payload:["GATATATGCATATACTT","ATAT"]
      type:"file",
      payload:"rosalind_subs.txt",
      postLoad: () => {
        
      }
    },
    text: "Finding a Motif in DNA",
    f: findMotif,
    displaySolution: () => {
      currentProblem.solution = currentProblem.solution.map( loc => loc + 1).join( " " );
    }
  },
  'openReadingFrames':{
    testData:{
      type:"string",
      payload:"AGCCATGTAGCTAACTCAGGTTACATGGGGATGACCCCGCGACTTGGATTAGAGTCTCTTTTGGAATAAGCCTGAATGATCCGAGTAGCATCTCAG",
      // type:"file",
      // payload:"rosalind_orf.txt",
      postLoad: () => {
        const fasta = postLoadFASTA();
        currentProblem.data = fasta[0].string
      }
    },
    text: "Open Reading Frames",
    f: openReadingFrames,
    displaySolution: () => {
      currentProblem.solution = currentProblem.solution.join("\n");
    }
  },
  'splicing':{
    testData:{
      type:"file",
      payload:"rosalind_splc.txt",
      postLoad: () => {
        currentProblem.data = postLoadFASTA();
      }
    },
    text: "Splicing",
    f: spliceDNA,
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

const defaultPostLoadFunction = () => {
  currentProblem.data = currentProblem.data[0];
}

const postLoadFASTA = () => {
  let fastaStrings = [];
  let current;
  for( const line of currentProblem.data ) {
    if( line.at(0) === ">" ) {
      if( current ) {
        fastaStrings.push( current ) 
      } 
      current = {
        name: line.substring(1),
        string: ""
      }
    } else {
      current.string += line;
    }
  }
  fastaStrings.push(current)
  return fastaStrings;
}