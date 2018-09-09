$(document).ready(function () {
            var win = 0;
            var loss = 0;
            var randomnumber = 0;
            var totalscore = 0;
            var crystalrandomnumber = [];

            // definition 
            function random(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
            randomnumber = random(19, 120);
            $("#randomnumber").text(randomnumber);
            for (i = 0; i < 4; i++) {
                crystalrandomnumber.push(random(1, 12));
            }
            for (i = 0; i < 4; i++) {
                var j = i + 1;
                $("#crystal" + j).prop("value", crystalrandomnumber[i]);
            }


            $(".crystal").click(function () {
                var buttonValue = $(this).prop("value");
                totalscore += parseInt(buttonValue);
                $("#totalscore").text(totalscore);
                if (totalscore == randomnumber) {
                    win += 1;
                    $("#wins").text(win);
                    $("#status").text("You Win!!!");
                    totalscore = 0;
                    $("#totalscore").text(totalscore);
                    randomnumber = random(19, 120);
                    $("#randomnumber").text(randomnumber);
                    crystalrandomnumber = [];
                    for (i = 0; i < 4; i++) {
                        crystalrandomnumber.push(random(1, 12));

                    }
                    for (i = 0; i < 4; i++) {
                        var j = i + 1;
                        $("#crystal" + j).prop("value", crystalrandomnumber[i]);
                    }

                }
                else if (totalscore > randomnumber) {
                    loss += 1;
                    $("#loss").text(loss);
                    $("#status").text("You Lost!!!");
                    totalscore = 0;
                    $("#totalscore").text(totalscore);
                    randomnumber = random(19, 120);
                    $("#randomnumber").text(randomnumber);
                    crystalrandomnumber = [];
                    for (i = 0; i < 4; i++) {
                        crystalrandomnumber.push(random(1, 12));
                    }
                    for (i = 0; i < 4; i++) {
                        var j = i + 1;
                        $("#crystal" + j).prop("value", crystalrandomnumber[i]);
                    }

                }
            });
        });
