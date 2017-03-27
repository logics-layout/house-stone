var fnClearNav = function(){
    $('.header-navigation').removeClass('active');
    $('.mobile-list-anim__input').each(function(e){
        this.checked = false;
    });
};

$('body').keydown(function(e) {
    if (e.keyCode == 27) {
        fnClearNav();
    }
});
$('.header-navigation__clear').click(fnClearNav);

var inputToggle = $('.mobile-list-anim__input');
$(document).click(function(e) {
    var target = $(e.target);

    if(target.is(inputToggle)){
        inputToggle.not(target).each(function () {
            this.checked = false;
        });
        inputToggle.each(function(){
            var _this = $(this),
                id = _this.attr('id'),
                block = $('[data-for="'+id+'"]'),
                checked = target.is(_this) && this.checked,
                fn = '',
                arg = '';

            if(block.closest('.header-desktop')[0]){
                fn = 'removeClass';
                arg = 'active';
                if(checked) {
                    fn = 'addClass';
                }
            }else if(block.closest('.header-mobile')[0]){
                fn = 'slideUp';
                arg = 300;
                if(checked) {
                    fn = 'slideDown';
                }
            }

            if(checked){
                block.on('mousewheel.chosen DOMMouseScroll.chosen', function(evt) {
                    search_results_mousewheel(evt, block);
                });
            }else{
                block.off('mousewheel.chosen DOMMouseScroll.chosen');

            }

            block[fn](arg);
        });
    }
});


$('.header-mobile__navigation-list a').click(function(e){
    if($(document).width() > 991) return true;
    var _this = $(this),
        list = _this.next('ul'),
        parent = _this.parent(),
        className = 'active',
        time = 300;

    if(list[0]){
        e.preventDefault();
        parent.toggleClass(className);
        list.slideToggle(time);

        parent.siblings().removeClass(className)
            .find('ul').slideUp(time);
    }
});

window.headerHeightCheck = function () {return _heightBlock('.header-block');};
var header__fix = $('.header__fix');
function fixHeader(clear) {
    var scrollTop = $(window).scrollTop(),
        headerBlock = $('.header-block');
    if(clear || headerHeight >= scrollTop){
        headerBlock.removeClass('fix').css('height', 'auto');
        header__fix.css('top', '0');
    }else if(!headerBlock.hasClass('fix')){
        headerBlock.addClass('fix').height(headerHeight);
        header__fix.css('top', '-100%').animate({top: '0'}, 300);
    }
}