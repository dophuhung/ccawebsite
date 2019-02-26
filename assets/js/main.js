var App ={
    upfile: function () {
        if (jQuery('.file-upload').length) {
            jQuery('.file-upload').each(function () {
                var $this = jQuery(this);
                var $data = jQuery(this).data("change");
                $this.find('input[type=file]').on('change', function () {
                    if (this.files && this.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            jQuery('#'+$data+' img').attr('src', e.target.result);
                        }
                        reader.readAsDataURL(this.files[0]);
                    }
                })
            })
        }
    },
    scrollhideform: function () {
        if(jQuery('.loginform').length){
            var $document = jQuery(document),
                $element = jQuery('.loginform'),
                className = 'scroll';
                $height = jQuery(window).outerHeight()/2;
            if ($document.scrollTop() >= $height) {
                // user scrolled 50 pixels or more;
                // do stuff
                $element.addClass(className);
            } else {
                $element.removeClass(className);
            }
            $document.scroll(function() {
                if ($document.scrollTop() >= $height) {
                    // user scrolled 50 pixels or more;
                    // do stuff
                    $element.addClass(className);
                } else {
                    $element.removeClass(className);
                }
            });
        }
    },
    scrollsmooth: function () {
        jQuery('a[href*="#"]').on('click', function (e) {
            e.preventDefault();

            jQuery('html, body').animate({
                scrollTop: jQuery(jQuery(this).attr('href')).offset().top
            }, 500, 'linear');
        });
    },
    addinput: function () {
        if(jQuery('.step3 .invite').length){
            jQuery('.step3 .invite').each(function () {
                jQuery(this).click(function () {
                    jQuery('.step3').append('<div class="position-relative"><span class="remove">-</span><input type="email" name="email[]" class="form-control mt-3" placeholder="email input"></div>');
                    jQuery('.step3 .remove').click(function () {
                        jQuery(this).parent('.position-relative').remove();
                    });
                });
            });
        }
    },
    sidebarslide: function () {
        if(jQuery('.slidesidebar').length){
            jQuery('.slidesidebar').owlCarousel({
                loop:true,
                dots: false,
                nav:true,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
        }
        if(jQuery('.slidebanner').length){
            jQuery('.slidebanner').owlCarousel({
                loop:true,
                dots: true,
                nav:false,
                smartSpeed: 1000,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
        }
    },
    uploadevent: function () {
        if(jQuery('.btn-upload').length){
            jQuery('.btn-upload').each(function () {
                jQuery(this).click(function () {
                    var $id = jQuery(this).data('upload');
                    jQuery('#'+$id).trigger('click');
                });
            });
        }
    }
};
jQuery(document).ready(function () {
    App.upfile();
    App.scrollhideform();
    App.scrollsmooth();
    App.addinput();
    App.sidebarslide();
    App.uploadevent();
});