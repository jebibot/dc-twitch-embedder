var oldExecuteAfterDataCheck = executeAfterDataCheck;
executeAfterDataCheck = function (data, cb) {
    var url = data.url;
    if (url && url.indexOf('twitch.tv') > -1) {
        // https://www.twitch.tv/2chamcham2/clip/RefinedToughSlothNotLikeThis-gDuDI6bMQS2l-3F2
        // https://clips.twitch.tv/RefinedToughSlothNotLikeThis-gDuDI6bMQS2l-3F2
        delete data.url;
        var parts = url.split('/');
        var id = parts[parts.length - 1].split('?')[0];
        data.code = `<embed src="https://clips.twitch.tv/embed?clip=${id}&parent=gall.dcinside.com&parent=m.dcinside.com&autoplay=false" height="378" width="620"></embed>
<p><a href="https://clips.twitch.tv/${id}" target="_blank">https://clips.twitch.tv/${id}</a></p>`;
    }
    oldExecuteAfterDataCheck(data, cb);
}
