let classer = document.querySelector("#classer");
let clicker = document.querySelector(".clicker");
let frame = document.querySelector(".frame");
let topdown = document.querySelector(".topdown");
let textdata1 = document.querySelector(".textdata1");
let ltxt = document.querySelector(".lefttext");
let rtxt = document.querySelector(".righttext");
let txtall = document.querySelector(".textall");
let textdata = document.querySelector(".textdata");
let thank = document.querySelector(".thank");
var sbar = document.getElementById("search");
var smsg = document.querySelector(".searchmsg");
var iframe = document.querySelector("iframe");
var rslider = document.querySelector(".rslider");
var rslide = document.querySelector(".rightslide");
var ps = document.querySelectorAll(".topdatalist p");
var ilink = document.querySelector(".linktext");
var linkbtn = document.querySelector(".submittext");
var link;
var divider;
var fullstring;
var extendLink = "?enablejsapi=1&html5=1";
var hovertext = document.querySelector(".hovertext");
var hoverbox = document.querySelector(".hoverbox");
var linkbox = document.querySelectorAll("#linkbox");
var leftpan = document.querySelector(".left-panel");
var datalistlink = document.querySelector(".datalistlink");
var hamberg = document.querySelector(".hamberg");
var linkset = document.querySelectorAll("#linkset");
var dayn = document.querySelector("#checkday");
var body = document.querySelector("body");
var gamingsec = document.querySelector(".gamingsec");
var gamesec1 = document.querySelector(".gamesec1");
var gamesec2 = document.querySelector(".gamesec2");
var gamemode = document.querySelector(".gamemode");
var gamechanger = document.querySelector(".gamechanger");








gamechanger.addEventListener("click", function () {
    if (gamechanger.firstChild.className.includes("left")) {
        gamesec1.style.left = "-100%";
        gamesec2.style.right = "0%";
        gamechanger.style.left = "2%";
        gamechanger.firstChild.className = "fas fa-arrow-right";
    } else {
        gamesec1.style.left = "0";
        gamesec2.style.right = "-100%";
        gamechanger.style.left = "95%";
        gamechanger.firstChild.className = "fas fa-arrow-left";
    }
});

document.querySelectorAll(".closegame").forEach((item) => {
    item.addEventListener("click", function () {

        gamingsec.style.display = "none";
        //gamesec1.lastElementChild.innerHTML = " ";
    })
});

gamemode.addEventListener("click", function () {
    //    gamesec1.lastElementChild.classList.remove("notstaged");
    gamingsec.style.display = "initial";

    //callgame();
});

function darkmode() {
    dayn.addEventListener("click", function () {
        if (body.className == "dark") {
            body.style.transition = "all 2s linear";
            body.className = "day";
            body.style.background = "#cdcdcd";
            body.querySelector("h1").style.color = "black";
            body.querySelector(".copy").style.color = "black";
            hamberg.style.color = "black";
            linkbox.forEach(function (item) {
                item.style.color = "black";
            });
	  
            leftpan.style.backgroundColor = "rgba(0,22,44,0.2)";
            document.querySelector(".headlink").style.color = "#000";
            body.querySelectorAll("h1 > span ").forEach(item => {
                item.style.color = "#43a047";
                hovertext.style.background = "black";
                hoverbox.style.background = "black";
                datalistlink.style.color = "white";
            });
            clicker.style.background = "#616161";
            clicker.style.color = "#fff";
            rslider.style.background = "#616161";
            rslider.firstChild.style.border = "2px solid white";
            document.querySelector(".controller").style.background = "white";
            document.querySelector(".controller").style.color = "black";
            rslide.style.background = "white";
            rslide.style.color = "white";
            rslide.style.border = "5px solid white";
            ps.forEach(item => {
                item.style.background = "#141414";
                item.style.color = "white";
            });
            ilink.style.background = "black";
            linkbtn.style.background = "black";
            ilink.style.color = "white";
            linkbtn.style.color = "white";
            sbar.style.background = "#616161";
            sbar.style.color = "white";
            gamemode.style.color = "#323232";
	    document.querySelector(".rotatedata").style.border="5px solid #323232";

        } else {
            body.style.transition = "all 2s linear";
            body.style.background = "#323232";
            body.className = "dark";
            body.querySelector("h1").style.color = "white";
            body.querySelector(".copy").style.color = "white";
            hamberg.style.color = "white";
            linkbox.forEach(function (item) {
                item.style.color = "white";
            });
            document.querySelector(".headlink").style.color = "#1BB42D";
            leftpan.style.backgroundColor = "rgba(255, 233, 211, 0.2)";
            body.querySelectorAll("h1 > span ").forEach(item => {
                item.style.color = "#7ecb20";
            });
            clicker.style.background = "white";
            clicker.style.color = "#23a256";
            rslider.style.background = "white";
            rslider.firstChild.style.border = "2px solid black";
            hovertext.style.background = "white";
            hoverbox.style.background = "white";
            datalistlink.style.color = "black";
            document.querySelector(".controller").style.background = "black";
            document.querySelector(".controller").style.color = "white";
            rslide.style.background = "black";
            rslide.style.color = "black";
            rslide.style.border = "5px solid black";
            ps.forEach(item => {
                item.style.background = "#c5c5c5";
                item.style.color = "black";
            });
            ilink.style.background = "white";
            linkbtn.style.background = "white";
            ilink.style.color = "#00796b";
            linkbtn.style.color = "#00796b";
            sbar.style.background = "white";
            sbar.style.color = "black";
	    document.querySelector(".rotatedata").style.border="5px solid white";
	   gamemode.style.color="white";
        }
    });
}

hamberg.addEventListener("click", function () {
    if (hamberg.firstChild.className.includes("bars")) {
        gamemode.style.display = "none";
	leftpan.style.display="flex";
        leftpan.style.animation = "leftPan 2s linear forwards";
        document.querySelector(".headlink").style.animation =
            "linktxtop 2.5s 1.8s forwards";
        linkset.forEach(item => {
            item.style.animation = "linktxtop 2.5s 2.5s forwards";
        });
        hamberg.firstChild.className = "fas fa-times";
    } else {
        gamemode.style.display = "initial";
        hamberg.firstChild.className = "fas fa-bars";
	leftpan.style.display="none";
        linkset.forEach(item => {
            item.style.animation = "none";
            item.style.opacity = "0";
        });
        document.querySelector(".headlink").style.opacity = "0";
        document.querySelector(".headlink").style.animation = "none";
        leftpan.style.animation = "none";
        leftpan.style.width = "0";
    }
});
/*leftpan.style.animation="leftPan 2s 1.3s linear reverse forwards";
hamberg.firstChild.className="fas fa-bars";
document.querySelector(".headlink").style.animation="linktxtop 2.5s 1s reverse forwards";
linkset.forEach((item)=>{
item.style.animation="linktxtop 2.5s 0.5s reverse forwards";
});
setTimeout(function(){
leftpan.style.animation="none";
linkset.forEach((item)=>{
item.style.animation="none";
item.style.opacity="0";
});
document.querySelector(".headlink").style.animation="none";
return 0;
},2000);
*/

linkbox.forEach(function (itemlink) {
    itemlink.addEventListener("mouseover", () => {
        hovertext.style.display = "initial";
        var rectval = itemlink.getBoundingClientRect();
        datalistlink.innerHTML = itemlink.getAttribute("datalist");
        if (rectval.right < leftpan.clientWidth / 2) {
            hoverbox.style.left = rectval.left - 30 + "px";
            hovertext.style.top = rectval.bottom + 20 + "px";
        } else {
            hoverbox.style.left = rectval.left - 30 + "px";
            hovertext.style.top = parseInt(rectval.bottom, 10) + 20 + "px";
        }
    });
    itemlink.addEventListener("mouseout", function () {
        hovertext.style.display = "none";
    });
});

linkbtn.addEventListener("click", function () {
    link = ilink.value;
    if (link != "") {
        if (link.includes("list")) {
            divider = link.split("/watch");
            fullstring = `${divider[0]}/embed/watch${divider[1]}`;
            iframe.src = fullstring;
        } else {
            divider = link.split("=");
            fullstring = `https://www.youtube.com/embed/${divider[1]}${extendLink}`;
            iframe.src = fullstring;
        }
    } else {
        ilink.focus();
    }
});

ps.forEach(item => {
    item.addEventListener("click", function () {
        iframe.src = item.getAttribute("datalink");
    });
});

rslider.addEventListener("click", function () {
    resizer();
    rslider.title="double click to close";
    rslide.style.animation = "slideleft 1.4s linear forwards";
});

rslider.addEventListener("dblclick", function () {
    rslide.style.animation = "slideleft 3s linear  reverse forwards";
    rslider.title="click to open";
    setTimeout(function () {
        rslide.style.animation = "none";
    }, 1000);
});

sbar.addEventListener("mouseover", function () {
    smsg.style.display = "initial";
    setTimeout(function () {
        smsg.style.display = "none";
    }, 5000);
});

sbar.addEventListener("mouseout", function () {
    smsg.style.display = "none";
});

sbar.focus();

function call() {
    if (frame.style.animationName == "framer") {
        frame.style.animationName = "setframer";
        classer.classList.add("fa-angle-down");
        classer.classList.remove("fa-angle-up");
        setTimeout(function () {
            for (let i = 0; i < 100; i++) {
                rslide.style.top =
                    Math.floor(clicker.getBoundingClientRect().top - i) + "px";
            }
        }, 100);
    } else {
        frame.style.animationName = "framer";
        classer.classList.remove("fa-angle-down");
        classer.classList.add("fa-angle-up");

        setInterval(function () {
            // for (let i = 0; i < 100; i++) {

            rslide.style.top =
                Math.floor(clicker.getBoundingClientRect().top + 5) - 100 + "px";
        }, 100);
    }
}
frame.style.animationName = "none";
clicker.addEventListener("click", call);

function setAnim() {
    topdown.style.animation = "topdown 4s 2s linear forwards";
    ltxt.style.animation = "leftanim 1.6s 8s linear forwards";
    rtxt.style.animation = "rightanim 1.6s 8s linear forwards";
    txtall.style.display = "initial";
    txtall.style.animation = "textscroll 5s 12s ease forwards";
    textdata.style.animation =
        "textdata 6s 11s ease forwards, disc 5s 25s ease forwards";
    textdata1.style.animation =
        "rightanim 6s 24.5s ease forwards,opaq 5s 35s ease forwards";
    thank.style.animation = "pop 4s 36s linear forwards";
    setTimeout(function () {
        unsetAnim();
    }, 42000);
}

function unsetAnim() {
    topdown.style.animation = "topdown 3s 40s ease reverse forwards";
    txtall.style.display = "none";
    ltxt.style.animation = "none";
    rtxt.style.animation = "none";
    txtall.style.animation = "none";
    textdata.style.animation = "none";
    textdata1.style.animation = "none";
    thank.style.animation = "none";
    setTimeout(function () {
        topdown.style.animation = "none";
    }, 5000);
}

function runScript(e) {
    var elem = document.getElementById("search");
    var data = elem.value;
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        if (data == null || data == "" || data == " ") {
            elem.focus();
        } else if (data.toLowerCase() == "hello world") {
            setAnim();
        } else {
            window.open(`https://www.google.co.in/search?q=${data}`);
        }
        elem.value = "";
        elem.placeholder = 'Say "Hello World"...';
        return false;
    }
}

function sear() {
    var elem = document.getElementById("search");
    var data = elem.value;
    if (data == null || data == "" || data == " ") {
        elem.focus();
    } else if (data.toLowerCase() == "hello world") {
        setAnim();
    } else {
        window.open(`https://www.google.co.in/search?q=${data}`);
    }
    elem.value = "";

    elem.placeholder = 'Say "Hello World"...';
}

function resizer() {
    rslide.style.top =
        Math.floor(clicker.getBoundingClientRect().top - 2 * rslide.clientHeight) +
        "px";
    if (
        leftpan.getBoundingClientRect().right >= sbar.getBoundingClientRect().left
    ) {
        sbar.style.width = Math.floor(body.clientWidth / 4) + "px";
    } else {
        sbar.style.width = Math.floor(body.clientWidth / 3) + "px";
    }
}
window.addEventListener("resize", resizer);

resizer();
darkmode();
