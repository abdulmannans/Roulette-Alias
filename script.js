$(function () {
    $("#names").tagify({
        duplicates: false
    });

    $("#spinMe").on("click", function () {
        let names = $("#names").val()
        if (names == null || names == undefined || names.length == 0) {
            $('.tagify').addClass("vibrate");
            $('.tagify').css("border-color", "red");
            setTimeout(function () {
                $('.tagify').css("border-color", "white");
                $('.tagify').removeClass("vibrate");
            }, 1000);
            console.log("lol");
        } else {
            let namesArray = JSON.parse(names);
            var roulette = namesArray[Math.floor(Math.random() * namesArray.length)];
            $("#modalBody").text(roulette["value"]);
            $('#resultView').fadeIn().css("display", "block");
        }
    });

    $("#autoFill").on("click", function () {

        let autoFill = [
            { "value": "Abdul Mannan" },
            { "value": "Huzaif" },
            { "value": "Ibrahim" },
            { "value": "Ashish" },
            { "value": "Yusuf" },
            { "value": "Akash" },
            { "value": "Abis" },
            { "value": "Zaid" },
            { "value": "Zayd" },

        ]
        $("#names").val(JSON.stringify(autoFill));

    });

    window.onclick = function (event) {
        if (event.target.id == "resultView" || event.target.id == "close") {
            $("#resultView").css("display", "none");
        }
    }
});