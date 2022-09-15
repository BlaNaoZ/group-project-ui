const express = require('express')
const interface = require('./interface.js')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/checkemployee', async (req, res) => {
    if(req.session.data['department'] == "SALES")
        res.redirect('new-sales');
    else {
        var newEmployee = req.body;

            var insertedKey = await interface.addEmployee(newEmployee);
            if(insertedKey == null)
                console.log("Something went wrong");
            else {
                res.render("insert-success")
                console.log("Inserted successfully.")
            }
    }
});

router.post('/addemployee', async (req, res) => {
    var newEmployee = req.body;

    var insertedKey = await interface.addEmployee(newEmployee);
    if(insertedKey == null)
        console.log("Something went wrong");
    else {
        res.render("insert-success")
        console.log("Inserted successfully.")
    }
});

router.post('/addsalesemployee', async(req, res) => {
    var newSalesEmployee = req.body;
    var insertedKey = await interface.addSalesEmployee(newSalesEmployee);
    if(insertedKey == null)
        console.log("Something went wrong.");
    else {
        res.render("insert-success")
        console.log("Sales employee inserted successfully.")
    }
});

module.exports = router
