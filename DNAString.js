class DNAString extends GeneticString {
  constructor(string) {
    super(string)
  }

  transcribeToRNA() {
    return new RNAString(this.string.replace(/T/g, "U"))
  }

  reverseComplement() {
    return new DNAString(
      [...this.string]
      .reverse()
      .map( c => DNAString.COMPLEMENTS[c])
      .join(''))
  }

  // https://rosalind.info/problems/orf/
  // This is the first step in solving the Open Reading Frames problem
  // As described in the reading, a given DNA strand has six possible
  //   reading frames:
  //   1) regular DNAString starting from 0
  //   2) regular DNAString starting from 1
  //   3) regular DNAString starting from 2
  //   4) reverse complement DNAString starting from 0
  //   5) reverse complement DNAString starting from 1
  //   6) reverse complement DNAString starting from 2
  // This function should return all six of these reading frames as 
  //   RNAString objects in an array (the first is given)
  readingFrames() {
    let rfs = [this.transcribeToRNA()]
    // your work goes here
    return rfs
  }
  
  // This is the final step in solving the Open Reading Frames problem
  // After generating each of the reading frames from this DNAString, 
  //   you should then get all of the open reading frames from each of 
  //   those RNAStrings using the method you completed in the second step.
  // Once you have all of the open reading frames, the provided return 
  //   statement takes care of converting it to a protein string.
  candidateProtenStrings() {
    const allReadingFrames = this.readingFrames()
    let allOpenReadingFrames = []
    
    return allOpenReadingFrames.map( orf => orf.toProtein() )
  }

  // https://rosalind.info/problems/splc/
  // This is entry and exit point for this problem.
  // Since removing substrings from a string is a general string problem
  //   this functionality is going to be broadly implemented in the 
  //   GeneticString class. This function simply serves as a wrapper.
  // Note that the testing framework will handle conversion into ProteinString
  removeIntrons( introns ) {
    return this.removeSubstrings(introns)
  }
}

DNAString.NUCLEOTIDES = ["A","C","G","T"]
DNAString.COMPLEMENTS = {"A":"T","C":"G","G":"C","T":"A"};