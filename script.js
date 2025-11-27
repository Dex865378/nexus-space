// Datos de vehículos expandidos
const vehiclesData = {
    naves: [
        {
            name: "STELLAR PHANTOM X-7",
            image: "images/nave1.png",
            category: "pesado",
            angles: [
                { view: "Vista Frontal", image: "images/nave1.png" },
                { view: "Vista Lateral", image: "images/nave1.png" },
                { view: "Vista Trasera", image: "images/nave1.png" }
            ],
            specs: {
                "Peso": "45,000 t",
                "Velocidad": "0.8c",
                "Tripulación": "250",
                "Armamento": "Plasma A",
                "Escudos": "Clase X",
                "Rango": "5000 AL",
                "Motor": "Fusión Fría"
            },
            description: "El Phantom X-7 es el pináculo de la ingeniería de sigilo. Diseñado para misiones de infiltración profunda, cuenta con un recubrimiento de absorción de radar y motores silenciosos."
        },
        {
            name: "AURORA STRIKER MK-II",
            image: "images/nave2.png",
            category: "rapido",
            angles: [
                { view: "Vista Frontal", image: "images/nave2.png" },
                { view: "Vista Lateral", image: "images/nave2.png" },
                { view: "Motor", image: "images/nave2.png" }
            ],
            specs: { "Peso": "32,000 t", "Velocidad": "0.9c", "Tripulación": "150", "Armamento": "Misiles Fotón", "Escudos": "Clase A", "Maniobrabilidad": "Extrema", "Sensor": "Largo Alcance" },
            description: "Velocidad y potencia de fuego en un paquete elegante. El Aurora Striker es el interceptor preferido para la defensa perimetral de sistemas solares."
        },
        {
            name: "VOID HUNTER Z-9",
            image: "images/nave3.png",
            category: "rapido",
            angles: [
                { view: "Vista Frontal", image: "images/nave3.png" },
                { view: "Cabina", image: "images/nave3.png" },
                { view: "Armas", image: "images/nave3.png" }
            ],
            specs: { "Peso": "28,500 t", "Velocidad": "0.95c", "Tripulación": "80", "Armamento": "Láser Neutrón", "Escudos": "Clase B", "Sigilo": "Activo", "IA": "Clase 4" },
            description: "Un depredador silencioso. El Void Hunter utiliza tecnología de energía oscura experimental para rastrear objetivos a través de nebulosas densas."
        },
        {
            name: "NEBULA SENTINEL S-12",
            image: "images/nave4.png",
            category: "pesado",
            angles: [
                { view: "Vista Frontal", image: "images/nave4.png" },
                { view: "Hangar", image: "images/nave4.png" },
                { view: "Torretas", image: "images/nave4.png" }
            ],
            specs: { "Peso": "52,000 t", "Velocidad": "0.7c", "Tripulación": "400", "Armamento": "Torpedos", "Escudos": "Clase Z", "Blindaje": "Titanio-A", "Capacidad": "2 Escuadrones" },
            description: "Una fortaleza volante. El Sentinel S-12 puede resistir el fuego concentrado de una flota entera mientras despliega sus propios escuadrones de cazas."
        },
        {
            name: "GALACTIC CRUISER C-1",
            image: "images/nave1.png",
            category: "pesado",
            angles: [{ view: "Frontal", image: "images/nave1.png" }],
            specs: { "Peso": "60,000 t", "Velocidad": "0.6c", "Tripulación": "600", "Armamento": "Cañones Ion", "Escudos": "Clase Y", "Autonomía": "10 Años", "Laboratorios": "5" },
            description: "El crucero estándar de la flota galáctica. Robusto, confiable y capaz de misiones de larga duración en el espacio profundo."
        },
        {
            name: "STAR DUST RUNNER",
            image: "images/nave2.png",
            category: "ligero",
            angles: [{ view: "Frontal", image: "images/nave2.png" }],
            specs: { "Peso": "15,000 t", "Velocidad": "0.98c", "Tripulación": "20", "Armamento": "Láser Ligero", "Escudos": "Clase C", "Carga": "500 t", "Motor": "Impulso" },
            description: "Diseñado para mensajería urgente y transporte VIP. Sacrifica blindaje por una velocidad sublumínica inigualable."
        },
        {
            name: "ORBITAL GUARD G-5",
            image: "images/nave3.png",
            category: "pesado",
            angles: [{ view: "Frontal", image: "images/nave3.png" }],
            specs: { "Peso": "40,000 t", "Velocidad": "0.75c", "Tripulación": "300", "Armamento": "Batería Plasma", "Escudos": "Clase A", "Patrulla": "Orbital", "Drones": "10" },
            description: "La primera línea de defensa planetaria. Patrulla las órbitas bajas asegurando que ningún contrabandista toque la superficie."
        },
        {
            name: "COSMIC EXPLORER E-X",
            image: "images/nave4.png",
            category: "ligero",
            angles: [{ view: "Frontal", image: "images/nave4.png" }],
            specs: { "Peso": "20,000 t", "Velocidad": "0.85c", "Tripulación": "50", "Armamento": "Sondas", "Escudos": "Clase B", "Sensores": "Multiespectrales", "Laboratorio": "Exobiología" },
            description: "Equipado con los sensores más avanzados, esta nave está dedicada a cartografiar los rincones desconocidos de la galaxia."
        },
        {
            name: "WARP STRIKER W-9",
            image: "images/nave1.png",
            category: "rapido",
            angles: [{ view: "Frontal", image: "images/nave1.png" }],
            specs: { "Peso": "30,000 t", "Velocidad": "0.92c", "Tripulación": "100", "Armamento": "Cañones Warp", "Escudos": "Clase A", "Motor Warp": "Gen 5", "Sigilo": "Pasivo" },
            description: "Utiliza micro-saltos warp para maniobras de combate impredecibles. Una pesadilla para los sistemas de puntería enemigos."
        },
        {
            name: "NOVA BOMBER B-52",
            image: "images/nave2.png",
            category: "pesado",
            angles: [{ view: "Frontal", image: "images/nave2.png" }],
            specs: { "Peso": "55,000 t", "Velocidad": "0.65c", "Tripulación": "180", "Armamento": "Bombas Nova", "Escudos": "Clase X", "Carga Bélica": "5000 t", "Defensa": "Torretas Auto" },
            description: "Capaz de lanzar cargas explosivas que simulan supernovas en miniatura. Devastador contra estaciones espaciales."
        }
    ],
    motos: [
        {
            name: "QUANTUM RACER V-3",
            image: "images/moto1.png",
            category: "rapido",
            angles: [{ view: "Frontal", image: "images/moto1.png" }, { view: "Lateral", image: "images/moto1.png" }],
            specs: { "Peso": "1,200 kg", "Velocidad": "15,000 km/h", "Motor": "Iones", "0-100": "0.5s", "Autonomía": "5000km", "Estabilidad": "Giroscópica" },
            description: "La moto de carreras definitiva. Pura velocidad y adrenalina para los pilotos más exigentes."
        },
        {
            name: "ECLIPSE SPEEDSTER R-8",
            image: "images/moto2.png",
            category: "rapido",
            angles: [{ view: "Frontal", image: "images/moto2.png" }],
            specs: { "Peso": "950 kg", "Velocidad": "18,500 km/h", "Motor": "Fotones", "0-100": "0.4s", "Autonomía": "4000km", "Aerodinámica": "Variable" },
            description: "Tan rápida que apenas se ve. El Eclipse Speedster es un borrón en el espacio."
        },
        {
            name: "COSMIC BLADE T-6",
            image: "images/moto3.png",
            category: "ligero",
            angles: [{ view: "Frontal", image: "images/moto3.png" }],
            specs: { "Peso": "1,100 kg", "Velocidad": "16,800 km/h", "Motor": "Pulso", "0-100": "0.6s", "Autonomía": "6000km", "Manejo": "Neuronal" },
            description: "Corta el vacío como una cuchilla. Maniobrabilidad excepcional para carreras de obstáculos."
        },
        {
            name: "PHOTON GLIDER X-1",
            image: "images/moto4.png",
            category: "ligero",
            angles: [{ view: "Frontal", image: "images/moto4.png" }],
            specs: { "Peso": "850 kg", "Velocidad": "20,000 km/h", "Motor": "EM", "0-100": "0.3s", "Autonomía": "8000km", "Suspensión": "Magnética" },
            description: "Deslízate sobre ondas de luz. El Photon Glider ofrece una experiencia de conducción suave y silenciosa."
        },
        {
            name: "ASTRO BIKE A-1",
            image: "images/moto1.png",
            category: "pesado",
            angles: [{ view: "Frontal", image: "images/moto1.png" }],
            specs: { "Peso": "1,500 kg", "Velocidad": "12,000 km/h", "Motor": "Fusión", "0-100": "0.8s", "Autonomía": "10000km", "Confort": "Premium" },
            description: "Una moto de turismo espacial. Construida para durar y recorrer largas distancias con comodidad."
        },
        {
            name: "NEBULA RIDER N-7",
            image: "images/moto2.png",
            category: "rapido",
            angles: [{ view: "Frontal", image: "images/moto2.png" }],
            specs: { "Peso": "1,000 kg", "Velocidad": "17,000 km/h", "Motor": "Plasma", "0-100": "0.5s", "Autonomía": "5500km", "Escudos": "Ligeros" },
            description: "Diseñada para navegar a través de nubes de gas nebular sin perder potencia."
        },
        {
            name: "VOID STREAK V-S",
            image: "images/moto3.png",
            category: "ligero",
            angles: [{ view: "Frontal", image: "images/moto3.png" }],
            specs: { "Peso": "900 kg", "Velocidad": "19,000 km/h", "Motor": "Antimateria", "0-100": "0.35s", "Autonomía": "4500km", "Reacción": "Instantánea" },
            description: "Una racha de luz en la oscuridad. Extremadamente ligera y rápida."
        },
        {
            name: "GRAVITY SURFER G-9",
            image: "images/moto4.png",
            category: "pesado",
            angles: [{ view: "Frontal", image: "images/moto4.png" }],
            specs: { "Peso": "1,300 kg", "Velocidad": "14,000 km/h", "Motor": "Gravitón", "0-100": "0.7s", "Autonomía": "7000km", "Adherencia": "Universal" },
            description: "Utiliza ondas gravitacionales para propulsarse. Puede adherirse a superficies verticales."
        },
        {
            name: "SOLAR FLARE S-F",
            image: "images/moto1.png",
            category: "rapido",
            angles: [{ view: "Frontal", image: "images/moto1.png" }],
            specs: { "Peso": "1,150 kg", "Velocidad": "16,500 km/h", "Motor": "Solar", "0-100": "0.6s", "Autonomía": "Ilimitada", "Paneles": "Desplegables" },
            description: "Recarga sus baterías directamente de las estrellas cercanas. Alcance teóricamente infinito."
        },
        {
            name: "COMET CHASER C-C",
            image: "images/moto2.png",
            category: "ligero",
            angles: [{ view: "Frontal", image: "images/moto2.png" }],
            specs: { "Peso": "880 kg", "Velocidad": "19,500 km/h", "Motor": "Híbrido", "0-100": "0.4s", "Autonomía": "6500km", "Chasis": "Carbono" },
            description: "Ágil y resistente, perfecta para perseguir cometas y esquivar escombros espaciales."
        }
    ],
    estructuras: [
        {
            name: "OMEGA STATION ALPHA",
            image: "images/estructura1.png",
            category: "pesado",
            angles: [{ view: "General", image: "images/estructura1.png" }, { view: "Muelles", image: "images/estructura1.png" }],
            specs: { "Peso": "8.5M t", "Diámetro": "25 km", "Habitantes": "500k", "Defensa": "Escudos EM", "Tipo": "Comercial", "Muelles": "500", "Economía": "AAA" },
            description: "El centro de comercio más grande del sector. Un crisol de culturas y mercancías de toda la galaxia."
        },
        {
            name: "TITAN FORGE COMPLEX",
            image: "images/estructura2.png",
            category: "pesado",
            angles: [{ view: "General", image: "images/estructura2.png" }],
            specs: { "Peso": "12M t", "Largo": "40 km", "Trabajadores": "100k", "Defensa": "Torretas", "Tipo": "Industrial", "Producción": "1 Nave/Día", "Recursos": "Asteroides" },
            description: "Donde nacen los gigantes. Este astillero puede construir acorazados estelares desde cero."
        },
        {
            name: "CELESTIAL CITADEL",
            image: "images/estructura3.png",
            category: "pesado",
            angles: [{ view: "General", image: "images/estructura3.png" }],
            specs: { "Peso": "15M t", "Altura": "35 km", "Habitantes": "1M", "Defensa": "Planetaria", "Tipo": "Militar", "Armamento": "Cañón Orbital", "Seguridad": "Nivel 10" },
            description: "El bastión inexpugnable del comando central. Una ciudad flotante dedicada a la defensa."
        },
        {
            name: "NEXUS GATEWAY PRIME",
            image: "images/estructura4.png",
            category: "pesado",
            angles: [{ view: "General", image: "images/estructura4.png" }],
            specs: { "Peso": "20M t", "Largo": "50 km", "Operadores": "200k", "Defensa": "Distorsión", "Tipo": "Portal", "Destinos": "100+", "Estabilidad": "99.9%" },
            description: "La puerta a otros mundos. Este anillo masivo estabiliza agujeros de gusano para el viaje instantáneo."
        },
        {
            name: "LUNAR OUTPOST L-1",
            image: "images/estructura1.png",
            category: "ligero",
            angles: [{ view: "General", image: "images/estructura1.png" }],
            specs: { "Peso": "2M t", "Diámetro": "5 km", "Habitantes": "5k", "Defensa": "Láser", "Tipo": "Investigación", "Gravedad": "Artificial", "Atmósfera": "Reciclada" },
            description: "Una base científica en la superficie lunar. Dedicada a la observación del espacio profundo."
        },
        {
            name: "SOLAR ARRAY S-9",
            image: "images/estructura2.png",
            category: "ligero",
            angles: [{ view: "General", image: "images/estructura2.png" }],
            specs: { "Peso": "5M t", "Envergadura": "100 km", "Energía": "10PW", "Defensa": "Drones", "Tipo": "Energía", "Eficiencia": "98%", "Transmisión": "Microondas" },
            description: "Recoge la energía de la estrella local y la transmite a los planetas habitados."
        },
        {
            name: "ASTEROID MINING RIG",
            image: "images/estructura3.png",
            category: "pesado",
            angles: [{ view: "General", image: "images/estructura3.png" }],
            specs: { "Peso": "10M t", "Altura": "15 km", "Robots": "50k", "Defensa": "Escudos", "Tipo": "Minería", "Extracción": "500t/h", "Refinería": "Integrada" },
            description: "Anclada a un asteroide rico en minerales, esta plataforma extrae recursos las 24 horas."
        },
        {
            name: "DEEP SPACE HUB",
            image: "images/estructura4.png",
            category: "pesado",
            angles: [{ view: "General", image: "images/estructura4.png" }],
            specs: { "Peso": "18M t", "Diámetro": "30 km", "Pasajeros": "800k", "Defensa": "Flota", "Tipo": "Tránsito", "Servicios": "Completos", "Ocio": "Casinos/Hoteles" },
            description: "Una parada obligatoria para los viajeros interestelares. Hoteles, casinos y puertos espaciales."
        },
        {
            name: "CLOUD CITY C-7",
            image: "images/estructura1.png",
            category: "ligero",
            angles: [{ view: "General", image: "images/estructura1.png" }],
            specs: { "Peso": "4M t", "Diámetro": "10 km", "Habitantes": "100k", "Defensa": "Atmósfera", "Tipo": "Residencial", "Altitud": "50km", "Vistas": "Panorámicas" },
            description: "Flota en las capas altas de la atmósfera de un gigante gaseoso. Vistas espectaculares."
        },
        {
            name: "RESEARCH RING R-X",
            image: "images/estructura2.png",
            category: "ligero",
            angles: [{ view: "General", image: "images/estructura2.png" }],
            specs: { "Peso": "6M t", "Diámetro": "20 km", "Científicos": "20k", "Defensa": "Ocultación", "Tipo": "Laboratorio", "Campo": "Física Cuántica", "Peligro": "Alto" },
            description: "Un acelerador de partículas del tamaño de una ciudad para experimentos de física cuántica."
        },
        {
            name: "ORBITAL RING MEGASTRUCTURE",
            image: "images/estructura5.png",
            category: "pesado",
            angles: [{ view: "General", image: "images/estructura5.png" }],
            specs: { "Peso": "30M t", "Diámetro": "45 km", "Habitantes": "2M", "Defensa": "Escudo Orbital", "Tipo": "Megaestructura", "Conexión": "Ascensor Espacial", "Energía": "Solar" },
            description: "Un anillo orbital masivo que rodea completamente el planeta, sirviendo como puerto espacial y ciudad orbital."
        },
        {
            name: "GENESIS SHIPYARD",
            image: "images/estructura6.png",
            category: "pesado",
            angles: [{ view: "General", image: "images/estructura6.png" }],
            specs: { "Peso": "25M t", "Largo": "60 km", "Trabajadores": "150k", "Defensa": "Drones", "Tipo": "Construcción", "Capacidad": "10 Naves", "Tecnología": "Nanoconstrucción" },
            description: "El astillero más avanzado de la galaxia. Capaz de construir 10 naves simultáneamente con tecnología de última generación."
        },
        {
            name: "ELYSIUM HABITAT CYLINDER",
            image: "images/estructura7.png",
            category: "pesado",
            angles: [{ view: "General", image: "images/estructura7.png" }],
            specs: { "Peso": "22M t", "Longitud": "32 km", "Habitantes": "1.5M", "Defensa": "Atmósfera", "Tipo": "Hábitat", "Clima": "Controlado", "Biomas": "Diversos" },
            description: "Un cilindro rotatorio O'Neill con gravedad artificial. Jardines, ciudades y ecosistemas completos en el espacio."
        },
        {
            name: "BASTION DEFENSE FORTRESS",
            image: "images/estructura8.png",
            category: "pesado",
            angles: [{ view: "General", image: "images/estructura8.png" }],
            specs: { "Peso": "35M t", "Altura": "50 km", "Tropas": "500k", "Defensa": "Arsenal Completo", "Tipo": "Militar", "Blindaje": "Neutronio", "Poder": "Destructor de Planetas" },
            description: "La fortaleza defensiva definitiva. Armada hasta los dientes con las armas más letales conocidas."
        }
    ],
    edificios: [
        {
            name: "SKYSPIRE TOWER",
            image: "images/edificio1.png",
            category: "ligero",
            angles: [{ view: "Frontal", image: "images/edificio1.png" }],
            specs: { "Altura": "2 km", "Pisos": "400", "Habitantes": "50k", "Energía": "Solar", "Tipo": "Residencial", "Ascensores": "Maglev", "Jardines": "Colgantes" },
            description: "Un rascacielos vanguardista que toca las nubes. Con tecnología holográfica y plataformas flotantes."
        },
        {
            name: "APOLLO RESEARCH COMPLEX",
            image: "images/edificio2.png",
            category: "pesado",
            angles: [{ view: "Frontal", image: "images/edificio2.png" }],
            specs: { "Área": "5 km²", "Laboratorios": "200", "Científicos": "10k", "Energía": "Fusión", "Tipo": "Investigación", "Seguridad": "Biológica N4", "Red": "Cuántica" },
            description: "Centro de investigación con domos interconectados. Escudos de energía protegen los experimentos más peligrosos."
        },
        {
            name: "PYRAMID ARCOLOGY",
            image: "images/edificio3.png",
            category: "pesado",
            angles: [{ view: "Frontal", image: "images/edificio3.png" }],
            specs: { "Altura": "1.5 km", "Habitantes": "100k", "Energía": "Geotérmica", "Jardines": "50", "Tipo": "Arcología", "Autosuficiencia": "100%", "Reciclaje": "Total" },
            description: "Una ciudad completa en forma de pirámide. Autosuficiente con jardines verticales y núcleos de energía."
        },
        {
            name: "MILITARY COMMAND HQ",
            image: "images/edificio4.png",
            category: "pesado",
            angles: [{ view: "Frontal", image: "images/edificio4.png" }],
            specs: { "Altura": "800 m", "Personal": "20k", "Defensa": "Máxima", "Comunicación": "Cuántica", "Tipo": "Militar", "Búnker": "Subterráneo", "Radar": "Planetario" },
            description: "Cuartel general militar fortificado. Arquitectura brutalist con escudos defensivos y arrays de comunicación."
        },
        {
            name: "NOVA UNIVERSITY CAMPUS",
            image: "images/edificio1.png",
            category: "ligero",
            angles: [{ view: "Frontal", image: "images/edificio1.png" }],
            specs: { "Edificios": "20", "Estudiantes": "30k", "Hologramas": "Sí", "Energía": "Solar", "Tipo": "Educación", "Biblioteca": "Digital Universal", "Laboratorios": "VR" },
            description: "Campus universitario con edificios flotantes conectados por puentes de energía. Educación del futuro."
        },
        {
            name: "GENESIS MEDICAL CENTER",
            image: "images/edificio2.png",
            category: "ligero",
            angles: [{ view: "Frontal", image: "images/edificio2.png" }],
            specs: { "Altura": "600 m", "Camas": "5k", "Médicos": "2k", "Tecnología": "Nano-Med", "Tipo": "Salud", "Quirófanos": "Robóticos", "Regeneración": "Celular" },
            description: "Centro médico ultramoderno con energía curativa. Nanobots médicos y jardines terapéuticos en terrazas."
        },
        {
            name: "CYBER ENTERTAINMENT DOME",
            image: "images/edificio3.png",
            category: "ligero",
            angles: [{ view: "Frontal", image: "images/edificio3.png" }],
            specs: { "Capacidad": "100k", "Hologramas": "8K", "Energía": "Renovable", "Áreas": "15", "Tipo": "Entretenimiento", "Sonido": "Inmersivo 360", "Eventos": "Diarios" },
            description: "Megadomo de entretenimiento con la mejor tecnología holográfica. Conciertos, deportes y espectáculos épicos."
        },
        {
            name: "TRADING HUB MARKET",
            image: "images/edificio4.png",
            category: "pesado",
            angles: [{ view: "Frontal", image: "images/edificio4.png" }],
            specs: { "Área": "10 km²", "Comercios": "10k", "Visitantes": "500k/día", "Energía": "Solar", "Tipo": "Comercial", "Moneda": "Universal", "Transporte": "Teletransportadores" },
            description: "El centro comercial más grande del planeta. Miles de tiendas con tecnología de realidad aumentada."
        },
        {
            name: "GOVERNMENT CITADEL",
            image: "images/edificio1.png",
            category: "pesado",
            angles: [{ view: "Frontal", image: "images/edificio1.png" }],
            specs: { "Altura": "1 km", "Oficinas": "5k", "Empleados": "50k", "Seguridad": "Máxima", "Tipo": "Gobierno", "Sala": "Consejo Supremo", "Archivos": "Clasificados" },
            description: "Sede del gobierno planetario. Diseño imponente con tecnología de comunicación interestelar."
        },
        {
            name: "ECO-DOME SANCTUARY",
            image: "images/edificio2.png",
            category: "ligero",
            angles: [{ view: "Frontal", image: "images/edificio2.png" }],
            specs: { "Diámetro": "2 km", "Flora": "10k especies", "Fauna": "5k especies", "Energía": "Autónoma", "Tipo": "Ecológico", "Clima": "Tropical", "Investigación": "Genética" },
            description: "Santuario ecológico con domo transparente. Preserva especies en peligro con ecosistemas controlados."
        }
    ],
    especies: [
        {
            name: "LUMINARIAN ELDER",
            image: "images/especie1.png",
            category: "inteligente",
            angles: [{ view: "Frontal", image: "images/especie1.png" }],
            specs: { "Origen": "Nebula X", "Vida": "1000 años", "Habilidad": "Telepatía", "Altura": "2.5m", "Dieta": "Energía Pura", "Cultura": "Pacífica" },
            description: "Seres de energía pura que han trascendido la materia física. Guardianes de la sabiduría galáctica."
        },
        {
            name: "CYBER-SAPIEN MK-IV",
            image: "images/especie2.png",
            category: "cibernetico",
            angles: [{ view: "Frontal", image: "images/especie2.png" }],
            specs: { "Origen": "Terra Prime", "Vida": "Indefinida", "Mejoras": "90% Cuerpo", "Procesador": "Cuántica", "Fuerza": "Sobrehumana", "Red": "Conectada" },
            description: "Humanos que han fusionado su biología con tecnología avanzada para sobrevivir en entornos hostiles."
        },
        {
            name: "VOID WRAITH",
            image: "images/especie3.png",
            category: "misterioso",
            angles: [{ view: "Frontal", image: "images/especie3.png" }],
            specs: { "Origen": "Desconocido", "Estado": "Etéreo", "Peligro": "Alto", "Habilidad": "Intangibilidad", "Comunicación": "Nula", "Habitat": "Espacio Profundo" },
            description: "Entidades misteriosas que habitan en el vacío entre las estrellas. Se sabe poco sobre sus intenciones."
        },
        {
            name: "XENON WARRIOR",
            image: "images/especie4.png",
            category: "guerrero",
            angles: [{ view: "Frontal", image: "images/especie4.png" }],
            specs: { "Origen": "Krypton-Z", "Altura": "3m", "Fuerza": "Clase 10", "Armadura": "Quitina", "Honor": "Código Estricto", "Armas": "Bio-Plasma" },
            description: "Una raza de guerreros orgullosos con exoesqueletos naturales. Famosos por su lealtad y destreza en combate."
        }
    ]
};

let currentSection = 'naves';
let currentFilter = 'all';
let searchTerm = '';

document.addEventListener('DOMContentLoaded', () => {
    setupSplashScreen();
    createStarfield();
    updateStats();
    loadSection('naves');
    setupEventListeners();
    setupDarkMode();
    setupThemeSelector();
    setupBackgroundSelector();
});

function setupSplashScreen() {
    const btn = document.getElementById('start-adventure-btn');
    const splash = document.getElementById('splash-screen');

    if (btn && splash) {
        btn.addEventListener('click', () => {
            splash.classList.add('hidden');
            setTimeout(() => {
                splash.style.display = 'none';
            }, 1000);
        });
    }
}

function setupThemeSelector() {
    const themeOptions = document.querySelectorAll('.theme-option');
    const savedTheme = localStorage.getItem('theme') || 'default';

    // Apply saved theme
    document.body.setAttribute('data-theme', savedTheme);

    themeOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const theme = option.getAttribute('data-theme');
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    });
}

function setupDarkMode() {
    const toggleBtn = document.getElementById('dark-mode-toggle');
    const savedMode = localStorage.getItem('darkMode');

    if (savedMode === 'light') {
        document.body.classList.add('light-mode');
        toggleBtn.textContent = '🌙';
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            toggleBtn.textContent = isLight ? '🌙' : '☀️';
            localStorage.setItem('darkMode', isLight ? 'light' : 'dark');
        });
    }
}

function setupBackgroundSelector() {
    const bgOptions = document.querySelectorAll('[data-bg]');
    const savedBg = localStorage.getItem('bg') || 'default';

    document.body.setAttribute('data-bg', savedBg);

    bgOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const bg = option.getAttribute('data-bg');
            document.body.setAttribute('data-bg', bg);
            localStorage.setItem('bg', bg);
        });
    });
}

function setupEventListeners() {
    // Dropdown navigation for sections
    document.querySelectorAll('.dropdown-content a[data-section]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('data-section');
            loadSection(section);
        });
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            filterVehicles();
        });
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentFilter = e.target.getAttribute('data-filter');
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterVehicles();
        });
    });

    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const view = e.target.getAttribute('data-view');
            const grid = document.getElementById('vehicles-container');
            if (view === 'list') {
                grid.classList.add('list-view');
            } else {
                grid.classList.remove('list-view');
            }
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
}

function createStarfield() {
    const background = document.querySelector('.background-animation');
    const starCount = 80;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${2 + Math.random() * 2}s, ${8 + Math.random() * 6}s`;
        const size = 4 + Math.random() * 4;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        background.appendChild(star);
    }
}

function updateStats() {
    const total = vehiclesData.naves.length + vehiclesData.motos.length + vehiclesData.estructuras.length + vehiclesData.edificios.length + vehiclesData.especies.length;
    animateCounter('total-vehicles', total);
    animateCounter('total-ships', vehiclesData.naves.length);
    animateCounter('total-bikes', vehiclesData.motos.length);
    animateCounter('total-structures', vehiclesData.estructuras.length);
    animateCounter('total-buildings', vehiclesData.edificios.length);
}

function animateCounter(id, target) {
    const element = document.getElementById(id);
    if (!element) return;

    let current = 0;
    const increment = Math.max(1, target / 50);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

function loadSection(section) {
    currentSection = section;
    currentFilter = 'all';
    searchTerm = '';

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';

    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');

    const titles = {
        'naves': 'NAVES ESPACIALES',
        'motos': 'MOTOS ESPACIALES',
        'estructuras': 'ESTRUCTURAS GIGANTES',
        'edificios': 'EDIFICIOS FUTURISTAS',
        'especies': 'ESPECIES ALIENÍGENAS'
    };

    const descriptions = {
        'naves': 'Explora nuestra flota de naves interestelares de última generación equipadas con tecnología de vanguardia',
        'motos': 'Vehículos personales de alta velocidad diseñados para desplazamientos rápidos en el espacio',
        'estructuras': 'Megaestructuras que redefinen los límites de la ingeniería y arquitectura espacial',
        'edificios': 'Edificios y complejos arquitectónicos que transforman el paisaje de las ciudades del futuro',
        'especies': 'Conoce las diversas formas de vida inteligente que habitan en los confines de la galaxia conocida'
    };

    document.querySelector('.section-title').textContent = titles[section] || 'CATÁLOGO';
    document.querySelector('.section-description').textContent = descriptions[section] || 'Explora nuestro catálogo completo';

    const container = document.getElementById('vehicles-container');
    container.style.opacity = '0';

    setTimeout(() => {
        container.innerHTML = '';
        const vehicles = vehiclesData[section] || [];

        vehicles.forEach((vehicle, index) => {
            const card = createVehicleCard(vehicle, index);
            container.appendChild(card);
        });

        container.style.opacity = '1';
    }, 200);
}

function filterVehicles() {
    const allCards = document.querySelectorAll('.vehicle-card');
    const vehicles = vehiclesData[currentSection];

    allCards.forEach((card, index) => {
        const vehicle = vehicles[index];
        if (!vehicle) return;

        const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm);
        const matchesFilter = currentFilter === 'all' || vehicle.category === currentFilter;

        if (matchesSearch && matchesFilter) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

function createVehicleCard(vehicle, index) {
    const card = document.createElement('div');
    card.className = 'vehicle-card';

    const img = document.createElement('img');
    img.className = 'vehicle-image';
    img.src = vehicle.image;
    img.alt = vehicle.name;
    img.loading = 'lazy';

    img.onerror = function () {
        const fallback = document.createElement('div');
        fallback.className = 'vehicle-image';
        fallback.style.background = `linear-gradient(135deg, hsl(${270 + index * 20}, 70%, ${40 + index * 5}%), hsl(${290 + index * 15}, 60%, ${30 + index * 5}%))`;
        fallback.style.display = 'flex';
        fallback.style.alignItems = 'center';
        fallback.style.justifyContent = 'center';
        fallback.style.fontSize = '5rem';
        fallback.innerHTML = getVehicleIcon(currentSection);
        this.replaceWith(fallback);
    };

    const info = document.createElement('div');
    info.className = 'vehicle-info';

    const name = document.createElement('h3');
    name.className = 'vehicle-name';
    name.textContent = vehicle.name;

    const specs = document.createElement('div');
    specs.className = 'vehicle-specs';

    const specKeys = Object.keys(vehicle.specs).slice(0, 3);
    specKeys.forEach(key => {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';

        const label = document.createElement('span');
        label.className = 'spec-label';
        label.textContent = key;

        const value = document.createElement('span');
        value.className = 'spec-value';
        value.textContent = vehicle.specs[key];

        specItem.appendChild(label);
        specItem.appendChild(value);
        specs.appendChild(specItem);
    });

    info.appendChild(name);
    info.appendChild(specs);
    card.appendChild(img);
    card.appendChild(info);

    // Use addEventListener instead of inline onclick
    card.addEventListener('click', () => openModal(vehicle));

    return card;
}

function getVehicleIcon(section) {
    const icons = {
        'naves': '⭐',
        'motos': '✨',
        'estructuras': '🌟',
        'edificios': '🏢',
        'especies': '👽'
    };
    return icons[section] || '💫';
}

function openModal(vehicle) {
    const modal = document.getElementById('vehicle-modal');
    const modalContent = modal.querySelector('.modal-content');

    // Generar miniaturas de ángulos
    const thumbnailsHtml = vehicle.angles ? vehicle.angles.map((angle, idx) => `
    <div class="thumbnail ${idx === 0 ? 'active' : ''}" data-image="${angle.image}">
      <img src="${angle.image}" alt="${angle.view}">
      <span>${angle.view}</span>
    </div>
  `).join('') : '';

    modalContent.innerHTML = `
    <span class="modal-close">&times;</span>
    
    <div class="modal-gallery">
      <div class="gallery-main">
        <img id="main-modal-image" src="${vehicle.image}" alt="${vehicle.name}" 
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
        <div class="fallback-icon" style="display:none; font-size: 6rem;">
            ${getVehicleIcon(currentSection)}
        </div>
      </div>
      <div class="gallery-thumbnails">
        ${thumbnailsHtml}
      </div>
    </div>

    <div class="modal-info-container">
      <h2 class="modal-title">${vehicle.name}</h2>
      
      <div class="modal-specs-grid">
        ${Object.keys(vehicle.specs).map(key => `
          <div class="spec-item">
            <span class="spec-label">${key}</span>
            <span class="spec-value">${vehicle.specs[key]}</span>
          </div>
        `).join('')}
      </div>

      <div class="modal-description">
        <p>${vehicle.description || "Información clasificada."}</p>
      </div>
    </div>
  `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Add event listeners for close button
    const closeBtn = modalContent.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeModal);

    // Add event listeners for thumbnails
    modalContent.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function () {
            const imageUrl = this.getAttribute('data-image');
            changeVehicleView(this, imageUrl);
        });
    });

    // Close on outside click
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };

    // Close on Escape key
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

function changeVehicleView(thumbnail, imageUrl) {
    // Actualizar imagen principal
    const mainImage = document.getElementById('main-modal-image');
    mainImage.style.opacity = '0';
    setTimeout(() => {
        mainImage.src = imageUrl;
        mainImage.style.opacity = '1';
    }, 200);

    // Actualizar estado activo de miniaturas
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('vehicle-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}
