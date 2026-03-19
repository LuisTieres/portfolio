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
loadComponent("header", "..//components/header.html");
loadComponent("footer", "..//components/footer.html");