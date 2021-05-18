

const form =document.getElementById("form");
const username =document.getElementById("Username")
const email = document.getElementById("Email");
const password = document.getElementById("Password");
const repassword = document.getElementById("Repassword");
const phone = document.getElementById("phone");



function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if(re.test(input.value)) {
        success(input);
    } else {
        error(input, 'İncorrect mail!');
    }
}

function checkRequired(inputs) {
    inputs.forEach(function(input) {
        if(input.value === '') {
            error(input, `${input.id} is required.`);
        } else {
            success(input);
        }
    });  
};

function checklengt(input, min , max){
   if(input.value.length < min){
       error(input, ` ${input.id} least ${min} must have character`)
   }else if ( input.value.length > max){
   error(input, ` ${input.id} most ${max} must have character`) 
}else{
    success(input);
}
};

function checkPhone(input) {

    var exp = /^\d{10}$/;   
    if(!exp.test(input.value))      
         error(input, 'Phone 10 characters');
};

function checkpassword(input1,input2){

    if (input1.value !== input2.value) {
        error(input2,"Passwords do not match!!")
        
    }else{
        success(input)
    }
};





form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([Username,Email,Password,Repassword,phone]);
    checkEmail(Email);
    checklengt(Username,7,15);
    checklengt(Password,7,12);
    checkpassword(Password,Repassword);
    checkPhone(phone);
});