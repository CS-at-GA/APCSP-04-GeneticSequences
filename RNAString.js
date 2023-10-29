class RNAString extends GeneticString {
  constructor(string) {
    super(string) 
  }

  toProtein() {
    return new ProteinString(
      this.string.replace(/.{3}/g, (m) => codonTable[m] )
    )
  }

  // This is the second step in solving the Open Reading Frames problem
  // As described in the reading, an ORF is an RNAString beginning with the  
  //   start codon, ending with a stop codon, and having no stop codons in
  //   between. 
  // This function should return an array of all ORFs derived from this RNAString
  openReadingFrames() {
    let orfs = []  
    
    return orfs
  }
}

RNAString.NUCLEOTIDES = ["A","C","G","U"]