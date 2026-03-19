function loadComponent(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;

            // 🔥 IMPORTANTE: ativa eventos depois de carregar
            if (id === "header") {
                setupLanguageButtons();
            }
        });
}

loadComponent("sobre", "/portfolio/pages/sobre.html");
loadComponent("header", "/portfolio/components/header.html");
loadComponent("footer", "/portfolio/components/footer.html");