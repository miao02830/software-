function createXHR() {
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined") {
        if (typeof arguments.callee.activeXString != "string") {
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
                i, len;
            for (i = 0, len = versions.length; i < len; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) {

                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new ActiveXObject(arguments.callee.activeXString);
    }
}

function addURLParam(url, name, value) {
    url += (url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}

function getAjax() {
    alert(1);
    var xhr = createXHR();

    var username = document.getElementById('username');
    var psword = document.getElementById('password');
    var url = "http://192.168.1.104/Ajax-jQuery/ajax/check";
    url = addURLParam(url, "username", username);
    url = addURLParam(url, "psword", psword);
    xhr.onreadstagechange = function() {
        if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                alert(xhr.responseText);
            } else {
                alert("Request was unsuccessful : " + xhr.status);
            }
        }
    };
    xhr.open("get", url, true);

    xhr.send(null);
}






function getIdentity() {
    var value;
    var radios = document.getElementsByName("sel");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            //alert(radios);
            value = radios[i].value;
            alert(value);
            break;
        }

    }

}