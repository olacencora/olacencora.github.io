let buttonNext = document.getElementById("buttonNext");
let buttonPrevious = document.getElementById("buttonPrevious");
let firstPage = document.getElementsByClassName("first-page");
let secondPage = document.getElementsByClassName("second-page");

document.getElementById("form-question-7").addEventListener("input", isDisable);

// disable input if pervious answer is no
function isDisable() {
  var value = document.getElementById("form-question-7");
  if (value.value.toLowerCase() == "tak") {
    document.getElementById("form-question-8").disabled = false;
  } else document.getElementById("form-question-8").disabled = true;
}

function nextPage() {
  secondPage[0].style.display === "none"
    ? (secondPage[0].style.display = "inline") &&
      (firstPage[0].style.display = "none")
    : (secondPage[0].style.display = "none") &&
      (firstPage[0].style.display = "inline");
  // getValue();
}

function previousPage() {
  firstPage[0].style.display === "none"
    ? (firstPage[0].style.display = "inline") &&
      (secondPage[0].style.display = "none")
    : (firstPage[0].style.display = "none") &&
      (secondPage[0].style.display = "inline");
}

function Validate() {
  let isValidate = true;

  let value1 = document.getElementById("form-question-1");
  if (value1.value.length == 0) {
    value1.nextElementSibling.innerHTML = "Wypełnij pole!";
    isValidate = false;
  } else {
    document.getElementsByClassName("input-question-end-1")[0].innerHTML =
      value1.value;
    value1.nextElementSibling.innerHTML = "";
  }

  let value2 = document.getElementById("form-question-2");
  if (value2.value.length == 0) {
    value2.nextElementSibling.innerHTML = "Wypełnij pole!";
    isValidate = false;
  } else {
    document.getElementsByClassName("input-question-end-2")[0].innerHTML =
      value2.value;
    value2.nextElementSibling.innerHTML = "";
  }

  let value3 = document.getElementById("form-question-3");
  if (value3.value.length == 0) {
    value3.nextElementSibling.innerHTML = "Wypełnij pole!";
    isValidate = false;
  } else {
    document.getElementsByClassName("input-question-end-3")[0].innerHTML =
      value3.value;
    value3.nextElementSibling.innerHTML = "";
  }

  let value4 = document.getElementById("form-question-4");
  if (value4.value.length == 0) {
    value4.nextElementSibling.innerHTML = "Wypełnij pole!";
    isValidate = false;
  } else {
    document.getElementsByClassName("input-question-end-4")[0].innerHTML =
      value4.value;
    value4.nextElementSibling.innerHTML = "";
  }

  let value5 = document.getElementById("form-question-5");
  if (value5.value.length == 0) {
    value5.nextElementSibling.innerHTML = "Wypełnij pole!";
    isValidate = false;
  } else {
    document.getElementsByClassName("input-question-end-5")[0].innerHTML =
      value5.value;
    value5.nextElementSibling.innerHTML = "";
  }

  let value6 = document.getElementById("form-question-6");
  if (value6.value.length == 0) {
    value6.nextElementSibling.innerHTML = "Wypełnij pole!";
    isValidate = false;
  } else {
    document.getElementsByClassName("input-question-end-6")[0].innerHTML =
      value6.value;
    value6.nextElementSibling.innerHTML = "";
  }

  let value7 = document.getElementById("form-question-7");
  if (
    value7.value.toLowerCase() == "nie" ||
    value7.value.toLowerCase() == "tak"
  ) {
    document.getElementsByClassName("input-question-end-7")[0].innerHTML =
      value7.value;
    value7.nextElementSibling.innerHTML = "";
  } else {
    value7.nextElementSibling.innerHTML = "Pwypełnij pole: 'Tak' lub 'Nie'";
  }

  let value8 = document.getElementById("form-question-8");
  if (value8.value.length == 0) {
    value8.nextElementSibling.innerHTML = "Wypełnij pole!";
    isValidate = false;
  } else {
    document.getElementsByClassName("input-question-end-8")[0].innerHTML =
      value8.value;
    value8.nextElementSibling.innerHTML = "";
  }

  let value9 = document.getElementById("form-question-9");
  if (value9.value.length == 0) {
    value9.nextElementSibling.innerHTML = "Wypełnij pole!";
    isValidate = false;
  } else {
    document.getElementsByClassName("input-question-end-9")[0].innerHTML =
      value9.value;
    value9.nextElementSibling.innerHTML = "";
  }

  let value10 = document.getElementById("form-question-10");
  if (
    value10.value.toLowerCase() == "nie" ||
    value10.value.toLowerCase() == "tak"
  ) {
    document.getElementsByClassName("input-question-end-10")[0].innerHTML =
      value10.value;
    value10.nextElementSibling.innerHTML = "";
  } else {
    value10.nextElementSibling.innerHTML = "Pwypełnij pole: 'Tak' lub 'Nie'";
  }

  return isValidate;
}
