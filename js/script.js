// Scroll suave ao clicar no menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const id = link.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const translations = {

    en: {
        name: "Luis Tieres",
        role: "Systems Engineering | Developer",

        menu_about: "About",
        menu_education: "Education",
        menu_experience: "Experience",
        menu_projects: "Projects",
        menu_Skills:"Skills",
        menu_net: "Network",
        hobbies: "Others",
        

       about_title: "Who is Luis?",
        about_short: "Systems Engineering Student at UFMG | Backend Developer (Java & Spring Boot) | Electrical Technician (CEFET-MG) | Marathon Runner",

        summary_title: "Professional Summary",

        summary_p1: "I am a Systems Engineering student at UFMG and an Electrical Technician from CEFET-MG, with early experience in IT applied to photovoltaic power plants.",

        summary_p2: "During my academic journey, I participated in two scientific research projects focused on full stack software development, as well as completed an internship in industrial automation, working with PLC programming, HMIs, SCADA systems and Linux environments. These experiences strengthened my technical, analytical and problem-solving skills.",

        summary_p3: "I have hands-on experience in software development, working across the full development lifecycle, including database modeling and administration (MySQL and PostgreSQL), as well as backend and frontend development using Java (Spring Boot), Python (including PyQt6), C, C++, TypeScript, JavaScript and HTML/CSS.",

        summary_p4: "I also participated in an academic exchange program at Kajaani University of Applied Sciences in Finland, where I attended courses fully taught in English, focused on computer science and digital development. To prepare for this experience, I dedicated myself intensively to learning English and achieved a high level of proficiency within one year. I have recently also started studying French.",

        summary_p5: "Outside of technology, I am a long-distance runner and achieved the position of best Brazilian athlete at the Helsinki Marathon 2025. My profile is marked by dedication, resilience and proactivity, and I constantly seek to improve my technical and interpersonal skills.",
        
        
        educationTitle: "Education",

        edu1: "Technical Degree in Electrotechnics – CEFET-MG (2018 – 2020)",
        edu2: "Bachelor’s Degree in Systems Engineering – UFMG (2022 – 2027)",
        edu3: "International Exchange Program in Computer Science – Kajaani University of Applied Sciences, Finland (2025)",
    
        experience: "Experience",

        estagio1: "Automation Intern – Snef Brasil",
        estagio2: "Developer Intern – NetAdmin Software",
        estagio3: "IT Intern – Solar Power Plant (Solar Energia)",
        ics: "Undergraduate Researcher – Software Development | HC-UFMG",

        netadmin1: "Development of automated routines and scheduled processes using SQL and programming languages",
        netadmin2: "Implementation and maintenance of integrations with Web APIs",
        netadmin3: "Performing queries, insertions, and updates in relational databases (SQL)",
        netadmin4: "Support in the technical documentation of system modules and functionalities",

        snef1: "Developed and supported systems for industrial environments",
        snef2: "Implemented SCADA systems and HMI interfaces",
        snef3: "Worked with Linux-based environments and automation tools",
        snef4: "Produced technical documentation and supported production systems",

        hc1: "Developed a hospital management desktop system using Python and PyQt6",
        hc2: "Designed and integrated MySQL and PostgreSQL databases",
        hc3: "Implemented data synchronization and system communication via REST APIs",
        hc4: "Gained hands-on experience in real-world healthcare systems",

        solar1: "Monitored photovoltaic systems and supported plant operations",
        solar2: "Performed basic electrical measurements and system analysis",
        solar3: "Contributed to technical documentation and performance reports",
        solar4: "Collaborated in problem-solving within an industrial environment",
        projetos: "Projects",

        
        projectsTitle: "Projects",

        proj1_title: "Hospital Bed Management System",
        proj1_desc: "Desktop application developed with Python (PyQt6) for hospital bed management, integrating MySQL and PostgreSQL databases and REST APIs.",

        proj2_title: "Robber Game",
        proj2_desc: "2D game developed with Unity and C#, where the player controls a robber attempting to steal items without being detected, focusing on game logic and interaction.",

        proj3_title: "Ritmo",
        proj3_desc: "Responsive web marketplace for sports event registration, allowing users to register for multiple races through a unified platform. Designed with scalability and user experience in mind.",
    

        languages_title: "Languages",
        habilidades: "Softwares",
        languages_skills: "Skills",
        Run: "Running",
        runnn1: "Best Brazilian in the Helsinki marathon",
        runnn2: "Third overall in the Duque de Caxias Race",
        runnn3: "Breakthrough athlete 2019",
        Events: "Events",
        event1: "PyCon Finland 2025",
        event3: "Polyglot Meeting",
        Books: "Books",
        book1:"Brave New World",
        book2:"The richest man in Babylon",
        book3:"Posthumous Memoirs of Brás Cubas",
        book4:"Space Trilogy",
        lang_en: "English",
        lang_fi: "Finnish",
        cert1:"Electrical Technician (CEFET-MG) 2021",
        cert2:"Science Innovation (Software Development) 2024",
        cert3:"Science Innovation (Software Development) 2025",
        cert4:"Exchange Program (KAMK University) 2025",
        contact_title: "Contact",
        cert: "Cerifications"
    },

    pt: {
        name: "Luis Tieres",
        role: "Engenharia de Sistemas | Desenvolvedor",

        menu_about: "Sobre",
        menu_education: "Formação",
        menu_experience: "Experiência",
        menu_projects: "Projetos",
        menu_Skills:"Habilidades",
        menu_contact: "Contato",

        about_title: "Quem é Luis?",
        about_short: "Estudante de Engenharia de Sistemas na UFMG | Desenvolvedor Backend (Java & Spring Boot) | Técnico em Eletrotécnica (CEFET-MG) | Maratonista",

        summary_title: "Resumo Profissional",

        summary_p1: "Sou estudante de Engenharia de Sistemas na UFMG e Técnico em Eletrotécnica pelo CEFET-MG, com experiência inicial em TI aplicada a usinas fotovoltaicas.",

        summary_p2: "Durante minha trajetória acadêmica, participei de dois projetos de iniciação científica voltados ao desenvolvimento full stack, além de realizar um estágio em automação industrial, atuando com programação de CLPs, IHMs, sistemas supervisórios SCADA e ambientes Linux. Essas experiências fortaleceram minhas habilidades técnicas, analíticas e de resolução de problemas.",

        summary_p3: "Possuo experiência prática em desenvolvimento de software, atuando em todas as etapas do ciclo de desenvolvimento, incluindo modelagem e administração de bancos de dados (MySQL e PostgreSQL), além de desenvolvimento backend e frontend utilizando Java (Spring Boot), Python (incluindo PyQt6), C, C++, TypeScript, JavaScript e HTML/CSS.",

        summary_p4: "Também participei de um programa de intercâmbio acadêmico na Kajaani University of Applied Sciences, na Finlândia, onde cursei disciplinas ministradas integralmente em inglês, com foco em computação e desenvolvimento digital. Para isso, dediquei-me intensamente ao aprendizado do idioma, alcançando um alto nível de proficiência em um ano. Recentemente, iniciei também os estudos em francês.",

        summary_p5: "Além da área de tecnologia, sou corredor de longa distância e conquistei a posição de melhor atleta brasileiro na Maratona de Helsinque 2025. Meu perfil é marcado por dedicação, resiliência e proatividade, buscando constantemente evoluir técnica e pessoalmente.",

        
        educationTitle: "Formação",

        edu1: "Curso Técnico em Eletrotécnica – CEFET-MG (2018 – 2020)",
        edu2: "Bacharelado em Engenharia de Sistemas – UFMG (2022 – 2027)",
        edu3: "Intercâmbio em Ciência da Computação – Kajaani University of Applied Sciences, Finlândia (2025)",
    
        experience: "Experiência",

        estagio1: "Estagiário de Automação – Snef Brasil",
        estagio2: "Estagiário de Desenvolvimento – NetAdmin Software",
        estagio3: "Estagiário de TI – Usina Solar (Solar Energia)",
        ics: "Iniciação Científica – Desenvolvimento de Software | HC-UFMG",

        netadmin1: "Desenvolvimento de rotinas automatizadas e processos agendados utilizando SQL e linguagens de programação",
        netadmin2: "Implementação e manutenção de integrações com APIs Web",
        netadmin3: "Realização de consultas, inserções e atualizações em bancos de dados relacionais (SQL)",
        netadmin4: "Apoio na documentação técnica de módulos e funcionalidades do sistema",

        snef1: "Desenvolvimento e suporte a sistemas para ambientes industriais",
        snef2: "Implementação de sistemas SCADA e interfaces HMI",
        snef3: "Atuação com ambientes baseados em Linux e ferramentas de automação",
        snef4: "Elaboração de documentação técnica e suporte a sistemas de produção",

        hc1: "Desenvolvimento de sistema desktop de gestão hospitalar utilizando Python e PyQt6",
        hc2: "Modelagem e integração de bancos de dados MySQL e PostgreSQL",
        hc3: "Implementação de sincronização de dados e comunicação via APIs REST",
        hc4: "Experiência prática com sistemas reais na área da saúde",

        solar1: "Monitoramento de sistemas fotovoltaicos e suporte às operações da usina",
        solar2: "Realização de medições elétricas básicas e análise de sistemas",
        solar3: "Contribuição para documentação técnica e relatórios de desempenho",
        solar4: "Colaboração na resolução de problemas em ambiente industrial",

       
        projectsTitle: "Projetos",

        proj1_title: "Sistema de Gestão de Leitos Hospitalares",
        proj1_desc: "Aplicação desktop desenvolvida em Python (PyQt6) para gestão de leitos hospitalares, integrando bancos de dados MySQL e PostgreSQL e APIs REST.",

        proj2_title: "Jogo do Ladrão",
        proj2_desc: "Jogo 2D desenvolvido com Unity e C#, onde o jogador controla um ladrão tentando roubar itens sem ser detectado, com foco em lógica de jogo e interação.",

        proj3_title: "Ritmo",
        proj3_desc: "Marketplace web responsivo para inscrição em eventos esportivos, permitindo que usuários se registrem em várias corridas em uma única plataforma, com foco em escalabilidade e experiência do usuário.",
    

        languages_title: "Idiomas",
        habilidades: "Softwares",
        languages_skills: "Habilidades",
        hobbies: "Outras experiências e interesses",
        Run: "Corrida",
        runnn1: "Melhor brasileiro na maratona de Helsinque",
        runnn2: "Terceiro lugar geral na Corrida Duque de Caxias",
        runnn3: "Atleta revelação de 2019",
        Events: "Eventos",
        event1: "PyCon Finlandia 2025",
        event3: "Encontro dos poliglotas",
        book1:"Admirável Mundo Novo",
        book2:"O Homem mais rico da Babilônia",
        book3:"Memórias Póstumas de Brás Cubas",
        book4:"Trilogia Cósmica",
        lang_en: "Inglês",
        lang_fi: "Finlandês",
        Books: "Livros",

        cert1: "Técnico em Eletricidade (CEFET-MG) 2021",
        cert2: "Inovação Científica (Desenvolvimento de Software) 2024",
        cert3: "Inovação Científica (Desenvolvimento de Software) 2025",
        cert4: "Programa de Intercâmbio (Universidade KAMK) 2025",

        contato: "Contato",

        cert: "Certificações"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "en";  
    setLanguage(savedLang);
});

// Seleciona todos os botões de idioma
document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => {
        const selectedLang = btn.getAttribute("data-lang"); // 'en' ou 'pt'
        setLanguage(selectedLang);
    });
});

document.getElementById("download-cv").addEventListener("click", () => {
    window.location.href = "/portfolio/assets/cv/Luis_Tieres_CV.pdf";
});
const music = document.getElementById('background-music');

    // Tenta tocar automaticamente
music.play().catch(() => {
    console.log('Autoplay bloqueado pelo navegador.');
});

function setLanguage(lang) {
    // salva no localStorage
    localStorage.setItem("language", lang);

    // pega todos os elementos com data-i18n
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");

        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => {
        const selectedLang = btn.getAttribute("data-lang");
        setLanguage(selectedLang);
    });
});