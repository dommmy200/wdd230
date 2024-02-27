const pWord1 = document.querySelector("#password1");
const pWord2 = document.querySelector("#password2");
const formMsg = document.querySelector("#form-message");

const rangevalue = document.querySelector("#range-value");
const range = document.querySelector("#rating");

pWord2.addEventListener("focusout", () => {
    if (pWord1.value !== pWord2.value) {
		formMsg.textContent = "❗PASSWORDS DO NOT MATCH!";
		formMsg.style.visibility = "show";
        pWord1.focus();
		pWord1.style.backgroundColor = "#fff0f3";
        pWord1.value = "";
        pWord2.style.backgroundColor = "#fff0f3";
		pWord2.value = "";
	} else {
		formMsg.style.display = "none";
		pWord2.style.backgroundColor = "#fff";
		pWord2.style.color = "#000";
	}
});

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}