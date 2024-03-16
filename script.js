const textarea = document.querySelector("textarea"),
      voiceList = document.querySelector("select"),
      speechBtn = document.querySelector("button");

let synth = window.speechSynthesis;

function populateVoiceList() {
 const voices = synth.getVoices();
 voiceList.innerHTML = voices.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join('');
}

synth.addEventListener("voiceschanged", populateVoiceList);

function textToSpeech(text) {
 const utterance = new SpeechSynthesisUtterance(text);
 const selectedVoice = voiceList.value;
 const voices = synth.getVoices();
 utterance.voice = voices.find(voice => voice.name === selectedVoice);
 synth.speak(utterance);
}

speechBtn.addEventListener("click", e => {
 e.preventDefault();
 if (textarea.value !== "") {
    textToSpeech(textarea.value);
 }
});

populateVoiceList();
