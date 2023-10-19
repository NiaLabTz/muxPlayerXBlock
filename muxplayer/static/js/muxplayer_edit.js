/* Javascript for muxplayerXBlock. */
function muxplayerXBlockInitStudio(runtime, element) {

    $(element).find('.action-cancel').bind('click', function() {
        runtime.notify('cancel', {});
    });

    $(element).find('.action-save').bind('click', function() {
        var data = {
            'display_name': $('#muxplayer_edit_display_name').val(),
            'playback_id': $('#muxplayer_edit_playback_id').val(),
            'allow_download': $('#muxplayer_edit_allow_download').val(),
            'source_text': $('#muxplayer_edit_source_text').val(),
            'source_url': $('#muxplayer_edit_source_url').val(),
            'start_time': $('#muxplayer_edit_start_time').val(),
            'end_time': $('#muxplayer_edit_end_time').val()
        };
        
        runtime.notify('save', {state: 'start'});
        
        var handlerUrl = runtime.handlerUrl(element, 'save_muxplayer');
        $.post(handlerUrl, JSON.stringify(data)).done(function(response) {
            if (response.result === 'success') {
                runtime.notify('save', {state: 'end'});
                // Reload the whole page :
                // window.location.reload(false);
            } else {
                runtime.notify('error', {msg: response.message})
            }
        });
    });
}