

let OPT="beef"
let sidebar1 = document.querySelector(".sidebar1"); 
let middleicon = document.querySelector(".middleicon"); 
let card;
let cardbody;
let row2 = document.querySelector("#row2");
let S1 = document.querySelector("#S1");
let S2 = document.querySelector("#S2");
let loaderbox=document.querySelector(".loaderbox")

// slider start
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
// slider end

// fetch
let Final = {};
async function getMeal(V) {
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${V||OPT}`);
  let data = await response.json();
  console.log(data);
  Final = data;
  Display();
  loaderbox.classList.add("d-none");
}

let val1;
$(S1).keyup(function (e) { 
  val1 = $(this).val();
  console.log(val1);
  console.log(val1.length);  
  getMeal(val1);
});

// start img
function Display() {  
  if (val1.length == 0) {
    row2.innerHTML = '';
    return;
  }
  row2.innerHTML = '';

  for (let i = 0; i < Final.meals.length; i++) {
    let child = document.createElement("div");
    child.className = "col-12 col-md-3 col-sm-4 ";

    let inn = document.createElement("div");
    inn.className = "inner";
    child.appendChild(inn);

    card = document.createElement("div");
    card.className = "card position-relative CA";
    inn.appendChild(card);

    let img = document.createElement("img");
    img.src = `${Final.meals[i].strMealThumb}`;
    img.className = "img-fluid";
    card.appendChild(img);

    cardbody = document.createElement("div");
    cardbody.className = "card-body position-absolute w-100 h-100 d-flex justify-content-center align-items-center CAB";
    card.appendChild(cardbody);

    let p = document.createElement("p");
    p.className = "card-text fs-3";
    p.innerHTML = `${Final.meals[i].strMeal}`;
    cardbody.appendChild(p);
    row2.append(child);
  }
  let CA = document.querySelectorAll(".CA");
  let CAB = document.querySelectorAll(".CAB");

  // add layout on card 
  CA.forEach((ele, i) => {
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
        localStorage.setItem("IMGname",Final.meals[i].strMeal);
      }
    });
  });
}
// Fetch by first letter
let Final2 = {};
async function getMeal2(letter) {
  let response2 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter||OPT}`);
  let data2 = await response2.json();
  console.log(data2);
  Final2 = data2;
  Display2();
  loaderbox.classList.add("d-none");
}

let val2;
$(S2).keyup(function () {
  val2 = $(this).val().toLowerCase();
  if (val2.length > 1) {
    S2.value = val2.charAt(0); // Keep only the first character
    return;
  }
  if (val2.length == 1) {
    getMeal2(val2[0]);
  } 
});

function Display2() {  
  if (val2.length == 0) {
    row2.innerHTML =' ';
    return;
  }
  row2.innerHTML = ' ';

  for (let i = 0; i < Final2.meals.length; i++) {
    let child = document.createElement("div");
    child.className = "col-12 col-md-3 col-sm-4 ";

    let inn = document.createElement("div");
    inn.className = "inner";
    child.appendChild(inn);

    card = document.createElement("div");
    card.className = "card position-relative CA";
    inn.appendChild(card);

    let img = document.createElement("img");
    img.src = `${Final2.meals[i].strMealThumb}`;
    img.className = "img-fluid";
    card.appendChild(img);

    cardbody = document.createElement("div");
    cardbody.className = "card-body position-absolute w-100 h-100 d-flex justify-content-center align-items-center CAB";
    card.appendChild(cardbody);

    let p = document.createElement("p");
    p.className = "card-text fs-3";
    p.innerHTML = `${Final2.meals[i].strMeal}`;
    cardbody.appendChild(p);
    row2.append(child);
  }
  let CA = document.querySelectorAll(".CA");
  let CAB = document.querySelectorAll(".CAB");

  // add layout on card 
  CA.forEach((ele, i) => {
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
