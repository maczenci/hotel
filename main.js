var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


function frissitsdASzemelyeket(){
  let szoba_fajta = document.getElementById("szoba").value;
  let szemelyek_szama = document.getElementById("szam").value;
  let napok_szama = document.getElementById("napok").value;
  let osszeg = document.getElementById("osszeg"); 

  const szobaarak = [2400, 5500, 6300, 12600];

  osszeg.innerHTML = "Ár: " + szobaarak[parseInt(szoba_fajta)-1] * szemelyek_szama * napok_szama + " Ft";
}

function foglalasRogzitve(){
  if(document.getElementById("szoba").value && document.getElementById("szam").value && document.getElementById("napok").value){
    alert('Foglalását rögzítettük.\nKöszönjük, hogy minket választott!');
  }
}

window.onload = frissitsdASzemelyeket();