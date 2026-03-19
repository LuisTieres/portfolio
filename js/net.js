import { nets } from "/portfolio/data/nets.js"; // path absoluto para GitHub Pages

function renderNetworks() {
    const container = document.getElementById("networks");

    if (!container) {
        console.error("❌ Container #networks não encontrado no DOM!");
        return;
    } else {
        console.log("✅ Container #networks encontrado:", container);
    }

    nets.forEach((net, index) => {
        console.log(`🔹 Renderizando net[${index}]:`, net);
        console.log("Caminho da foto:", net.foto);
        console.log("LinkedIn:", net.linkedin);
        console.log("GitHub:", net.github);
        console.log("Email:", net.email);

        const card = document.createElement("section");
        card.classList.add("network-card");

        card.innerHTML = `
            <img src="${net.foto}" alt="Foto de ${net.nome}" class="profile-pic">

            <div class="network-text">
                <h2>${net.nome}</h2>
                <p>${net.descricao}</p>

                <div class="network-links">
                    <a href="${net.linkedin}" target="_blank">
                        <i class="fab fa-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>

                    <a href="${net.github}" target="_blank">
                        <i class="fab fa-github"></i>
                        <span>GitHub</span>
                    </a>

                    <a href="mailto:${net.email}">
                        <i class="fas fa-envelope"></i>
                        <span>Email</span>
                    </a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    console.log("✅ Todas as redes foram renderizadas!");
}

// Executa só quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    console.log("📦 DOM carregado, iniciando renderNetworks...");
    renderNetworks();
});