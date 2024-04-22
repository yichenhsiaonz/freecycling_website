const grow_list = document.querySelectorAll("#growflash")
const grow_array = [...grow_list];
const registerButton = document.getElementById("registerbutton")

registerButton.addEventListener("click", toggleFlash);

function toggleFlash() {
    grow_array.forEach((element) => element.classList.toggle("registerflash"));
}
