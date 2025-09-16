const commandInput = document.getElementById("commandInput");
const output = document.getElementById("output");

const responses = {
  about: "I am Mark, a passionate Student with a love for Programming, innovation, and games. I am currently a student at DeKUT pursuing Computer Science.",
  skills: "Frontend: JavaScript, HTML, CSS, React, Typescript\n\nBackend: Node.js, Prolog, Rust, Python, Java, Go\n\nTechnologies: Git, Github, Linux\n\nOthers: Neural Networks, Computer Networks, Data Structures and Algorithms, Data Analysis",
  projects: "1. Portfolio Website\n2. Travel booking app\n3. Calculator\n4. Social Media app\n5. Chat and Trading Bots\n 6. AI Subprogram System for farmers\n",
  contact: "Email: kiritim48@gmail.com\nX: x.com/Kiriti_Tech/\nGitHub: github.com/Souketsu-Punk"
};

commandInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = commandInput.value.trim().toLowerCase();
    const response = responses[command];
    const outputBlock = document.createElement("div");
    outputBlock.className = response ? "output-success" : "output-error";

    
    const promptLine = document.createElement("div");
    promptLine.innerHTML = `<span>&gt; ${command}</span>`;
    outputBlock.appendChild(promptLine);

  
    const responseContainer = document.createElement("div");
    outputBlock.appendChild(responseContainer);


    output.appendChild(outputBlock);
    commandInput.value = "";
    output.scrollTop = output.scrollHeight;

    
    const message = response
      ? response
      : "Unknown command. Try 'about', 'skills', 'projects', or 'contact'.";

    typeText(responseContainer, message, 20); 
  }
});

function typeText(container, text, speed = 15) {
  let i = 0;
  const fullText = text;

  function typeChar() {
    if (i < fullText.length) {
      const char = fullText[i];
      container.innerHTML += char === "\n" ? "<br>" : char;
      i++;
      setTimeout(typeChar, speed);
    }
  }

  typeChar();
}
