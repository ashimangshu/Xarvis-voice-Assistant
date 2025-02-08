let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GN";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();

    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 17) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

// window.addEventListener('load', () => {
//     wishMe();
// });

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    let transcript = event.results[0][0].transcript; // Always take the first result
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});

function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";

    if (message.includes("hello ") || message.includes("hello jarvis") || message.includes("hey ") ||message.includes("hey jarvis ") ) {
        wishMe();
        speak("how can I help you?");
    } 
    else if (message.includes("who are you")) {
        speak("I am Xarvis, created by Ashimangshu.");
    } 
    else if (message.includes("open youtube")) {
        speak("Opening YouTube");
        window.open("https://www.youtube.com/", "_blank");
    } 
    else if (message.includes("open facebook")) {
        speak("Opening Facebook");
        window.open("https://www.facebook.com/", "_blank");
    } 
    else if (message.includes("open google")) {
        speak("Opening Google");
        window.open("https://www.google.co.in/", "_blank");
    } 
    else if (message.includes("open leetcode")) {
        speak("Opening LeetCode problems");
        window.open("https://leetcode.com/problemset/", "_blank");
    } 
    else if (message.includes("open chatgpt")) {
        speak("Opening ChatGPT");
        window.open("https://chatgpt.com/", "_blank");
    } 
    else if (message.includes("open instagram")) {
        speak("Opening Instagram");
        window.open("https://www.instagram.com/", "_blank");
    } 
    else if(message.includes("open calculator"))
    {
        speak("opening calculator");
        window.open("calculator://");
    }
    // else if (message.includes("open vscode")) {
    //     speak("Opening VS Code");
    //     window.location.href = "vscode://file/"; // Works if VS Code is installed
    // } 
    // else if (message.includes("open word")) {
    //     speak("Opening Microsoft Word");
    //     window.location.href = "ms-word://"; // Works if MS Word is installed
    // } 
    // else if (message.includes("open excel")) {
    //     speak("Opening Microsoft Excel");
    //     window.location.href = "ms-excel://"; // Works if MS Excel is installed
    // } 
    // else if (message.includes("open powerpoint")) {
    //     speak("Opening Microsoft PowerPoint");
    //     window.location.href = "ms-powerpoint://"; // Works if MS PowerPoint is installed
    // }
    else if(message.includes("time"))
    {
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"});
        speak(time);
    }
    else if(message.includes("date"))
    {
            let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"});
            speak(date);
    }
    else {
        let finalText = "This is what I found on the internet regarding " + message.replace(/xarvis|jarvis|jarvish/gi, "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace(/xarvis|jarvis|jarvish/gi, "")}`, "_blank");
    }
}
