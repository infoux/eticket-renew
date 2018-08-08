$(document).ready(function() {


    function clear() {
        $("#header nav").removeAttr("style");
        $("#header nav").removeClass("on");
    }


    function modeChange() {
        var windowWidth = $(window).width();


        $('.main-issue .show li h4').css("width", $('.main-issue .lodge li h4').width());

        if (windowWidth < 1199) {
            /* mobile */
            $("body").addClass("mobile");
            $("body").removeClass("pc");




            $(".mobile #header .mobileMenu").click(function() {
                if ($(".mobile #header nav").hasClass("on")) {
                    $(".mobile #header nav").removeClass("on");
                    $(".mobile #header nav").removeAttr("style");
                } else {
                    $(".mobile #header nav").addClass("on");
                    $(".mobile #header nav").css("height", $(document).height())
                }

            });

            $(".mobile #header nav h2 a").click(function(e) {
                e.preventDefault();

                $("#header nav ul.menu-list>li").removeClass("on");
                $(this).parent().parent().addClass("on");
            });





            /* e:mobile */

        } else {
            /* pc */
            $("body").addClass("pc");
            $("body").removeClass("mobile");




            $("#header nav h2 a").click(function() {
                window.location = this.href;
            });



            $("#header nav ul.menu-list").hover(function() {
                $(this).parent().parent().addClass("on");
            }, function() {
                $(this).parent().parent().removeClass("on");
            });


            $("#header nav h2 a").hover(function() {
                $(this).parent().parent().find("ul").addClass("on");
            }, function() {
                $("#header nav ul ul").removeClass("on");
            });

            $("#header nav ul ul").hover(function() {
                $(this).addClass("on");
            }, function() {
                $("#header nav ul ul").removeClass("on");
            });


            /* e:pc */
        }
    }




    modeChange();

    $(window).resize(function() {
        modeChange();
        clear();
    });


    $("div.arthall-wrap p.img").each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat top / cover");
    });

    $("div.camp-wrap p.img").each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat top / cover");
    });

    $("div.camp-popup p.camp-image").each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });

    $("div.camp-popup div.camp-img-wrap p.main-img").each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });

    $(".main-issue .image").each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });


    $(".main-list .image").each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });


    $(".big-image").each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });


    try {
        $('.main-issue .show ul').slick({
            speed: 1000,
            respondTo: "slider",
            prevArrow: ".main-issue .prev",
            nextArrow: ".main-issue .next",
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            variableWidth: true,
            responsive: [{
                breakpoint: 1199,
                settings: {
                    arrows: false

                }
            }]

        });

    } catch (e) {

    }



    $(".ticket .calendar h3").click(function() {
        $('body').scrollTop(0);
        $("div.lodge_div").css("display", "block");
        $('div.popup').css("height", $(document).height())

    });

    $(".camp-head .title button").click(function() {
        $('body').scrollTop(0);
        $("div.lodge_div").css("display", "block");
        $('div.popup').css("height", $(document).height())

    });



    $("div.product button.seat").click(function() {
        $(".seat-check div.popup").css("display", "block");
        $(".seat-check div.popup").css("height", $(document).height())


    });









    $('section.main .goods').each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });


    $(".lodge_div .tabs a").click(function() {
        var tabs = $(this).attr("data");
        $(".lodge_div .tabs a").removeClass("active");
        $(this).addClass("active");
        $(".lodge_div div.tab-data").removeClass("active");
        $(".lodge_div div #" + tabs).addClass("active");

    });




    var gtt = "";
    $(".table-cover").scroll(function() {
        var t = $(".tab-data.active .table-cover").scrollLeft();
        var tt = -t;
        if (t > 1) {
            $(".active .table-cover").addClass("fixOn");
            $(".active .table-cover td:first-child").addClass("fix");
            $(".active .table-cover th:first-child").addClass("fix");

        } else {
            $(".active .table-cover").removeClass("fixOn");
            $(".active .table-cover td:first-child").removeClass("fix");
            $(".active .table-cover th:first-child").removeClass("fix");
        };
        $(".active .fixT thead th:nth-child(2)").css("margin-left", tt);
        gtt = tt;
    });


    $(window).scroll(function() {


        try {

            var h = $(window).scrollTop();
            var hm = $(".tab-data.active .table-cover").offset().top;
            var hm2 = $(".tab-data.active tbody").height() + 280;
            if (h > hm && h < hm2) {
                $(".active .table-cover").addClass("fixT");
                $(".active .fixT thead th:nth-child(2)").css("margin-left", gtt);
            } else {
                $(".active .table-cover").removeClass("fixT");
                $(".active thead th:nth-child(2)").attr("style", "");
            }

            $(".active .fixT thead th:nth-child(n+2)").css("width", $(".active .fixT tbody td:last-child p").width() + 1);

            $(".active .fixT thead th.fix").css("width", $(".active .fixT tbody td:first-child").width());

            var y = $(".tab-data.active .table-cover").offset().top;
            var ym = $(".tab-data.active tbody").height() + 280;


        } catch (e) {

        }

        try {

            var h = $(window).scrollTop();
            var hm = $(".tab-data.active .table-cover").offset().top;
            var hm2 = $(".tab-data.active tbody").height() + 280;
            if (h > hm && h < hm2) {
                $(".active .table-cover").addClass("moguri_fix");
                $(".active .moguri_fix thead th:nth-child(2)").css("margin-left", gtt);
            } else {
                $(".active .table-cover").removeClass("moguri_fix");
                $(".active thead th:nth-child(2)").attr("style", "");
            }

            $(".active .moguri_fix thead th:nth-child(n+2)").css("width", $(".active .moguri_fix tbody td:last-child p").width() + 1);

            $(".active .moguri_fix thead th.fix").css("width", $(".active .moguri_fix tbody td:first-child").width());

            var y = $(".tab-data.active .table-cover").offset().top;
            var ym = $(".tab-data.active tbody").height() + 280;


        } catch (e) {

        }




    });


    $("div.popup").on('click', '.close', function() {
        $("div.popup").css("display", "none");

    });
    $(".ticket #discount .toggle").click(function() {
        $("div.discount_div").css("display", "block");
    });
    $("div.discount_div .close").click(function() {
        $("div.discount_div").css("display", "none");
    });
    $("div.discount_div .btn-area .cancle").click(function() {
        $("div.discount_div").css("display", "none");
    });
    $(".sub .container ul.tabs a").click(function() {
        var tabs = $(this).attr("data");
        $(".sub .container ul.tabs a").removeClass("active");
        $(this).addClass("active");
        $(".sub div.tab-contents").removeClass("active");
        $(".sub div #" + tabs).addClass("active");
    });
    $(".sub.detail.view .star button").click(function() {
        var starValue = $(this).attr("data");
        $(".sub.detail.view button.star").removeClass("on");
        $(".sub.detail.view .star button").each(function() {
            $(this).find("i").removeClass("fa-star");
            $(this).find("i").addClass("fa-star-o");
            if ($(this).attr("data") <= starValue) {
                $(this).addClass("on");
                $(this).find("i").removeClass("fa-star-o");
                $(this).find("i").addClass("fa-star");
            }
        });
    });
    $(".accordion h5").click(function() {
        var accOn = $(this).attr("data");
        $(".accordion h5").removeClass("active");
        $(this).addClass("active");
        $(".accordion>div").removeClass("active");
        $(".accordion>div." + accOn).addClass("active");
    });
    /* 2017-03-16 상세페이지 bx Slider 제거
    $(window).load(function() {
        $('.image_slider .bx').bxSlider({
            pagerCustom: '#bx-pager',
            auto: true
        });
    });*/
    $("select#resDatetimes").change(function() {
        $(this).parent().find("label").text($(this).find('option:selected').text());
    });
    $("select#resArea").change(function() {
        $(this).parent().find("label").text($(this).find('option:selected').text());
    });
});