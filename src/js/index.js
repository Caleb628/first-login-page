let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (ev) => {
  let inputs = document.querySelectorAll(".input");
  let op = document.querySelectorAll(".op");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("erro");
    inputs[i].classList.add("certo");
    op[i].classList.remove("visivel");
    if (inputs[i].value === "") {
      inputs[i].classList.add("erro");
      op[i].classList.add("erro-visivel");
    } else if (inputs[i].value !== "") {
      inputs[i].classList.add("acerto");
    }
  }
  ev.preventDefault();
});
// inputs.forEach((input) => {
//   input.classList.remove("erro");
//   input.classList.add("certo");
//   let contador = 0;
//   if (input.value === "") {
//     input.classList.add("erro");
//   } else {
//     input.classList.add("acerto");
//   }
// });
