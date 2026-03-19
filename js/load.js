function loadComponent(id, file) {
    fetch(file)
        .then(res => {
            if (!res.ok) throw new Error(`Erro ao carregar ${file}`);
            return res.text();
        })
        .then(data => {
            const container = document.getElementById(id);
            if (!container) return;
            container.innerHTML = data;

            // Se for header, ativa botões de idioma
            if (id === "header") setupLanguageButtons();
        })
        .catch(err => console.error(err));
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
    if (!document.getElementById("content")) {
        window.location.href = "/portfolio/index.html"; // volta pro index
        return;
    }
    loadComponent("content", `/portfolio/pages/${page}.html`);
}

// Expondo globalmente
window.loadPage = loadPage;
window.setLanguage = setLanguage;