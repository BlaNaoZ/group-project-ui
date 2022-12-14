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

exports.getSalesEmployees = async () => {
    let Employees = []
    try{
        const viewEmployee = await axios.get('http://localhost:8080/api/report/sales')
        console.log(viewEmployee.data)
        return viewEmployee.data.list;

    }
    catch(e) {
        console.log(e);

    }
    return("Could not return HR employees")
}

exports.getFinanceEmployees = async () => {
    let Employees = []
    try{
        const viewEmployee = await axios.get('http://localhost:8080/api/report/finance')
        console.log(viewEmployee.data)
        return viewEmployee.data.list;

    }
    catch(e) {
        console.log(e);

    }
    return("Could not return HR employees")
}

exports.getHighestSalesEmployee = async () => {
    let Employees = []
    try{
        const viewEmployee = await axios.get('http://localhost:8080/api/getHighestEarningEmployee')
        console.log(viewEmployee.data)
        Employees.push(viewEmployee.data)
        return Employees;
    }
    catch(e) {
        console.log(e);

    }
    return("Could not return Highest Sales employee")
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
exports.getFinanceReport = async () => {
    let Employees = []
    try{
        const viewEmployee = await axios.get('http://localhost:8080/api/finance/report')
        console.log(viewEmployee.data)
        return viewEmployee.data.list;

    }
    catch(e) {
        console.log(e);

    }
    return("Could not return Finance Report")
}

