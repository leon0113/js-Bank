document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailValue = document.getElementById('user-email');
    const userEmail = emailValue.value;
    console.log(userEmail);
    // get user password
    const passValue = document.getElementById('user-pass');
    const userPass = passValue.value;
    console.log(userPass);
})