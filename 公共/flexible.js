var html = document.documentElement;
    var w = document.documentElement.clientWidth;
    html.style.fontSize = w / 15 + 'px';
    function displayWindowWidth() {
        var w = document.documentElement.clientWidth;
        html.style.fontSize = w / 15 + 'px';
    }
    window.addEventListener('resize',displayWindowWidth);