const VALID_NUCLEOTIDES = ["A","C","G","T"];
const DNA_COMPLEMENTS = {"A":"T","C":"G","G":"C","T":"A"};

function countingDNANucleotides() {
  const counts = nucleotideCount(currentProblem.data)
  return ["A","C","G","T"]
                .map( (n) => counts[n] )
                .join(" ");
}

function nucleotideCount(dnaString) {
  const counts = characterCounts(dnaString);
  for( const char of Object.keys(counts) ) {
    if( !VALID_NUCLEOTIDES.includes(char) ) {
      throw `string includes invalid character ${char}. No count data returned`
    }
  }
  return counts
}

function characterCounts(str) {
  return str.split('').reduce( (counts, c) => {
    c in counts ? counts[c]++ : counts[c] = 0;
    return counts
  },{})
}

function reverseComplement(dna = currentProblem.data) {
  let revc = "";
  for( let c of [...dna].reverse() ) {
    revc += DNA_COMPLEMENTS[c];
  }
  return revc;
}

function dnaToProtein(dna) {
  return rnaToProtein(dnaToRNA(dna));
}

function dnaToRNA( dna ) {
  return dna.replaceAll( "T", "U" );
}

function rnaToProtein(rna = currentProblem.data) {
  let proteinString = ""
  for( let i = 0; i < rna.length; i+=3 ) {
    const codon = rna.substring(i,i+3);
    if( codon.length < 3 ) return proteinString; 
    const protein = codonTable[codon];
    if( protein === STOP ) return proteinString; 
    proteinString += protein;
  }
  return proteinString;
}

function findMotif(geneticString = currentProblem.data[0], motif = currentProblem.data[1], di = 1 ) {
  let locations = [];
  for( let i = 0; i < geneticString.length-motif.length; i+=di ) {
    if( geneticString.substring(i,i+motif.length).localeCompare(motif) === 0 ) {
      locations.push( i );
    }
  }
  return locations;
}