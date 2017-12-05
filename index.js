'use strict'

// the program will accept a csv file from commandline
// if one does not exist, then it will use the one
// found in test/data

// const csvtojson = require('csvtojson')
const fs = require('fs')
const path = require('path')

// const acceptCSV = (file = '')

fs.readFile(path.join(__dirname, 'data', 'customer-data.csv'), 'utf-8', (error, data) => {
  if (error) {
    throw error 
  }

  console.log(data)
})