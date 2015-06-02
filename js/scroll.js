function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = $('.header');
        if (distanceY > shrinkOn) {
            if (header.attr("class")=="header"){
                header.addClass("header-minified");
            }
        } else {
            if (header.attr("class")=="header header-minified"){
                header.removeClass("header-minified")                
            }

        }
    });
}
window.onload = init();