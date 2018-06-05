$(document).ready(function() {


  function clear() {
    $("#header nav").removeAttr("style");
  }


  function modeChange() {
    var windowWidth = $(window).width();
    if (windowWidth < 1199) {
      /* mobile */
      $("body").addClass("mobile");
      $("body").removeClass("pc");




      $(".mobile #header .mobileMenu").click(function() {
        if ($(".mobile #header nav").hasClass("on")) {
          $(".mobile #header nav").removeClass("on");
        } else {
          $(".mobile #header nav").addClass("on");
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



      $("#header nav").hover(function() {
        $(this).addClass("on");
      }, function() {
        $(this).removeClass("on");
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


  $(".main-issue .image").each(function() {
    $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
  });














  $('section.main .goods').each(function() {
    $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
  });
  $(".ticket .tabs a").click(function() {
    var tabs = $(this).attr("data");
    $(".ticket .tabs a").removeClass("active");
    $(this).addClass("active");
    $(".ticket div.tab-data").removeClass("active");
    $(".ticket div #" + tabs).addClass("active");

  });




  var gtt = "";
  $(".mobileMode .table-cover").scroll(function() {
    var t = $(".mobileMode .tab-data.active .table-cover").scrollLeft();
    var tt = -t;
    if (t > 1) {
      $(".mobileMode .active .table-cover").addClass("fixOn");
      $(".mobileMode .active .table-cover td:first-child").addClass("fix");
      $(".mobileMode .active .table-cover th:first-child").addClass("fix");

    } else {
      $(".mobileMode .active .table-cover").removeClass("fixOn");
      $(".mobileMode .active .table-cover td:first-child").removeClass("fix");
      $(".mobileMode .active .table-cover th:first-child").removeClass("fix");
    };
    $(".mobileMode .active .fixT thead th:nth-child(2)").css("margin-left", tt);
    gtt = tt;
  });


  $(window).scroll(function() {

    var h = $(window).scrollTop();
    var hm = $(".tab-data.active .table-cover").offset(top);
    var hm2 = $(".tab-data.active tbody").height() + 280;
    if (h > hm && h < hm2) {
      $(".mobileMode .active .table-cover").addClass("fixT");
      $(".mobileMode .active .fixT thead th:nth-child(2)").css("margin-left", gtt);
    } else {
      $(".mobileMode .active .table-cover").removeClass("fixT");
      $(".mobileMode .active thead th:nth-child(2)").attr("style", "");
    }


    var y = $(".tab-data.active .table-cover").offset(top);
    var ym = $(".tab-data.active tbody").height() + 280;

    // console.log(ym, h);

    if (h > y && h < ym) {
      $(".pcMode .active .table-cover").addClass("fixOn");
      $(".pcMode .active .table-cover thead").css("width", $(".pcMode .active .table-cover table").width());

    } else {
      $(".pcMode .active .table-cover").removeClass("fixOn");
      $(".pcMode .active .table-cover thead").css("width", "");

    };


  });


  $(".ticket .calendar h4").click(function() {
    $('body').scrollTop(0);
    $('div.popup').css("height", $(document).height())
    $("div.lodge_div").css("display", "block");

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
