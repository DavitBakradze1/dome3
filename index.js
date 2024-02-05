/** @format */

function addItem() {
  let inputValue = document.getElementById("inputText").value;

  let li = document.createElement("li");

  li.appendChild(document.createTextNode(inputValue));

  document.getElementById("dynamicList").appendChild(li);

  document.getElementById("inputText").value = "";
}

dataArray = [
  { name: "John", lastname: "Doe", age: 25, profession: "Engineer" },
  { name: "Alice", lastname: "Smith", age: 18, profession: "Student" },
  { name: "Bob", lastname: "Johnson", age: 30, profession: "Doctor" },
  { name: "Emma", lastname: "Williams", age: 16, profession: "Artist" },
  { name: "Michael", lastname: "Brown", age: 22, profession: "Teacher" },
];

var filteredArray = dataArray.filter(function (person) {
  return person.age > 18;
});

var ul = document.getElementById("filteredItemList");

filteredArray.forEach(function (person) {
  var li = document.createElement("li");
  li.textContent = `${person.name} ${person.lastname}, Age: ${person.age}, Profession: ${person.profession}`;
  ul.appendChild(li);
});

const form = document.getElementById("registartion");
const statusInfo = document.getElementById("status");

registration.addEventListener("submit", (e) => {
  e.preventDefault();
  const formValues = document.forms.registration;
  try {
    statusInfo.textContent = "";
    if (
      formValues.firstName.value === "" ||
      formValues.firstName.value.length <= 6
    ) {
      throw new Error("Firstname must be at least 6 characters");
    }
    if (
      formValues.lastName.value === "" ||
      formValues.lastName.value.length < 6
    ) {
      throw new Error("Lastname must be at least 6 characters");
    }
    if (
      formValues.password.value.length === "" ||
      formValues.password.value.length < 6
    ) {
      throw new Error("Password must be at least 6 characters");
    }
    if (formValues.password.value !== formValues.confirmPassword.value) {
      throw new Error("Passwords do not match");
    }
    if (
      formValues.textArea.value.length === "" ||
      formValues.textArea.value.length <= 100
    ) {
      throw new Error("Text area must be at least 100 characters");
    }
  } catch (error) {
    statusInfo.textContent = error.message;
    statusInfo.style.color = "red";
  }

  console.log("Success");
});

function emailValidation() {
  let email = document.getElementById("email").value;
  let regx =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (regx.test(email)) {
    alert("Email is valid");
    return true;
  } else {
    alert("Email is not valid");
    return false;
  }
}
