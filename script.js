const text = document.querySelector("#text");
const form = document.querySelector("form");

form.onsubmit = (e) => {
  e.preventDefault();
  var utt = new SpeechSynthesisUtterance(text.value || "Enter some text to say!");
  utt.voice = speechSynthesis.getVoices()[2];
  speechSynthesis.speak(utt);
};