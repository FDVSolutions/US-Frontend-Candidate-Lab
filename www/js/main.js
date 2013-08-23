(function () {
    "use strict";
    var afterConfirmation, onGoing, onSkipping, initialize;
    afterConfirmation = function (message) {
        $(".feedback").html(message);
        $(".buttons").fadeOut();
    };

    onGoing = function () {
        new Messi("Great! We'll be waiting for you", {
            title: "Confirmed attendance"
        });
        afterConfirmation("See you on October 30th");
    };

    onSkipping = function () {
        var callback = function (going) {
            afterConfirmation(going ? "You won't regret. See you on October 30th" : "We hope to see you next time");
        };
        Messi.ask("This event is going to be huge, are you sure you don't want to go? There will be cake!", callback, {
            title: "Are you sure?",
            buttons: [
                {
                    label: "Ok, I'm going",
                    val: true
                }, {
                    label: "I'm not going",
                    val: false
                }
            ]
        });
    };

    initialize = function () {
        $(document).ready(function () {
            $("#going").click(onGoing);

            $("#skipping").click(onSkipping);
        });
    };

    initialize();
}());