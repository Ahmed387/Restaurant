let sidebar1 = document.querySelector(".sidebar1");
let middleicon = document.querySelector(".middleicon");
let row1 = document.querySelector("#row1");
let globalVar;
let loaderbox = document.querySelector(".loaderbox");
$(document).ready(function () {
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

  //let SF="seafood";
  getMeal();
  let Final = {};
  async function getMeal() {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    let data = await response.json();
    Final = data;
    Display();
    loaderbox.classList.add("d-none");
  }

  //create 20 element and display
  function Display() {
    for (let i = 0; i < Final.meals.length; i++) {
      let child = document.createElement("div");
      child.className = "col-12 col-sm-4 col-md-3  ";

      let inn = document.createElement("div");
      inn.className = "inner ";
      child.appendChild(inn);

      let Box = document.createElement("div");
      Box.className =
        "bg-black  d-flex justify-content-center align-items-center flex-column BO";
      Box.innerHTML = `<i class="fa-solid fa-house-laptop HO" style="color: #ffffff;"></i>`;
      inn.appendChild(Box);
      let name = document.createElement("h2");
      name.className = "text-center text-white mt-2";
      name.innerHTML = Final.meals[i].strArea;
      inn.appendChild(name);
      row1.appendChild(child);
      Box.addEventListener("click", function () {
        window.location.href = `../index.html`;
        let localVar = Final.meals[i].strArea;
        globalVar = localVar;
        localStorage.setItem("Area", globalVar);
      });
    }
  }
});
