/*!
 * jQuery Plugin: jdragdrop.js v1.0.0
 *
 * Copyright (c) 2015 Jimmy Tsai
 */
(function($) {
    var dndDefaults = {
        'customEvent': 'filesdropped',
        'handle': ''
    };
	$.extend($.fn, {
        dnd: function(dropObj, options){
            if ((typeof dropObj) !== 'object') {
                return;
            }
            var settings = $.extend(true, {}, dndDefaults, options);
            $(document).on('dragenter', function(e){
                e.stopPropagation();
                e.preventDefault();
            })
            .on('dragover', function(e){
                e.stopPropagation();
                e.preventDefault();
            })
            .on('drop', function(e){
                e.stopPropagation();
                e.preventDefault();
            });
            $(this).on('dragenter', function(e){
                e.stopPropagation();
                e.preventDefault();
            })
            .on('dragover', function(e){
                e.stopPropagation();
                e.preventDefault();
            })
            .on('dragleave', function(e){
                e.stopPropagation();
                e.preventDefault();
            })
            .on('drop', function(e){
                e.preventDefault();
                dropObj.files = e.originalEvent.dataTransfer.files;
                if ( settings.handle === '' ) {
                    $(this).trigger(settings.customEvent);
                } else {
                    $(settings.handle).trigger(settings.customEvent);
                }
            });
        },
	});
})(jQuery);