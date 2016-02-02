var app = {
    inMenu : "",

    initialize : function(){
        document.addEventListener("deviceready", this.onDeviceReady, false);
    },

    onDeviceReady : function() {
        alert("PhoneGap is working");
        document.addEventListener("backbutton", app.onBackKeyDown, false);
    },

    onBackKeyDown : function() {
        if(app.inMenu == "")
            // navigator.app.exitApp();
            alert("keluar");
        else
        {
            removeClass(document.getElementById(app.inMenu), "visible");
            app.inMenu = "";
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
        else if (document.getElementById("k"+zap))
        {
            app.inMenu = "k"+zap;
            removeClass(document.getElementById("menu"), "visible");
            addClass(document.getElementById("k"+zap), "visible");
        }
        else
            alert("NULL");
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