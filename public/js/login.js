(function () {
  const fonts = ["cursive", "sans-serif", "serif", "monospace"];
  let captchaValue = "";
  function generateCaptcha() {
    let value = btoa(Math.random() * 10000000);
    value = value.substring(0, 6 + Math.random() * 6);
    captchaValue = value;
  }
  function setCaptcha() {
    let captchaText = captchaValue
      .split("")
      .map((k) => {
        const rotate = -40 + Math.trunc(Math.random() * 30);
        const font = Math.trunc(Math.random() * fonts.length);
        return `<span style="
        transform:rotate(${rotate}deg);
        font-family:${fonts[font]};
        ">${k}</span>`;
      })
      .join("");
    document.querySelector(".preview").innerHTML = captchaText;
  }
  function initialCaptcha() {
    document
      .querySelector(".captcha-reset")
      .addEventListener("click", function (e) {
        e.preventDefault();
        generateCaptcha();
        setCaptcha();
      });
    generateCaptcha();
    setCaptcha();
  }
  initialCaptcha();
  document
    .querySelector(".funBtn input[type=submit]")
    .addEventListener("click", function (e) {
      e.preventDefault();
      let inputCaptchaValue = document.querySelector("#captcha-input").value;
      let username = document.querySelector("#username").value;
      let password = document.querySelector("#password").value;

      if (inputCaptchaValue === captchaValue) {
        postUserCredentials({
          // api request for validation...
          username: username,
          password: password,
        });
      } else {
        alert("Try Captcha Again !!!");
      }
    });
})();

function postUserCredentials(data) {
  fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.status === "success") {
        localStorage.setItem("token", result.token); //localStorage used for api authentication only
        window.location.replace("/home");
      } else {
        console.log(result.type);
        document.getElementById("#error-text").innerHTML = result.type;
      }
    });
}
