let sidebar1 = document.querySelector(".sidebar1");
let middleicon = document.querySelector(".middleicon");
let card;
let cardbody;
let row1 = document.querySelector("#row1");
let loaderbox = document.querySelector(".loaderbox");

let SS = $(middleicon).click(function () {
  let x = $(sidebar1).innerWidth();
  if (x > 0) {
    $(sidebar1).animate(
      { "min-width": "0" },
      {
        duration: 700,
        complete: function () {
          $("#Xicon").addClass("d-none");
          $("#Baricon").removeClass("d-none");
          x = $(sidebar1).innerWidth();
        },
      }
    );
  } else {
    $(sidebar1).animate(
      { "min-width": "240px" },
      {
        duration: 700,
        complete: function () {
          $("#Baricon").addClass("d-none");
          $("#Xicon").removeClass("d-none");
          x = $(sidebar1).innerWidth();
          AOS.init();
        },
      }
    );
  }
});

//fetch
let Final = {};
async function getMeal() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let data = await response.json();
  Final = data;
  loaderbox.classList.add("d-none");
  Display();
}

getMeal();
//create 20 element and display

function Display() {
  for (let i = 0; i < Final.categories.length; i++) {
    let child = document.createElement("div");
    child.className = "col-12 col-md-3 col-sm-4 ";

    let inn = document.createElement("div");
    inn.className = "inner";
    child.appendChild(inn);

    card = document.createElement("div");
    card.className = "card position-relative CA bg-black";
    inn.appendChild(card);

    let img = document.createElement("img");
    img.src = `${Final.categories[i].strCategoryThumb}`;
    img.className = "img-fluid";
    card.appendChild(img);

    cardbody = document.createElement("div");
    cardbody.className =
      "card-body rounded-4 position-absolute w-100 h-100 d-flex justify-content-center align-items-center flex-column CAB overflow-hidden";
    card.appendChild(cardbody);

    let p = document.createElement("h2");
    p.className = "card-text fs-4";
    let p2 = document.createElement("p");
    p2.className = "card-text fs-6";

    p.innerHTML = `${Final.categories[i].strCategory}`;
    p2.innerHTML = `${Final.categories[i].strCategoryDescription.slice(0, 56)}`;

    cardbody.appendChild(p);
    cardbody.appendChild(p2);
    cardbody.addEventListener("click", function (e) {
      let localVar = Final.categories[i].strCategory; //p ,cardbody,h2

      localStorage.setItem("GG", localVar);
      window.location.href = "../index.html";
    });

    row1.appendChild(child);
  }
  let CA = document.querySelectorAll(".CA");
  let CAB = document.querySelectorAll(".CAB");

  //add layout on card
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
      click: function (e) {
        console.log(Final.categories[i].strCategory);
        console.log(Final.categories[i].strCategoryDescription);
        localStorage.setItem("Categoryname", Final.categories[i].strCategory);
      },
    });
  });
}
