var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
    + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function copyHeaderText() {
    headerElement = document.getElementById("myHeader");
    textToCopy = headerElement.innerText;  

    // 2. Use the Clipboard API to write the text
    navigator.clipboard.writeText(textToCopy).then(() => {
        // 3. Provide user feedback (optional but recommended)
        feedbackElement = document.getElementById("feedback");
        feedbackElement.innerText = "Copied to clipboard!";
        // Clear the message after a few seconds
        setTimeout(() => {
            feedbackElement.innerText = "";
        }, 2000);
    })
}
