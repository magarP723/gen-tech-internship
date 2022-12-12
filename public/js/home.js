//THis js file just to show the api authentication to get user data....
function getUser() {
  const token = localStorage.getItem("token");
  fetch("/api/users", {
    method: "GET",
    headers: {
      Authorization: "Bearer" + " " + token, //Bearer Token method for API authentication...
    },
  })
    .then((res) => res.json())
    .then((result) => appendData(result));
}

function appendData(data) {
  // just appending the fetched API data to a div.....
  var mainContainer = document.getElementById("myData");
  data.map((k) => {
    var div = document.createElement("div");
    div.innerHTML =
      "Name: " +
      k.first_name +
      " " +
      k.last_name +
      " " +
      "email: " +
      k.email +
      " " +
      "gender: " +
      k.gender;
    mainContainer.appendChild(div);
  });
}

function logout() {
  // to clear cookies and log out of the page
  fetch("/api/logout", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((result) => {
      localStorage.removeItem("token");
      window.location.replace("/"); //replace prevents the back button to act....
    });
}
