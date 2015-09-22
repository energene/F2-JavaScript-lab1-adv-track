var a = 1;
var b = 2;
var c = 33;
var e = 205;

var d = [e, a, c, b];
console.log(d);

d.sort(function(x, y) {
  return(x - y);
});

console.log(d);
