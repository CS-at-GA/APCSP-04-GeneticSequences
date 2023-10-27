class GSUtil {
  // https://rosalind.info/problems/lcsm/
  // Here is where you will solve this problem. Again, we are solving in the general
  //   case, since the algorithm will apply equally to strings with any character
  //   set. Indeed, the first few lines here are setting up that general solution. 
  // To solve this problem you are given a unique character set and a list of strings
  //   made up of that character set. You are also given a Set object which ensures 
  //   unique substrings, though I am not now certain that is strictly necessary. 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  static longestCommonSubstring(strings) {
    const exampleString = strings[0]
    const characters = GeneticString.CHARACTER_SETS[exampleString.constructor.name]
    let potentialSubstrings = new Set(characters)
    strings = strings.map( gs => gs.string )
    let longestSubstring = ""
    // your code goes here
    // would rather return the original type
    return longestSubstring
  }

  static hammingDistance(a,b) {
    if( a.constructor !== b.constructor ) {
      throw new Error( `Invalid hamming distance calculation (mismatched types): ${a.constructor.name} !== ${b.constructor.name}` )
    } else if( a.length !== b.length ) {
      throw new Error( `Invalid hamming distance calculation (mismatched lengths): ${a.length} !== ${b.length}` )
    } else {
      return a.chars.reduce( (differences, _, i) => differences += a.chars[i] !== b.chars[i], 0 )
    }
  }
}