// New functions for the interface go here:
const axios = require('axios');

exports.addEmployee = async (newEmployee) => {
    try {
        console.log(newEmployee)
        var insertIndex = await axios.post('http://localhost:8080/api/enter/employee', newEmployee);
        return insertIndex;
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

exports.addSalesEmployee = async (newSalesEmployee) => {
    try {
        var insertIndex = await axios.post('http://localhost:8080/api/enter/salesEmployee', newSalesEmployee);
        return insertIndex;
    }
    catch(e) {
        console.log(e);
        return null;
    }
}