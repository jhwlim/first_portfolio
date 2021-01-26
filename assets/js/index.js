$(document).ready(function() {

    $('#homeBtn').click(() => {
        $('#navigator').focus();
    });

    // // 헤더 버튼 hover 이벤트
    // $('#headerBtn').mouseover(function() {
    //     $(this).html('구경하러가기');
    // });
    // $('#headerBtn').mouseout(function() {
    //     $(this).text("궁금하신가요?");
    // }); 
    
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
            $('.skill-explain-bar>div').addClass('fill-bar');
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

    $('.hex-outer').click(function() {
        const rotateClassName = 'hex-rotateY';

        if ($(this).hasClass(rotateClassName)) {
            $(this).removeClass(rotateClassName);
        } else {
            $('.hex-outer').removeClass(rotateClassName);

            $(this).addClass(rotateClassName);
            
            var labelFor = $(this).children('label').attr('for');
            
            $(".skill-explain-content-row").hide();
            
            $('.skill-explain-detail').hide();

            var barName = $('#' + labelFor).children('.skill-explain-name');
            barName.parent().show();

            var bar = $('#' + labelFor).children('.skill-explain-bar').children('div');
            $(bar).removeClass('fill-bar');
            setTimeout(function() {
                $(bar).addClass('fill-bar');    
            }, 1);
            var detail = $('#' + labelFor + 'Explain').css('display', 'block');    
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

    $('#aboutSkillHeader>h3').click(function() {
        if (!$(this).hasClass('about-skill-header-selected')) {
            $('#aboutSkillHeader>h3').removeClass('about-skill-header-selected');
            $(this).addClass('about-skill-header-selected');
            
        }
    });

});