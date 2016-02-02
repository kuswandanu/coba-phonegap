window['collapsible'] = function(zap) {
    if (document.getElementById)
    {
        // var visDivs = document.getElementsByClassName('visible');
        // for(var i = 0; i < visDivs.length; i++)
        // {
        //     visDivs[i].className = visDivs[i].className.replace('visible','');
        // }
        // document.getElementById(zap).className += " visible";

        if (document.getElementById(zap).className.indexOf('visible') > -1)
            document.getElementById(zap).className = document.getElementById(zap).className.replace('visible','');
        else
            document.getElementById(zap).className += " visible";

        return false;
    }
    else
        return true;
}
