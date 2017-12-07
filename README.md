# csvtojson
Module 1 Assignment Lab: CSV to JSON Converter 

**Usage**  
`$ node index.js` or   
`$ node index.js path-to-csv-file`

**Walkthrough** 
* We import `csvtojson`, `fs` and `path` into my project. `csvtojson` is an npm module while the others are node core modules.
* Next we create a variable `csvFilePath` to hold the path to the input csv file.
* The program uses the sample csv file (customer-data.csv) provided for this assignment as the default argument but provides option to use any file when running as a commandline program. The csv file is provided as the second argument after specifying the file to run. See usage above.
* The function `convertToJSON()` accepts a csv file and converts the file to JSON format. If no file is specified, a default file is used. In the function we create an array to hold each JSON object so that we have an array of JSON objects.
* Next we call the `csvtojson()` function and pass in our csv file, we listen for the `json` event and push each event to array.
* When the `done` event is triggered we call `JSON.stringify()` and pass our array as argument then write its contents to file. We then log a message on successful write.
* I'm using the async `fs.writeFile()` for no other reason than that I  prefer it.

**Notes**    
* At first attempt I named the repo csvtojson and tried to install the `csvtojson` module from npm. Npm complained so I changed my project name to avoid the name conflict.
* After `csvtojson` converted the input csv file to json, I had to do a JSON.stringify() before writing the output json to disk. 
* I am writing the output json to a file (out.json) in the current working directory
* I tested the program with another csv file from the ibm site. The file is in the `./data` folder.


**Meta**  
* I'm using `standard` for code linting. Code linting is a great idea by the way, it helps you avoid classes of errors and enforce a uniform style when collaborating on a project. I was using [`xo`](https://github.com/sindresorhus/xo) but found that [`standard`](https://github.com/standard/standard) fits my style better.
