const employee = [
    {id:101,name:'raj',salary:28000},
    {id:102,name:'meet',salary:280000},
    {id:103,name:'jigar',salary:30000},
    {id:104,name:'sakshi',salary:58000},
    {id:105,name:'daksh',salary:22000},
    {id:106,name:'havi',salary:26000},
    {id:107,name:'het',salary:35000},
    {id:108,name:'parth',salary:50000}
]

const getemployee = (req,resp) => {
    resp.json({
        message:'employee data found',
        data:employee
    })
}

const getSalary = (req,resp) => {
    const salary = req.params.salary
    const foundEmp = employee.filter((emp) => emp.salary > salary)

    console.log(foundEmp)

    if(foundEmp){
        resp.json({message:'employee data found',data:foundEmp})
    }else{
        resp.json({message:'employee not found'})
    }
}

module.exports = {
    getemployee,getSalary
}