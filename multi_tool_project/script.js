
// -------- Currency Converter ----------
async function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  if (!amount) return;
  const rates = { USD: 1, INR: 83, EUR: 0.9 };
  const inUSD = amount / rates[from];
  const converted = inUSD * rates[to];
  document.getElementById("result").innerText = converted.toFixed(2) + " " + to;
}
// -------- Clock ----------
setInterval(() => {
  const c = document.getElementById("clock");
  if (c) c.innerText = new Date().toLocaleTimeString();
}, 1000);
// -------- Alarm ----------
let alarmTimeSet = null;
function setAlarm() {
  alarmTimeSet = document.getElementById("alarmTime").value;
  document.getElementById("alarmStatus").innerText = "Alarm Set: " + alarmTimeSet;
}
setInterval(() => {
  if (!alarmTimeSet) return;
  const now = new Date();
  const current = now.toTimeString().slice(0,5);
  if (current === alarmTimeSet) { alert("Alarm Ringing!"); alarmTimeSet = null; }
}, 1000);
// -------- Stopwatch ----------
let swInterval, ms = 0;
function startStopwatch() {
  if (swInterval) return;
  swInterval = setInterval(() => {
    ms++;
    const s = Math.floor(ms/100)%60;
    const m = Math.floor(ms/6000)%60;
    const h = Math.floor(ms/360000);
    document.getElementById("stopwatch").innerText =
      `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  },10);
}
function pauseStopwatch(){ clearInterval(swInterval); swInterval=null; }
function resetStopwatch(){ pauseStopwatch(); ms=0; document.getElementById("stopwatch").innerText="00:00:00"; }
// -------- Timer ----------
let timer;
function startTimer(){
  let t = parseInt(document.getElementById("timerInput").value);
  clearInterval(timer);
  document.getElementById("timerDisplay").innerText = t;
  timer = setInterval(()=>{
    t--;
    document.getElementById("timerDisplay").innerText = t;
    if(t<=0){ clearInterval(timer); alert("Time Up!"); }
  },1000);
}
// -------- Calculator ----------
function press(v){ document.getElementById("calc").value += v; }
function clearCalc(){ document.getElementById("calc").value = ""; }
function calculate(){
  try{ document.getElementById("calc").value = eval(document.getElementById("calc").value); }
  catch{ alert("Invalid Expression"); }
}

