var check = false;

function account2() {
    $('#fuckingform').submit(false);
    console.log("PASS");
    var user = $("#user").val();

    var pass = $("#pass").val();
    console.log(user + "+" + pass);

    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/user"
    }).done(function(data) {
        var splited = data.split("-");
        for (var i = 0; i < splited.length; i++) {
            var acc = splited[i].split(",");
            if (acc[0] == user && acc[1] == pass) {
                console.log(user);
                console.log("YEAH!");
                $.ajax({
                    url: "http://158.108.165.223/data/AssassinZEED/currentuser/set/" + user
                }).done(function() {

                }).fail(function() {

                });
                window.location.href = "project.html";
            }

        }
        if (!check)
            $("#popup").append("wrong username or password!");
        check = true;
    }).fail(function(data) {
        console.error(data);
    });
}
