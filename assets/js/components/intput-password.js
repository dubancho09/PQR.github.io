const input_password = document.querySelector("#input-password");
const btn_eye = document.querySelector("#btn-eye");
const img_eye = document.querySelector('#img-eye');
const img_eye_hide = document.querySelector('#img-eye-hide');

let changeValue = false;

btn_eye.addEventListener('click', () => {

    changeValue = !changeValue;

    if (changeValue) {
        input_password.type = 'text';
        img_eye.style.display = 'none';
        img_eye_hide.style.display = 'block';
    }

    else {
        input_password.type = 'password';
        img_eye.style.display = 'block';
        img_eye_hide.style.display = 'none';
    }

});