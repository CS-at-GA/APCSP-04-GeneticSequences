# Genetic Strings

In this assignment, we will be exploring [Project Rosalind](https://rosalind.info/). I encourage you to read about it, and to maybe brush up on your genetics, though, strictly speaking, these are CS-based problems focused on string/array manipulation, data structures, and searching/pattern-matching algorithms. As you can see in this [tree view of the problems](https://rosalind.info/problems/tree-view/), there is a heiracrchy of dependencies that helps to organize problems. It may be useful to look at problems "higher up the tree" than the problems we are working on (make sure to expand the collapsed part that explains the concepts behind the challenge!).

**Special Note**

It may or may not be useful to create an account on Project Rosalind. Having an account allows you access to the larger datasets they use to check whether your solution for a given problem works. That is the useful part. The not useful part, is that you have to have solved all prerequsite problems in order to attempt to solve a problem (and, thus, have access to the data set). We'll develop code that will at least get you close to some of those solutions

## Pre-reads

### Working with Arrays and Strings
[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

[Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Baseline Problems

These problems are already solved in the code, or are relatively simple to solve given what is already here. 

* [https://rosalind.info/problems/dna/](https://rosalind.info/problems/dna/)
* [https://rosalind.info/problems/rna/](https://rosalind.info/problems/rna/)
* [https://rosalind.info/problems/revc/](https://rosalind.info/problems/revc/)
* [https://rosalind.info/problems/prot/](https://rosalind.info/problems/prot/)
* [https://rosalind.info/problems/subs/](https://rosalind.info/problems/subs/)

## Starter Code Overview

We have developed the starter code in class. Here are the examples:

## Assignment 

Complete each of these problems. 

* [RNA Splicing](https://rosalind.info/problems/splc/)
* [Open Reading Frames](https://rosalind.info/problems/orf/)
* [Finding a Shared Motif](https://rosalind.info/problems/lcsm/)

### Problem Details

Make sure to read each of the problems, including any additional text in the problems. 

#### RNA Splicing

You will actually solve the general case of this problem and the function you are looking for is in `GeneticString.js`: `removeSubstrings`. This function should remove all strings in the `substrings` array (the problem description calls these _introns_) from the DNAString and return the result as a new DNAString.

#### Open Reading Frames

There are several parts to solving this problem. The first is `DNAString.readingFrames` where you generate the six reading frames, which are each `RNAString` objects. Next, in `RNAString.js` where you will get all open reading frames for a given `RNAString`. Finally, back in `DNAString.js`, you will take those two functions and combine the results in `candidateProtenStrings`.

#### Finding a Shared Motif

This problem is largely solved in `GSUtil.js` as the general string problem `longestCommonSubstring.`. 

### Requirements

* You must follow the format given by the Project Rosalind problem. 
* You must solve for the example code provided in the problem, though you will also be evaluated over the test data that will be provided. 

### _Some_ Ideas for Ways to Expand on This Project. 

Other interesting problems: 

* [https://rosalind.info/problems/prtm/](https://rosalind.info/problems/prtm/)
* [https://rosalind.info/problems/trie/](https://rosalind.info/problems/trie/)
* [https://rosalind.info/problems/mprt/](https://rosalind.info/problems/mprt/)

<!--- Footnotes --->
[^1]: If, however, you decided to have your input be console-based, your output could be there as well. 
