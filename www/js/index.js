var app = {
    inMenu : "",

    initialize : function(){
        document.addEventListener("deviceready", this.onDeviceReady, false);
    },

    onDeviceReady : function() {
        // alert("PhoneGap is working");
        document.removeEventListener('deviceready', app.onDeviceReady, false);
        document.addEventListener("backbutton", app.onBackKeyDown, false);

        admob.setOptions({
            publisherID: 'ca-app-pub-8573812479971236/7519602300',
            interstitialAdId: 'ca-app-pub-8573812479971236/8437932300',
            bannerAtTop: false, // set to true, to put banner at top
            overlap: false, // set to true, to allow banner overlap webview
            offsetStatusBar: true, // set to true to avoid ios7 status bar overlap
            isTesting: true, // receiving test ads (do not test with real ads as your account will be banned)
            autoShowBanner: true, // auto show banners ad when loaded
            autoShowInterstitial: false // auto show interstitials ad when loaded
        });
        admob.createBannerView();
        admob.requestInterstitialAd();
    },

    onBackKeyDown : function() {
        if(app.inMenu == "")
        {
            admob.showInterstitialAd();
            navigator.app.exitApp();
            // alert("keluar");
        }
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