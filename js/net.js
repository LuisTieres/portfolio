import { nets } from "../data/nets.js";

function renderNetworks() {
    const container = document.getElementById("networks");
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
            </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderNetworks);