let display = document.getElementById("display");

function press(v) {
  display.value += v;
}

function clearAll() {
  display.value = "";
}

function toggleSign() {
  if (!display.value) return;
  display.value = String(-parseFloat(display.value));
}

function percent() {
  if (!display.value) return;
  display.value = parseFloat(display.value) / 100;
}

function equal() {
  try {
    display.value = eval(display.value || "0");
  } catch {
    display.value = "Error";
  }
}
