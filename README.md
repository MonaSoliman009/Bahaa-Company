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
http://localhost:3000/owner/approve/employee/:id       (send accountant id in url)




///////////////////////////////////////////////////////////////////////////
//approve accountant(POST)
http://localhost:3000/owner/approve/accountant/:id            (send accountant id in url)




//////////////////////////////////////////////////////////////////////////////
//list approved accountants(GET)
http://localhost:3000/owner/list/accountants/approved


////////////////////////////////////////////////////////////////////////////
//list approved accountants(GET)
http://localhost:3000/owner/list/employees/approved



/////////////////////////////////////////////////////////////////////////////////
//owner can add another owner   (POST) 

http://localhost:3000/owner/add


interface>>>
name:"string",
email:"string",
password:"string"


///////////////////////////////////////////////////////////////////////////////

add product  (POST)

http://localhost:3000/product/add/:id

       (the id in url is for employee or accountant or owner anyone can add prduct)


interface>>>>>

 serialNumber:Number ,
    model:String ,
    addedAt:Date ,
    quantity:Number ,
    price: Number,
  

  //////////////////////////////////////////////////////////////////////////////
  
list owner account details   (GET)

http://localhost:3000/owner/account/:id            (id for owner)


//////////////////////////////////////////////////////////////////////////////

delete accountant         (DELETE)

http://localhost:3000/owner/accountant/delete/:id

//////////////////////////////////////////////////////////////////////////////

delete employee         (DELETE)

http://localhost:3000/owner/employee/delete/:id


//////////////////////////////////////////////////////////////////////////////


Purchase Invoice:
/////////////////////////

add purchase invoice:
http://localhost:3000/purchase/add    (POST)

interface>>>>>>>>> 

purchaseNumber:number
purchaseDate:date
supplier:string
purchaseCart:  [
        {
          productId: id  (product or accessories),
          quantity: number,
        }
      ]

///////////////////////////

list purchase invoices:

http://localhost:3000/purchase/list    (GET)
