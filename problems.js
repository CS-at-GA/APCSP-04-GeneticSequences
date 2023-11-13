let problems = {
  splc: {
    display: {
      name: "RNA Splicing",
      key: "r",
      abbreviation: "SPLC"
    },
    test: {
      input: {
        string: "ATGGTCTACATAGCTGACAAACAGCACGTAGCAATCGGTCGAATCTCGAGAGGCATATGGTCACATGATCGGTCGAGCGTGTTTCAAAGTTTGCGCCTAG",
        introns: ["ATCGGTCGAA", "ATCGGTCGAGCGTGT"]
      },
      expected: "MVYIADKQHVASREAYGHMFKVCA"
    },
    rosalind: {
      exepected: "MVTLILLVFRLHSTTCIIEGSCTNLPRTRSSTYTTNNPYAEFEIGAKHKTTTFMGAVVGRIRVQCLSPDAIHKRPKIMMSAPVILPLQYRALNFYTVRSVYNHDYQDPILSSEDSRDKGRFCIASLGEHRQSDKKRMSTSGVIVLSCYSAPMAVISFTRRYEIQSSLSPR"
    }
  },
  orf: {
    display: {
      name: "Open Reading Frames",
      key: "o",
      abbreviation: "ORF"
    },
    test: {
      input: {
        string: "AGCCATGTAGCTAACTCAGGTTACATGGGGATGACCCCGCGACTTGGATTAGAGTCTCTTTTGGAATAAGCCTGAATGATCCGAGTAGCATCTCAG"
      },
      expected: [
        "MLLGSFRLIPKETLIQVAGSSPCNLS",
        "M",
        "MGMTPRLGLESLLE",
        "MTPRLGLESLLE"
      ]
    },
    rosalind: {
      expected: [
        "MYLRQDETPSVKNSCRDRSHHTLYMCLCASPRQQHILYSIVCEFGQYR",
        "MCLCASPRQQHILYSIVCEFGQYR",
        "MLHGLAWGWARLQNLTV",
        "METVNWKHGRRFVTL",
        "MGSVPLSYERNS",
        "MSRDSRAHTHFQ",
        "MVWPGDGRGCKTSPFKR",
        "MSGILEGRLVGICLSRSHETRMTVVHLCRGTQEHTPISNDEA",
        "MTVVHLCRGTQEHTPISNDEA",
        "M",
        "MSGHAVTIRHVPPPGRDAFREEFL",
        "MRVSAATAYIV",
        "MGAAAKPHRLRGDFFSENGDGQLEARTEVRDSMTHWPFR",
        "MTHWPFR",
        "MGHSKEAV",
        "MKPA",
        "MTKPNTKRLKLSRLSASTNTGA",
        "MSPTLYTNPVE",
        "MR",
        "MYYSHAGFM",
        "MLRFVAL",
        "MSNRRDIRPRCSYWLTAVKASIFWC",
        "MGVCS",
        "MRVSCDLLRQMPTSLPSRIPLIAKRYTTHRYQQRRLISHVIQFKQLLLNDPLAFPLASGKANGS",
        "MPTSLPSRIPLIAKRYTTHRYQQRRLISHVIQFKQLLLNDPLAFPLASGKANGS",
        "MKHGRGTRNVRDAVCLDLSPFSDGSYQGIGRISLSVLTKFTNYTIQYMLLPRRRA",
        "MLLPRRRA",
        "MMAAVSTGILHGRRLVLAEVHA",
        "MAAVSTGILHGRRLVLAEVHA",
        "MGHRVTNLRPCFQLTVSILTKEITS",
        "MDEARET",
        "MQYA",
        "MEVIRV"
      ]
    }
  },
  lcsm: {
    display: {
      name: "Finding a Shared Motif",
      key: "s",
      abbreviation: "LCSM"
    },
    test: {
      input: {
        strings: [
          "GATTACA",
          "TAGACCA",
          "ATACA"
        ]
      },
      expected: "AC"
    },
    rosalind: {
      expected: "CAATGCCCTCTCACGGACCCAGGCGTTACTCTGTATAATCCACTCGCGTTTGGCCTTATCGTCGTACTTGCACATACAGGGCCGAGAAGTCACCACGACTTAAA"
    }
  }
}

// could consolidate if we can figure out string substitution and different data formats
function loadLCSMData() {
  return new Promise((resolve, reject) => {
    if (useLargeDataSets) {
      loadStrings('rosalindData/assignmentData/rosalind_lcsm.txt', (lines) => {
        resolve(postLoadFASTA(lines))
      }, (error) => reject(error))
    } else {
      resolve(problems.lcsm.test.input)
    }
  })
}

function loadSPLCData() {
  return new Promise((resolve, reject) => {
    if (useLargeDataSets) {
      loadStrings('rosalindData/assignmentData/rosalind_splc.txt', (lines) => {
        resolve(postLoadFASTA(lines))
      }, (error) => reject(error))
    } else {
      resolve(problems.splc.test.input)
    }
  })
}

function loadORFData() {
  return new Promise((resolve, reject) => {
    if (useLargeDataSets) {
      loadStrings('rosalindData/assignmentData/rosalind_orf.txt', (lines) => {
        resolve(postLoadFASTA(lines)[0])
      }, (error) => reject(error))
    } else {
      resolve(problems.orf.test.input)
    }
  })
}

function solveLCSM(input) {
  return new Promise((resolve, reject) => {
    const expected = problems.lcsm[useLargeDataSets ? "rosalind" : "test"].expected
    const str = GSUtil.longestCommonSubstring(input.strings)
    if (str === expected) {
      resolve({ msg: "Finding a Shared Motif succeeded!", output: str })
    } else {
      reject({ msg: `Finding a Shared Motif failed. Was expecting ${expected} but got ${str}`, output: str })
    }
  })
}

function solveSPLC(input) {
  return new Promise((resolve, reject) => {
    const dna = new DNAString(input.string)
    const output = dna.removeIntrons(input.introns).transcribeToRNA().toProtein()
    const expected = new ProteinString(problems.splc[useLargeDataSets ? "rosalind" : "test"].expected)
    if (output.string === expected.string) {
      resolve({ msg: "RNA Splicing succeeded!", output })
    } else {
      reject({ msg: `RNA Splicing failed. Was expecting ${expected.string} but got ${output.string}`, output })
    }
  })
}

function solveORF(input) {
  return new Promise((resolve, reject) => {
    const output = (new DNAString(input.string))
      .candidateProtenStrings()
      .map(p => p.string)
      .sort()

    const expected = problems.orf[useLargeDataSets ? "rosalind" : "test"]
      .expected
      .sort()

    if (output.length !== expected.length) {
      reject({ msg: `Open Reading Frames failed. Was expecting ${expected.length} protein strings and got ${output.length}.`, output })
    } else {
      for (let i = 0; i < output.length; i++) {
        if (output[i] !== expected[i]) {
          reject({ msg: `Open Reading Frames failed. Found the correct number of protein strings, but found string, ${output[i]}, doesn't match ${expected[i]}`, output })
        }
      }
      resolve({ msg: "Open Reading Frames succeeded!", output })
    }
  })
}

const postLoadFASTA = (lines, headers = false) => {
  let fastaStrings = [];

  const update = (current) => {
    current = { ...current, string: new DNAString(current.string) }
    fastaStrings.push(headers ? current : current.string)
  }

  let current;
  for (const line of lines) {
    if (line.at(0) === ">") {
      if (current) {
        update(current)
      }
      current = {
        name: line.substring(1),
        string: ""
      }
    } else {
      current.string += line;
    }
  }
  update(current) // last one
  return fastaStrings
}
