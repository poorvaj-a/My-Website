window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// about constellations 
function change_image() {
  var x = document.getElementById('changingimage')
  var str = document.getElementById('changingimage').src;
  if (str.includes("sirius.png")) {
      x.src = "../img/nebula.png";
  } else if (str.includes("nebula.png")) {
      x.src = "../img/canismin.png";
  } else if (str.includes("canismin.png")) {
      x.src = "../img/canismaj.png";
  } else if (str.includes("canismaj.png")) {
      x.src = "../img/orion.png";
  } else if (str.includes("orion.png")) {
      x.src = "../img/sirius.png";
  } else {
      x.src = "";
  }
}

// forms
var dict = {};

function Form() {
    var A = document.forms["skillForm"]["Name"].value;
    if (A == "") {
        document.forms["skillForm"]["Name"].value = prompt("Did u forgot to put Your Name? If not u can put Anonymous.\(O.O\)");
        A = document.forms["skillForm"]["Name"].value;
    }
    var B = document.forms["skillForm"]["skill"].value;
    if (B == "") {
        document.forms["skillForm"]["skill"].value = prompt("Did u forgot to put it? If not u can put None. :) ");
        B = document.forms["skillForm"]["skill"].value;
    }
    var l = document.getElementById("dropdown");
    var C = l.options[l.selectedIndex].text;
    var check = "ThisIsFormData";
    dict[A] = { B, C, check };
    document.getElementById('InsertHere').innerHTML += '<tr><td class = "pl-5 text-black"> ' + A + '</td><td class="pl-5">' + B +
        '</td><td class="pl-5">' + C + '</td></tr>';
    document.getElementById("Name").value = "";
    document.getElementById("skill").value = "";
    return false;
}
