# Genetic Strings

In this assignment, we will be exploring [Project Rosalind](https://rosalind.info/). I encourage you to read about it, and to maybe brush up on your genetics, though, strictly speaking, these are CS-based problems focused on string/array manipulation, data structures, and searching/pattern-matching algorithms. As you can see in this [tree view of the problems](https://rosalind.info/problems/tree-view/), there is a heiracrchy of dependencies that helps to organize problems. It may be useful to look at problems "higher up the tree" than the problems we are working on (make sure to expand the collapsed part that explains the concepts behind the challenge!).

**Note on Project Rosalind**

It may or may not be useful to create an account on Project Rosalind. Having an account allows you access to the larger datasets they use to check whether your solution for a given problem works. That is the useful part. The not useful part, is that you have to have solved all prerequsite problems in order to attempt to solve a problem (and, thus, have access to the data set). We'll develop code that will at least get you close to some of those solutions

## Pre-reads

### Working with Arrays and Strings

Given that much of the work has to do with `Array` and `String` manipulation, it might be useful to have a refresher about what tools are in your toolbox.

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

There's a lot of code given. You'll see a number of files and it is useful to go through them. One thing that isn't obvious is that we are making use of an _Object Oriented Programming_ concept here to make our lives easier. The idea is simple: you have a concept you want to model like "Rectangle." A rectangle has properties (length, width, location, color) and maybe functions assocated with it (area, perimeter). So, you model the concept using a _class_. Then, you get the idea that you might want to model other shapes. Shapes have similar properties, but they are also different in important ways. You want to reduce the duplication of effort while at the same time making all shapes easier to work with. So, maybe you design a `Polygon` class from which now `Rectangle` _inherits_ certain properties and pieces of functionality, as does `Triangle` and `Heptagon.` 

You can see this _hierarchy_ of classes and reduction of code happening in this project. I have defined a `GeneticString` class that provides some baseline functionality, and then there are three classes that inherit from it: `DNAString`, `RNAString`, and `ProteinString`. For instance, `GeneticString` provides a method called `substringLocations` which returns an array of all of the locations of a given substring in the string, _regardless_ of what kind of genetic string it is (DNA, RNA, Protein). Further, the method provides protection against looking for, say, a DNA string in RNA. Finally, you don't have to even do anything to get this functionality. If you look in `ProteinString.js`, you won't find the method, but this code works just fine:

```JavaScript
const p = new ProteinString("MAMA")
let locations = p.substringLocations("AM")
console.log( locations ) // [1]
```

It is important to know about this, but the problem details below guide you as to where you need to be focusing in order to solve the problems. The scaffolding is here to make it easier to focus on the specific task at hand, rather than the surrounding details (though, those are interesting)

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
