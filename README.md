# csvtojson
csv to json converter assignment on edx introduction to nodejs course

Walkthrough
* I import `csvtojson`, `fs` and `path` into my project. `csvtojson` is an npm module while the others are node core modules.
* Next I create a variable `csvFilePath` to hold the path to the input csv file that is in the `data` folder on the current working directory.
* The program uses the sample csv file provided for this assignment as the default argument but provides option to use any file on disk while running the program by specifying it as the thrird argument. `for example: $ node index.js acsv.csv`

Notes    
* At first attempt I named the repo csvtojson and tried to install the `csvtojson` module. Npm complained so I changed my project name to avoid name conflict.
* After `csvtojson` converted the input csv file to json, I had to do a JSON.stringify() before writing the output json to disk. 
* I am writing the output json to a file in the current working directory


Meta  
* I'm using `standard` for code linting. Code linting is a great idea by the way, it helps you avoid classes of errors and enforce a uniform style when collaborating on a project. I was using [`xo`](https://github.com/sindresorhus/xo) but found that [`standard`](https://github.com/standard/standard) fits my style better.
