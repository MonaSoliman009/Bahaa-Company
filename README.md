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
//list approved accountants(GET)
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
purchaseDate:date
supplier:string
products: [
{
serialNumber: string,
model: String,
addedAt:Date,>>>>>>>(date of today)
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
date:date
Products: [

        {
           productId:id,>>>>>>>
           u can use this route http://localhost:3000/product/getBySerialNum
            to take serial num and get id
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
