// Objeto con las traducciones (kept from the original script)
const translations = {
    es: {
        // Navigation
        language: "Idioma",
        
        // Hero Section
        welcome: "Bienvenidos a Quiquelandya",
        subtitle: "Un lugar donde la naturaleza y el bienestar se unen para brindarte una experiencia inolvidable.",
        discoverMore: "Descubre más",
        
        // Services Section
        ourServices: "Nuestros Servicios",
        cabins: "Cabañas",
        cabinsDesc: "Confort y naturaleza en nuestras cabañas.",
        pools: "Parque acuático",
        poolsDesc: "Relájate en nuestras amplias piletas.",
        aerialPark: "Parque Aéreo",
        aerialParkDesc: "Aventura en las alturas con seguridad garantizada.",
        campingZone: "Zona de Camping",
        campingZoneDesc: "Perfecto para instalar tu carpa.",
        motorhomesZone: "Zona de Motorhomes",
        motorhomesZoneDesc: "Espacio perfecto para acampar en tu motorhome.",
        eventHalls: "Salones de eventos",
        eventHallsDesc: "Espacios perfectos para tus momentos especiales.",
        
        // Gallery Section
        ourFacilities: "Nuestras Instalaciones",
        relaxationAndComfort: "Relajación y Confort",
        relaxationDesc: "Elegantes reposeras junto a la piscina, ideales para disfrutar de un momento de descanso y comodidad.",
        outdoorGames: "Juegos al Aire Libre",
        outdoorGamesDesc: "Espacio de juego perfecto para los niños.",
        adaptedBathrooms: "Baños Adaptados",
        adaptedBathroomsDesc: "Instalaciones accesibles y vestidores para la comodidad de todos.",
        
        // Location Section
        location: "Ubicación",
        
        // Contact Section
        bookNow: "¡Reservá Ahora!",
        namePlaceholder: "Nombre",
        emailPlaceholder: "Correo Electrónico",
        messagePlaceholder: "¡Hola quiero hacer una reserva de [cabañas, salones de eventos, espacios de camping, espacios de motorhomes]!",
        sendWhatsapp: "Enviar Whatsapp",
        
        // Footer
        copyright: "©2024. Desarrollado exclusivamente para Quiquelandya por Camila Galvez. Todos los derechos reservados.",
        
        // Service Buttons
        viewMore: "Ver más"
    },
    en: {
        // Navigation
        language: "Language",
        
        // Hero Section
        welcome: "Welcome to Quiquelandya",
        subtitle: "A place where nature and wellness come together to provide you with an unforgettable experience.",
        discoverMore: "Discover More",
        
        // Services Section
        ourServices: "Our Services",
        cabins: "Cabins",
        cabinsDesc: "Comfort and nature in our cabins.",
        pools: "Water Park",
        poolsDesc: "Relax in our wide pools.",
        aerialPark: "Aerial Park",
        aerialParkDesc: "Safe adventure at height.",
        campingZone: "Camping Area",
        campingZoneDesc: "Perfect for setting up your tent.",
        motorhomesZone: "Motorhomes Zone",
        motorhomesZoneDesc: "Perfect space to camp in your motorhome.",
        eventHalls: "Event Halls",
        eventHallsDesc: "Perfect spaces for your special moments.",
        
        // Gallery Section
        ourFacilities: "Our Facilities",
        relaxationAndComfort: "Relaxation and Comfort",
        relaxationDesc: "Elegant loungers by the pool, ideal for enjoying a moment of rest and comfort.",
        outdoorGames: "Outdoor Games",
        outdoorGamesDesc: "Perfect play space for children.",
        adaptedBathrooms: "Adapted Bathrooms",
        adaptedBathroomsDesc: "Accessible facilities and changing rooms for everyone's comfort.",
        
        // Location Section
        location: "Location",
        
        // Contact Section
        bookNow: "Book Now!",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        messagePlaceholder: "Hello, I want to make a reservation for [cabins, event halls, camping spaces, motorhome spaces]!",
        sendWhatsapp: "Send Whatsapp",
        
        // Footer
        copyright: "©2024. Developed exclusively for Quiquelandya by Camila Galvez. All rights reserved.",
        
        // Service Buttons
        viewMore: "View More"
    },
    pt: {
        // Navigation
        language: "Idioma",
        
        // Hero Section
        welcome: "Bem-vindo ao Quiquelandya",
        subtitle: "Um lugar onde a natureza e o bem-estar se unem para oferecer uma experiência inesquecível.",
        discoverMore: "Descubra Mais",
        
        // Services Section
        ourServices: "Nossos Serviços",
        cabins: "Cabanas",
        cabinsDesc: "Conforto e natureza em nossas cabanas.",
        pools: "Parque Aquático",
        poolsDesc: "Relaxe em nossas amplas piscinas.",
        aerialPark: "Parque Aéreo",
        aerialParkDesc: "Aventura segura nas alturas.",
        campingZone: "Área de Camping",
        campingZoneDesc: "Perfeito para montar sua tenda.",
        motorhomesZone: "Zona de Motorhomes",
        motorhomesZoneDesc: "Espaço perfeito para acampar em sua motorhome.",
        eventHalls: "Salões de Eventos",
        eventHallsDesc: "Espaços perfeitos para seus momentos especiais.",
        
        // Gallery Section
        ourFacilities: "Nossas Instalações",
        relaxationAndComfort: "Relaxamento e Conforto",
        relaxationDesc: "Espreguiçadeiras elegantes ao lado da piscina, ideais para aproveitar um momento de descanso e conforto.",
        outdoorGames: "Jogos ao Ar Livre",
        outdoorGamesDesc: "Espaço de jogo perfeito para crianças.",
        adaptedBathrooms: "Banheiros Adaptados",
        adaptedBathroomsDesc: "Instalações acessíveis e vestiários para o conforto de todos.",
        
        // Location Section
        location: "Localização",
        
        // Contact Section
        bookNow: "Reserve Agora!",
        namePlaceholder: "Nome",
        emailPlaceholder: "E-mail",
        messagePlaceholder: "Olá, quero fazer uma reserva para [cabanas, salões de eventos, espaços de camping, espaços de motorhomes]!",
        sendWhatsapp: "Enviar Whatsapp",
        
        // Footer
        copyright: "©2024. Desenvolvido exclusivamente para Quiquelandya por Camila Galvez. Todos os direitos reservados.",
        
        // Service Buttons
        viewMore: "Ver Mais"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const languageContainer = document.querySelector('.language-container');
    const currentLangElement = document.querySelector('.current-lang');
    const langOptions = document.querySelectorAll('.lang-option');

    function translatePage(lang) {
        const translation = translations[lang];
        
        try {
            // Navigation
            if (currentLangElement) currentLangElement.textContent = lang.toUpperCase();
            document.querySelector('#language').textContent = translation.language;
            
            // Hero Section
            const welcomeTitle = document.querySelector('#welcome h1');
            if (welcomeTitle) welcomeTitle.textContent = translation.welcome;
            
            const heroSubtitle = document.querySelector('#welcome .lead');
            if (heroSubtitle) heroSubtitle.textContent = translation.subtitle;
            
            const discoverMoreBtn = document.querySelector('#welcome .btn-primary');
            if (discoverMoreBtn) discoverMoreBtn.textContent = translation.discoverMore;
            
            // Services Section
            const servicesTitle = document.querySelector('#services h2');
            if (servicesTitle) servicesTitle.textContent = translation.ourServices;
            
            // Service Items
            const serviceItems = document.querySelectorAll('.service-item');
            const serviceDetails = [
                { title: translation.cabins, desc: translation.cabinsDesc },
                { title: translation.pools, desc: translation.poolsDesc },
                { title: translation.aerialPark, desc: translation.aerialParkDesc },
                { title: translation.campingZone, desc: translation.campingZoneDesc },
                { title: translation.motorhomesZone, desc: translation.motorhomesZoneDesc },
                { title: translation.eventHalls, desc: translation.eventHallsDesc }
            ];
            
            serviceItems.forEach((item, index) => {
                const titleEl = item.querySelector('.overlay h3');
                const descEl = item.querySelector('.overlay p');
                const btnEl = item.querySelector('.btn-ver-mas');
                
                if (titleEl) titleEl.textContent = serviceDetails[index].title;
                if (descEl) descEl.textContent = serviceDetails[index].desc;
                if (btnEl) btnEl.textContent = translation.viewMore;
            });
            
            // Gallery Section
            const galleryTitle = document.querySelector('#gallery h2');
            if (galleryTitle) galleryTitle.textContent = translation.ourFacilities;
            
            // Carousel Captions
            const carouselCaptions = document.querySelectorAll('.carousel-caption');
            const carouselDetails = [
                { title: translation.relaxationAndComfort, desc: translation.relaxationDesc },
                { title: translation.outdoorGames, desc: translation.outdoorGamesDesc },
                { title: translation.adaptedBathrooms, desc: translation.adaptedBathroomsDesc },
                { title: translation.adaptedBathrooms, desc: translation.adaptedBathroomsDesc }
            ];
            
            carouselCaptions.forEach((caption, index) => {
                const titleEl = caption.querySelector('h3');
                const descEl = caption.querySelector('p');
                
                if (titleEl) titleEl.textContent = carouselDetails[index].title;
                if (descEl) descEl.textContent = carouselDetails[index].desc;
            });
            
            // Location Section
            const locationTitle = document.querySelector('#map h2');
            if (locationTitle) locationTitle.textContent = translation.location;
            
            // Contact Section
            const contactTitle = document.querySelector('#contact h2');
            if (contactTitle) contactTitle.textContent = translation.bookNow;
            
            const contactForm = document.querySelector('#contact form');
            if (contactForm) {
                contactForm.querySelector('input[name="name"]').placeholder = translation.namePlaceholder;
                contactForm.querySelector('input[name="email"]').placeholder = translation.emailPlaceholder;
                contactForm.querySelector('textarea').placeholder = translation.messagePlaceholder;
                contactForm.querySelector('button').textContent = translation.sendWhatsapp;
            }
            
            // Footer
            const footerCopyright = document.querySelector('footer p');
            if (footerCopyright) footerCopyright.textContent = translation.copyright;
            
        } catch (error) {
            console.error("Error traduciendo página:", error);
        }
    }

    // Evento para cambiar idioma
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            translatePage(lang);
            localStorage.setItem('preferredLanguage', lang);
        });
    });

    // Cargar idioma preferido al inicio
    const preferredLang = localStorage.getItem('preferredLanguage') || 'es';
    document.querySelector(`.lang-option[data-lang="${preferredLang}"]`).classList.add('active');
    translatePage(preferredLang);
});
// Datos de las galerías
const galleryData = {
    cabanas: [
        { src: "./img/hike-7486771_1280.jpg", title: "Vista Exterior de las Cabañas", description: "Espaciosa y acogedora" },
        { src: "./img/hike-7486771_1280.jpg", title: "Interior", description: "Diseño moderno y confortable" },
        { src: "./img/hike-7486771_1280.jpg", title: "Baños", description: "Naturaleza en estado puro" }
    ],
    piletas: [
        { src: "./img/pileta1.jpeg", title: "Complejo de Piscinas al Aire Libre", description: "Diversión y relax para todos." },
        { src: "./img/areaRelax.jpeg", title: "Área de Relax", description: "Descanso junto a la piscina" },
        { src: "./img/piletaJuegos.jpeg", title: "Piscina Infantil", description: "Especial para los más pequeños" },
        { src: "./img/piletatobogan.jpeg", title: "Piscina con Tobogán", description: "Diversión asegurada para los más grandes." }
    ],
    aereo: [
        { src: "./img/tirolesas.jpg", title: "Tirolesa Principal", description: "Adrenalina pura" },
        { src: "./img/senderoParque.jpeg", title: "Circuito Aventura", description: "Emocionantes desafíos de cuerda y plataformas entre los árboles." },
        { src: "./img/vistaParqueAereo.jpeg", title: "Vista Panorámica", description: "Una experiencia única" },
        { src: "./img/juegosParqueAereo.jpeg", title: "Juegos en el Camping", description: "Diversión al aire libre con estructuras de madera para los niños." }
    ],
    camping: [
        { src: "./img/camping.jpg", title: "Área de Carpas", description: "Espacio ideal para instalar tu carpa cómodamente." },
        { src: "./img/zonaParrilla.jpg", title: "Área de parrillas", description: "Parrilladas inolvidables en plena naturaleza." },
        { src: "./img/zonaPicnic.jpg", title: "Zona de Picnic", description: "Perfecto para disfrutar de comidas en el exterior." }
    ],
    motorhomes: [
        { src: "./img/exampleMotorhome.jpg", title: "Espacio Premium", description: "Máximo confort para tu motorhome." },
        { src: "./img/exampleMotorhome.jpg", title: "Zona de Relajo", description: "Tranquilidad y comodidad en plena naturaleza." },
        { src: "./img/zonaParrilla.jpg", title: "Área de parrillas", description: "Parrilladas inolvidables en plena naturaleza." },
        { src: "./img/exampleMotorhome.jpg", title: "Área de Descanso", description: "Espacios amplios y seguros para tu motorhome." }
    ],
    salones: [
        { src: "./img/exampleSalones.jpg", title: "Salón Principal", description: "Elegancia y versatilidad para tus celebraciones." },
        { src: "./img/exampleSalones.jpg", title: "Salón de Reuniones", description: "Espacio ideal para encuentros y conferencias." },
        { src: "./img/exampleSalones.jpg", title: "Salón de Banquetes", description: "Perfecto para cenas y eventos especiales." },
        { src: "./img/exampleSalones.jpg", title: "Salón de Fiestas", description: "Diversión asegurada para cualquier ocasión." }
    ]
};
function openGallery(type) {
    const modal = document.getElementById('galleryModal');
    const carousel = document.querySelector('#galleryCarousel .carousel-inner');

    carousel.innerHTML = '';

    galleryData[type].forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        div.innerHTML = `
            <img src="${item.src}" class="d-block w-100" alt="${item.title}">
            <div class="carousel-caption">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        carousel.appendChild(div);
    });

    new bootstrap.Carousel(document.getElementById('galleryCarousel'));
    modal.style.display = 'flex';
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
}

function translatePage(lang) {
    const elements = {
        welcome: document.querySelector('.hero-content h1'),
        subtitle: document.querySelector('.hero-content .lead'),
        discoverMore: document.querySelector('.hero-content .btn-primary'),
        ourServices: document.querySelector('#services h2'),
        languages: document.querySelector("#language")
    };

    // Traducir cada elemento
    for (const [key, element] of Object.entries(elements)) {
        if (element && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    }

    // Traducir servicios
    const services = document.querySelectorAll('.service-item');
    services.forEach((service, index) => {
        const title = service.querySelector('h3');
        const desc = service.querySelector('p');

        if (index === 0) {
            title.textContent = translations[lang].cabins;
            desc.textContent = translations[lang].cabinsDesc;
        } else if (index === 1) {
            title.textContent = translations[lang].pools;
            desc.textContent = translations[lang].poolsDesc;
        } else if (index === 2) {
            title.textContent = translations[lang].aerialPark;
            desc.textContent = translations[lang].aerialParkDesc;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('.language-btn');
    const langMenu = document.querySelector('.language-menu');
    const currentLang = document.querySelector('.current-lang');
    const langOptions = document.querySelectorAll('.lang-option');

    // Toggle del menú de idiomas
    langBtn?.addEventListener('click', () => {
        langMenu?.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!langBtn?.contains(e.target) && !langMenu?.contains(e.target)) {
            langMenu?.classList.remove('active');
        }
    });

    // Cambiar idioma
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            currentLang.textContent = lang.toUpperCase();
            langMenu.classList.remove('active');
            
            translatePage(lang);
            localStorage.setItem('preferredLanguage', lang);
        });
    });

    // Cargar idioma preferido
    const preferredLang = localStorage.getItem('preferredLanguage') || 'es';
    translatePage(preferredLang);
    currentLang.textContent = preferredLang.toUpperCase();
    document.querySelector(`[data-lang="${preferredLang}"]`)?.classList.add('active');

    // Inicializar AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true
        });
    }

    // Barra de progreso
    window.addEventListener('scroll', () => {
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href'))?.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Estilizar el modal
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.zIndex = '1000';
    modal.style.left = '0';
    modal.style.top = '200';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.80)';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';

    const galleryContent = modal.querySelector('.gallery-content');
    galleryContent.style.position = 'relative';
    galleryContent.style.margin = 'auto';
    galleryContent.style.padding = '20px';
    galleryContent.style.width = '100%';
    galleryContent.style.maxWidth = '80%';
    galleryContent.style.maxHeigth = '80%';

    const closeButton = modal.querySelector('.gallery-close');
    closeButton.style.position = 'absolute';
    closeButton.style.right = '30px';
    closeButton.style.top = '15px';
    closeButton.style.fontSize = '40px';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.color = 'white';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.style.zIndex = '1001';

    // Inicialización de la galería
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const types = ['cabanas', 'piletas', 'aereo', 'camping', 'motorhomes', 'salones'];
            openGallery(types[index]);
        });
    });
});
