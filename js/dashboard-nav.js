   
let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


// Getting the username from Local Storage
let newUserName = window.localStorage.getItem("dataBase")
newUserName = JSON.parse(newUserName);
console.log(newUserName)
console.log(newUserName[0].username)
let newUserNameSaved = newUserName[0].username;

let userName = document.querySelector("#newUserName");
userName.textContent = newUserNameSaved;
