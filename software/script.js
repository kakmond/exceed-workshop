var amount = 0;
var flash = true;
var flash1 = true;
var name;

var countred = 0;
var countgreen = 0;
var countblue = 0;



var cat = [
    "black",
    "white"
];

var shirt = [
    "green",
    "red",
    "blue"
];

$(document).ready(function() {

    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/toyman/"
    }).done(function(data) {
        if (data == "true") {
            $('#myonoffswitchplay').prop("checked", false);
        }
    }).fail(function(data) {
        console.error(data);
    });

    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/feed/"
    }).done(function(data) {
        if (data == "true") {
            $('#myonoffswitchFOOD').prop("checked", false);
        }
    }).fail(function(data) {
        console.error(data);
    });





    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/toyison/"
    }).done(function(data) {
        if (data == "true") {
            flash = true;
            toyison();
        }
    }).fail(function(data) {
        console.error(data);
    });





    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/airconauto/"
    }).done(function(data) {
        if (data == "true") {
            flash = true;
            airauto();
        }
    }).fail(function(data) {
        console.error(data);
    });

    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/feedauto"
    }).done(function(data) {
        if (data == "true") {
            flash = true;
            autoFOOD();
        }
    }).fail(function(data) {
        console.error(data);
    });
    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/toyison"
    }).done(function(data) {
        if (data == "true") {
            flash = true;
            toyison();
        }
    }).fail(function(data) {
        console.error(data);
    });

    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/outlightauto/"
    }).done(function(data) {
        if (data == "true") {
            flash = true;
            autobuttonLIGHT();
        }
    }).fail(function(data) {
        console.error(data);
    });






    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/currentuser/"
    }).done(function(data) {
        $("#HELLO").text("Hello, " + data + "!");
    }).fail(function(data) {});
    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/red/"
    }).done(function(data) {
        var check = data.split("-");
        if (check[1] == "red") {
            amount = amount + 1;
            console.log(amount);
            // $("#red").append("<center style='margin-left: 250px'>");
            $("#red").append('<td id="red1"><center ><b>' + check[0] + "</b></center></td>");
            $("#red").append('<td id="red2"><center ><b>' + check[1] + "</b></center></td>");
            $("#red").append('<button type="button" id="red3"' + ' class="btn btn-danger"' + ' onclick="deletered()">' + ' Delete</button>');
            // $("#red").append("</center>");
        }

    }).fail(function(data) {

    });

    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/green/"
    }).done(function(data) {
        var check = data.split("-");
        if (check[1] == "green") {
            amount = amount + 1;
            console.log(amount);
            // $("#green").append("<center style='margin-left: 250px'>");
            $("#green").append('<td id=green1><center><b>' + check[0] + "</b></center></td>");
            $("#green").append('<td id=green2><center><b>' + check[1] + "</b></center></td>");
            $("#green").append('<button type="button" id="green3"' + ' class="btn btn-danger"' + ' onclick="deletegreen()">' + ' Delete</button>');
            // $("#green").append("</center>");
        }

    }).fail(function(data) {

    });

    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/blue/"
    }).done(function(data) {
        var check = data.split("-");
        if (check[1] == "blue") {
            amount = amount + 1;
            console.log(amount);
            console.log("CALL");
            // $("#blue").append("<center style='margin-left: 250px'>");
            $("#blue").append('<td id="blue1"><center ><b>' + check[0] + "</b></center></td>");
            $("#blue").append('<td id="blue2"><center><b>' + check[1] + "</b></center></td>");
            $("#blue").append('<button type="button" id="blue3"' + ' class="btn btn-danger"' + ' onclick="deleteblue()">' + ' Delete</button>');
            // $("#blue").append("</center>");
        }

    }).fail(function(data) {

    });





    // var person = document.getElementById('n-person');
    // var url_map = {
    //     person: "http://158.108.165.223/data/AssassinZEED/people"
    // }

    var url_map2 = {
        test: "http://158.108.165.223/data/AssassinZEED/temp",
    }

    // $.ajax({
    //     url: "http://158.108.165.223/data/AssassinZEED/feed"
    // }).done(function(data) {
    //     if (data == "true") {
    //         $('#myonoffswitchFOOD').prop("checked", false);
    //     }
    // }).fail(function(data) {
    //     console.error(data);
    // });
    //เหลือ auto ****** ประตู
    // $.ajax({
    //     url: "http://158.108.165.223/data/AssassinZEED/autoison/"
    // }).done(function(data) {
    //     if (data == "true") {
    //         flash = true;
    //         autobutton();
    //     }
    // }).fail(function(data) {
    //     console.error(data);
    // });

    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/aircon/"
    }).done(function(data) {
        if (data == "true") {
            $('#myonoffswitchAIR').prop("checked", false);
        }
    }).fail(function(data) {
        console.error(data);
    });


    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/outlight/"
    }).done(function(data) {
        if (data == "true") {
            $('#myonoffswitchLIGHT').prop("checked", false);
        }
    }).fail(function(data) {
        console.error(data);
    });


    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/doorlock/"
    }).done(function(data) {
        if (data == "true") {
            $('#myonoffswitchDOOR').prop("checked", false);
            console.log("trueDOOR");
        }
    }).fail(function(data) {
        console.error(data);
    });

    setInterval(function() {

            $.ajax({
                url: "http://158.108.165.223/data/AssassinZEED/doorlock/"
            }).done(function(data) {
                if (data == "true") {
                    $('#myonoffswitchFOOD').prop("checked", false);
                }
            }).fail(function(data) {
                console.error(data);
            });
        },
        1 * 3000);




    setInterval(function() {
            $.ajax({
                //url: "http://128.199.232.240/cat"
                url: "http://158.108.165.223/data/AssassinZEED/temp"
            }).done(function(data) {
                move(data);
            }).fail(function(data) {
                console.error(data);
            });
        },
        1 * 1000);

    setInterval(function() {
            $.ajax({
                url: "http://158.108.165.223/data/AssassinZEED/amount"
            }).done(function(data) {
                $("#n-person").text(data);
                console.log("all cat = " + data);
            }).fail(function(data) {
                console.error(data);
            });
        },
        1 * 5000);

    setInterval(function() {
            $.ajax({
                url: "http://158.108.165.223/data/AssassinZEED/cat"
            }).done(function(data) {
                var split1 = data.split("-");
                if (split1[0] == "black" || split1[0] == "white") {
                    if (split1[1] == "green") {
                        //$("#count").text("CAT!")
                        insertlog("green");
                    } else if (split1[1] == "blue") {
                        insertlog("blue");
                    } else if (split1[1] == "red") {
                        insertlog("red");
                    }
                }
            }).fail(function(data) {
                console.error(data);
            });
        },
        1 * 5000);
});

var enter = function() {

}

/** temperature **/
var temperature = 0;

function move(temp) {
    temp = parseInt(temp);
    // console.log("int" + (temp-1));
    if (temperature != temp) {
        var elem = document.getElementById("myBarTEMP");
        width = elem.style.width.substring(0, elem.style.width.length - 1);
        var frame = function() {
            if (width >= 100 || width == temp) {
                clearInterval(id);
            } else if (width > temp) {
                width--;
                elem.style.width = width + '%';
                elem.innerHTML = width + '°C';
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width + '°C';
            }
        }
        var id = setInterval(frame, 10);
        temperature = temp;
    }
}
/** end of temperature **/

// //button
function foodmethod() {
    var link = "http://158.108.165.223/data/AssassinZEED/feed/";
    console.log("pass")
    var $temp = $('#myonoffswitchFOOD')
    console.log($temp)
    if (document.getElementById('myonoffswitchFOOD').checked) {
        $('#myonoffswitchFOOD').toggle(!this.checked);
        console.log("1");
        send_message(link, false);
    } else {
        $('#myonoffswitchFOOD').toggle(this.checked);
        console.log("2");
        send_message(link, true);
    }
}

function send_message(link, param) {
    $.ajax({
        url: link + "set/" + param
    }).done(function() {
        console.log("Success");
    }).fail(function() {
        console.log("Fail");
    });
}

function automethod() {
    var link = "http://158.108.165.223/data/AssassinZEED/autoison/";
    console.log("pass");
    var $temp = $('#myonoffswitchAUTO')
    console.log($temp)
    if ($('#myonoffswitchAUTO').checked) {
        $('#myonoffswitchAUTO').toggle(!this.checked);
        console.log("1");
        send_message(link, false);
    } else {
        $('#myonoffswitchAUTO').toggle(this.checked);
        console.log("2");
        send_message(link, true);
    }
}

function automethodLIGHT() {
    var link = "http://158.108.165.223/data/AssassinZEED/outlightauto/";
    console.log("pass");
    var $temp = $('#myonoffswitchAUTO')
    console.log($temp)
    if ($('#myonoffswitchAUTO').checked) {
        $('#myonoffswitchAUTO').toggle(!this.checked);
        console.log("1");
        send_message(link, false);
    } else {
        $('#myonoffswitchAUTO').toggle(this.checked);
        console.log("2");
        send_message(link, true);
    }
}



function automethodTOY() {
    var link = "http://158.108.165.223/data/AssassinZEED/toyman/";
    console.log("pass");
    var $temp = $('#myonoffswitchAUTO')
    console.log($temp)
    if ($('#myonoffswitchAUTO').checked) {
        $('#myonoffswitchAUTO').toggle(!this.checked);
        console.log("1");
        send_message(link, false);
    } else {
        $('#myonoffswitchAUTO').toggle(this.checked);
        console.log("2");
        send_message(link, true);
    }
}

function airmethod() {
    var link = "http://158.108.165.223/data/AssassinZEED/aircon/";
    console.log("pass")
    var $temp = $('#myonoffswitchAIR')
    console.log($temp)
    if (document.getElementById('myonoffswitchAIR').checked) {
        $('#myonoffswitchAIR').toggle(!this.checked);
        console.log("1");
        send_message(link, false);
    } else {
        $('#myonoffswitchAIR').toggle(this.checked);
        console.log("2");
        send_message(link, true);
    }

}

function lightmethod() {
    var link = "http://158.108.165.223/data/AssassinZEED/outlight/";
    console.log("pass")
    var $temp = $('#myonoffswitchLIGHT')
    console.log($temp)
    if (document.getElementById('myonoffswitchLIGHT').checked) {
        $('#myonoffswitchLIGHT').toggle(!this.checked);
        console.log("1");
        send_message(link, false);
    } else {
        $('#myonoffswitchLIGHT').toggle(this.checked);
        console.log("2");
        send_message(link, true);
    }
}

function tempmethod() {
    var link = "http://158.108.165.223/data/AssassinZEED/tempison/";
    console.log("pass")
    var $temp = $('#myonoffswitchTEMPERATURE')
    console.log($temp)
    if (document.getElementById('myonoffswitchTEMPERATURE').checked) {
        $('#myonoffswitchTEMPERATURE').toggle(!this.checked);
        console.log("1");
        send_message(link, false);
    } else {
        $('#myonoffswitchTEMPERATURE').toggle(this.checked);
        console.log("2");
        send_message(link, true);
    }
}


function doormethod() {
    var link = "http://158.108.165.223/data/AssassinZEED/doorlock/";
    console.log("pass")
    var $temp = $('#myonoffswitchDOOR')
    console.log($temp)
    if (document.getElementById('myonoffswitchDOOR').checked) {
        $('#myonoffswitchDOOR').toggle(!this.checked);
        console.log("1");
        send_message(link, false);
    } else {
        $('#myonoffswitchDOOR').toggle(this.checked);
        console.log("2");
        send_message(link, true);
    }
}


//door
// function autobutton() {
//     var link = "http://158.108.165.223/data/AssassinZEED/autoison/";
//     if (flash == true) {
//         document.getElementById('myImage').src = 'image/flash.png';
//         flash = false;
//         send_message(link, true);
//     } else {
//         document.getElementById('myImage').src = 'image/flash 2.png';
//         flash = true;
//         send_message(link, false);
//     }
// }

function summit() {
    var name = $("#namecat1").val();
    var e = document.getElementById("colourcat1");
    var strUser = e.options[e.selectedIndex].text;
    //var colour = $("#colourcat1").val();
    console.log(strUser);
    var info = name + "-" + strUser;
    if ($("#namecat1").val() != "" && strUser != "" && amount <= 3) {
        //console.log("AMOUT "+amount)
        //var link = "http://158.108.165.223/data/AssassinZEED/cat" + amount + "/";
        var link = "http://158.108.165.223/data/AssassinZEED/red/";
        if (strUser == "red") {
            if ($("#red1") == null) {
                $("#red").append('<td id="red1"><center ><b>' + name + "</b></center></td>");
                $("#red").append('<td id="red2"><center ><b>' + strUser + "</b></center></td>");
                $("#red").append('<button type="button" id="red3"' + ' class="btn btn-danger"' + ' onclick="deletered()">' + ' Delete</button>');
            }
        } else if (strUser == "blue") {
            var link = "http://158.108.165.223/data/AssassinZEED/blue/";
            if ($("#blue1") == null) {

                $("#blue").append('<td id="blue1"><center ><b>' + name + "</b></center></td>");
                $("#blue").append('<td id="blue2"><center ><b>' + strUser + "</b></center></td>");
                $("#blue").append('<button type="button" id="blue3"' + ' class="btn btn-danger"' + ' onclick="deleteblue()">' + ' Delete</button>');
            }
        } else if (strUser == "green") {
            var link = "http://158.108.165.223/data/AssassinZEED/green/";
            if ($("#green1") == null) {
                $("#green").append('<td id="green1"><center ><b>' + name + "</b></center></td>");
                $("#green").append('<td id="green2"><center ><b>' + strUser + "</b></center></td>");
                $("#green").append('<button type="button" id="green3"' + ' class="btn btn-danger"' + ' onclick="deletegreen()">' + ' Delete</button>');
            }
        }

        send_messageTable(link, info);
        window.location.reload();


    }

}

function clearButton() {
    $("#namecat1").val("");
    $("#colourcat1").val("");
}

function send_messageTable(link, param) {
    $.ajax({
        url: link + "set/" + param
    }).done(function() {
        console.log("Success");
    }).fail(function() {
        console.log("Fail");
    });

    // if (amount <= 3) {
    //     $.ajax({
    //         url: "http://158.108.165.223/data/AssassinZEED/amount/" + "set/" + amount
    //     }).done(function() {
    //         console.log("Success");
    //     }).fail(function() {
    //         console.log("Fail");
    //     });
    // }
}

function deletered() {
    $("#red1").remove();
    $("#red2").remove();
    $("#red3").remove();
    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/red/" + "set/" + "nothing"
    }).done(function() {
        console.log("Success");
    }).fail(function() {
        console.log("Fail");
    });



}

function deleteblue() {
    $("#blue1").remove();
    $("#blue2").remove();
    $("#blue3").remove();
    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/blue/" + "set/" + "nothing"
    }).done(function() {
        console.log("Success");
    }).fail(function() {
        console.log("Fail");
    });

}

function deletegreen() {
    $("#green1").remove();
    $("#green2").remove();
    $("#green3").remove();
    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/green/" + "set/" + "nothing"
    }).done(function() {
        console.log("Success");
    }).fail(function() {
        console.log("Fail");
    });

}

function playmethod() {
    var link = "http://158.108.165.223/data/AssassinZEED/toyman/";
    console.log("pass")
    var $temp = $('#myonoffswitchplay')
    console.log($temp)
    if (document.getElementById('myonoffswitchplay').checked) {
        $('#myonoffswitchplay').toggle(!this.checked);
        console.log("1");
        send_message(link, false);
    } else {
        $('#myonoffswitchplay').toggle(this.checked);
        console.log("2");
        send_message(link, true);
    }
}
// autoLight
function autobuttonLIGHT() {
    var link = "http://158.108.165.223/data/AssassinZEED/outlightauto/";
    if (flash == true) {
        document.getElementById('autolight').src = 'image/flash.png';
        flash = false;
        send_message(link, true);
    } else {
        document.getElementById('autolight').src = 'image/flash 2.png';
        flash = true;
        send_message(link, false);
    }
}
// autoLight


//autoPlay
function toyison() {
    var link = "http://158.108.165.223/data/AssassinZEED/toyison/";
    if (flash == true) {
        document.getElementById('toy').src = 'image/flash.png';
        flash = false;
        send_message(link, true);
    } else {
        document.getElementById('toy').src = 'image/flash 2.png';
        flash = true;
        send_message(link, false);
    }
}

function airauto() {
    var link = "http://158.108.165.223/data/AssassinZEED/airconauto/";
    if (flash == true) {
        document.getElementById('air').src = 'image/flash.png';
        flash = false;
        send_message(link, true);
    } else {
        document.getElementById('air').src = 'image/flash 2.png';
        flash = true;
        send_message(link, false);
    }
}


// function send_messageTable(link, param) {
//     var alldata = "";
//     $.ajax({
//         url: link
//     }).done(function(data) {
//         alldata = data;
//         console.log(data)
//     }).fail(function(data) {
//         console.error(data);
//     });
//     $.ajax({
//         url: link + "set/" + alldata + param + "."
//     }).done(function() {
//         console.log("Success");
//     }).fail(function() {
//         console.log("Fail");
//     });
//
//
// }


// function deleted(){
//   $("#namecat1").text="";
//   $("#colourcat1").text="";
// }

// $(function() {
//     $('a[href*=#]').on('click', function(e) {
//         //e.preventDefault();
//         $('html, body').animate({
//             scrollTop: $($(this).attr('href')).offset().top
//         }, 500, 'linear');
//     });
// });

// $.ajax({
//     url: 'http://128.199.232.240/cat',
//     success: function(data) {
//         alert(data);
//     }
// });

function insertlog(test) {

    $.ajax({
        url: "http://158.108.165.223/data/AssassinZEED/" + test
    }).done(function(data) {
        var temp = data.split("-");
        if (temp[0] != "nothing") {
            if (test == "green") {
                if (countgreen % 2 == 0)
                    $("#log").append('<tr><td>' + new Date(new Date().getTime()).toLocaleTimeString() + '</td><td>' + temp[0] + '</td><td>Enter</td></tr>');
                else {
                    $("#log").append('<tr><td>' + new Date(new Date().getTime()).toLocaleTimeString() + '</td><td>' + temp[0] + '</td><td>Exit</td></tr>');
                }
                countgreen++;
            }
            if (test == "red") {
                if (countred % 2 == 0)
                    $("#log").append('<tr><td>' + new Date(new Date().getTime()).toLocaleTimeString() + '</td><td>' + temp[0] + '</td><td>Enter</td></tr>');
                else {
                    $("#log").append('<tr><td>' + new Date(new Date().getTime()).toLocaleTimeString() + '</td><td>' + temp[0] + '</td><td>Exit</td></tr>');
                }
                countred++;
            }
            if (test == "blue") {
                if (countblue % 2 == 0)
                    $("#log").append('<tr><td>' + new Date(new Date().getTime()).toLocaleTimeString() + '</td><td>' + temp[0] + '</td><td>Enter</td></tr>');
                else {
                    $("#log").append('<tr><td>' + new Date(new Date().getTime()).toLocaleTimeString() + '</td><td>' + temp[0] + '</td><td>Exit</td></tr>');
                }
                countblue++;
            }
        }
    }).fail(function(data) {});


}

function autoFOOD() {
    var link = "http://158.108.165.223/data/AssassinZEED/feedauto/";
    if (flash == true) {
        document.getElementById('food').src = 'image/flash.png';
        flash = false;
        send_message(link, true);
    } else {
        document.getElementById('food').src = 'image/flash 2.png';
        flash = true;
        send_message(link, false);
    }
}
