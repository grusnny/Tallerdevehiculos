const API = 'https://tallervehiculosdynamodb.herokuapp.com';
const REQUEST_API = API + '/vehicles';

var headers = new Headers();
headers.append('Content-Type', 'application/json');

var requestOptionsGet = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};
 
async function updateVehicle(request = {}) {
    const response = await fetch(REQUEST_API,{
        method: 'PUT',
        headers: headers,
        body: request,
        redirect: 'follow'
      })

    return response.json();
} 

async function deleteVehicle(request = {}) {
    const response = await fetch(REQUEST_API,{
        method: 'DELETE',
        headers: headers,
        body: request,
        redirect: 'follow'
      })

    return response.json();
} 

async function getVehicleById(id = "") {

    const response = await fetch(REQUEST_API+"/"+id, requestOptionsGet)
    return response.json(); 

} 

async function postVehicle(request = {}) {
    const response = await fetch(REQUEST_API, {
            method: 'POST',
            headers: headers,
            body: request,
            redirect: 'follow'
        })

    return response.json(); 
}   

async function getAllVehicles() {

    const response = await fetch('https://run.mocky.io/v3/fe451829-1cf8-4f3d-a790-9be0ffba4765', requestOptionsGet)
    return response.json(); 

}   

export {getAllVehicles,getVehicleById,postVehicle,updateVehicle,deleteVehicle}