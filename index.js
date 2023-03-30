const email = document.querySelector("#email");
const formSubmit = document.querySelector("#form-submit");

formSubmit.addEventListener("click", function() {
	alert("Thank you for sending an mail." + email.value + "To your concerns, Have a nice day!");
})
