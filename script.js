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
  projects   - Explore featured backend architectures and engineering showcases
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
1. Auth Service - Security Microservice
   - Tech: Java 17, Spring Boot, Spring Data JPA, JWT, BCrypt, H2.
   - Info: Enterprise authentication and authorization microservice featuring stateless JWT handling, Spring Data JPA, and BCrypt password hashing.

2. Cloud-Native Status Monitor
   - Tech: Java 21, Spring Boot 3, Spring WebFlux, Reactive Programming, H2.
   - Info: Lightweight, non-blocking microservice utilizing WebFlux to asynchronously monitor external API health and uptime with high concurrency.

3. Stateless SaaS Portal
   - Tech: Java 17, Spring Boot 3, Spring Security 6, OAuth2 Client.
   - Info: Delegated authentication REST API implementing OAuth2 Authorization Code Grant (GitHub/Google) without local password storage.

4. Real-Time Brute Force Threat Detector
   - Tech: Java 17, Apache Kafka, Jackson, SLF4J.
   - Info: Stateful stream processing engine that correlates real-time auth log streams to detect and mitigate brute-force cyber attacks dynamically.

5. Legacy to Cloud Migration Pipeline
   - Tech: Java 17, Spring Boot 3, Spring Batch 5, H2.
   - Info: Chunk-oriented ETL pipeline processing large datasets transactionally and efficiently with memory optimization and rollback safety.

6. Linux Telemetry & Shell API
   - Tech: Java 17, Spring Boot 3, ProcessBuilder, POSIX Shell.
   - Info: System telemetry microservice bridging the JVM and Linux kernel (/proc) to expose hardware metrics and dynamic ASCII rendering via REST.
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
            window.open('https://drive.google.com/file/d/1a6XsiWU_STqeCzy3p9f7bjpFzAngNUBC/view?usp=sharing', '_blank');
            break;
        case 'whatsapp':
            printToTerminal("Redirecting to WhatsApp...");
            window.open('https://wa.me/48511818966', '_blank');
            break;
        case 'github':
            printToTerminal("Opening GitHub profile...");
            window.open('https://github.com/jose-casquero', '_blank');
            break;
        case 'linkedin':
            printToTerminal("Opening LinkedIn profile...");
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
