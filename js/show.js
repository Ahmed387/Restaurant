let IMGname = localStorage.getItem("IMGname");
let sidebar1 = document.querySelector(".sidebar1");
let middleicon = document.querySelector(".middleicon");
let row1 = document.querySelector("#row1");
let globalVar;
let loaderbox=document.querySelector(".loaderbox")

$(document).ready(function () {
    let SS = $(middleicon).click(function () {
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
        } else {
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
});

let Final = {};
async function GetIndeedmeal(P) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${P}`);
    let data = await response.json();
    console.log(data);
    Final = data;
    Display();
    localStorage.removeItem("IMGname");
    loaderbox.classList.add("d-none");
}

GetIndeedmeal(IMGname);

function Display() {
    let cartona = ``;
    for (let i = 0; i < 1; i++) {
        cartona += `
        <div class="col-12 col-md-4">
            <div class="box">
                <img class="img-fluid" src="${Final.meals[i].strMealThumb}" alt="">
                <h1>${Final.meals[i].strMeal}</h1>
            </div>
        </div>
        <div class="col-12 col-md-8">
            <h1>Instructions</h1>
            <p>${Final.meals[i].strInstructions}</p>
            <p class="fs-2">Area:<span> ${Final.meals[i].strArea}</span></p>
            <p class="fs-2">Category: <span>${Final.meals[i].strCategory}</span> </p>
            <p class="fs-2">Recipes:</p>
            <span>${Final.meals[i].strMeasure1} </span> 
            <span>${Final.meals[i].strMeasure2}</span> 
            <span>${Final.meals[i].strMeasure3}</span> 
            <span>${Final.meals[i].strMeasure4}</span>  
            <span>${Final.meals[i].strMeasure5}</span> 
            <span>${Final.meals[i].strMeasure6}</span> 
            <span>${Final.meals[i].strMeasure7}</span>
            <p class="fs-2">Tags: </p>
                <span class="d-block"> ${Final.meals[i].strTags}</span>
            <a class="btn btn-success mt-3" href="${Final.meals[i].strYoutube}" target="_blank">Source</a>
            <a class="btn btn-danger mt-3" href="${Final.meals[i].strSource}" target="_blank">YouTube</a>
        </div>
        `;
    }
    row1.innerHTML = cartona;
}
