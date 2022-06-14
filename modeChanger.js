const themeChanger = document.querySelector("#themeChanger");
const cookieSetter = document.querySelector("#setCookie");
const body = document.querySelector("body");
const table = document.querySelector("table");

themeChanger.addEventListener("click", () => {
  if (
    localStorage.getItem("mode") == undefined ||
    localStorage.getItem("mode") == "light"
  ) {
    localStorage.setItem("mode", "dark");
    document.body.style.backgroundColor = "#121212";
    body.style.color = "white";
    table.style.color = "white";
    themeChanger.classList.remove("btn-dark");
    themeChanger.classList.add("btn-light");
    themeChanger.innerHTML = "Enable Light Mode";
  } else {
    localStorage.setItem("mode", "light");
    document.body.style.backgroundColor = "white";
    body.style.color = "black";
    table.style.color = "black";
    themeChanger.classList.remove("btn-light");
    themeChanger.classList.add("btn-dark");
    themeChanger.innerHTML = "Enable Dark Mode";
  }
  alert(`Switched to ${localStorage.getItem("mode")} mode`);
});

cookieSetter.addEventListener("click", function (event) {
  event.preventDefault();
  let cookieKey = document.querySelector("#cookie-key").value;
  let cookieVal = document.querySelector("#cookie-value").value;
  setCookie(cookieKey, cookieVal);
  alert(document.cookie);
  document.querySelector("#cookie-key").value = "";
  document.querySelector("#cookie-value").value = "";
  addRow(cookieKey, cookieVal);
});

function setCookie(cname, cvalue) {
  const nextSreda = "22 Jun 2022 00:00:00 UTC";
  let expires = "expires=" + nextSreda;
  document.cookie = cname + "=" + cvalue + ";" + expires + ";";
}

function addRow(val1, val2) {
  // Insert a row at the end of table
  let newRow = table.insertRow();

  // Insert a cell at the end of the row
  let newCell1 = newRow.insertCell();
  let newCell2 = newRow.insertCell();

  // Append a text node to the cell
  let newText = document.createTextNode(val1);
  newCell1.appendChild(newText);

  newText = document.createTextNode(val2);
  newCell2.appendChild(newText);
}

window.addEventListener("load", function () {
  if (
    localStorage.getItem("mode") == undefined ||
    localStorage.getItem("mode") == "light"
  ) {
    localStorage.setItem("mode", "light");
    document.body.style.backgroundColor = "white";
    body.style.color = "black";
    table.style.color = "black";
    themeChanger.classList.remove("btn-light");
    themeChanger.classList.add("btn-dark");
    themeChanger.innerHTML = "Enable Dark Mode";
  } else {
    localStorage.setItem("mode", "dark");
    document.body.style.backgroundColor = "#121212";
    body.style.color = "white";
    table.style.color = "white";
    themeChanger.classList.remove("btn-dark");
    themeChanger.classList.add("btn-light");
    themeChanger.innerHTML = "Enable Light Mode";
  }
  let keyValuePairs = document.cookie.split(/; */);
  for (let i = 0; i < keyValuePairs.length; i++) {
    let name = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf("="));
    let value = keyValuePairs[i].substring(keyValuePairs[i].indexOf("=") + 1);
    addRow(name, value);
  }
  alert("All assets are loaded");
});
