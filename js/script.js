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
        
        education: "Education",

        "Técnico": "Electrical Technician – CEFET-MG (2018 to 2020)",
        "Engenharia": "Systems Engineering – UFMG (2022 to 2027)",
        "Intercâmbio": "Computer Science Exchange Program – Finland – KAMK University (2025)",

        experiencia: "Experience",

        "Estágio": "IT Internship – Solar Power Plant – Solar Energia (2020)",
        "Iniciação": "Scientific Research – Software Development – Hospital das Clínicas UFMG (2023 to 2025)",
        "Automação": "Automation Internship – Hydroelectric Power Plant – Snef Brasil (2024 to 2025)",

        projetos: "Projects",

        projeto_SISTEMA: "Hospital Bed Management System",
        projeto_SISTEMA_SOBRE: "Desktop application developed in Python (PyQt6) using MySQL, PostgreSQL and API integration.",

        projeto_Robber: "Robber Game",
        projeto_Robber_SOBRE: "The Robber is a dynamic game where the player takes on the role of a thief trying to steal vegetables from a farmer’s garden without being caught. Developed in C# using Unity.",


        languages_title: "Languages",
        habilidades: "Softwares",
        languages_skills: "Skills",
        hobbies: "Other Experience and Interests",
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

        contact_title: "Contact"
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

        education: "Formação",

        "Técnico": "Técnico em Eletrotécnica – CEFET-MG (2018 a 2020)",
        "Engenharia": "Engenharia de Sistemas – UFMG (2022 a 2027)",
        "Intercâmbio": "Intercâmbio em Ciência da Computação – Finlândia – KAMK University (2025)",

        experiencia: "Experiência",

        "Estágio": "Estágio em TI – Usina Fotovoltaica – Solar Energia (2020)",
        "Iniciação": "Iniciação Científica – Desenvolvimento de Sistemas – Hospital das Clínicas UFMG (2023 a 2025)",
        "Automação": "Estágio em Automação – Usina Hidrelétrica – Snef Brasil (2024 a 2025)",

        projetos: "Projetos",

        projeto_SISTEMA: "Sistema de Gestão de Leitos",
        projeto_SISTEMA_SOBRE: "Aplicação desktop em Python (PyQt6) com MySQL, PostgreSQL e integração via API.",

        projeto_Robber: "Robber Game",
        projeto_Robber_SOBRE: "The Robber é um jogo dinâmico no qual o jogador assume o papel de um ladrão tentando roubar vegetais da horta de um fazendeiro sem ser pego. Desenvolvido em C# utilizando Unity.",


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

        contact_title: "Contato"
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