var iWebkit;
if (!iWebkit) {
    iWebkit = window.onload = function() {
        function fullscreen() {
            var isAbsoluteUrl = function(value){
				return value.substring(0, 4) === "http";
			}
			var aTags = document.getElementsByTagName("a");
			for (var i = 0; i < aTags.length; i++) {
				var url=aTags[i].getAttribute("href");
				var className=aTags[i].className;
				if (className.match("leaveStandaloneMode")) {
					//Attach nothing
                }else if (isAbsoluteUrl(url)) {
					//Attach nothing
				}else{
					//Attach onClick override to stay in standalone mode
                    aTags[i].onclick = function() {
                        var localThis=aTags[i];
						window.location = localThis.getAttribute("href");
                        return false;
                    }
                }
            }
        }
        function hideURLbar() {
            window.scrollTo(0, 0.9)
        }
        iWebkit.init = function() {
            fullscreen();
            hideURLbar()
        };
        iWebkit.init()
    }
}