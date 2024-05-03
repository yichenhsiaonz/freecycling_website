const growList = document.querySelectorAll("#growflash")
const growArray = [...growList];
const formBackground = document.getElementById("formbackground")
const registerButton = document.getElementById("trigger-modal")
const closeButton = document.getElementById("closeform")
const registerForm = document.getElementById("form-ct")
const blur = document.getElementById("blur")

registerButton.addEventListener("click", toggleFlash);
closeButton.addEventListener("click", toggleFlash);
blur.addEventListener("click", toggleFlash);

function toggleFlash() {
    growArray.forEach((element) => element.classList.toggle("registerflash"));
    formBackground.classList.toggle("registerflash");
    formBackground.classList.toggle("openformbg");
    registerButton.classList.toggle("hide");
    registerForm.classList.toggle("fadein");
    blur.classList.toggle("fadeinblur");
}