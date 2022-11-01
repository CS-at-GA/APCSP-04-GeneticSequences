# Genetic Strings

In this assignment, we will be exploring [Project Rosalind](https://rosalind.info/). I encourage you to read about it, and to maybe brush up on your genetics, though, strictly speaking, these are CS-based problems focused on string/array manipulation, data structures, and searching/pattern-matching algorithms. As you can see in this [tree view of the problems](https://rosalind.info/problems/tree-view/), there are dependencies built in to subsequent problems. It may be useful to look at those problems (make sure to expand the collapsed part that explains the concepts behind the challenge!).

* [https://rosalind.info/problems/dna/](https://rosalind.info/problems/dna/)
* [https://rosalind.info/problems/rna/](https://rosalind.info/problems/rna/)
* [https://rosalind.info/problems/revc/](https://rosalind.info/problems/revc/)

**Special Note**

It may or may not be useful to create an account on Project Rosalind. Having an account allows you access to the larger datasets they use to check whether your solution for a given problem works. That is the useful part. The not useful part, is that you have to have solved all prerequsite problems in order to attempt to solve a problem (and, thus, have access to the data set). We'll develop code that will at least get you close to some of those solutions

It may also be useful to review the panoply of functions available to you for both Strings and Ararys

JavaScript [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) & [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Pre-reads

### Working with Protein Strings
* [https://rosalind.info/problems/prot/](https://rosalind.info/problems/prot/)
* [https://rosalind.info/problems/prtm/](https://rosalind.info/problems/prtm/)
* [https://rosalind.info/problems/splc/](https://rosalind.info/problems/splc/)

### Searching and Pattern Matching
* [https://rosalind.info/problems/lcsm/](https://rosalind.info/problems/lcsm/)
* [https://rosalind.info/problems/subs/](https://rosalind.info/problems/subs/)
* [https://rosalind.info/problems/mprt/](https://rosalind.info/problems/mprt/)
* [https://rosalind.info/problems/orf/](https://rosalind.info/problems/orf/)
* [https://rosalind.info/problems/trie/](https://rosalind.info/problems/trie/)

## Starter Code Overview

We have developed the starter code in class. Here are the examples:

First Three Problems: [A](https://gist.github.com/gajoswald/23d3188c8553ae86b4c419874b0427fe) | [D](https://gist.github.com/gajoswald/7f1006db8644c9a63aa60f5d9f796deb) | [F](https://gist.github.com/gajoswald/1fc08315f5f3e583f403b278b8755bea) 

Second Two Problems: [A](https://gist.github.com/gajoswald/2a9764d0a5e173fa4d7ad6ee9be92929) | [D] | [F]

### Program Structure

There is a lot of code built around the program to support focusing on just writing solutions. The overview of the program flow is here:

[![](https://mermaid.ink/img/pako:eNqVVEtv2zAM_iuETw6Q9gfksCFNmj7yWIF0h6HpgbHpRKssGXogM-L891GWUqTdgGE-0dT3oElax6zQJWWjbGew2cPzdKOAn_HLd0sGntuGLCDMqX2Fq6sv3dhaXwu1A7dHB2_UgrAgFGyFKjltO7jJC920gE1jdGMEOgKOtpJqxjkNhTeGlHuKuUG0uwniMDlKjWU6maLDUzyd9NZrZ9ihg2k0-Khz7ci6QLlusA0qfzO7LhkwuNQcG4MtS17mZkJSB7f5eP1jNYGgFZ0tHITb_9MXLVSsoLCmZHXby6LSqq21t1CglFss3qDyqnBCK-hgdoT0sbMe3WjrgtzXDu5y4xWExCLon0mDS7jScGZ0cN8TSqrQS_dOTPhpwD_khkqDh5S763Mxvr-IH0L8-DKuHK-C2_OkI23ILwShmdwSKWFLfZuofI28x76mgBEVWMcrUHPH4Ke3DnYeTckrtUOh-PVdSGnHOmGzolQH8_xTq6tU7vz_5K2Wvu_ynxaLYylsI7FdJ0yawaJ3aHn1CxbVNXyCdbDM6RcV3p1nvEhjULw6qyM6rqlhew0HI9xFDWEnpWi2mstMZstAXcV41ctUKGQH3_LkCmSMNlCTtbgjQFUm1SCmFWufq4h064uCsR085QejE-5sOsiGWU2mRlHyT38MvE3Gbappk404TGuzyTbqxFD0Tq9bVWQjZzwNM9_wtGgqkK-LOhtVKC1nqRROm2W8SPr75PQbtlx51Q?type=png)](https://mermaid.live/edit#pako:eNqVVEtv2zAM_iuETw6Q9gfksCFNmj7yWIF0h6HpgbHpRKssGXogM-L891GWUqTdgGE-0dT3oElax6zQJWWjbGew2cPzdKOAn_HLd0sGntuGLCDMqX2Fq6sv3dhaXwu1A7dHB2_UgrAgFGyFKjltO7jJC920gE1jdGMEOgKOtpJqxjkNhTeGlHuKuUG0uwniMDlKjWU6maLDUzyd9NZrZ9ihg2k0-Khz7ci6QLlusA0qfzO7LhkwuNQcG4MtS17mZkJSB7f5eP1jNYGgFZ0tHITb_9MXLVSsoLCmZHXby6LSqq21t1CglFss3qDyqnBCK-hgdoT0sbMe3WjrgtzXDu5y4xWExCLon0mDS7jScGZ0cN8TSqrQS_dOTPhpwD_khkqDh5S763Mxvr-IH0L8-DKuHK-C2_OkI23ILwShmdwSKWFLfZuofI28x76mgBEVWMcrUHPH4Ke3DnYeTckrtUOh-PVdSGnHOmGzolQH8_xTq6tU7vz_5K2Wvu_ynxaLYylsI7FdJ0yawaJ3aHn1CxbVNXyCdbDM6RcV3p1nvEhjULw6qyM6rqlhew0HI9xFDWEnpWi2mstMZstAXcV41ctUKGQH3_LkCmSMNlCTtbgjQFUm1SCmFWufq4h064uCsR085QejE-5sOsiGWU2mRlHyT38MvE3Gbappk404TGuzyTbqxFD0Tq9bVWQjZzwNM9_wtGgqkK-LOhtVKC1nqRROm2W8SPr75PQbtlx51Q)

Let's look at a few aspects of that:

#### `problems.js`

This file contains an object that contains other objects that represent each problem. The keys of this object can be anything, but you'll need to make note of them for later. The structure of the object is as follows:

```javascript
{
    testData: {
        type: // file|string|array
        payload: // typically, a file name, a genetic string, or an array of genetic strics.
        postLoad: // optional, and a function that manipulates the incoming data stored in currentProblem.data
    },
    text: "" // the text that will display on the sketch
    f: // the function that will get called as soon as the data is loaded (the entry point to your solution code!)
    displaySolution: // optional, and a function that manipulates the outgoing data stored in currentProblem.solution
```

There are also a couple of functions for managing the input of the data (`loadProblemData` being the most prominent) and the output.

#### `script.js`

There is a bit code in `draw` that shows up at the end of the above flowchart.  

## Assignment 

You will choose one of the following two problems and solve it. 

* [RNA Splicing](https://rosalind.info/problems/splc/)
* [Open Reading Frames](https://rosalind.info/problems/orf/)

### Requirements

* You must follow the format given by the Project Rosalind problem. 
* You must solve for the example code provided in the problem, though you will also be evaluated over the test data that will be provided. 
* You must produce some sort of visible output in the same space of the input. For instance, if you use this starter code, your solution should produce output in a good format on the canvas[^1]

### _Some_ Ideas for Ways to Expand on This Project. 

* Both problems? 
* Additional problems?

<!--- Footnotes --->
[^1]: If, however, you decided to have your input be console-based, your output could be there as well. 
