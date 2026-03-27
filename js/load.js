function loadComponent(id, file) {
    return fetch(file)
        .then(res => {
            if (!res.ok) throw new Error(`Erro ao carregar ${file}`);
            return res.text();
        })
        .then(data => {
            const container = document.getElementById(id);
            if (!container) return;
            container.innerHTML = data;

            //if (id === "header") setupLanguageButtons();
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "/portfolio/components/header.html");
    loadComponent("footer", "/portfolio/components/footer.html");

    loadPage("sobre");
});

function loadPage(page) {
    console.log("Renderizando networks1", page);

    const savedLang = localStorage.getItem("language") || "en";

    if (page === "network") {
        console.log("Renderizando networks2", page);

        loadComponent("content", `/portfolio/pages/network.html`).then(() => {
            import("/portfolio/js/net.js").then(module => {
                module.renderNetworks();
                setLanguage(savedLang); 
            });
        });
    } else {
        loadComponent("content", `/portfolio/pages/${page}.html`)
            .then(() => {
                setLanguage(savedLang); 
            });
    }
}

function loadPage_sobre(page) {
    
    loadComponent("header", "/portfolio/components/header.html");
    loadComponent("footer", "/portfolio/components/footer.html");

    loadPage("sobre");}

window.loadPage = loadPage;
window.setLanguage = setLanguage;