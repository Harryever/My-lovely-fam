var names = ["Kohana", "Kavita", "Sumit", "Aryan", "Deepti" , "My lovely fam"];

var images = [
  "Kohana.jpg",
  "Mamma.jpg",
  "pappa.jpg",
  "Aryan.jpg",
  "masi.jpg",
  "My fam.jpg"
];
var i = 0;
function nextslide() {
  document.getElementById("reason").innerHTML = names[i];
  document.getElementById("album").src = images[i];
  i++;
  if (i == 6) {
    i = 0;
  }
}
