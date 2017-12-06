'use strict'

const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')

const csvFilePath = path.join(__dirname, 'data', 'customer-data.csv')

const convertToJSON = (csvFile = csvFilePath) => {
  const jsonFile = []

  csv()
  .fromFile(csvFile)
  .on('json', (jsonObj) => {
    jsonFile.push(jsonObj)
  })
  .on('done', (error) => {
    fs.writeFile('out.json', JSON.stringify(jsonFile), 'utf-8', (error) => {
      if (error) {
        throw error
      }
      console.log(`file ${csvfile} should be written`)
    })

    if (error) { throw error }

    // console.log(jsonFile)
  })
}

convertToJSON(process.argv[2])
