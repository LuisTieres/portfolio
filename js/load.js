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
    
    loadComponent("content", `/portfolio/pages/${page}.html`);
}

function loadPage_sobre(page) {
    
    loadComponent("header", "/portfolio/components/header.html");
    loadComponent("footer", "/portfolio/components/footer.html");

    // Carrega a página inicial
    loadPage("sobre");}

function loadPage_net(page) {
    
    loadComponent("content", `/portfolio/pages/${page}.html`);
    renderNetworks();
}

// Expondo globalmente
window.loadPage = loadPage;
window.setLanguage = setLanguage;