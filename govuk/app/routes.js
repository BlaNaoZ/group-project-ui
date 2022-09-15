const express = require('express')
const interface = require('./interface.js')
const router = express.Router()
const employee = require('./interface.js')

// Add your routes here - above the module.exports line

router.get('/view-hr-employee', async (req, res) => {
    var result = await employee.getEmployees()
    res.render('view-hr-employee', {
    employees: result
    });
})

module.exports = router
