const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

function showError (input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-group error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function showSucess (input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-group sucess';
    small.innerText = message;

}

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('submit');

    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSucess(username, 'is available')
        
    }
    
    
    if (email.value === '') {
        showError(email, 'Please type a valid email');
    } else {
        showSucess(email, 'is available')
        
    } 
    
    
    if (password1.value === '') {
        showError(password1,'A password is required');
    } else {
        showSucess(password1, 'is available')
        
    } 
    
    
    if (password2.value === '') {
        showError(password2, 'The passwords do not match');
    } else {
        showSucess(password2, 'is available')
        
    }
});