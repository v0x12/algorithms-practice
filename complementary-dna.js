function DNAStrand(dna) {
  //your code here
  let complementaryDna = "";
  for (i = 0; i < dna.length; i++) {
    if (dna[i] === "A") complementaryDna += "T";
    if (dna[i] === "T") complementaryDna += "A";
    if (dna[i] === "G") complementaryDna += "C";
    if (dna[i] === "C") complementaryDna += "G";
  }
  console.log(complementaryDna);
  return complementaryDna;
}

DNAStrand("ATTGC");
