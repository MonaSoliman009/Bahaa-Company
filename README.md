//sign up for accountant (POST)
http://localhost:3000/accountant/signup

interface>>>
name:"string",
email:"string",
password:"string"

//////////////////////////////////////////////////////////////////////////////////////////////
//sign up for employee(POST)
http://localhost:3000/employee/signup

interface>>>
name:"string",
email:"string",
password:"string"

//////////////////////////////////////////////////////////////////////////////////////
//login(POST)
http://localhost:3000/login

interface>>>
email:"string"
password:"string"

/////////////////////////////////////////////////////////////////////////////////
//list unapproved employees(GET)
http://localhost:3000/owner/list/employees/unapproved

/////////////////////////////////////////////////////////////////////////////////
//list unapproved accountants(GET)
http://localhost:3000/owner/list/accountants/unapproved

////////////////////////////////////////////////////////////////////////////////
//approve employee
http://localhost:3000/owner/approve/employee/:id (send accountant id in url)

///////////////////////////////////////////////////////////////////////////
//approve accountant(POST)
http://localhost:3000/owner/approve/accountant/:id (send accountant id in url)

//////////////////////////////////////////////////////////////////////////////
//list approved accountants(GET)
http://localhost:3000/owner/list/accountants/approved

////////////////////////////////////////////////////////////////////////////
//list approved employees(GET)
http://localhost:3000/owner/list/employees/approved

/////////////////////////////////////////////////////////////////////////////////
//owner can add another owner (POST)

http://localhost:3000/owner/add

interface>>>
name:"string",
email:"string",
password:"string"

///////////////////////////////////////////////////////////////////////////////

add product (POST)

http://localhost:3000/product/add/:id

       (the id in url is for employee or accountant or owner anyone can add prduct)

interface>>>>>

serialNumber:Number ,
model:String ,
addedAt:Date ,
quantity:Number ,
price: Number,

//////////////////////////////////////////////////////////////////////////////

list owner account details (GET)

http://localhost:3000/owner/account/:id (id for owner)

//////////////////////////////////////////////////////////////////////////////

delete accountant (DELETE)

http://localhost:3000/owner/accountant/delete/:id

//////////////////////////////////////////////////////////////////////////////

delete employee (DELETE)

http://localhost:3000/owner/employee/delete/:id

//////////////////////////////////////////////////////////////////////////////

Purchase Invoice:
/////////////////////////

add purchase invoice:
http://localhost:3000/purchase/add/:id (POST) >>>>>>id for (owner or employee or accountant)

interface>>>>>>>>>

purchaseNumber:number
supplier:string
products: [
{
serialNumber: string,
model: String,
quantity:number,
price:number,
}
]

///////////////////////////

list purchase invoices:

http://localhost:3000/purchase/list (GET)

///////////////////////////////////////////////////////////////////////////////

sale Invoice:
/////////////////////////

add sale invoice:
http://localhost:3000/sale/add (POST)

interface>>>>>>>>>

customerName:string
price:number
Products: [

        {
           productSerialNumber:Number,
          quantity: number,
          configuration: {
            cpu:string,
            withCharger:boolean,
            ram:type:Number,
            hard:String
         }
        }

    ]

accessories:[
{
type: String,
price: Number,
quantity: Number}

           ]

seller:id (Employee id)

///////////////////////////

list sale invoices:

http://localhost:3000/sale/list (GET)

//////////////////////////////////////////////////////////

list sold products Report:

http://localhost:3000/soldProducts/list (GET)

///////////////////////////////////////////////////////

get product by serial number:

http://localhost:3000/product/getBySerialNum (POST)

interface>>>>>

serialNumber:number (serial number for the product)

/////////////////////////////////////////////////////////////////////////

list all products (GET)

http://localhost:3000/product/list
//////////////////////////////////////////////////////////////

list sale invoice by it's id (GET)

http://localhost:3000/sale/list/:id

/////////////////////////////////////////////////////////////
list purchase invoice by it's id (GET)

http://localhost:3000/purchase/list/:id
//////////////////////////////////////////////////////////

start Test (Socket Io)

-Event Name: startTest
-arguments :(productserialNumber, testerId);
*productserialNumber:number;
*testerId:Id

/////////////////////////////////////////////////////////////

submit test (Socket io)

-Event Name : submitTest
-arguments:(finished, productserialNumber, testData, testerId)

*finished:Boolean
*productserialNumber:number
\*testData:{
"power": Boolean,
"condition": {
"aPart": {
"avaliable": Boolean,
"hasScratch": Boolean,
"broken": Boolean,
"dent": Boolean
},
"bPart": {
"avaliable": Boolean,
"hasScratch": Boolean,
"broken": Boolean,
"dent": Boolean
},
"cPart": {
"avaliable": Boolean,
"hasScratch": Boolean,
"broken": Boolean,
"dent": Boolean
},
"dPart": {
"avaliable": Boolean,
"hasScratch": Boolean,
"broken": Boolean,
"dent": Boolean
},
"location": [
{
"partName": String,
"PartProblem": String
}
]
},
"configuration": {
"cpu": String,
"generation":number,
"ram": number,
"hdd": string
},
"battery": {
"avaliable": Boolean,
"batteryHealth": String
},
"lcd": {
"avaliable": Boolean,
"status": String,
"hasScratch": Boolean,
"hasSpots": Boolean,
"hasLine": Boolean,
"hasPixel": Boolean,
"broken": Boolean
},
"bazel": {
"avaliable": Boolean,
"broken": Boolean,
"location": String
},
"keyboard": {
"avaliable": Boolean,
"working": Boolean
},
"dvd": {
"avaliable": Boolean,
"working": Boolean
},
"speakers": {
"avaliable": Boolean,
"working": Boolean
},
"camera": {
"avaliable": Boolean,
"working": Boolean
},
"hasVGAorIntel": Boolean
}

\*testerId:Id

////////////////////////////////////////////////////
start maintenance Inside Store (Socket Io)

*Event Name: startMaintenanceInsideStore
*arguments: (productserialNumber, maintainererId)

/////////////////////////////////////////////////

submit maintenance inside store (Socket Io)

\*Event Name:submitMaintenanceInsideStore

*arguments:(productserialNumber, maintainererId,sparePartsData, MaintenanceData,repaired)
productserialNumber:number;
maintainererId:id;
sparePartsData:[
{
"serialNumber": Number,
"insideProduct": {
"isInside": Boolean,
"product": Number >>>>>>>>>>>>>>>(serial number)
}
}
]
MaintenanceData:{
"isAdded": Boolean,
"sparePartNumber": [>>>>>>>>>>>>>>>>>>>>>>>>array of serial numbers of spare parts
number
]
}
repaired:Boolean
/////////////////////////////////////////////////////////////////////////////
start maintenance outside Store (Socket Io)
*Event Name: startMaintenanceOutsideStore
\*arguments: (productserialNumber, maintainererId)
productserialNumber:number;
maintainererId:id;
/////////////////////////////////////////////////////////////////////////////
submit maintenance outside store (Socket Io)

\*Event Name:submitMaintenanceOutsideStore

\*arguments:(productserialNumber,maintainererId,MaintenanceData,repaired)
productserialNumber:number;
maintainererId:id;
MaintenanceData:
{
"shopName": String,
"recipient": String
"deliveryMan": String
"cost": number,
repaired:Boolean

}

