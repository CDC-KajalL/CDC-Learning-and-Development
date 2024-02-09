async function test(){
    try{
        const api = await fetch("https://dummy.restapiexample.com/api/v1/employee/1")
        
        if(api.ok){
            const response = await api.json();
            console.log(response)
            console.log(response.data.employee_name)
        }

    }catch(error){
        console.error("you have enetered into error zone!")
    }
}
test()