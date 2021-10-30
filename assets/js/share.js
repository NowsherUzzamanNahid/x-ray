function fbs_click(width, height) {
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    u="https://www.1smartrecruiter.com";
   
    window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u),'sharer', windowFeatures);
    return false;
}

function lnk_click(width, height) {
    var leftPosition, topPosition;
    //Allow for borders.
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    //Allow for title and status bars.
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    u="https://www.1smartrecruiter.com";
  t= "1smartrecruiter | X-Ray Search | Boolean Strings Generator and More";
    window.open('https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(u)+'&title='+ encodeURIComponent(t),'sharer', windowFeatures);
    return false;
}

