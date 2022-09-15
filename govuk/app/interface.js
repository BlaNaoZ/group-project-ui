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
