document.addEventListener("DOMContentLoaded", () => {
    const supportsCustomCursor = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const urlParams = new URLSearchParams(window.location.search);
    const project = urlParams.get("project");

    const galleries = {
        txokoapp: [
            {
                title: "Gestión de stock e inventario",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase",
                plataforma: "#Android #iOS",
                description: "El usuario administrador es el que se encarga de hacer toda la gestión de los productos y categorías de la sociedad.",
                poster: "./assets/img/gallery/txokoapp/8.png",
            },
            {
                title: "Gestor de gastos",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase",
                plataforma: "#Android #iOS",
                description: "Permite hacer cargas de stock, registrar compras de la sociedad e introducir otros gastos como la luz, agua etc…",
                poster: "./assets/img/gallery/txokoapp/7.png",
            },
            {
                title: "Gestor de ingresos",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase",
                plataforma: "#Android #iOS",
                description: "Listado de facturas de las consumiciones generadas por los usuarios. Posibilidad de añadir otros ingresos como la cuotas de socio.",
                poster: "./assets/img/gallery/txokoapp/6.png",
            },
            {
                title: "Contabilidad",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase",
                plataforma: "#Android #iOS",
                description: "Gestión financiera de tu txoko.",
                poster: "./assets/img/gallery/txokoapp/5.png",
            },
            {
                title: "TxokoApp",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase",
                plataforma: "#Android #iOS",
                description: "La aplicación para gestionar tu sociedad | Diseño base de datos, Desarrollo Back & Front, mantenimiento y soporte..",
                poster: "./assets/img/gallery/txokoapp/1.png",
            },
            {
                title: "La sociedad en tu mano",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase",
                plataforma: "#Android #iOS",
                description: "Gestión personalizada de tu sociedad o txoko",
                poster: "./assets/img/gallery/txokoapp/2.png",
            },
            {
                title: "Gestión de reservas",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase",
                plataforma: "#Android #iOS",
                description: "Reserva tu mesa desde donde quieras. Elige días de antelación con los que permitir realizarla.",
                poster: "./assets/img/gallery/txokoapp/4.png",
            },
            {
                title: "Haz tu factura sin levantarte de la mesa",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase",
                plataforma: "#Android #iOS",
                description: "Ya no tendrás que realizar cálculos a mano. Podrás hacer tu factura sin levantarte de la mesa. Ten un control absoluto sobre lo que se consume y haz que no falte una sola unidad.",
                poster: "./assets/img/gallery/txokoapp/9.png",
            },
            {
                title: "Ayuda",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase",
                plataforma: "#Android #iOS",
                description: "Ayuda y resolución con tutoriales online.",
                poster: "./assets/img/gallery/txokoapp/3.png",
            },
        ],
        coordinacion: [
            {
                title: "Firma digital de documentos",
                year: "Plataforma web",
                lenguaje: "#PHP #Laravel #MySql #Tailwind",
                plataforma: "<a class='enlaceproyecto' href='https://cae.margube.com'><i class='bi bi-link-45deg'></i>Link</a>",
                description: "La plataforma permite firmar digitalmente los documentos que se necesite.",
                poster: "./assets/img/gallery/cae/4.png",
            },
            {
                title: "Histórico documentación",
                year: "Plataforma web",
                lenguaje: "#PHP #Laravel #MySql #Tailwind",
                plataforma: "<a class='enlaceproyecto' href='https://cae.margube.com'><i class='bi bi-link-45deg'></i>Link</a>",
                description: "Registro sobre toda acción realizada en un documento.",
                poster: "./assets/img/gallery/cae/3.png",
            },
            {
                title: "Documentación",
                year: "Plataforma web",
                lenguaje: "#PHP #Laravel #MySql #Tailwind",
                plataforma: "<a class='enlaceproyecto' href='https://cae.margube.com'><i class='bi bi-link-45deg'></i>Link</a>",
                description: "Documentación empresarial ordenada y al día. Con avisos sobre el estado, caducidad y categorizada. Gestión de personal y útiles de trabajo.",
                poster: "./assets/img/gallery/cae/2.png",
            },


            {
                title: "Mgb Coordinación",
                year: "Plataforma web",
                lenguaje: "#PHP #Laravel #MySql #Tailwind",
                plataforma: "<a class='enlaceproyecto' href='https://cae.margube.com'><i class='bi bi-link-45deg'></i>Link</a>",
                description: "Software de Coordinación de Actividades Empresariales. Coordinación Empresarial: Fácil, Rápida y Eficiente. Permite la coordinación interna y externa. | Diseño Base de datos, desarrollo Back & Front, mantenimiento y soporte.",
                poster: "./assets/img/gallery/cae/1.png",
            },
            {
                title: "Accesos Internos / Externos",
                year: "Plataforma web",
                lenguaje: "#PHP #Laravel #MySql #Tailwind",
                plataforma: "<a class='enlaceproyecto' href='https://cae.margube.com'><i class='bi bi-link-45deg'></i>Link</a>",
                description: "Listado y gestión de accesos a una empresa o a la propia, manteniendo en todo momento monitorizada la documentación en regla, tanto para la entrada como para la salida.",
                poster: "./assets/img/gallery/cae/5.png",
            },
            {
                title: "Detalle accesos",
                year: "Plataforma web",
                lenguaje: "#PHP #Laravel #MySql #Tailwind",
                plataforma: "<a class='enlaceproyecto' href='https://cae.margube.com'><i class='bi bi-link-45deg'></i>Link</a>",
                description: "Visualizar en todo momento el personal, las herramientas, el tipo de acceso... Control total sobre los accesos.",
                poster: "./assets/img/gallery/cae/6.png",
            },
        ],
        legislacion: [

            {
                title: "Uso por módulos",
                year: "Plataforma web",
                lenguaje: "#PHP #Laravel #MySql #Tailwind",
                plataforma: "<a class='enlaceproyecto' href='https://legislacion.margube.com'><i class='bi bi-link-45deg'></i>Link</a>",
                description: "Cada empresa puede elegir de qué categoría / subcategoría quiere gestionar su legislación.",
                poster: "./assets/img/gallery/legislacion/2.png",
            },
            {
                title: "Gestor de documentación",
                year: "Plataforma web",
                lenguaje: "#PHP #Laravel #MySql #Tailwind",
                plataforma: "<a class='enlaceproyecto' href='https://legislacion.margube.com'><i class='bi bi-link-45deg'></i>Link</a>",
                description: "Pack legal con diferentes módulos: Industria, medioambiente, prevención...",
                poster: "./assets/img/gallery/legislacion/1.png",
            },
            {
                title: "MGB Legislación",
                year: "Plataforma web",
                lenguaje: "#PHP #Laravel #MySql #Tailwind",
                plataforma: "<a class='enlaceproyecto' href='https://legislacion.margube.com'><i class='bi bi-link-45deg'></i>Link</a>",
                description: "Gestor de requisitos Legales | Diseño Base de datos, desarrollo Back & Front, mantenimiento y soporte.",
                poster: "./assets/img/gallery/legislacion/portadalegislacion.png",
            },
            {
                title: "Evaluación de normativas",
                year: "Plataforma web",
                lenguaje: "#PHP #Laravel #MySql #Tailwind",
                plataforma: "<a class='enlaceproyecto' href='https://legislacion.margube.com'><i class='bi bi-link-45deg'></i>Link</a>",
                description: "Evaluar estado de la documentación subida.",
                poster: "./assets/img/gallery/legislacion/3.png",
            },
        ],
        fagor: [

            {
                title: "Gestión de almacén",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase",
                plataforma: "#Android #XML #ZebraScanner",
                description: "Localizamos la carga mediante el código de barras.",
                poster: "./assets/img/gallery/fagor/2.png",
            },
            {
                title: "Lectura e interpretación con escáner de código de barras",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase",
                plataforma: "#Android #XML #ZebraScanner",
                description: "Integración a servicio interno vía scanner para localizar cargas.",
                poster: "./assets/img/gallery/fagor/1.png",
            },
            {
                title: "APP Gestión Almacén",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase",
                plataforma: "#Android #XML #ZebraScanner",
                description: "APP android a medida para un terminal lector de etiquetas en dispositivos Zebra. | Desarrollo Back & Front",
                poster: "./assets/img/gallery/fagor/portadafagor.png",
            },
            {
                title: "Almacenamiento de registros Online y Offline",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase",
                plataforma: "#Android #XML #ZebraScanner",
                description: "Opción online y offline. Permite el volcado de datos una vez recupera la conexión.",
                poster: "./assets/img/gallery/fagor/3.png",
            },
        ],
        gureanerosi: [

            {
                title: "Gestión de almacén",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase #Maps #Android #iOS",
                plataforma: "<a class='enlaceproyecto' href='https://play.google.com/store/apps/details?id=io.ionic.guDendari&hl=es_419'><i class='bi bi-link-45deg'></i>Android</a> <a class='enlaceproyecto' href='https://apps.apple.com/es/app/gurean-erosi/id6446174767?l=en-GB'><i class='bi bi-link-45deg'></i>iOS</a>",
                description: "Localización de los comercios mediante mapa. | Mapa personalizado google",
                poster: "./assets/img/gallery/gureanerosi/3.png",
            },
            {
                title: "Ofertas y establecimientos",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase #Maps #Android #iOS",
                plataforma: "<a class='enlaceproyecto' href='https://play.google.com/store/apps/details?id=io.ionic.guDendari&hl=es_419'><i class='bi bi-link-45deg'></i>Android</a> <a class='enlaceproyecto' href='https://apps.apple.com/es/app/gurean-erosi/id6446174767?l=en-GB'><i class='bi bi-link-45deg'></i>iOS</a>",
                description: "Listado de ofertas y cupones para establecimientos de Galdakao.",
                poster: "./assets/img/gallery/gureanerosi/2.png",
            },
            {
                title: "Gurean Erosi",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase #Maps #Android #iOS",
                plataforma: "<a class='enlaceproyecto' href='https://play.google.com/store/apps/details?id=io.ionic.guDendari&hl=es_419'><i class='bi bi-link-45deg'></i>Android</a> <a class='enlaceproyecto' href='https://apps.apple.com/es/app/gurean-erosi/id6446174767?l=en-GB'><i class='bi bi-link-45deg'></i>iOS</a>",
                description: "APP android a medida | Escaparate virtual que recoge los negocios de Galdakao | Desarrollo Back & Front",
                poster: "./assets/img/gallery/gureanerosi/1.png",
            },
            {
                title: "Obtención de cupones",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase #Maps #Android #iOS",
                plataforma: "<a class='enlaceproyecto' href='https://play.google.com/store/apps/details?id=io.ionic.guDendari&hl=es_419'><i class='bi bi-link-45deg'></i>Android</a> <a class='enlaceproyecto' href='https://apps.apple.com/es/app/gurean-erosi/id6446174767?l=en-GB'><i class='bi bi-link-45deg'></i>iOS</a>",
                description: "El sistema envía un único cupón al mail indicado para canjearlo.",
                poster: "./assets/img/gallery/gureanerosi/4.png",
            },
            {
                title: "Gestión interna para comercios",
                year: "APP",
                lenguaje: "#Angular #Ionic #Capacitor #Firebase #Maps #Android #iOS",
                plataforma: "<a class='enlaceproyecto' href='https://play.google.com/store/apps/details?id=io.ionic.guDendari&hl=es_419'><i class='bi bi-link-45deg'></i>Android</a> <a class='enlaceproyecto' href='https://apps.apple.com/es/app/gurean-erosi/id6446174767?l=en-GB'><i class='bi bi-link-45deg'></i>iOS</a>",
                description: "Los comercios pueden añadir un cupón nuevo y gestionar los cupones solicitados.",
                poster: "./assets/img/gallery/gureanerosi/5.png",
            },
        ],
        gregario: [
            {
                title: "Reparaciones",
                year: "Plataforma web",
                lenguaje: "#PHP #Laravel #MySql",
                plataforma: "Desarrollo Web a Medida",
                description: "Solicitud de reparaciones y creación de histórico para tener control total sobre la vida útil de la bicileta.",
                poster: "./assets/img/gallery/gregario/3.png",
            },
            {
                title: "Gestión Integral tiendas ciclismo.",
                year: "Plataforma web",
                lenguaje: "#PHP #Laravel #MySql",
                plataforma: "Desarrollo Web a Medida",
                description: "Amdministra todos los ámbitos de su negocio, desde cualquier lugar con conexión a internet. Contabilidad, stock de productos, estadísticas...",
                poster: "./assets/img/gallery/gregario/2.png",
            },
            {
                title: "Gregario",
                year: "Plataforma web",
                lenguaje: "#PHP #Laravel #MySql",
                plataforma: "Desarrollo Web a Medida",
                description: "Proyecto pionero en el mundo de la bicicleta. Herramienta que conecta a las empresas del mundo de la bici entre sí, y a sus clientes para dar un paso adelante en el mundo digital.",
                poster: "./assets/img/gallery/gregario/1.png",
            },
            {
                title: "Uso Cliente",
                year: "Plataforma web",
                lenguaje: "#PHP #Laravel #MySql",
                plataforma: "Desarrollo Web a Medida",
                description: "Da facilidad al cliente para solicitar su reparación y le permite realizar un seguimiento del mantenimiento realizado de la bicicleta.",
                poster: "./assets/img/gallery/gregario/4.png",
            },
            {
                title: "Venta online | Click & Collect",
                year: "Plataforma web",
                lenguaje: "#PHP #Laravel #MySql",
                plataforma: "Desarrollo Web a Medida",
                description: "Tienda online para clientes que permite la venta online y monitoirizar stocks.",
                poster: "./assets/img/gallery/gregario/5.png",
            },
        ],
    };

    const movies = galleries[project] || [
        {
            title: "Default Movie",
            year: "2023",
            lenguaje: "Default Director",
            plataforma: "PG",
            description: "Sin imágenes disponibles para este proyecto.",
            poster: "https://via.placeholder.com/300x450",
        },
    ];

    new MovieCarousel(movies);


    const cursor = document.querySelector(".cursorhome");
    const cursorSmall = document.querySelector(".cursor__circle--small");
    const cursorLarge = document.querySelector(".cursor__circle--large");

    if (!supportsCustomCursor || !cursor || !cursorSmall || !cursorLarge) {
        if (cursor) cursor.style.display = "none";
        return;
    }

    let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let smallPos = { ...mousePos };
    let largePos = { ...mousePos };

    const lerp = (start, end, amount) => start + (end - start) * amount;

    const updateCursor = () => {
        smallPos.x = lerp(smallPos.x, mousePos.x, 0.2);
        smallPos.y = lerp(smallPos.y, mousePos.y, 0.2);

        largePos.x = lerp(largePos.x, mousePos.x, 0.15);
        largePos.y = lerp(largePos.y, mousePos.y, 0.15);

        cursorSmall.style.transform = `translate(${smallPos.x}px, ${smallPos.y}px) translate(-50%, -50%)`;
        cursorLarge.style.transform = `translate(${largePos.x}px, ${largePos.y}px) translate(-50%, -50%)`;

        requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e) => {
        mousePos.x = e.clientX;
        mousePos.y = e.clientY;
        cursor.style.display = "block";
    };

    const handleHover = (e) => {
        if (e.target.hasAttribute("data-pointer")) {
            document.documentElement.style.setProperty("--cursor-scale", "1.5");
            cursorSmall.style.opacity = "0";
        }
    };

    const handleLeave = () => {
        document.documentElement.style.setProperty("--cursor-scale", "1");
        cursorSmall.style.opacity = "1";
    };

    const handleMouseOut = (e) => {
        if (!e.relatedTarget) {
            cursor.style.display = "none";
        }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);

    document.querySelectorAll("[data-pointer]").forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleLeave);
    });

    requestAnimationFrame(updateCursor);
});

class MovieCarousel {
    constructor(movies) {
        this.movies = movies;
        this.currentIndex = Math.floor(movies.length / 2);
        this.isPlaying = false;
        this.autoplayInterval = null;
        this.carousel = document.getElementById("movieCarousel");
        this.movieInfo = document.getElementById("movieInfo");
        this.touchStartX = 0;
        this.touchEndX = 0;

        this.initializeCarousel();
        this.setupEventListeners();
        //this.setupParticles();
        this.update();
    }

    initializeCarousel() {
        this.carousel.innerHTML = ""; // Limpiar carrusel
        this.movies.forEach((movie, index) => {
            const card = this.createMovieCard(movie, index);
            this.carousel.appendChild(card);
        });
    }

    createMovieCard(movie, index) {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.innerHTML = `
            <div class="movie-card-inner">
                <img class="movie-poster" src="${movie.poster}" alt="${movie.title}" loading="lazy">
                <div class="movie-content">
                    <h3 class="movie-title">${movie.title}</h3>
                    <p class="movie-year">${movie.year}</p>
                    <div class="rating">${movie.plataforma}</div>
                </div>
                <div class="movie-rating">${movie.plataforma}</div>
            </div>
        `;

        card.addEventListener("click", () => {
            this.currentIndex = index;
            this.stopAutoplay();
            this.update();
        });

        return card;
    }

    setupEventListeners() {
        // Control buttons
        document.getElementById("prevBtn").addEventListener("click", () => {
            this.prev();
            this.stopAutoplay();
        });

        document.getElementById("nextBtn").addEventListener("click", () => {
            this.next();
            this.stopAutoplay();
        });

        document.getElementById("playBtn").addEventListener("click", () => {
            this.toggleAutoplay();
        });

        // Keyboard navigation
        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.prev();
                    this.stopAutoplay();
                    break;
                case "ArrowRight":
                    this.next();
                    this.stopAutoplay();
                    break;
                case " ":
                    e.preventDefault();
                    this.toggleAutoplay();
                    break;
            }
        });

        // Touch events
        document.addEventListener("touchstart", (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener("touchend", (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        /*
        // Custom cursor
        const cursor = document.querySelector(".custom-cursor");
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";

            const target = e.target;
            if (target.closest(".control-btn") || target.closest(".movie-card")) {
                cursor.style.transform = "scale(2)";
                cursor.style.borderColor = "var(--accent)";
            } else {
                cursor.style.transform = "scale(1)";
                cursor.style.borderColor = "var(--primary)";
            }
        });*/

        // Parallax effect
        document.addEventListener("mousemove", (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            const bg = document.querySelector(".ambient-bg");

            bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        // Responsive handling
        window.addEventListener("resize", () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => this.update(), 100);
        });
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = this.touchEndX - this.touchStartX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                this.prev();
            } else {
                this.next();
            }
            this.stopAutoplay();
        }
    }

    /*setupParticles() {
        const particlesContainer = document.querySelector(".particles-container");

        const createParticle = () => {
            const particle = document.createElement("div");
            const size = Math.random() * 4 + 2;
            const duration = Math.random() * 10 + 5;

            particle.className = "particle";
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * window.innerWidth}px`;
            particle.style.opacity = Math.random() * 0.5;
            particle.style.animation = `float ${duration}s linear infinite`;

            particlesContainer.appendChild(particle);

            setTimeout(() => particle.remove(), duration * 1000);
        };

        setInterval(createParticle, 1000);
    }*/

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.movies.length) % this.movies.length;
        this.update();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.movies.length;
        this.update();
    }

    toggleAutoplay() {
        if (this.isPlaying) {
            this.stopAutoplay();
        } else {
            this.startAutoplay();
        }
    }

    startAutoplay() {
        this.isPlaying = true;
        document.getElementById("playBtn").innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
            </svg>
        `;
        this.autoplayInterval = setInterval(() => this.next(), 3000);
    }

    stopAutoplay() {
        this.isPlaying = false;
        document.getElementById("playBtn").innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 3l14 9-14 9V3z"/>
            </svg>
        `;
        clearInterval(this.autoplayInterval);
    }

    update() {
        const cards = this.carousel.children;
        const cardWidth = cards[0].offsetWidth;
        const centerOffset = window.innerWidth / 2 - cardWidth / 2;

        for (let i = 0; i < cards.length; i++) {
            const offset = i - this.currentIndex;
            const card = cards[i];

            // Calculate transform values
            const translateX = centerOffset + offset * 180;
            const translateZ = Math.abs(offset) * -100;
            const rotateY = offset * -15;
            const scale = Math.max(0.8, 1 - Math.abs(offset) * 0.2);
            const opacity = Math.max(0.5, 1 - Math.abs(offset) * 0.3);

            // Apply transforms
            card.style.transform = `
                translateX(${translateX}px)
                translateZ(${translateZ}px)
                rotateY(${rotateY}deg)
                scale(${scale})
            `;
            card.style.opacity = opacity;
            card.style.zIndex = 100 - Math.abs(offset);
        }

        // Update movie info
        const currentMovie = this.movies[this.currentIndex];
        this.movieInfo.classList.remove("active");

        // Force reflow
        void this.movieInfo.offsetWidth;

        this.movieInfo.innerHTML = `
            <div class="info-content">
                <h2>${currentMovie.title}</h2>
                <p class="year">${currentMovie.year}</p>
                <p class="director">${currentMovie.lenguaje}</p>
                <div class="rating">${currentMovie.plataforma}</div>
                <p class="description">${currentMovie.description}</p>
            </div>
            <div class="info-background"></div>
        `;

        this.movieInfo.classList.add("active");
    }
}


