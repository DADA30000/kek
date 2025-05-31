var i = 1;
function right() {
  if (i != 3) {
    if (document.getElementById("left").style.opacity == 0) { document.getElementById("left").classList.remove('hidden'); }
    var dad_current = document.getElementById("dad" + i);
    var dad_next = document.getElementById("dad" + (i + 1));
    dad_current.style.transform = "translateX(-100%)";
    dad_next.style.transform = "translateX(0)";
    i++
    if (i == 3) {
      document.getElementById("right").classList.add('hidden');
    }
  }
}
function left() {
  if (i != 1) {
    if (document.getElementById("right").style.opacity == 0) { document.getElementById("right").classList.remove('hidden'); }
    var dad_current = document.getElementById("dad" + i);
    var dad_next = document.getElementById("dad" + (i - 1));
    dad_current.style.transform = "translateX(+100%)";
    dad_next.style.transform = "translateX(0)";
    i--
    if (i == 1) {
      document.getElementById("left").classList.add('hidden');
    }
  }
}
