let sidebar1 = document.querySelector(".sidebar1"); 
let middleicon = document.querySelector(".middleicon"); 
let card ;
let cardbody ;
let row1 = document.querySelector("#row1");
let G=localStorage.getItem("GG");
let A=localStorage.getItem("Area");
let INGR=localStorage.getItem("ING");
let loaderbox=document.querySelector(".loaderbox")
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

let s="seafood";
    let Final={};
    let Final2={};
    let Final3={};


    async function getMeal()
    {
      let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${G||s}`);
      let data = await response.json();
      Final=data;
      Display();
      localStorage.removeItem("GG");
      loaderbox.classList.add("d-none");
    }
    getMeal();

    

    async function getMealArea()
    {
      let response2 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${A}`);
      let data2 = await response2.json();
      Final2=data2;
      Display2();
      localStorage.removeItem("Area");
      loaderbox.classList.add("d-none");      
    }
    getMealArea();


    
    async function getINGRMeal()
    {
      let response3 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${INGR}`);
      let data3 = await response3.json();
      Final3=data3;
      Display3();
      localStorage.removeItem("ING");
      loaderbox.classList.add("d-none");
    }
    getINGRMeal();
    
 


//create 20 element and display
function Display()

{  
  for(let i =0 ;i<Final.meals.length;i++)
{
let child=document.createElement("div");
child.className="col-12 col-md-3 col-sm-4 ";

let inn = document.createElement("div");
inn.className="inner";
child.appendChild(inn);

 card = document.createElement("div");
card.className="card position-relative CA";
inn.appendChild(card);

let img = document.createElement("img");
img.src= `${Final.meals[i].strMealThumb}`;
img.className="img-fluid";
card.appendChild(img);

cardbody = document.createElement("div");
cardbody.className="card-body position-absolute w-100 h-100 d-flex justify-content-center align-items-center CAB";
card.appendChild(cardbody);

let p = document.createElement("p");
p.className="card-text fs-4";
p.innerHTML=`${Final.meals[i].strMeal}`;
cardbody.appendChild(p);
row1.append(child);
}
  let CA =document.querySelectorAll(".CA");
  let CAB =document.querySelectorAll(".CAB");
  
  //add layout on card 
  CA.forEach((ele,i) => {
    $(ele).on({
      mouseenter: function () {
        $(CAB[i]).css("opacity", "1");
        $(CAB[i]).css("top", "0");
      },
      mouseleave: function () {
        $(CAB[i]).css("opacity", "0");
        $(CAB[i]).css("top", "100%");
      },
  
      click:function (e)
      {
        window.location.href="./Show.html"
        localStorage.setItem("IMGname",Final.meals[i].strMeal);
      }
    });
  });
}





function Display2()
{  
  for(let i =0 ;i<Final2.meals.length;i++)
{
let child=document.createElement("div");
child.className="col-12 col-md-3 col-sm-4 ";

let inn = document.createElement("div");
inn.className="inner";
child.appendChild(inn);
card = document.createElement("div");
card.className="card position-relative CA";
inn.appendChild(card);

let img = document.createElement("img");
img.src= `${Final2.meals[i].strMealThumb}`;
img.className="img-fluid";
card.appendChild(img);

cardbody = document.createElement("div");
cardbody.className="card-body position-absolute w-100 h-100 d-flex justify-content-center align-items-center CAB";
card.appendChild(cardbody);

let p = document.createElement("p");
p.className="card-text fs-4";
p.innerHTML=`${Final2.meals[i].strMeal}`;
cardbody.appendChild(p);
row1.append(child);
}
  let CA =document.querySelectorAll(".CA");
  let CAB =document.querySelectorAll(".CAB");
  
  //add layout on card 
  CA.forEach((ele,i) => {
    $(ele).on({
      mouseenter: function () {
        $(CAB[i]).css("opacity", "1");
        $(CAB[i]).css("top", "0");
      },
      mouseleave: function () {
        $(CAB[i]).css("opacity", "0");
        $(CAB[i]).css("top", "100%");
      },
      click:function (e)
      {
        window.location.href="../Show.html"
        localStorage.setItem("IMGname",Final2.meals[i].strMeal);
      }

    });
  });

}





function Display3()
{  
  for(let i =0 ;i<Final3.meals.length;i++)
{
let child=document.createElement("div");
child.className="col-12 col-md-3 col-sm-4 ";

let inn = document.createElement("div");
inn.className="inner";
child.appendChild(inn);
card = document.createElement("div");
card.className="card position-relative CA";
inn.appendChild(card);

let img = document.createElement("img");
img.src= `${Final3.meals[i].strMealThumb}`;
img.className="img-fluid";
card.appendChild(img);

cardbody = document.createElement("div");
cardbody.className="card-body position-absolute w-100 h-100 d-flex justify-content-center align-items-center CAB";
card.appendChild(cardbody);

let p = document.createElement("p");
p.className="card-text fs-4";
p.innerHTML=`${Final3.meals[i].strMeal}`;
cardbody.appendChild(p);
row1.append(child);
}
  let CA =document.querySelectorAll(".CA");
  let CAB =document.querySelectorAll(".CAB");
  
  //add layout on card 
  CA.forEach((ele,i) => {
    $(ele).on({
      mouseenter: function () {
        $(CAB[i]).css("opacity", "1");
        $(CAB[i]).css("top", "0");
      },
      mouseleave: function () {
        $(CAB[i]).css("opacity", "0");
        $(CAB[i]).css("top", "100%");
      },
      click:function (e)
      {
        window.location.href="./Show.html"
        localStorage.setItem("IMGname",Final3.meals[i].strMeal);
      }
    });
  });

}




});




