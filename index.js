document.querySelector("#formsub").addEventListener("submit", myForm);

function myForm(event) {
  event.preventDefault();
  var arr = JSON.parse(localStorage.getItem("alldata")) || [];

  var form = document.querySelector("#formsub");

  var obj = {
    name: form.name.value,
    email: form.email.value,
    number: form.number.value,
    age: form.age.value,
    date: form.date.value,

    category: form.category.value,
    gender: form.gender.value,
    status: form.status.value,
  };
  arr.push(obj);
  console.log(arr);
  localStorage.setItem("alldata", JSON.stringify(arr));
  window.location.href = "./displayData.html";
}
