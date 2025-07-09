// template_kjyuimq
// service_9msdo9m
// -a810SH9YGkTxZ96D

function contact(event) {
  event.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_9msdo9m",
  //       "template_kjyuimq",
  //       event.target,
  //       "-a810SH9YGkTxZ96D"
  //     )
  //     .then(() => {
  //       console.log("this worked1");
  //     });
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  setTimeout(() => {
    loading.classList.remove("modal__overlay--visible")
    console.log("it worked 2");
  }, 500);
}
