// template_kjyuimq
// service_9msdo9m
// -a810SH9YGkTxZ96D

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  emailjs
    .sendForm(
      "service_9msdo9m",
      "template_kjyuimq",
      event.target,
      "-a810SH9YGkTxZ96D"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable."
      )
    });

  loading.classList += " modal__overlay--visible";
  setTimeout(() => {
    console.log("it worked 2");
  }, 1000);
}
