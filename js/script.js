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
        summaryluis: "Backend Developer | Java, Python & TypeScript",

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

        summary_p1: "I am a Systems Engineering student at UFMG and an Electrical Technician from CEFET-MG, with early experience in IT within photovoltaic power plants.",

        summary_p2: "During my academic journey, I worked on scientific research projects focused on software development and completed an internship in industrial automation, gaining experience with PLCs, SCADA systems, and Linux environments.",

        summary_p3: "I have hands-on experience in backend development, working with Java (Spring Boot), Python, and relational databases such as PostgreSQL and MySQL. I have built applications involving API integration, data management, and system design.",

        summary_p4: "I also participated in an academic exchange at Kajaani University of Applied Sciences in Finland, where I studied computer science in English, strengthening both my technical and communication skills in an international environment.",

        summary_p5: "Outside of technology, I am a long-distance runner and achieved the position of best Brazilian athlete at the Helsinki Marathon 2025. My profile is marked by dedication, resilience and proactivity, and I constantly seek to improve my technical and interpersonal skills.",
        
        
        educationTitle: "Education",

        edu1: "Technical Degree in Electrotechnics – CEFET-MG (2018 – 2020)",
        edu2: "Bachelor’s Degree in Systems Engineering – UFMG (2022 – 2027)",
        edu3: "International Exchange Program in Computer Science – Kajaani University of Applied Sciences, Finland (2025)",
    
        experience: "Experience",

        estagio1: "Automation Intern",
        estagio2: "Developer Intern",
        estagio3: "IT Intern Solar Energy ",
        ics: "Researcher – Software Development",
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

        location_job4:"Curvelo, On-site",
        location_job3:"Belo Horizonte, Remote",
        location_job2:"Belo Horizonte, On-site",

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


        skillsTitle: "Skills",
        languages_title: "Languages",
        programming_title: "Programming",

        lang_en: "English",
        lang_fi: "Finnish",
        lang_de: "German",

        backend: "Backend",
        frontend: "Frontend",
        databases: "Databases",
        tools: "Tools",

        data_admin: "March 2026 – Current",
        data_snef: "Mar 2024 – Mar 2025",
        data_hc: "Mar 2023 – Sep 2025",
        data_solar: "Feb 2021 – Oct 2021",

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
        summaryluis: "Desenvolvedor Backend | Java, Python & TypeScript",
        menu_about: "Sobre",
        menu_education: "Formação",
        menu_experience: "Experiência",
        menu_projects: "Projetos",
        menu_Skills:"Habilidades",
        menu_contact: "Contato",

        about_title: "Quem é Luis?",
        about_short: "Estudante de Engenharia de Sistemas na UFMG | Desenvolvedor Backend (Java & Spring Boot) | Técnico em Eletrotécnica (CEFET-MG) | Maratonista",

        summary_title: "Resumo Profissional",

        summary_p1: "Sou estudante de Engenharia de Sistemas pela UFMG e Técnico em Eletrotécnica pelo CEFET-MG, com experiência inicial em TI no contexto de usinas fotovoltaicas.",

        summary_p2: "Durante minha trajetória acadêmica, atuei em projetos de iniciação científica com foco em desenvolvimento de software e realizei estágio na área de automação industrial, adquirindo experiência com CLPs, sistemas SCADA e ambientes Linux.",

        summary_p3: "Possuo experiência prática em desenvolvimento backend, trabalhando com Java (Spring Boot), Python e bancos de dados relacionais como PostgreSQL e MySQL. Desenvolvi aplicações envolvendo integração de APIs, gerenciamento de dados e arquitetura de sistemas.",

        summary_p4: "Também participei de um intercâmbio acadêmico na Kajaani University of Applied Sciences, na Finlândia, onde estudei ciência da computação em inglês, fortalecendo minhas habilidades técnicas e de comunicação em um ambiente internacional.",

        summary_p5: "Além da área de tecnologia, sou corredor de longa distância e conquistei o título de melhor atleta brasileiro na Maratona de Helsinque 2025. Meu perfil é marcado por dedicação, resiliência e proatividade, buscando constantemente o aprimoramento técnico e interpessoal.",
        
        educationTitle: "Formação",

        edu1: "Curso Técnico em Eletrotécnica – CEFET-MG (2018 – 2020)",
        edu2: "Bacharelado em Engenharia de Sistemas – UFMG (2022 – 2027)",
        edu3: "Intercâmbio em Ciência da Computação – Kajaani University of Applied Sciences, Finlândia (2025)",
    
        experience: "Experiência",

        estagio1: "Estagiário de Automação ",
        estagio2: "Estagiário de Desenvolvimento",
        estagio3: "Estagiário de TI em Energia Solar",
        ics: "Pesquisa – Desenvolvimento de Software ",

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
        location_job4:"Curvelo, Presencial",
        location_job3:"Belo Horizonte, Remoto",
        location_job2:"Belo Horizonte, Presencial",

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


        skillsTitle: "Habilidades",
        languages_title: "Idiomas",
        programming_title: "Programação",

        lang_en: "Inglês",
        lang_fi: "Finlandês",
        lang_de: "Alemão",

        backend: "Backend",
        frontend: "Frontend",
        databases: "Bancos de Dados",
        tools: "Ferramentas",

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

        data_admin: "Março 2026 – Atual",
        data_snef: "Mar 2024 – Mar 2025",
        data_hc: "Mar 2023 – Set 2025",
        data_solar: "Fev 2021 – Out 2021",

        cert1: "Técnico em Eletrotécnica (CEFET-MG) 2021",
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
document.getElementById("download-cv").addEventListener("click", () => {
    const savedLang = localStorage.getItem("language") || "en";  
    if (savedLang == "en"){
        window.location.href = "/portfolio/assets/cv/Luis_Tieres_CV_en.pdf";

    }
    else{
        window.location.href = "/portfolio/assets/cv/Luis_Tieres_CV.pdf";
    }
    });

    // Tenta tocar automaticamente
const music = document.getElementById('background-music');

function enableAudio() {
    music.play().catch(() => {
        console.log('Erro ao tentar tocar música');
    });
    music.volume = 0.1;

    // remove o listener depois de ativar
    document.removeEventListener("click", enableAudio);
    document.removeEventListener("touchstart", enableAudio);
}

// escuta interação do usuário
document.addEventListener("click", enableAudio);
document.addEventListener("touchstart", enableAudio);

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

const btn = document.querySelector("button[onclick='mutar()']");


function mutar() {
    if (music.paused) {
        music.play();
        btn.textContent = "🎧 Play music";
    } else {
        music.pause();
        btn.textContent = "🔇 Stop music";
    }
    music.volume = 0.1;
}
let wasPlaying = false;

// Detecta mudança de aba
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        // usuário saiu da aba
        wasPlaying = !music.paused;
        music.pause();
    } else {
        // usuário voltou
        if (wasPlaying) {
            music.play().catch(() => {});
        }
    }
    music.volume = 0.1;
});