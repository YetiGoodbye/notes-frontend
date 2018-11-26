document.addEventListener("DOMContentLoaded", () => {
  var div = document.createElement("div");
  div.innerText = "Hello!";
  document.body.appendChild(div);
});

var a = {
  a: 1,
  b: 2,
};

var c = {
  ...a,
  b: 3,
};

console.log (c);

