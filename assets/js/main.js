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
    }
};
jQuery(document).ready(function () {
    App.upfile();
    App.scrollhideform();
    App.scrollsmooth();
    App.addinput();
});