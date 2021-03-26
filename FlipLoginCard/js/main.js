window.addEventListener('load', function () {
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    const loginForm = document.getElementById("loginForm");

    forgotPasswordForm.addEventListener('submit', function (event) {
        event.preventDefault();
        sendData();
    });
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        sendData();
    });

    function sendData() {
        console.log("here will data send")
    };

    const passwordEye = document.getElementById("eye");
    passwordEye.addEventListener("click", function(event){
        const pwdFild = document.getElementById("pwd");    

        if(pwdFild.type ==="password"){
            pwdFild.type="text";
            passwordEye.classList.remove("fa-eye-slash");
            passwordEye.classList.add("fa-eye");
        }
        else{
            pwdFild.type="password";
            passwordEye.classList.remove("fa-eye");
            passwordEye.classList.add("fa-eye-slash");
        }
    });


});