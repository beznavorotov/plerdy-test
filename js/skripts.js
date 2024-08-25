// slider

$(document).ready(function () {
  $(".responsive").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ".button_prev",
    nextArrow: ".button_next",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });
});

// fofm phone input

const cpiInputs = document.querySelectorAll(".cpi-input");

if (cpiInputs) {
  cpiInputs.forEach((cpiInput) => {
    let cpiInputDropItems = cpiInput.querySelectorAll(".dropdown-item");
    let cpiDropBtn = cpiInput.querySelector(".cpi-drop");
    let cpiExtTxt = cpiInput.querySelector(".cpi-ext-txt");
    let countryCodeInput = cpiInput.querySelector(".country-code-input");
    let phoneInput = cpiInput.querySelector(".phone-input");

    phoneInput.addEventListener("focus", () => {
      cpiInput.classList.add("cpi-input-focus");
    });

    phoneInput.addEventListener("blur", () => {
      cpiInput.classList.remove("cpi-input-focus");
    });

    if (cpiInputDropItems) {
      cpiInputDropItems.forEach((cpiInputDropItem) => {
        cpiInputDropItem.addEventListener("click", (event) => {
          let dataSet = event.currentTarget.dataset;

          cpiDropBtn.innerHTML = `${dataSet.cpiIcon} <span class="me-1">${dataSet.cpiExt}</span>`;
          cpiExtTxt.textContent = dataSet.cpiExt;
          countryCodeInput.value = dataSet.cpiExt;

          phoneInput.minLength = 0;
          phoneInput.maxLength = 999999;

          phoneInput.minLength = dataSet.cpiMinLength;
          phoneInput.maxLength = dataSet.cpiMaxLength;
          phoneInput.focus();
        });
      });
    }
  });
}

// validation
(function () {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
