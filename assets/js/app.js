"use strict";

function copytext(el) {
    var $tmp = $("<input class='m'>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy").addClass('s');
    $tmp.remove();
}

$(document).ready(function () {
    $("div[onclick]").on('click', function (event) {
        $(this).parent().addClass('cp');
    });

    $(".js-chg .op").on('click', function (event) {
        $(this).parent().parent().addClass('open');
        $('.remodal__tk-sz input').prop('disabled', false);
    });
    $(".js-chg .cl").on('click', function (event) {
        $(this).parent().parent().removeClass('open');
        $('.remodal__tk-sz input').prop('disabled', true);
    });

    $(".wl__fltr-top .js-ar").on('click', function (event) {
        $(this).parent().parent().toggleClass('open');
    });

    $(".js-lang").on('click', function (event) {
        $(this).parent().toggleClass('open');
    });

    $(".js-md").on('click', function (event) {
        $(this).toggleClass('open');
        $('.remodal__mob').toggleClass('open');
    });

    $(".js-tgl").on('click', function (event) {
        $(this).parent().parent().toggleClass('opn');
        $('body').toggleClass('overfl');
    });

    $(function () {
        $(".js-sess-all").on('click', function (event) {
            $(this).parent().parent().parent().addClass('open');
            //$('.session__in').addClass('p');
        });

        $(".js-sess-all-n").on('click', function (event) {
            $(this).parent().parent().parent().removeClass('open');
            //$('.session__in').removeClass('p');
        });
    });

    $('.switch input').on("click", function () {
        $(this).parent().toggleClass('active');
        $('body').toggleClass('dark-theme');
    });

    $(".dashboard__in-drop-title").on('click', function (event) {
        $(this).parent().toggleClass('open');
    });

    $(".js-inf-tt").on('click', function (event) {
        $(this).parent().addClass('open');
    });
    $(".dashboard__bt-inf-drop-close").on('click', function (event) {
        $(this).parent().parent().removeClass('open');
    });

    $(".js-mob-btn").on('click', function (event) {
        $(this).toggleClass('op');
        $('.wl__l').toggleClass('opn');
    });

    $(".wl__range-dop-close").on('click', function (event) {
        $(this).parent().toggleClass('d-none');
    });

    $(".wl__vm-item, .wl__fltr-tbl-item").on('click', function (event) {
        $(this).toggleClass('act');
    });

    /* $('ul.tabs li').click(function(){
         var tab_id = $(this).attr('data-tab');
           $('ul.tabs li').removeClass('current');
         $('.tab-content').removeClass('current');
           $(this).addClass('current');
         $("#"+tab_id).addClass('current');
     })*/

    $('ul.tabs li').click(function () {
        var $this = $(this);
        var $theTab = $(this).attr('id');
        console.log($theTab);
        if ($this.hasClass('current')) {
            // do nothing
        } else {
            $this.closest('.tabs_wrapper').find('ul.tabs li, .tabs_container .tab-content').removeClass('current');
            $('.tabs_container .tab-content[data-tab="' + $theTab + '"], ul.tabs li[id="' + $theTab + '"]').addClass('current');
        }
    });

    $(".accordion__title").on("click", function (e) {

        e.preventDefault();
        var $this = $(this);

        if (!$this.hasClass("accordion-active")) {
            $(".accordion__content").slideUp(400);
            $(".accordion__title").removeClass("accordion-active");
            $('.accordion__arrow').removeClass('accordion__rotate');
        }

        $this.toggleClass("accordion-active");
        $this.next().slideToggle();
        $('.accordion__arrow', this).toggleClass('accordion__rotate');
    });

    var swiper = new Swiper(".js-bn-slider", {
        effect: "fade",
        watchSlidesProgress: true,
        slidesPerView: 1
    });
    var swiper2 = new Swiper(".js-slider-b", {
        loop: true,
        effect: "fade",
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".js-bn-next",
            prevEl: ".js-bn-prev"
        },
        pagination: {
            el: ".js-bn-nav"
        },
        thumbs: {
            swiper: swiper
        }
    });

    var swiper11 = new Swiper(".js-mob-sl", {
        //loop: true,
        //slidesPerView: 1,
        spaceBetween: 12,
        //centeredSlides: true,
        slidesPerView: "auto",
        navigation: {
            nextEl: ".js-lt-prev",
            prevEl: ".js-lt-next"
        }
    });

    var swiper3 = new Swiper(".js-session", {
        loop: true,
        navigation: {
            nextEl: ".js-session-next",
            prevEl: ".js-session-prev"
        },
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            0: {
                slidesPerView: "auto",
                spaceBetween: 12
            }

        }
    });

    var swiper3 = new Swiper(".js-session2", {
        loop: true,
        navigation: {
            nextEl: ".js-session-next2",
            prevEl: ".js-session-prev2"
        },
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            0: {
                slidesPerView: "auto",
                spaceBetween: 12
            }

        }
    });

    var swiper5 = new Swiper(".js-winners", {
        slidesPerView: 7,
        spaceBetween: 25,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        },
        breakpoints: {
            1200: {
                slidesPerView: 7,
                spaceBetween: 25
            },
            991: {
                slidesPerView: 5,
                spaceBetween: 25
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 25
            },

            0: {
                slidesPerView: 2,
                spaceBetween: 25
            }

        }
    });

    var swiper6 = new Swiper(".js-lt-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: true,
        //slidesPerView: "auto",
        navigation: {
            nextEl: ".js-lt-prev",
            prevEl: ".js-lt-next"
        }
    });

    var swiper7 = new Swiper(".js-wl-sl", {
        loop: true,

        navigation: {
            nextEl: ".js-wl-prev",
            prevEl: ".js-wl-next"
        },
        breakpoints: {
            10000: {
                slidesPerView: 1
            },
            991: {
                slidesPerView: "auto",
                centeredSlides: true
            }

        }
    });

    var swiper8 = new Swiper('.js-dashboard-sl', {
        loop: true,
        initialSlide: 1,
        slidesPerView: 'auto',
        grabCursor: true,
        effect: 'coverflow',

        centeredSlides: true,

        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true
        },
        navigation: {
            nextEl: ".js-dash-prev",
            prevEl: ".js-dash-next"
        },

        breakpoints: {
            10000: {},
            991: {}

        }

    });
    var swiper8 = new Swiper('.js-dashboard-sl2', {
        loop: true,
        initialSlide: 1,
        slidesPerView: 'auto',
        grabCursor: true,
        effect: 'coverflow',

        centeredSlides: true,

        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true
        },
        navigation: {
            nextEl: ".js-dash-prev2",
            prevEl: ".js-dash-next2"
        },

        breakpoints: {
            10000: {},
            991: {}

        }

    });

    var swiper9 = new Swiper('.jd-tbl-sl', {
        initialSlide: 1,
        slidesPerView: 'auto',
        grabCursor: true,
        effect: 'coverflow',
        spaceBetween: 20,

        centeredSlides: true,

        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true
        },
        navigation: {
            nextEl: ".js-n-prev",
            prevEl: ".js-n-next"
        }

    });

    var swiper10 = new Swiper('.jd-tbl-sl2', {
        initialSlide: 1,
        slidesPerView: 'auto',
        grabCursor: true,
        spaceBetween: 20,
        loop: false,

        centeredSlides: true
    });

    var swiper11 = new Swiper('.js-rem-soc', {
        slidesPerView: 6,
        spaceBetween: 20,
        navigation: {
            nextEl: ".js-sc-prev",
            prevEl: ".js-sc-next"
        }
    });

    var swiper12 = new Swiper(".js-wl-ban", {
        loop: false,
        spaceBetween: 12,
        //centeredSlides: true,
        slidesPerView: "auto",
        navigation: {
            nextEl: ".js-lt-prev",
            prevEl: ".js-lt-next"
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            }
        }
    });

    /* validation*/

    var validSrc = '<span></span>';
    var invalidSrc = "<span></span>";

    $(document).ready(function () {
        initListeners();
        initMasks();
    });

    function initListeners() {
        $("#name").on("blur", validateName);
        $("#email").on("blur", validateEmail);
        $("#zip").on("blur", validatePostal);

        $(".submitBtn").on("click", validateForm);
    }
    function initMasks() {
        $('input#zip').mask("0000");
    }

    function validateEmail() {
        var emailAddress = $("#email").val().trim().toLowerCase();
        var pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        var validEmail = pattern.test(emailAddress);
        var reason = "";
        if (!validEmail) {
            reason = "Improper format";
        } else {
            if (emailAddress.includes("@hotmail")) {
                validEmail = false;
                reason = "Hotmail not accepted";
            } else if (emailAddress.includes("@gmail")) {
                validEmail = false;
                reason = "Gmail not accepted";
            } else if (emailAddress.includes("@yahoo")) {
                validEmail = false;
                reason = "Yahoo not accepted";
            }
        }
        if (validEmail) {
            $(".emailValidationImg").html('').parent().parent().removeClass('er');
            $("#email").removeClass("invalid");
        } else {
            $(".emailValidationImg").html('<span class="bl-i"></span><span class="bl"><span class="tit">Укажите корректный Email</span><span class="tx">Проверьте введенные данные, в случае ошибки в вашем адресе почты, мы не сможем дать вам обратную связб по заявке</span></span>').parent().parent().addClass('er');
        }
        return validEmail;
    }
    function validateName() {
        var isValid = false;
        var length = $("#name").val().length;
        if (length > 1) {
            $(".nameValidationImg").html('').parent().parent().removeClass('er');
            $("#name").removeClass("invalid");
            isValid = true;
        } else {
            $(".nameValidationImg").html('Имя не заполнено').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }

    function validatePostal() {
        var isValid = false;
        var length = $("#zip").val().length;
        if (length == 4) {
            $(".postalValidationImg").attr({ src: validSrc, title: "" });
            $("#zip").removeClass("invalid");
            isValid = true;
        } else {

            $(".postalValidationImg").html('').parent().parent().addClass('er');
            isValid = false;
        }
        return isValid;
    }

    function validateForm() {
        var formIsValid = true;

        if (!validateEmail()) {
            $("#email").addClass("invalid");
            formIsValid = false;
        } else {
            $("#email").removeClass("invalid");
        }

        if (!validateName()) {
            $("#name").addClass("invalid");
            formIsValid = false;
        } else {
            $("#name").removeClass("invalid");
        }

        if (!validatePostal()) {
            $("#zip").addClass("invalid");
            formIsValid = false;
        } else {
            $("#zip").removeClass("invalid");
        }
    }

    /* $(function() {
         var showLabel = function(event,ui){
             var curValue = ui.value || $( this ).slider( "option", "value" );;
             console.log(ui);
             var target = ui.handle || $('.ui-slider-handle');
             var tooltip = '<div class="tooltip"><div class="tooltip-inner">' + curValue + '</div><div class="tooltip-arrow"></div></div>';
             $(target).html(tooltip);
         };
         $( "#slider-range-min" ).slider({
             value:6,
             min: 1,
             max: 100,
             step: 1,
             slide:showLabel,
             create:showLabel
         });
     });
    */

    $(function () {

        $("#slider-range-min2").slider({
            range: "min",
            value: 1,
            min: 0,
            max: 100,
            step: 1,
            slide: function slide(event, ui) {
                $('#numb1').val(ui.value);
            }
        });

        $("#slider-range-min").slider({
            range: "min",
            value: 0,
            min: 1,
            max: 100,
            step: 1,
            animate: "fast",

            slide: function slide(event, ui) {
                $(ui.handle).find('.tooltip').text(ui.value);
            },
            create: function create(event, ui) {
                var tooltip = $('<div class="tooltip" />');

                $(event.target).find('.ui-slider-handle').append(tooltip);
            },
            change: function change(event, ui) {
                $('#hidden').attr('value', ui.value);
            }
        });

        $('#slider-range-min, #slider-range-min2').draggable();
    });
});
//# sourceMappingURL=app.js.map
