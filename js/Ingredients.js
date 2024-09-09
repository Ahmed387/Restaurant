let sidebar1 = document.querySelector(".sidebar1"); 
let middleicon = document.querySelector(".middleicon"); 
let row1 = document.querySelector("#row1");
let loaderbox=document.querySelector(".loaderbox")
let  globalVar;
$(document).ready(function () {

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


getMeal();
let Final={};
async function getMeal()
{
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  let data = await response.json();
  Final=data;
  Display();
  loaderbox.classList.add("d-none");
}

//create 20 element and display
function Display()
{  
  for(let i =0 ;i< 20;i++)
{
let child=document.createElement("div");
child.className="col-12 col-sm-4 col-md-3  ";

let inn = document.createElement("div");
inn.className="inner ";
child.appendChild(inn);

let Box =document.createElement("div")
Box.className="bg-black  d-flex justify-content-center align-items-center flex-column BO";
Box.innerHTML= `<i class="fa-solid fa-drumstick-bite HO" style="color: #ffffff;"></i>`
inn.appendChild(Box);
let name = document.createElement("h2");
name.className="text-center text-white mt-2";
name.innerHTML=Final.meals[i].strIngredient;
inn.appendChild(name);



let discr = document.createElement("p");
discr.className="text-center text-white mt-2";
discr.innerHTML=Final.meals[i].strDescription.slice(0,115);
inn.appendChild(discr);




row1.appendChild(child);
Box.addEventListener("click",function()
{
  window.location.href=`../index.html`;
  let localVar=Final.meals[i].strIngredient;
  globalVar = localVar;
  localStorage.setItem("ING",globalVar);
})
}


}

});


