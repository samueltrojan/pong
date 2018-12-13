var smer1;
var smer2;

var smerx = 1;
var smery = 1;

var skore1 = 0;
var skore2 = 0;

var provoz = true;

var rychlost = 7;

$(document).keydown(function(e) {
    if (e.which == 87) {
        smer1 = -1;
    }
    if (e.which == 83) {
        smer1 = 1;
    }

    if (e.which == 38) {
        smer2 = -1;
    }
    if (e.which == 40) {
        smer2 = 1;
    }
});
$(document).keyup(function (e) {
    if (e.which == 38 || e.which == 40) {
        smer2 = 0;
    }
});

$(document).keyup(function (e) {
    if (e.which == 87 || e.which == 83) {
        smer1 = 0;
    }
});

setInterval(function () {
    if (provoz == true) {
        // PALKY
        var top = parseInt($("#palka1").css("top"));
        $("#palka1").css("top", top + smer1 * 15);


        var top = parseInt($("#palka2").css("top"));
        $("#palka2").css("top", top + smer2 * 15);

        //MICEK
        var x = parseInt($("#micek").css("left"));
        var y = parseInt($("#micek").css("top"));

        x += smerx * rychlost;
        y += smery * rychlost;

        $("#micek").css({"left": x, "top": y});
// steny
        if (y >= 580)
            smery = -1;
        if (y <= 0)
            smery = 1;
        if (x >= 780) {
            smerx = -1;
            skore1++;
            $("#skore1").html(skore1);
            prohra();
        }
        if (x <= 0) {
            smerx = 1;
            skore2++;
            $("#skore2").html(skore2);
            prohra();
        }
        // palky
        if (x <= 50) {
            var top = parseInt($("#palka1").css("top"));
            if (y >= top - 10 && y <= top + 210)
                smerx = 1;
        }
        if (x >= 730) {
            var top = parseInt($("#palka2").css("top"));
            if (y >= top - 10 && y <= top + 210)
                smerx = -1;
        }


    }
},20);
setInterval(function () {
    rychlost ++;
},2000);

function prohra() {
    if (skore1 == 10 || skore2 == 10) {
        skore1 = 0;
        skore2 = 0;
    }
    $("#micek").css({"left": 390, "top": 290});
    provoz = false;
    rychlost = 7;
    setTimeout(function () {
        provoz = true;
    }, 1000);
}