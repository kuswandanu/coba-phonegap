var app = {
    inMenu : true,

    initialize : function(){
        document.addEventListener("deviceready", this.onDeviceReady, false);
    },

    onDeviceReady : function() {
        alert("PhoneGap is working");
        document.addEventListener("backbutton", app.onBackKeyDown, false);
    },

    onBackKeyDown : function() {
        if(inMenu)
            navigator.app.exitApp();
        else
        {
            inMenu = true;
            addClass(document.getElementById("menu"), "visible");
        }
    },

    click : function(zap) {
        if (document.getElementById(zap))
        {
            if (document.getElementById(zap).className.indexOf('visible') > -1)
                removeClass(document.getElementById(zap), "visible");
            else
                addClass(document.getElementById(zap), "visible");
        }
        else
        {
            alert(zap);
            inMenu = false;
            removeClass(document.getElementById("menu"), "visible");
        }
    }
};

function removeClass(elem, cls) {
  var str;
  do {
    str = " " + elem.className + " ";
    elem.className = str.replace(" " + cls + " ", " ").replace(/^\s+|\s+$/g, "");
  } while (str.match(cls));
}

function addClass(elem, cls) {
  elem.className += (" " + cls);
}