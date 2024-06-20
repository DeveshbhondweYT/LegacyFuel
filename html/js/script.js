$(function () {
    function display(bool) {
        if (bool) {
            $("#container").show();
        } else {
            $("#container").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        if (event.data.type === "ui") {
            if (event.data.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
        else if (event.data.type == "anzahl") {
            $(".literanzahl").text(event.data.current);
            $(".needsprit").text(event.data.fehlt);
            if (event.data.current > "99.9") {
                $(".submit").show();
                $(".close").hide();
            } else if (event.data.fehlt < "1") {
                $(".spritpreis1").text("0");
            }
            }
            else if (event.data.type == "rechnung") {
                $(".spritpreis1").text(event.data.rechnung);
            }
    })
    // if the person uses the escape key, it will exit the resource
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post('https://LegacyFuel/exit', JSON.stringify({}));
            return
        }
    };
    $("#STOPP").click(function () {
        $.post('https://LegacyFuel/exit', JSON.stringify({}));
        return
    })
    //when the user clicks on the submit button, it will run
    $("#START").click(function () {
        $(".spritpreis1").text("0");
        // if there are no errors from above, we can send the data back to the original callback and handle it from ther
        $.post('https://LegacyFuel/main', JSON.stringify({
            
        }));
        return;
    })
})
