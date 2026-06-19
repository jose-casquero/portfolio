const inputField = document.getElementById('cmd-input');
const outputArea = document.getElementById('output');

const BOOT_SEQUENCE = `
<span class="ascii-art">

</span>
System initialization complete.
Welcome to my interactive portfolio.
Type 'help' to see available commands.
`;

const COMMANDS = {
    help: `
Available commands:
  about      - Display brief information about me
  skills     - List technical skills and stack
  projects   - View my latest backend projects (Kafka, Spring Security, etc.)
  cv         - Download / View my Resume (PDF)
  whatsapp   - Open a direct WhatsApp chat with me
  github     - Redirect to my GitHub profile
  linkedin   - Redirect to my LinkedIn profile
  clear      - Clear the terminal screen
`,
    about: `
Senior Software Engineer & Functional Analyst with extensive experience designing, developing, and maintaining enterprise-grade applications in international environments. Unique hybrid profile combining strong technical expertise in Java (Spring Boot), Angular, and BPM-driven architectures with solid experience as a Process Consultant.
Expert in bridging the gap between business needs and technical execution. Proven track record in business process optimization, BPM modeling, and UML for functional analysis. Adept at gathering requirements, drafting comprehensive functional specifications, and mapping them into agile User Stories.
Experienced in backend architecture, REST API design, and workflow automation. Recognized for driving efficiency in distributed teams and delivering scalable, high-performance solutions across public administration, finance, telecommunications, and enterprise software sectors.
`,
    skills: `
Backend: Java, Spring Boot, J2EE, .NET, Python (Django / Flask), Node.js, PHP
Frontend: Angular (8+), JavaScript, HTML5, Bootstrap, Vue.js
Databases: SQL Server, MySQL, PostgreSQL, MongoDB, IBM DB2
BPM / Workflow: Bizagi, BonitaSoft, ARIS
DevOps & Tools: Linux, Jenkins, Git, Jira, Docker, Trello
Cloud & Deployment: Heroku, Render
Testing: JUnit, Jest
Architecture: REST APIs, Microservices, BPM systems
Methodologies: Agile, Scrum, Waterfall, Lean
`,
    projects: `
1. Brute Force Threat Detector
   - Tech: Java, Apache Kafka, Jackson.
   - Info: Stateful stream processing engine that correlates real-time auth logs to block attacks.

2. Stateless SaaS Portal
   - Tech: Spring Boot, Spring Security 6, OAuth2.
   - Info: Delegated authentication system (GitHub/Google) eliminating local password storage.

3. Legacy to Cloud Migration Pipeline
   - Tech: Spring Boot, Spring Batch, H2.
   - Info: Chunk-oriented ETL pipeline processing large datasets transactionally and efficiently.
`
};

window.onload = () => {
    printToTerminal(BOOT_SEQUENCE);
    inputField.focus();
};

document.addEventListener('click', () => {
    inputField.focus();
});

inputField.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const cmd = inputField.value.trim().toLowerCase();
        if (cmd) {
            processCommand(cmd);
        }
        inputField.value = '';
    }
});

function processCommand(cmd) {
    printToTerminal(`<span class="prompt">visitor@portfolio:~$</span><span class="command-echo">${cmd}</span>`);

    switch (cmd) {
        case 'help':
        case 'about':
        case 'skills':
        case 'projects':
            printToTerminal(COMMANDS[cmd]);
            break;
        case 'cv':
            printToTerminal("Opening Resume...");
            window.open('https://drive.google.com/file/d/11UhfCb5Ue1NCKK7rEse4T_5ipNWxC3_N/view?usp=sharing', '_blank');
            break;
        case 'whatsapp':
            printToTerminal("Redirecting to WhatsApp...");
            window.open('https://wa.me/34619490746', '_blank');
            break;
        case 'github':
            printToTerminal("Opening GitHub profile...");
            window.open('https://github.com/jj-casquero', '_blank');
            break;
        case 'linkedin':
            printToTerminal("Opening LinkedIn profile...");
            // Replace with your LinkedIn URL
            window.open('https://www.linkedin.com/in/jose-c-95b5b61b5/', '_blank');
            break;
        case 'clear':
            outputArea.innerHTML = '';
            break;
        default:
            printToTerminal(`<span class="error">bash: ${cmd}: command not found. Type 'help' to see available commands.</span>`);
    }
    scrollToBottom();
}

function printToTerminal(htmlContent) {
    const line = document.createElement('div');
    line.className = 'output-line';
    line.innerHTML = htmlContent;
    outputArea.appendChild(line);
    scrollToBottom();
}

function scrollToBottom() {
    const terminal = document.getElementById('terminal');
    terminal.scrollTop = terminal.scrollHeight;
}
