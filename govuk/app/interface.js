const axios = require('axios');


exports.getEmployees = async () => {
    let Employees = []
    try{
        const viewEmployee = await axios.get('http://localhost:8080/api/report/hr')
        console.log(viewEmployee.data)
        return viewEmployee.data.list;

    }
    catch(e) {
        console.log(e);

    }
    return("Could not return HR employees")
}


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

