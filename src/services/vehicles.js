const API = 'https://workshoprepairsfirebase.herokuapp.com';
const REQUEST_API = API + '/vehicles';

var headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

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
    console.log(response.json);
    //return response.json();
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

    const response = await fetch(REQUEST_API, requestOptionsGet)
    return response.json(); 

}   

export {getAllVehicles,getVehicleById,postVehicle,updateVehicle,deleteVehicle}