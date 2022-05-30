document.getElementById('login-submit').addEventListener('click', function () {
    // ! get user email
    const emailValue = document.getElementById('user-email');
    const userEmail = emailValue.value;
    // console.log(userEmail);
    // ! get user password
    const passValue = document.getElementById('user-pass');
    const userPass = passValue.value;
    // console.log(userPass);

    // ! applying condition to see it is valid customer or not

    if (userEmail == 'tahjib@gmail.com' && userPass == 'leon') {
        // console.log('valid user');
        window.location.href = 'banking.html';
    }

    else {
        console.log('Invalid user');
    }
})