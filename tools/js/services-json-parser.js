import { createObserver } from "./display-scroller.js";
import { createHoloCards } from "./holographic-cards-effects.js";

var service_title = document.querySelector(".services-section-title");
var service_desc = document.querySelector(".services-section-desc");
var services_container = document.getElementById("services-section");

function DarkenColor(color, percent) {
    var num = parseInt(color.replace("#", ""), 16),
        amt = Math.round(2.55 * -percent),
        R = (num >> 16) + amt,
        B = (num >> 8 & 0x00FF) + amt,
        G = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
};

fetch('../ressources/json/services_content.json')
    .then(res => res.json())
    .then(data => {
        service_title.innerHTML = data['title'];
        service_desc.innerHTML = data['desc'];
        let services = data['services'];
        for (let i = 0; i < services.length; i++) {
            services_container.innerHTML += `
            <div class="service" service-state="${services[i]['state']}">
            <div class="service-content">
                <h2 class="service-title">${services[i]['title']}</h2>
                <div class="service-desc">${services[i]['desc']}</div>
                <div
                class="service-action-info-wrapper"
                style="--color-accent: ${DarkenColor(services[i]['color_accent'], 25)};
                       --color-accent-light: ${services[i]['color_accent']}; ">
            <button class="service-link" onClick = "window.open('${services[i]['link']}')">
                ${services[i]['link_text']}
                        <div class="light-lines-btn">
                            <svg viewBox="0 0 165 48">
                                <rect x="0" y="0" width="100%" height="100%" rx="4" ry="4" pathLength="10">
                                </rect>
                            </svg>
                            <svg viewBox="0 0 165 48">
                                <rect x="0" y="0" width="100%" height="100%" rx="4" ry="4" pathLength="10">
                                </rect>
                            </svg>
                            <svg viewBox="0 0 165 48">
                                <rect x="0" y="0" width="100%" height="100%" rx="4" ry="4" pathLength="10">
                                </rect>
                            </svg>
                            <svg viewBox="0 0 165 48">
                                <rect x="0" y="0" width="100%" height="100%" rx="4" ry="4" pathLength="10">
                                </rect>
                            </svg>
                        </div>
                        <div class="light-lines-btn">
                            <svg viewBox="0 0 165 48">
                                <rect x="0" y="0" width="100%" height="100%" rx="4" ry="4" pathLength="10">
                                </rect>
                            </svg>
                            <svg viewBox="0 0 165 48">
                                <rect x="0" y="0" width="100%" height="100%" rx="4" ry="4" pathLength="10">
                                </rect>
                            </svg>
                            <svg viewBox="0 0 165 48">
                                <rect x="0" y="0" width="100%" height="100%" rx="4" ry="4" pathLength="10">
                                </rect>
                            </svg>
                            <svg viewBox="0 0 165 48">
                                <rect x="0" y="0" width="100%" height="100%" rx="4" ry="4" pathLength="10">
                                </rect>
                            </svg>
                        </div>
                    </button>
            <div class="service-state-wrapper">
                <div class="service-state">
                    <div class="service-state-chip"></div>
                    <span class="service-state-text">${services[i]['state_text']}</span>
                </div>
            </div>
                </div >
            </div >
            <div class="service-card mouse-out">
                <div class="service-card-wrapper">
                    <div class="service-card-3d">
                        <img src="../ressources/services-logo-png/${services[i]['logo_name']}" class="service-logo logo-1" alt="${services[i]['name']} logo">
                            <img src="../ressources/services-logo-png/${services[i]['logo_name']}" class="service-logo logo-2" alt="${services[i]['name']} logo">
                                <h2 class="service-card-title">${services[i]['name']}</h2>
                                <div class="service-card-image">
                                    <img src="../ressources/card-bg.png" alt="" />
                                </div>
                                <div class="service-card-soft-light"></div>
                                <div class="service-card-blend"></div>
                            </div>
                    </div>
                </div>
            </div>`;
        }
        createObserver();
        createHoloCards();
    });

