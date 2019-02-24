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
};
jQuery(document).ready(function () {
    App.upfile();
});