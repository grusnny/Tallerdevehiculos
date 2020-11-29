const API = 'https://workshoprepairsfirestore.herokuapp.com';
const REQUEST_API = API + '/repairs';

var headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');


var requestOptionsGet = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};
 
async function updateRepair(request = {}) {
    const response = await fetch(REQUEST_API,{
        method: 'PUT',
        headers: headers,
        body: request,
        redirect: 'follow'
      })

    return response.json();
} 

async function deleteRepair(request = {}) {
    const response = await fetch(REQUEST_API,{
        method: 'DELETE',
        headers: headers,
        body: request,
        redirect: 'follow'
      })

    return response.json();
} 

async function getRepairById(id = "") {

    const response = await fetch(REQUEST_API+"/"+id, requestOptionsGet)
    return response.json(); 

}

async function getRepairByLicensePlate(id =""){
    const response = await fetch(REQUEST_API+"/licenseplate/"+id, requestOptionsGet);
    return response.json();


}

async function postRepair(request = {}) {
    const response = await fetch(REQUEST_API, {
            method: 'POST',
            headers: headers,
            body: request,
            redirect: 'follow'
        })

    return response.json(); 
}   

async function getAllRepairs() {

    const response = await fetch(REQUEST_API, requestOptionsGet)
    return response.json(); 

}   

export {getAllRepairs,getRepairById,postRepair,updateRepair,deleteRepair, getRepairByLicensePlate}