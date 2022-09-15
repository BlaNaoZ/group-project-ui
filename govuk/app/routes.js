const express = require('express')
const interface = require('./interface.js')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/addemployee', async (req, res) => {
    var newEmployee = req.body;
    var insertedKey = await interface.addEmployee(newEmployee);
    if(insertedKey == null)
        console.log("Something went wrong");
    else
        console.log("Inserted successfully.")
})

module.exports = router
