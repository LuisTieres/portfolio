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
    pt: {
        name: "Luis Tieres",
        role: "Engenharia de Sistemas | Desenvolvedor",

        menu_about: "Sobre",
        menu_education: "Formação",
        menu_experience: "Experiência",
        menu_projects: "Projetos",
        menu_contact: "Contato",

        about_title: "Sobre mim",
        about_short: "Engenharia de Sistemas (UFMG) | Técnico em Eletrotécnica (CEFET-MG) | Desenvolvimento de sistemas, automação e pesquisa científica",

        summary_title: "Resumo Profissional",
        summary_p1: "Sou estudante de Engenharia de Sistemas na UFMG e técnico em Eletrotécnica formado pelo CEFET-MG, instituição na qual concluí tanto minha formação técnica quanto o ensino médio. Durante esse período, realizei um estágio em TI em usinas fotovoltaicas, experiência que contribuiu significativamente para a construção da minha base profissional.",

        summary_p2: "Após ingressar na UFMG, ampliei minha formação acadêmica por meio da participação em dois projetos de iniciação científica na área de desenvolvimento de software full stack, além de um estágio em automação industrial, atuando com programação de PLCs, IHMs, sistemas supervisórios SCADA e ambientes Linux. Essas experiências fortaleceram minhas habilidades técnicas, analíticas e de resolução de problemas.",

        summary_p3: "Possuo experiência prática no desenvolvimento de sistemas de gestão, atuando em todas as etapas do ciclo de desenvolvimento de software, incluindo modelagem e administração de bancos de dados (MySQL e PostgreSQL), bem como desenvolvimento backend e frontend utilizando Python (com PyQt6 para aplicações desktop), C, C++, JavaScript e HTML/CSS. Tenho especial interesse em engenharia de software, estruturas de dados e otimização de desempenho.",

        summary_p4: "Também participei de um programa de intercâmbio acadêmico na Universidade de Ciências Aplicadas de Kajaani, na Finlândia, onde cursei disciplinas ministradas integralmente em inglês, com foco em ciência da computação e desenvolvimento digital. Para essa experiência, dediquei-me intensamente ao estudo do inglês e alcancei um alto nível de proficiência em um ano. Atualmente, iniciei também o estudo do francês.",

        summary_p5: "Meu perfil é marcado por dedicação, resiliência e proatividade. Busco constantemente aprimorar minhas habilidades técnicas e interpessoais, com o objetivo de construir uma carreira sólida e impactante na área de tecnologia, contribuindo para projetos inovadores e de relevância global.",


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
        lang_en: "Inglês",
        lang_fi: "Finlandês",

        contact_title: "Contato"
    },

    en: {
        name: "Luis Tieres",
        role: "Systems Engineering | Developer",

        menu_about: "About",
        menu_education: "Education",
        menu_experience: "Experience",
        menu_projects: "Projects",
        menu_contact: "Contact",

        about_title: "About me",
        about_short: "Systems Engineering (UFMG) | Electrical Technician (CEFET-MG) | Software development, automation and scientific research",

        summary_title: "Professional Summary",
        summary_p1: "I am a Systems Engineering student at UFMG and a certified Electrical Technician from CEFET-MG, where I completed both my technical education and high school. During this period, I completed an IT internship at photovoltaic power plants, which played an important role in building my professional foundation.",

        summary_p2: "After joining UFMG, I expanded my academic background by participating in two scientific research projects focused on full stack software development, as well as completing an internship in industrial automation, working with PLC programming, HMIs, SCADA supervisory systems and Linux environments. These experiences strengthened my technical, analytical and problem-solving skills.",

        summary_p3: "I have hands-on experience in management system development, working across all stages of the software development lifecycle, including database modeling and administration (MySQL and PostgreSQL), as well as backend and frontend development using Python (including PyQt6 for desktop applications), C, C++, JavaScript and HTML/CSS. I have a strong interest in software engineering, data structures and performance optimization.",

        summary_p4: "I also participated in an academic exchange program at Kajaani University of Applied Sciences in Finland, where I attended courses fully taught in English, focused on computer science and digital development. To prepare for this experience, I dedicated myself intensively to learning English and achieved a high level of proficiency within one year. I have recently also started studying French.",

        summary_p5: "My profile is marked by dedication, resilience and proactivity. I constantly seek to improve my technical and interpersonal skills, aiming to build a solid and impactful career in technology and contribute to innovative projects with global relevance.",
        
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
        lang_en: "English",
        lang_fi: "Finnish",

        contact_title: "Contact"
    }
};


function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "pt";
    setLanguage(savedLang);
});
