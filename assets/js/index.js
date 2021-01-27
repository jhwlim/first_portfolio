$(document).ready(function() {

    $('#homeBtn').click(() => {
        $('#navigator').focus();
    });

    // // 헤더 버튼 hover 이벤트
    $('#headerBtn').mouseover(function() {
        $(this).html('구경하러가기');
    });
    $('#headerBtn').mouseout(function() {
        $(this).text("궁금하신가요?");
    }); 
    
    // About-Skills 가 viewport에 들어왔을 때 확인하기
    function elementInViewPort(el) {
        var top = el.offsetTop

        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
        }
        console.log(top);
        return top >= window.pageYOffset;
    }

    $(window).scroll(function() {
        var el = $('#aboutSkillBox');
        var top = el.offset().top;
        
        var windowTop = $(this).scrollTop();
        var windowHeight = $(this).height();

        if (top > windowTop && top < windowTop + windowHeight) {
            $('.skill-bar__fill').addClass('fill-bar');
        }

        var skillSection = $("#skill");
        var topOfSkillSection = skillSection.offset().top;
        var bottomOfSkillSection = topOfSkillSection + skillSection.height() + 40;
        var navHeight = $('nav').height();
        if (windowTop >= topOfSkillSection - navHeight && windowTop <= bottomOfSkillSection) {
            $('#navigator').css('background-color', 'rgba(255, 255, 255, 0.5)');
            $('#navigator').css('color', 'rgba(37, 42, 52, 1)');
        } else {
            $('#navigator').css('background-color', 'rgba(37, 42, 52, 1)');
            $('#navigator').css('color', 'white');
        }
    });

    $('.skill__hex-outer--shadow').click(function() {
        const rotateClassName = 'hex-rotateY';

        if ($(this).hasClass(rotateClassName)) {
            $(this).removeClass(rotateClassName);
        } else {
            $('.skill__hex-outer--shadow').removeClass(rotateClassName);

            // only display skill bar selected
            $(this).addClass(rotateClassName);
            
            var labelFor = $(this).attr('for');
            
            $(".skill-bar__row").hide();
            
            // $('.skill-explain-detail').hide();

            var barName = $('#' + labelFor).children('.skill-bar__name');
            barName.parent().show();

            var bar = $('#' + labelFor).children('.skill-bar__fill-bg').children('.skill-bar__fill');
            $(bar).removeClass('fill-bar');
            setTimeout(function() {
                $(bar).addClass('fill-bar');    
            }, 1);
            // var detail = $('#' + labelFor + 'Explain').css('display', 'block');   
            $('.skill-bar__text').show();
        }
        
    });

    $('#aboutSkillAll').click(function() {
        $('.hex-outer').removeClass('hex-rotateY');
        $('.hex-outer').removeClass('hex-blur');
        $(".skill-explain-bar>div").removeClass('fill-bar');
        setTimeout(function() {
            $(".skill-explain-bar>div").addClass('fill-bar');
        }, 1);

        $('.skill-explain-detail').hide();    
        
        $(".skill-explain-content-row").show();
    });
    $('#aboutSkillFront').click(function() {
        $('.hex-outer').removeClass('hex-blur');
        $('.hex-outer.not-frontend').addClass('hex-blur');
    });
    $('#aboutSkillBack').click(function() {
        $('.hex-outer').removeClass('hex-blur');
        $('.hex-outer.not-backend').addClass('hex-blur');
    });

    $('.skill__selector').click(function() {
        if (!$(this).hasClass('skill__selector--selected')) {
            $('.skill__selector').removeClass('skill__selector--selected');
            $(this).addClass('skill__selector--selected');
            
        }
    });

    // $('.portfolio__figure').mouseover(function() {
    //     $(this).children('.portfolio__description').addClass('portfolio__description--display');
    // });

    // $('.portfolio__figure').mouseout(function() {
    //     $(this).children('.portfolio__description').removeClass('portfolio__description--display');
    // });

});