
const STOP = "X";
const START_CODON = "AUG";
const STOP_CODONS = ["UAA","UAG","UGA"];
const codonTable = {
  UUC: "F",
  UUA: "L",
  UUG: "L",
  UUU: "F",
  UCU: "S",
  UCC: "S",
  UCA: "S",
  UCG: "S",
  UAU: "Y",
  UAC: "Y",
  UAA: STOP,
  UAG: STOP,
  UGU: "C",
  UGC: "C",
  UGA: STOP,
  UGG: "W",
  CUU: "L",
  CUC: "L",
  CUA: "L",
  CUG: "L",
  CCU: "P",
  CCC: "P",
  CCA: "P",
  CCG: "P",
  CAU: "H",
  CAC: "H",
  CAA: "Q",
  CAG: "Q",
  CGU: "R",
  CGC: "R",
  CGA: "R",
  CGG: "R",
  AUC: "I",
  AUU: "I",
  AUA: "I",
  AUG: "M",
  ACU: "T",
  ACC: "T",
  ACA: "T",
  ACG: "T",
  AAU: "N",
  AAC: "N",
  AAA: "K",
  AAG: "K",
  AGU: "S",
  AGC: "S",
  AGA: "R",
  AGG: "R", 
  GUU: "V",
  GUC: "V",
  GUA: "V",
  GUG: "V",
  GCU: "A",
  GCC: "A",
  GCA: "A",
  GCG: "A",
  GAU: "D",
  GAC: "D",
  GAA: "E",
  GAG: "E",
  GGU: "G",
  GGC: "G",
  GGA: "G",
  GGG: "G",
}