var app = {
    menu : false,

    initialize : function(){
        document.addEventListener("deviceready", this.onDeviceReady, false);
    },

    onDeviceReady : function() {
        alert("device ready");
        document.addEventListener("backbutton", app.onBackKeyDown, false);
    },

    onBackKeyDown : function() {
        alert("backbutton");
    },

    click : function(zap) {
        alert("click");
        if (document.getElementById)
        {
            if (document.getElementById(zap).className.indexOf('visible') > -1)
                document.getElementById(zap).className = document.getElementById(zap).className.replace('visible','');
            else
                document.getElementById(zap).className += " visible";

            return false;
        }
        else
            return true;
    }
};