document.addEventListener("DOMContentLoaded", () => {
    // Carrega os componentes
    loadComponent("header", "components/header.html");
    loadComponent("footer", "components/footer.html");
    loadComponent("sobre", "/portfolio/pages/sobre.html"); // garante o caminho certo

    // Expõe a função globalmente
    window.setLanguage = setLanguage;
});

function loadComponent(id, file) {
    fetch(file)
        .then(res => {
            if (!res.ok) throw new Error("Erro ao carregar " + file);
            return res.text();
        })
        .then(data => {
            const container = document.getElementById(id);
            if (!container) return;

            container.innerHTML = data;

            // Se for header, ativa botões
            if (id === "header") {
                setupLanguageButtons();
            }
        })
        .catch(err => console.error(err));
}

function setupLanguageButtons() {
    document.querySelectorAll(".flag").forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            setLanguage(lang);
        });
    });
}