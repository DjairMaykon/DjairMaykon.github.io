let darkThemeIsOn = window.matchMedia("(prefers-color-scheme: dark)").matches;
onToggleTheme(darkThemeIsOn);

function onToggleTheme(onDarkTheme = false) {
  var checkBox = document.getElementById("toogle-mode-button");

  onDarkTheme && (checkBox.checked = true);

  if (checkBox.checked == true) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function closeMenu() {
  var checkBox = document.getElementById("toogle-menu-checkbox");
  checkBox.checked = false;
}

emailjs.init("9LoDMOhDM1BNQnZdU");

document
  .getElementById("contact-form")
  .addEventListener("submit", function sendForm(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let message = event.target.message.value;

    let contactParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send("service_u8zyt0s", "template_odwgcig", contactParams).then(
      function () {
        alert("Email enviado com sucesso");
      },
      function (error) {
        alert("Falha ao enviar o email por favor tente mais tarde");
      }
    );
  });
