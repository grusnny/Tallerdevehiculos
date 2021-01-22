import {postRepair, getAllRepairs} from '../services/repairs'

//Example post
const querystring = require('querystring');
    postRepair(querystring.stringify(
        // aqui va la info requerida en body, se utiliza para el caso de put y post
        {
            // Esta es la estructura del Json para un post o put de reparaciones el rId se genera automaticamente
            licensePlateVehicle:"asda",
            state:"",
            listStates:"",
            spareParts:"",
            cost:"",
            partsCost:"",
            otherCosts:"",
            inCharge:"" 
        }

        // Esta es la estructura del Json para un post o put de vehiculos
        /*
        {
            licensePlate:"",
            owner:"",
            type:"",
            mark:"",
            modelNumber:"",
            color:"",
            creationDate:"",
            updateDate:"",
            createdBy:"",
            updatedBy:""  
        }
        */ 
    ))
        .then(data => {
            console.log(data);
        })
        .catch(function (err) {
            console.log(err);
        });

//Example get de reparaciones
getAllRepairs()
    .then(data => {
        const info =JSON.stringify(data)
        console.log("esta es la informacion: " + info);
        let repairs=[];                  
        for (var clave of data){ 

            if (clave.profession=="Validacion de ser necesaria para los datos") {
                console.log(clave);
                repairs.push(clave);
            }
        }
        console.log(repairs)
        setWorker(repairs.map(doc => ({ ...doc, id:doc.rId }))) //Ejemplo de como llenar un hook para la creación de componentes
        
    })
    .then(data => console.log(data) )
    .catch(error => console.log('error', error));
