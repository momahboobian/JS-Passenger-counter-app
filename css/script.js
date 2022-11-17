let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count++;
  countEl.textContent = count;
}
function save() {
  if (count > 0) {
    let countStr = " " + count + ", ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = count;
  } else {
    countEl.textContent = "Nothing to save";
  }
}
