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

            if (id === "header") setupLanguageButtons();
        });
}

// Carrega sempre header e footer primeiro
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "/portfolio/components/header.html");
    loadComponent("footer", "/portfolio/components/footer.html");

    // Carrega a página inicial
    loadPage("sobre");
});

// Função para carregar páginas dentro do content
function loadPage(page) {
    if (page === "nets") {
        // Páginas que precisam de JS extra
        loadComponent("content", `/portfolio/pages/nets.html`).then(() => {
            import("/portfolio/js/net.js").then(module => {
                module.renderNetworks();
            });
        });
    } else {
        loadComponent("content", `/portfolio/pages/${page}.html`);
    }
}

function loadPage_sobre(page) {
    
    loadComponent("header", "/portfolio/components/header.html");
    loadComponent("footer", "/portfolio/components/footer.html");

    // Carrega a página inicial
    loadPage("sobre");}

// Expondo globalmente
window.loadPage = loadPage;
window.setLanguage = setLanguage;