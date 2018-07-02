$(function () {
    $("#Btn-login").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();
        console.log(username);
        console.log(password);

        $.ajax({
            url: "php/login.php",
            type: "POST",
            data: { Username: username, Password: password },
            success: function (result) {
                var data = JSON.parse(result)
                console.log(data);
                if(username == data['username'] && password == data['password']){
                    window.location.href = 'spaceship.html';
                    localStorage['username'] = data['username'];
                    localStorage['status'] = data['status'];
                }
                else{
                    alert("Username or password is invalid.");
                }
            }
        });
    });
});