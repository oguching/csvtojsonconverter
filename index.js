'use strict'

// the program will accept a csv file from commandline
// if one does not exist, then it will use the one
// found in test/data

// const csvtojson = require('csvtojson')
const fs = require('fs')
const path = require('path')

// const acceptCSV = (file = '')

// console.log(csvtojson())

const foldername = 'data'

if (fs.existsSync(path.join(__dirname, foldername))) {
  console.log('file exists')
} else {
  console.log('no file here')
}

// console.log(path.join(__dirname, foldername))
