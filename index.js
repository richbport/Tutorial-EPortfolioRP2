// template_kjyuimq
// service_9msdo9m
// -a810SH9YGkTxZ96D

async function contact(event) {
  event.preventDefault();
  await emailjs
    .sendForm(
      "service_9msdo9m",
      "template_kjyuimq",
      event.target,
      "-a810SH9YGkTxZ96D"
    )
    .then(() => {
      console.log("this worked1");
    });
}
