var self = require("sdk/self");

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;

//Custom code
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var injectingScript = "document.title = '...'; var link = document.createElement('link');link.type = 'image/x-icon';link.rel = 'shortcut icon';link.href = 'https://github.com/arVahedi/SecureTabChrome/blob/master/icon.png?raw=true';document.getElementsByTagName('head')[0].appendChild(link);";

var button = buttons.ActionButton({
    id: "secure_tab_firefox",
    label: "Secure Tab Firefox",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"
    },
    onClick: function(){
        tabs.activeTab.attach({
            contentScript: injectingScript
        });
    }
});