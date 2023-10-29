class GeneticString{
  #string

  constructor(string) {
    this.string = string
  }

  get string() { return this.#string }
  get length() { return this.string.length }
  get chars() { return [...this.string] }
  
  set string(string) {
    const validCharacters = GeneticString.CHARACTER_SETS[this.constructor.name] ?? []
    if( GeneticString.#validate( string, validCharacters ) ) {
      this.#string = string
      // console.log( `valid  ${this.constructor.name}: ${string}`)
    } else {
      throw new Error( `Invalid characters for ${this.constructor.name}: ${string}` )
    }    
  }

  get characterCounts() {
    return this.chars.reduce( (counts, c) => {       
        c in counts ? counts[c]++ : counts[c] = 1;
        return counts
    },{}) 
  }

  substringLocations(substring, oneBasedIndices = false ) {
    substring = this.#fromStringOrGeneticString( substring ).string
    let index = this.string.indexOf(substring)
    const lastIndex = this.string.lastIndexOf(substring)
    let indices = []
    while( index <= lastIndex && index !== -1 ) {
      indices.push(index + oneBasedIndices )
      index = this.string.indexOf(substring, index + 1)
    }
    return indices
  }

  // These two functions will handle GeneticStrings and strings and do the 
  //   validation via the setter called from the constructor
  #fromStringOrGeneticString( unknownString ) {
    const string = typeof unknownString === "string" ? unknownString : unknownString.string
    return new this.constructor(string) 
  }

  #fromStringsOrGeneticStrings( unknownStringArray ) {
    return unknownStringArray.map( s => this.#fromStringOrGeneticString(s) )
  }

  // This is the main function for solving the RNA Splicing problem. Solving
  //   it in the general case will mean that we can apply this same functionality 
  //   to any sort of GeneticString we have. 
  // The general algorithm is to find a substring, take it out, and glue the 
  //   remainders back together. As a practical matter, there is a bit more to it 
  //   than that. You are given an array called substrings that is then validated and  
  //   assured to be instances of whatever sort of GeneticString we are using  
  //   (DNAString). You are also given a regular string object. You can see that
  //   the return statement creates a new instance of whatever kind of 
  //   GeneticString we are with the altered string. 
  removeSubstrings(substrings) {
    substrings = this.#fromStringsOrGeneticStrings(substrings)
    let string = this.string
    // your code goes here
    return new this.constructor(string)
  }

  hammingDistance(otherString) {
    return GSUtil.hammingDistance( this, this.#fromStringOrGeneticString(otherString) )
  }

  toString() { return this.#string }
  
  static #validate(sequence,validCharacters = []) {
    if( validCharacters.length === 0 ) {
      return true
    } else {
      const regex = new RegExp(`[${validCharacters.join("")}]`, "g")
      return sequence.match(regex).length === sequence.length
    }
  }
}