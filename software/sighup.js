function signupmethod() {
    var user = $("#user").val();
    var pass = $("#pass").val();
    var all;
    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/user"
    }).done(function(data) {
        all = data;
        $.ajax({
            url: "http://158.108.165.223/data/AssassinZEED/user/" + "set/" + data + "-" + user + "," + pass
        }).done(function() {
            console.log("Success");
            window.location.href = "login.html";
        }).fail(function() {
            console.log("Fail");
        });
    }).fail(function(data) {
        console.error(data);
    });
}
