function e(a, b) {
    this.i = b;
    this.speed = parseInt(a.getAttribute("data-speed"), 10) || 1;
    this.h = parseInt(a.getAttribute("data-start"), 10) || 500;
    this.endDelay = parseInt(a.getAttribute("data-end"), 10) || 2E3;
    this.l = "false" !== a.getAttribute("data-random");
    this.g = parseFloat(a.getAttribute("data-max")) || !1;
    this.j = "false" !== a.getAttribute("data-dltSpeed");
    this.f = a;
    this.b = 0;
    this.text = "";
    this.c = !1;
    this.a = function() {};
    var c = document.createElement("span");
    c.className = "cursor";
    c.innerHTML = "|";
    this.f.parentNode.appendChild(c);
    "true" == a.getAttribute("data-checkVisible") ? f(this) : this.loop()
}
e.prototype.loop = function() {
    var a = this;
    if (!(this.g && this.b > this.g)) {
        if (0 !== this.b) {
            var b = this.i[Math.floor(this.b - .5) % this.i.length];
            this.text = b.substring(0, this.text.length + (this.c ? -1 : 1));
            this.f.innerHTML = '<span class="wrap">' + this.text + "</span>";
            "" === this.text && this.c ? (this.c = !1, this.b += .5, b = this.h) : this.text !== b || this.c ? b = this.c && this.j ? 50 / this.speed : this.l ? (200 - 10 * Math.random()) / this.speed : 100 / this.speed : (b = this.endDelay, this.c = !0, this.b += .5)
        } else b = this.h, this.b += .5;
        setTimeout(function() { return a.loop() },
            b)
    }
};

function f(a) {
    a.a = g(a.f, function() {
        window.removeEventListener ? (removeEventListener("DOMContentLoaded", a.a, !1), removeEventListener("load", a.a, !1), removeEventListener("scroll", a.a, !1), removeEventListener("resize", a.a, !1)) : window.detachEvent && (detachEvent("onDOMContentLoaded", a.a), detachEvent("onload", a.a), detachEvent("onscroll", a.a), detachEvent("onresize", a.a));
        a.loop()
    });
    window.addEventListener ? (addEventListener("DOMContentLoaded", a.a, !1), addEventListener("load", a.a, !1), addEventListener("scroll", a.a, !1), addEventListener("resize", a.a, !1)) : window.attachEvent && (attachEvent("onDOMContentLoaded", a.a), attachEvent("onload", a.a), attachEvent("onscroll", a.a), attachEvent("onresize", a.a));
    a.a()
}

function g(a, b) {
    var c = !1;
    return function() {
        var d = a.getBoundingClientRect();
        d = 0 <= d.top && 0 <= d.left && d.bottom <= (window.innerHeight || document.documentElement.clientHeight) && d.right <= (window.innerWidth || document.documentElement.clientWidth);
        d != c && (c = d, "function" == typeof b && b())
    }
}
window.onload = function() {
    for (var a = document.getElementsByClassName("typeWriter"), b = 0; b < a.length; b++) {
        var c = a[b].getAttribute("data-text");
        c && new e(a[b], JSON.parse(c))
    }
    a = document.createElement("style");
    a.type = "text/css";
    a.innerHTML = ".cursor {color:inherit;position:relative;font:inherit;color:inherit;line-height:inherit;animation: Cursor 1s infinite;}@keyframes Cursor{0%{opacity: 1;}50%{opacity: 0;}100%{opacity: 1;}};";
    document.body.appendChild(a)
};