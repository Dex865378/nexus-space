// Datos de vehículos expandidos
const vehiclesData = {
    naves: [
        {
            name: "STELLAR PHANTOM X-7",
            image: "images/nave1.png",
            category: "pesado",
            angles: [{ view: "Frontal", image: "images/nave1.png" }],
            specs: {
                "Peso": "45,000 t",
                "Velocidad": "0.8c",
                "Tripulación": "250",
                "Armamento": "Plasma A",
                "Escudos": "Clase X",
                "Rango": "5000 AL",
                "Motor": "Fusión Fría",
                "Sigilo": "Activo"
            },
            description: "El Phantom X-7 es el pináculo de la ingeniería de sigilo. Diseñado para misiones de infiltración profunda, cuenta con un recubrimiento de absorción de radar y motores silenciosos que lo hacen prácticamente invisible."
        },
        {
            name: "AURORA STRIKER MK-II",
            image: "images/nave2.png",
            category: "rapido",
            angles: [{ view: "Frontal", image: "images/nave2.png" }],
            specs: {
                "Peso": "32,000 t",
                "Velocidad": "0.9c",
                "Tripulación": "150",
                "Armamento": "Misiles Fotón",
                "Escudos": "Clase A",
                "Maniobrabilidad": "Extrema",
                "Sensor": "Largo Alcance",
                "Reactor": "Antimateria"
            },
            description: "Velocidad y potencia de fuego en un paquete elegante. El Aurora Striker es el interceptor preferido para la defensa perimetral de sistemas solares, capaz de alcanzar objetivos en segundos."
        },
        {
            name: "VOID HUNTER Z-9",
            image: "images/nave3.png",
            category: "rapido",
            angles: [{ view: "Frontal", image: "images/nave3.png" }],
            specs: {
                "Peso": "28,500 t",
                "Velocidad": "0.95c",
                "Tripulación": "80",
                "Armamento": "Láser Neutrón",
                "Escudos": "Clase B",
                "Sigilo": "Activo",
                "IA": "Clase 4",
                "Autonomía": "3000 AL"
            },
            description: "Un depredador silencioso. El Void Hunter utiliza tecnología de energía oscura experimental para rastrear objetivos a través de nebulosas densas y campos de asteroides."
        },
        {
            name: "NEBULA SENTINEL S-12",
            image: "images/nave4.png",
            category: "pesado",
            angles: [{ view: "Frontal", image: "images/nave4.png" }],
            specs: {
                "Peso": "52,000 t",
                "Velocidad": "0.7c",
                "Tripulación": "400",
                "Armamento": "Torpedos",
                "Escudos": "Clase Z",
                "Blindaje": "Titanio-A",
                "Capacidad": "2 Escuadrones",
                "Hangar": "Completo"
            },
            description: "Una fortaleza volante. El Sentinel S-12 puede resistir el fuego concentrado de una flota entera mientras despliega sus propios escuadrones de cazas para contraatacar."
        }
    ],
    motos: [
        {
            name: "GRAV-CYCLE 3000",
            image: "images/moto1.png",
            category: "ligero",
            angles: [{ view: "Lateral", image: "images/moto1.png" }],
            specs: {
                "Peso": "500 kg",
                "Velocidad": "400 km/h",
                "Motor": "Gravitón",
                "Tipo": "Deportivo",
                "Asientos": "1",
                "Autonomía": "800 km",
                "0-100": "1.2s",
                "Estabilidad": "Giroscópica"
            },
            description: "La moto antigravedad más rápida del mercado civil. Perfecta para carreras de cañones y maniobras acrobáticas en gravedad cero."
        },
        {
            name: "DESERT RAIDER",
            image: "images/moto2.png",
            category: "pesado",
            angles: [{ view: "Lateral", image: "images/moto2.png" }],
            specs: {
                "Peso": "800 kg",
                "Velocidad": "250 km/h",
                "Blindaje": "Ligero",
                "Terreno": "Todo",
                "Arma": "Opcional",
                "Suspensión": "Magnética",
                "Autonomía": "1200 km",
                "Carga": "200 kg"
            },
            description: "Diseñada para las dunas de Marte y terrenos hostiles. Robusta y fiable, puede atravesar tormentas de arena y campos de lava sin problemas."
        },
        {
            name: "COSMIC BLADE",
            image: "images/moto3.png",
            category: "rapido",
            angles: [{ view: "Lateral", image: "images/moto3.png" }],
            specs: {
                "Peso": "600 kg",
                "Velocidad": "500 km/h",
                "Motor": "Iones",
                "Tipo": "Carreras",
                "0-100": "0.8s",
                "Aerodinámica": "Variable",
                "Frenos": "Electromagnéticos",
                "Chasis": "Fibra de Carbono"
            },
            description: "Aerodinámica pura para cortar el viento a velocidades supersónicas. Utilizada en los circuitos de carreras más prestigiosos de la galaxia."
        },
        {
            name: "PHOTON GLIDER",
            image: "images/moto4.png",
            category: "ligero",
            angles: [{ view: "Lateral", image: "images/moto4.png" }],
            specs: {
                "Peso": "450 kg",
                "Velocidad": "350 km/h",
                "Motor": "Fotónico",
                "Tipo": "Urbano",
                "Ruido": "Silencioso",
                "Asientos": "2",
                "Autonomía": "600 km",
                "Recarga": "Solar"
            },
            description: "Elegancia y silencio para el transporte urbano de alta gama. Perfecta para ejecutivos que valoran el confort y la discreción."
        }
    ],
    estructuras: [
        {
            name: "OMEGA STATION",
            image: "images/estructura1.png",
            category: "pesado",
            angles: [{ view: "General", image: "images/estructura1.png" }],
            specs: {
                "Diámetro": "25 km",
                "Habitantes": "500k",
                "Defensa": "Escudos EM",
                "Tipo": "Comercial",
                "Muelles": "500",
                "Economía": "AAA",
                "Gravedad": "Artificial",
                "Energía": "Fusión"
            },
            description: "El centro de comercio más grande del sector. Un crisol de culturas y mercancías de toda la galaxia, donde se negocian tratados y fortunas."
        },
        {
            name: "TITAN FORGE",
            image: "images/estructura2.png",
            category: "pesado",
            angles: [{ view: "General", image: "images/estructura2.png" }],
            specs: {
                "Largo": "40 km",
                "Trabajadores": "100k",
                "Defensa": "Torretas",
                "Tipo": "Industrial",
                "Producción": "1 Nave/Día",
                "Recursos": "Asteroides",
                "Diques": "12",
                "Tecnología": "Nanoconstrucción"
            },
            description: "Donde nacen los gigantes. Este astillero puede construir acorazados estelares desde cero utilizando materia prima extraída de asteroides cercanos."
        },
        {
            name: "CELESTIAL CITADEL",
            image: "images/estructura3.png",
            category: "pesado",
            angles: [{ view: "General", image: "images/estructura3.png" }],
            specs: {
                "Altura": "35 km",
                "Habitantes": "1M",
                "Defensa": "Planetaria",
                "Tipo": "Militar",
                "Armamento": "Cañón Orbital",
                "Seguridad": "Nivel 10",
                "Tropas": "200k",
                "Blindaje": "Neutronio"
            },
            description: "El bastión inexpugnable del comando central. Una ciudad flotante dedicada a la defensa, capaz de repeler invasiones a escala planetaria."
        },
        {
            name: "NEXUS GATEWAY",
            image: "images/estructura4.png",
            category: "pesado",
            angles: [{ view: "General", image: "images/estructura4.png" }],
            specs: {
                "Largo": "50 km",
                "Operadores": "200k",
                "Tipo": "Portal",
                "Destinos": "100+",
                "Estabilidad": "99.9%",
                "Energía": "Singularidad",
                "Tráfico": "10k naves/día",
                "Distorsión": "Controlada"
            },
            description: "La puerta a otros mundos. Este anillo masivo estabiliza agujeros de gusano para el viaje instantáneo entre sistemas estelares distantes."
        }
    ],
    edificios: [
        {
            name: "SKYSPIRE TOWER",
            image: "images/edificio1.png",
            category: "ligero",
            angles: [{ view: "Frontal", image: "images/edificio1.png" }],
            specs: {
                "Altura": "2 km",
                "Pisos": "400",
                "Energía": "Solar",
                "Tipo": "Residencial",
                "Habitantes": "50k",
                "Ascensores": "Maglev",
                "Jardines": "Colgantes",
                "Tecnología": "Holográfica"
            },
            description: "Un rascacielos vanguardista que toca las nubes. Con tecnología holográfica y plataformas flotantes, redefine el concepto de vida urbana."
        },
        {
            name: "APOLLO COMPLEX",
            image: "images/edificio2.png",
            category: "pesado",
            angles: [{ view: "Frontal", image: "images/edificio2.png" }],
            specs: {
                "Área": "5 km²",
                "Laboratorios": "200",
                "Energía": "Fusión",
                "Tipo": "Investigación",
                "Científicos": "10k",
                "Seguridad": "Biológica N4",
                "Red": "Cuántica",
                "Proyectos": "Clasificados"
            },
            description: "Centro de investigación con domos interconectados. Escudos de energía protegen los experimentos más peligrosos de la humanidad."
        },
        {
            name: "PYRAMID ARCOLOGY",
            image: "images/edificio3.png",
            category: "pesado",
            angles: [{ view: "Frontal", image: "images/edificio3.png" }],
            specs: {
                "Altura": "1.5 km",
                "Habitantes": "100k",
                "Energía": "Geotérmica",
                "Tipo": "Arcología",
                "Jardines": "50",
                "Autosuficiencia": "100%",
                "Reciclaje": "Total",
                "Clima": "Controlado"
            },
            description: "Una ciudad completa en forma de pirámide. Autosuficiente con jardines verticales y núcleos de energía geotérmica, un modelo de sostenibilidad."
        },
        {
            name: "MILITARY HQ",
            image: "images/edificio4.png",
            category: "pesado",
            angles: [{ view: "Frontal", image: "images/edificio4.png" }],
            specs: {
                "Altura": "800 m",
                "Personal": "20k",
                "Defensa": "Máxima",
                "Tipo": "Militar",
                "Comunicación": "Cuántica",
                "Búnker": "Subterráneo",
                "Radar": "Planetario",
                "Armamento": "Defensivo"
            },
            description: "Cuartel general militar fortificado. Arquitectura brutalista con escudos defensivos y arrays de comunicación que coordinan flotas enteras."
        }
    ],
    especies: [
        {
            name: "LUMINARIAN ELDER",
            image: "images/especie1.png",
            category: "ligero",
            angles: [{ view: "Retrato", image: "images/especie1.png" }],
            specs: {
                "Origen": "Nebula X",
                "Vida": "1000 años",
                "Habilidad": "Telepatía",
                "Clase": "Pacífico",
                "Dieta": "Energía Pura",
                "Cultura": "Sabia",
                "Altura": "2.5m",
                "Comunicación": "Luz"
            },
            description: "Seres de luz pura que guardan el conocimiento antiguo del universo. Se comunican a través de pulsos de luz y han trascendido la necesidad de forma física."
        },
        {
            name: "CYBER-SAPIEN",
            image: "images/especie2.png",
            category: "pesado",
            angles: [{ view: "Cuerpo", image: "images/especie2.png" }],
            specs: {
                "Origen": "Tierra-2",
                "Mejoras": "90%",
                "Fuerza": "Sobrehumana",
                "Clase": "Guerrero",
                "Red": "Conectada",
                "Procesador": "Cuántico",
                "Vida": "Indefinida",
                "Adaptación": "Extrema"
            },
            description: "La fusión perfecta entre biología y tecnología. Soldados de élite diseñados para sobrevivir en cualquier entorno, desde el vacío espacial hasta planetas tóxicos."
        },
        {
            name: "VOID WRAITH",
            image: "images/especie3.png",
            category: "rapido",
            angles: [{ view: "Forma", image: "images/especie3.png" }],
            specs: {
                "Origen": "Vacio",
                "Estado": "Etéreo",
                "Peligro": "Alto",
                "Habilidad": "Intangibilidad",
                "Comunicación": "Nula",
                "Habitat": "Espacio Profundo",
                "Debilidad": "Luz UV",
                "Intenciones": "Desconocidas"
            },
            description: "Criaturas misteriosas que habitan en el vacío entre las estrellas. Se dice que nacen de la materia oscura y pueden atravesar materia sólida a voluntad."
        },
        {
            name: "XENON WARRIOR",
            image: "images/especie4.png",
            category: "pesado",
            angles: [{ view: "Armadura", image: "images/especie4.png" }],
            specs: {
                "Origen": "Xenon Prime",
                "Altura": "3m",
                "Honor": "Absoluto",
                "Arma": "Hacha Plasma",
                "Clan": "Rojo",
                "Fuerza": "Clase 10",
                "Armadura": "Quitina",
                "Cultura": "Guerrera"
            },
            description: "Una raza orgullosa de guerreros con exoesqueletos naturales. Su cultura gira en torno al combate y el honor, famosos por su lealtad inquebrantable en batalla."
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    setupSplashScreen();
    createStarfield();
    updateStats();
    loadSection('naves');
    setupEventListeners();
    setupCustomization();
    setupBackgroundSelector();
});

function setupSplashScreen() {
    const splash = document.getElementById('splash-screen');
    const btn = document.getElementById('start-adventure-btn');

    if (splash && btn) {
        btn.addEventListener('click', () => {
            splash.classList.add('hidden');
            setTimeout(() => {
                splash.style.display = 'none';
            }, 1000);
        });
    }
}

function createStarfield() {
    const bg = document.querySelector('.background-animation');
    if (!bg) return;

    bg.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        bg.appendChild(star);
    }
}

function updateStats() {
    const counts = {
        naves: vehiclesData.naves ? vehiclesData.naves.length : 0,
        motos: vehiclesData.motos ? vehiclesData.motos.length : 0,
        estructuras: vehiclesData.estructuras ? vehiclesData.estructuras.length : 0,
        edificios: vehiclesData.edificios ? vehiclesData.edificios.length : 0,
        especies: vehiclesData.especies ? vehiclesData.especies.length : 0
    };

    const total = Object.values(counts).reduce((a, b) => a + b, 0);

    animateCounter('total-vehicles', total);
    animateCounter('total-ships', counts.naves);
    animateCounter('total-bikes', counts.motos);
    animateCounter('total-structures', counts.estructuras);
    animateCounter('total-buildings', counts.edificios);
}

function animateCounter(id, target) {
    const element = document.getElementById(id);
    if (!element) return;

    let current = 0;
    const increment = Math.ceil(target / 50);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = current;
    }, 20);
}

function loadSection(sectionName) {
    const container = document.getElementById('vehicles-container');
    const sectionTitle = document.querySelector('.section-title');
    const sectionDesc = document.querySelector('.section-description');

    if (!container) return;

    container.innerHTML = '';

    const data = vehiclesData[sectionName] || [];

    const titles = {
        naves: "NAVES ESPACIALES",
        motos: "MOTOS ANTIGRAVEDAD",
        estructuras: "MEGAESTRUCTURAS",
        edificios: "ARQUITECTURA FUTURA",
        especies: "VIDA ALIENÍGENA"
    };

    const descriptions = {
        naves: "Explora nuestra flota de naves interestelares de última generación.",
        motos: "Velocidad y agilidad para el transporte personal en cualquier terreno.",
        estructuras: "Bases espaciales y estaciones orbitales masivas.",
        edificios: "Rascacielos y hábitats diseñados para el mañana.",
        especies: "Conoce a las civilizaciones y criaturas del universo conocido."
    };

    if (sectionTitle) sectionTitle.textContent = titles[sectionName] || sectionName.toUpperCase();
    if (sectionDesc) sectionDesc.textContent = descriptions[sectionName] || "";

    data.forEach(vehicle => {
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        card.setAttribute('data-category', vehicle.category || 'general');

        // Add timestamp to force image reload
        const timestamp = new Date().getTime();
        const imgSrc = vehicle.image ? `${vehicle.image}?t=${timestamp}` : 'images/nave1.png';

        let specsHtml = '';
        const specsToShow = Object.entries(vehicle.specs).slice(0, 2);
        specsToShow.forEach(([key, value]) => {
            specsHtml += `
                <div class="spec-item">
                    <span class="spec-label">${key}</span>
                    <span class="spec-value">${value}</span>
                </div>
            `;
        });

        card.innerHTML = `
            <img src="${imgSrc}" alt="${vehicle.name}" class="vehicle-image" 
                 onerror="this.onerror=null; this.src='images/nave1.png';">
            <div class="vehicle-info">
                <h3 class="vehicle-name">${vehicle.name}</h3>
                <div class="vehicle-specs">
                    ${specsHtml}
                </div>
            </div>
        `;

        card.addEventListener('click', () => openModal(vehicle));
        container.appendChild(card);
    });
}

function setupEventListeners() {
    document.querySelectorAll('[data-section]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('data-section');
            loadSection(section);
        });
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const filter = e.target.getAttribute('data-filter');
            const cards = document.querySelectorAll('.vehicle-card');

            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.vehicle-card');

            cards.forEach(card => {
                const name = card.querySelector('.vehicle-name').textContent.toLowerCase();
                if (name.includes(term)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const view = e.target.getAttribute('data-view');
            const container = document.getElementById('vehicles-container');

            if (view === 'list') {
                container.classList.add('list-view');
                container.style.gridTemplateColumns = '1fr';
            } else {
                container.classList.remove('list-view');
                container.style.gridTemplateColumns = window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))';
            }
        });
    });
}

function setupCustomization() {
    const colorBtns = document.querySelectorAll('.color-btn');

    colorBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = e.target.getAttribute('data-type');
            const color = e.target.getAttribute('data-color');
            const root = document.documentElement;

            if (type === 'text') {
                root.style.setProperty('--text-custom-color', color);
            } else if (type === 'border') {
                root.style.setProperty('--border-custom-color', color);
            } else if (type === 'card') {
                root.style.setProperty('--card-bg-custom-color', color);
            }
        });
    });
}

function setupBackgroundSelector() {
    const bgLinks = document.querySelectorAll('[data-bg]');
    bgLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const bg = e.target.getAttribute('data-bg');
            document.body.setAttribute('data-bg', bg);
            console.log("Fondo cambiado a:", bg);
        });
    });
}

function openModal(vehicle) {
    const modal = document.getElementById('vehicle-modal');
    const content = modal.querySelector('.modal-content');

    if (!modal) return;

    let specsHtml = '';
    Object.entries(vehicle.specs).forEach(([key, value]) => {
        specsHtml += `
        < div class="spec-item" >
                <span class="spec-label">${key}</span>
                <span class="spec-value">${value}</span>
            </div >
        `;
    });

    let thumbnailsHtml = '';
    if (vehicle.angles && vehicle.angles.length > 0) {
        vehicle.angles.forEach((angle, index) => {
            thumbnailsHtml += `
        < img src = "${angle.image}" class="thumbnail ${index === 0 ? 'active' : ''}"
    onclick = "changeMainImage('${angle.image}', this)"
    onerror = "this.src='images/nave1.png'" >
        `;
        });
    }

    content.innerHTML = `
        < span class="modal-close" onclick = "closeModal()" >& times;</span >
        <div class="modal-gallery">
            <img src="${vehicle.image}" class="gallery-main" id="main-modal-image" onerror="this.src='images/nave1.png'">
            <div class="gallery-thumbnails">
                ${thumbnailsHtml}
            </div>
        </div>
        <div class="modal-info">
            <h2 class="modal-title">${vehicle.name}</h2>
            <p class="modal-description">${vehicle.description}</p>
            <div class="modal-specs-grid">
                ${specsHtml}
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

window.closeModal = function () {
    const modal = document.getElementById('vehicle-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
};

window.changeMainImage = function (src, thumb) {
    const mainImg = document.getElementById('main-modal-image');
    if (mainImg) mainImg.src = src;

    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    if (thumb) thumb.classList.add('active');
};

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

window.addEventListener('click', (e) => {
    const modal = document.getElementById('vehicle-modal');
    if (e.target === modal) closeModal();
});
