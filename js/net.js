import { nets } from "/portfolio/data/nets.js";

export function renderNetworks() {
    console.log("Renderizando networks1", nets);
    const container = document.getElementById("networks");
    console.log("Renderizando networks2", nets);
    if (!container) return;

    nets.forEach(net => {
        const card = document.createElement("section");
        card.classList.add("network-card");

        card.innerHTML = `
            <img src="${net.foto}" alt="Foto de ${net.nome}" class="profile-pic">
            <div class="network-text">
                <h2>${net.nome}</h2>
                <p>${net.descricao}</p>
                <div class="network-links">
                    <a href="${net.linkedin}" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    <a href="${net.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                    <a href="mailto:${net.email}"><i class="fas fa-envelope"></i> Email</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}