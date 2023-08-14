function mailValidation() {
    // Select the button first.
let btn = document.getElementById("btn");



// Now select the target where we want to put our error message.
let target = document.getElementById("output");

// Now tak ethe input as email from the user
let email = document.getElementById("email");
    
    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        target.innerHTML = "Please provide a valid email address";
        btn.style.marginBottom = "15px";
        email.style.borderColor = "red";
        target.style.color = "red";
    }

    if ( email.value === "") {
        target.innerHTML = "Whoops! It looks like you forgot to add your email";
        btn.style.marginBottom = "15px";
        email.style.borderColor = "red";
        target.style.color = "red";
     }

     if (email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        target.innerHTML = "Congrats! We will notify You";
        btn.style.marginBottom = "15px";
        email.style.borderColor = "green";
        target.style.color = "green";
    }
    
}

btn.addEventListener('click', mailValidation);
email.addEventListener('focus', () => {
    output.innerHTML = "";
})
