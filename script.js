var toilet = document.getElementById("toilet");
var place;

var number;
var coordinates = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var monster = document.createElement("img");
monster.src = "t.png";
monster.id = "monster";
monster.style.height = "500px";
monster.style.width = "500px";
monster.style.position = "absolute";
monster.style.transformStyle = "preserve-3d";
document.getElementById("maze").appendChild(monster);
for (var x = 0; x < coordinates[0].length; x++) {

  for (var z = 0; z < coordinates.length; z++) {
    if (coordinates[z][x] > 0) {
      toilet = toilet.cloneNode(true);
      toilet.style.position = "absolute";
      toilet.style.height = "500px";
      toilet.hidden = false;
      toilet.style.transformStyle = "preserve-3d";
      toilet.style.width = "500px";
      toilet.style.transformOrigin = "0px 0px 0px";
      toilet.style.perspective = "6000px";
      toilet.style.transform =
        "translate3d(" + (x * 500) + "px, 0px, " + (z * 500) + "px)";
      document.getElementById("maze").appendChild(toilet);
    }
  }
}
maze.style.rotate = "1 0 0 180deg";
maze.style.translate = "0px 1000px -2000px";
function spawn() {
	document.getElementById("monster").style.transform =
      "translate3d(" +
      Math.floor(Math.random() * 20) * 500 +
      "px,  0px, " +
      Math.floor(Math.random() * 10) * 500 +
      "px)";
  setTimeout(() => {
    

    spawn();
  }, 10000);
}
spawn();
var dmatrix, tmatrix;
function isCollide(a, b) {
  dmatrix = new WebKitCSSMatrix(getComputedStyle(a).transform);
  tmatrix = new WebKitCSSMatrix(getComputedStyle(b).transform);
  if (tmatrix.m41 ===(dmatrix.m41) && tmatrix.m43 === (dmatrix.m43)) {
		console.log(tmatrix.m41);
		console.log(tmatrix.m43);
    return true;
  } else return false;
}
var a = 500;
var b = 0;
var y = 0;
var t1 = 0;
var c = 1500;
var trues = 0;
document.getElementById("dummy").style.transform =
  "translate3d( " + c + "px, " + y + "px, " + a + "px) perspective("+(a * 2)+ "px)";
document.getElementById("maze").style.transform =
  "translate3d(" + c + "px, " + y + "px, " + a + "px) perspective("+(a * 2)+ "px)";
var rotate = 0;
var toilets = Array.from(document.getElementsByClassName("toilet"));
document.addEventListener("keydown", (e) => {
  trues = 0;
  document.body.style.perspective = "5000px";
  if (e.key == "ArrowUp") {
    e.preventDefault();
    a += 500;
    document.getElementById("maze").transformOrigin =
      c + "px " + y + "px " + a + "px";
    document.getElementById("dummy").style.transform =
      "translate3d(" +
      c +
      "px, " +
      y +
      "px, " +
      a +
      "px) perspective("+(a * 2)+ "px) rotateY(" +
      rotate +
      "deg)";
    document.getElementById("maze").style.transform =
      "translate3d(" +
      c +
      "px, " +
      y +
      "px, " +
      a +
      "px) perspective("+(a * 2)+ "px) rotateY(" +
      rotate +
      "deg)";
    for (var i = 0; i < toilets.length; i++) {
      console.log(isCollide(document.getElementById("dummy"), toilets[i]));

      if (isCollide(document.getElementById("dummy"), toilets[i]) == true) {
        trues++;
      }
    }
    if (trues != 0) 
	{
      a -= 500;
      document.getElementById("dummy").style.transform =
        "translate3d(" +
        c +
        "px, " +
        y +
        "px, " +
        a +
        "px) perspective(" +
        (a * 2) +
        "px) rotateY(" +
        rotate +
        "deg)";
      document.getElementById("maze").style.transform =
        "translate3d(" +
        c +
        "px, " +
        y +
        "px, " +
        a +
        "px) perspective(" +
        (a * 2) +
        "px) rotateY(" +
        rotate +
        "deg)";
    
    }
  } else if (e.key == "ArrowDown") {
    e.preventDefault();
a -= 500
    document.getElementById("maze").transformOrigin =
      c + "px " + y + "px " + a + "px";
    document.getElementById("dummy").style.transform =
      "translate3d(" +
      c +
      "px, " +
      y +
      "px, " +
      a +
      "px) perspective("+(a * 2)+ "px) rotateY(" +
      rotate +
      "deg)";
    document.getElementById("maze").style.transform =
      "translate3d(" +
      c +
      "px, " +
      y +
      "px, " +
      a +
      "px) perspective("+(a * 2)+ "px) rotateY(" +
      rotate +
      "deg)";
    for (var i = 0; i < toilets.length; i++) {
      console.log(isCollide(document.getElementById("dummy"), toilets[i]));
      if (isCollide(document.getElementById("dummy"), toilets[i]) == true) {
        trues++;
      }
    }
    if (trues != 0) {
      a += 500;
      document.getElementById("dummy").style.transform =
        "translate3d(" +
        c +
        "px, " +
        y +
        "px, " +
        a +
        "px) perspective(" +
        (a * 2) +
        "px) rotateY(" +
        rotate +
        "deg)";
      document.getElementById("maze").style.transform =
        "translate3d(" +
        c +
        "px, " +
        y +
        "px, " +
        a +
        "px) perspective(" +
        (a * 2) +
        "px) rotateY(" +
        rotate +
        "deg)";
    }
  }
  if (e.key == "a") {
    e.preventDefault();
    rotate += 10;
    document.getElementById("maze").transformOrigin =
      c + "px " + y + "px " + a + "px";
    document.getElementById("dummy").style.transform =
      "translate3d(" +
      c +
      "px, " +
      y +
      "px, " +
      a +
      "px) perspective("+(a * 2)+ "px) rotateY(" +
      rotate +
      "deg)";
    document.getElementById("maze").style.transform =
      "translate3d(" +
      c +
      "px, " +
      y +
      "px, " +
      a +
      "px) perspective("+(a * 2)+ "px) rotateY(" +
      rotate +
      "deg)";
  }
  if (e.key == "d") {
    e.preventDefault();
    rotate -= 10;
    document.getElementById("maze").transformOrigin =
      c + "px " + y + "px " + a + "px";
    document.getElementById("dummy").style.transform =
      "translate3d(" +
      c +
      "px, " +
      y +
      "px, " +
      a +
      "px) perspective("+(a * 2)+ "px) rotateY(" +
      rotate +
      "deg)";
    document.getElementById("maze").style.transform =
      "translate3d(" +
      c +
      "px, " +
      y +
      "px, " +
      a +
      "px) perspective("+(a * 2)+ "px) rotateY(" +
      rotate +
      "deg)";
  
  } else if (e.key == "ArrowLeft") {
    e.preventDefault();
    c -= 500;
    document.getElementById("maze").transformOrigin =
      c + "px " + y + "px " + a + "px";
    document.getElementById("dummy").style.transform =
      "translate3d(" +
      c +
      "px, " +
      y +
      "px, " +
      a +
      "px) perspective("+(a * 2)+ "px) rotateY(" +
      rotate +
      "deg)";
    document.getElementById("maze").style.transform =
      "translate3d(" +
      c +
      "px, " +
      y +
      "px, " +
      a +
      "px) perspective("+(a * 2)+ "px) rotateY(" +
      rotate +
      "deg)";
    for (var i = 0; i < toilets.length; i++) {
      console.log(isCollide(document.getElementById("dummy"), toilets[i]));

      if (isCollide(document.getElementById("dummy"), toilets[i]) == true) {
        trues++;
      }
    }
    if (trues != 0) {
      c += 500;
      document.getElementById("dummy").style.transform =
        "translate3d(" +
        c +
        "px, " +
        y +
        "px, " +
        a +
        "px) perspective(" +
        (a * 2) +
        "px) rotateY(" +
        rotate +
        "deg)";
      document.getElementById("maze").style.transform =
        "translate3d(" +
        c +
        "px, " +
        y +
        "px, " +
        a +
        "px) perspective(" +
        (a * 2) +
        "px) rotateY(" +
        rotate +
        "deg)";
    
    }
  } else if (e.key == "ArrowRight") {
    e.preventDefault();
    c += 500
    document.getElementById("maze").transformOrigin =
      c + "px " + y + "px " + a + "px";
    document.getElementById("dummy").style.transform =
      "translate3d(" +
      c +
      "px, " +
      y +
      "px, " +
      a +
      "px) perspective("+(a * 2)+ "px) rotateY(" +
      rotate +
      "deg)";
    document.getElementById("maze").style.transform =
      "translate3d(" +
      c +
      "px, " +
      y +
      "px, " +
      a +
      "px) perspective("+(a * 2)+ "px) rotateY(" +
      rotate +
      "deg)";
    for (var i = 0; i < toilets.length; i++) {
      console.log(isCollide(document.getElementById("dummy"), toilets[i]));

      if (isCollide(document.getElementById("dummy"), toilets[i]) == true) {
        trues++;
      }
    }
    if (trues != 0) {
      c -= 500;
      document.getElementById("dummy").style.transform =
        "translate3d(" +
        c +
        "px, " +
        y +
        "px, " +
        a +
        "px) perspective(" +
        (a * 2) +
        "px) rotateY(" +
        rotate +
        "deg)";
      document.getElementById("maze").style.transform =
        "translate3d(" +
        c +
        "px, " +
        y +
        "px, " +
        a +
        "px) perspective(" +
        (a * 2) +
        "px) rotateY(" +
        rotate +
        "deg)";
				
    }
  }
  if (e.key == " ") {
    e.preventDefault();
    place = document.createElement("div");
    place.style.backgroundImage = "url(toiletpaper.png)";
    place.style.position = "absolute";
    place.style.height = "100px";
    place.style.transformStyle = "preserve-3d";
    place.style.width = "100px";
    place.style.transform =
      "translate3d(" +
      c +
      "px, " +
      y +
      "px, " +
      a +
      "px) perspective(" +
      (a * 2) +
      "px) rotateY(" +
      rotate +
      "deg)";
    document.getElementById("maze").appendChild(place);
  }
});
