let w = +prompt("Kvadrato krastines ilgis?:");
let square = new Array(w);
let i = 0;
let z = 0;
for (i; i < w; i++) {
  square[i] = new Array(w);
  for (z; z < w; z++) {
    square[i][z] = "*";
  }
}
let a = 0;
for (a; a < square.length; a++) console.log(square[a].join(""));
