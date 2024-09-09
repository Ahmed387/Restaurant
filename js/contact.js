let sidebar1 = document.querySelector(".sidebar1"); 
let middleicon = document.querySelector(".middleicon"); 
let Name=document.querySelector("#Name");
let Email=document.querySelector("#Mail");
let Pass=document.querySelector("#Pass");
let Repass=document.querySelector("#Repass");
let Age = document.querySelector("#Age");
let Tel = document.querySelector("#Tel");
let Pwarn=document.querySelector("#Pwarn");
let Pwarn2=document.querySelector("#Pwarn2");
let Pwarn3=document.querySelector("#Pwarn3");
let Pwarn4=document.querySelector("#Pwarn4");
let Pwarn5=document.querySelector("#Pwarn5");
let Pwarn6=document.querySelector("#Pwarn6");



// slider
let SS =  $(middleicon).click(function () 

{
    let x = $(sidebar1).innerWidth();
    if (x > 0) {
      $(sidebar1).animate({ "min-width": "0" }, {
        duration: 700,
        complete: function () {
          $("#Xicon").addClass("d-none");
          $("#Baricon").removeClass("d-none");
          x = $(sidebar1).innerWidth();
        }
      });
    } 
    else {
            $(sidebar1).animate({ "min-width": "240px" }, {
              duration: 700,
              complete: function () {
                $("#Baricon").addClass("d-none");
                $("#Xicon").removeClass("d-none");
                x = $(sidebar1).innerWidth();
                AOS.init();
              }
            });
          }
});


//BTN1.setAttribute("disabled","disabled"); //imp


Name.addEventListener("input", function ValidateName()//Validation name
{
  let Regex=/^[a-zA-Z]{3,5}[0-9]{2,8}$/; 
  let NV=Name.value;
  if (Regex.test(NV)) 
    {
      console.log("sucssess");
      Pwarn.classList.add("d-none");
      Pwarn.classList.remove("d-block");
      Name.classList.add("is-valid");
      Name.classList.remove("is-invalid");
    }
    else
    { 
      console.log("Try again");
      Pwarn.classList.add("d-block");
       Pwarn.classList.remove("d-none");
      Name.classList.add("is-invalid");
      Name.classList.remove("is-valid");
    }

  }) 

Email.addEventListener("input", function ValidateEmail() //validation Email
{
  let Regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/; //At least @ one time . At least one time
  let EV=Email.value;
  if (Regex.test(EV)) 
{
  console.log("sucssess");
  Pwarn2.classList.add("d-none");
  Pwarn2.classList.remove("d-block");
  Email.classList.add("is-valid");
  Email.classList.remove("is-invalid");
}
else
{ 
  console.log("Try again");
   Pwarn2.classList.add("d-block");
   Pwarn2.classList.remove("d-none");
  Email.classList.add("is-invalid");
  Email.classList.remove("is-valid");
}
}) 

Pass.addEventListener("input",function ValidatePassword()//validation Password
{ 
  //At least one lowercase char and one upeercase char and spesial char at least enter 4 digit 
  let Regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,12}$/;
  let PV=Pass.value;
  if (Regex.test(PV)) 
    {
      console.log("sucssess");
      Pwarn3.classList.add("d-none");
      Pwarn3.classList.remove("d-block");
      Pass.classList.add("is-valid");
      Pass.classList.remove("is-invalid");
    }
    else
    { 
      console.log("Try again");
      Pwarn3.classList.add("d-block");
      Pwarn3.classList.remove("d-none");
      Pass.classList.add("is-invalid");
      Pass.classList.remove("is-valid");
    }

}) 

Repass.addEventListener("input", function ()//validation Repassword
{
  let RV=Repass.value;
  if(Pass.value===RV && RV.length>0)
    {
      console.log("sucssess");
      Pwarn4.classList.add("d-none");
      Pwarn4.classList.remove("d-block");
      Repass.classList.add("is-valid");
      Repass.classList.remove("is-invalid");
    }
    else
    {
      console.log("Try again");
      Pwarn4.classList.add("d-block");
      Pwarn4.classList.remove("d-none");
      Repass.classList.add("is-invalid");
      Repass.classList.remove("is-valid");
      
    }
  })
  
Tel.addEventListener("input",function()//validation number
{
  let Regex = /^(?:\+20|0020)?1[01259]\d{7,10}$/;
  let TV = Tel.value;
  
  if (Regex.test(TV)) {
    console.log("success");
    Pwarn5.classList.add("d-none");
    Pwarn5.classList.remove("d-block");
    Tel.classList.add("is-valid");
    Tel.classList.remove("is-invalid");
  } else {
    console.log("Try again");
    Pwarn5.classList.add("d-block");
    Pwarn5.classList.remove("d-none");
    Tel.classList.add("is-invalid");
    Tel.classList.remove("is-valid");
  }
});

Age.addEventListener("input",function ()//validation Age
{
  let AV=Age.value;
  if(AV >= 10 && AV<120 )
    {
      console.log("sucssess");
      Pwarn6.classList.add("d-none");
      Pwarn6.classList.remove("d-block");
      Age.classList.add("is-valid");
      Age.classList.remove("is-invalid");
      
    }
    else
    {
      console.log("Try again");
      Pwarn6.classList.add("d-block");
      Pwarn6.classList.remove("d-none");
      Age.classList.add("is-invalid");
     Age.classList.remove("is-valid");
    }})
    

//Ab2$ for password check

//check

$(document).ready(function() {
  let inputs = document.querySelectorAll("input");
  let BTN1 = document.getElementById("BTN1"); 
  BTN1.setAttribute("disabled", "true");
  $(".B").mouseenter(function () {
    let allValid = true;

    inputs.forEach(el => {
      if (el.value.length === 0 || !el.classList.contains("is-valid")) // if allvalid is updated in its value button willnot be untouchable 
      {
        allValid = false;
      }
    });

    if (allValid) {
      BTN1.removeAttribute("disabled");
    } else {
      BTN1.setAttribute("disabled", "true");
    }
  });
});


