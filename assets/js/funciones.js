document.addEventListener('DOMContentLoaded', function () {

  // Botones y secciones
  const hireUsButton = document.getElementById('btn-hire-us');
  const portfolioButton = document.getElementById('btn-portfolio'); // Nuevo botón
  const mainContentSections = document.querySelectorAll('.l-section');
  const sideNavItems = document.querySelectorAll('.side-nav li');

  if (hireUsButton) {
    hireUsButton.addEventListener('click', function () {
      // Índice de la sección "Carrera" (ajústalo según el orden en tu HTML)
      const targetSectionIndex = 2;

      // Quitar clases activas de las secciones y navegación
      mainContentSections.forEach((section) => section.classList.remove('section--is-active'));
      sideNavItems.forEach((item) => item.classList.remove('is-active'));

      // Activar la sección de Carrera
      mainContentSections[targetSectionIndex].classList.add('section--is-active');
      sideNavItems[targetSectionIndex].classList.add('is-active');

      // Actualizar la navegación externa si es necesario
      const outerNavItems = document.querySelectorAll('.outer-nav li');
      if (outerNavItems[targetSectionIndex]) {
        outerNavItems.forEach((item) => item.classList.remove('is-active'));
        outerNavItems[targetSectionIndex].classList.add('is-active');
      }
    });
  }

  if (portfolioButton) {
    portfolioButton.addEventListener('click', function () {
      // Navegar a la sección con el ID "portfolio"
      const targetSection = document.getElementById('portfolio');

      if (targetSection) {
        // Quitar clases activas de las secciones
        mainContentSections.forEach((section) => section.classList.remove('section--is-active'));

        // Agregar clase activa a la sección "portfolio"
        targetSection.classList.add('section--is-active');

        // Actualizar la navegación (opcional)
        const targetIndex = Array.from(mainContentSections).indexOf(targetSection);
        sideNavItems.forEach((item) => item.classList.remove('is-active'));
        if (sideNavItems[targetIndex]) {
          sideNavItems[targetIndex].classList.add('is-active');
        }

        const outerNavItems = document.querySelectorAll('.outer-nav li');
        outerNavItems.forEach((item) => item.classList.remove('is-active'));
        if (outerNavItems[targetIndex]) {
          outerNavItems[targetIndex].classList.add('is-active');
        }
      }
    });
  }

  // Ajuste del comportamiento del slider
  const slider = document.querySelector('.slider');
  const sliderItems = Array.from(slider.querySelectorAll('.slider--item'));
  const prevButton = document.querySelector('.slider--prev');
  const nextButton = document.querySelector('.slider--next');

  let currentIndex = 0;
  const visibleItems = 3; // Número de ítems visibles al mismo tiempo

  // Función para actualizar las clases de los ítems
  function updateSlider() {
    sliderItems.forEach((item, index) => {
      item.classList.remove('slider--item-left', 'slider--item-center', 'slider--item-right');
      item.style.display = 'none'; // Ocultamos todos los ítems inicialmente
    });

    const totalItems = sliderItems.length;
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    const nextIndex = (currentIndex + 1) % totalItems;

    // Mostramos y posicionamos los ítems visibles
    sliderItems[prevIndex].classList.add('slider--item-left');
    sliderItems[prevIndex].style.display = 'block';

    sliderItems[currentIndex].classList.add('slider--item-center');
    sliderItems[currentIndex].style.display = 'block';

    sliderItems[nextIndex].classList.add('slider--item-right');
    sliderItems[nextIndex].style.display = 'block';
  }

  // Event Listeners para las flechas
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    updateSlider();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    updateSlider();
  });

  // Inicializamos el slider al cargar
  updateSlider();

  const movies = [
    "assets/img/work-alex-nowak.jpg",
    "assets/img/work-victory.jpg",
    "assets/img/work-metiew-smith.jpg",
    "assets/img/work-alex-nowak.jpg",
    "assets/img/work-victory.jpg",
  ];



  const openModalButtons = document.querySelectorAll(".open-modal");
  const modals = document.querySelectorAll(".modal.modalportfolio");
  const closeButtons = document.querySelectorAll(".close-modal");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const modalId = this.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";
        modal.classList.remove("out");
        document.body.style.overflow = "hidden";
      }
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal");
      if (modal) {
        modal.classList.add("out");
        setTimeout(() => {
          modal.style.display = "none";
          document.body.style.overflow = "";
        }, 1000);
      }
    });
  });

  window.addEventListener("click", function (event) {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.classList.add("out");
        setTimeout(() => {
          modal.style.display = "none";
          document.body.style.overflow = "";
        }, 1000);
      }
    });
  });
  const cursor = document.querySelector(".cursorhome");
  const cursorSmall = document.querySelector(".cursor__circle--small");
  const cursorLarge = document.querySelector(".cursor__circle--large");

  let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let smallPos = { ...mousePos };
  let largePos = { ...mousePos };

  const lerp = (start, end, amount) => start + (end - start) * amount;

  const updateCursor = () => {
    smallPos.x = lerp(smallPos.x, mousePos.x, 0.25);
    smallPos.y = lerp(smallPos.y, mousePos.y, 0.25);

    largePos.x = lerp(largePos.x, mousePos.x, 0.2);
    largePos.y = lerp(largePos.y, mousePos.y, 0.2);

    cursorSmall.style.transform = `translate(${smallPos.x}px, ${smallPos.y}px) translate(-50%, -50%)`;
    cursorLarge.style.transform = `translate(${largePos.x}px, ${largePos.y}px) translate(-50%, -50%)`;

    requestAnimationFrame(updateCursor);
  };

  const handleMouseMove = (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;

    cursor.classList.add("cursor--active");
  };

  const handleHover = (e) => {
    if (e.target && e.target.hasAttribute("data-pointer")) {
      document.documentElement.style.setProperty("--cursor-scale", "1.5");
      cursorSmall.style.opacity = "0";
    }
  };

  const handleLeave = () => {
    document.documentElement.style.setProperty("--cursor-scale", "1");
    cursorSmall.style.opacity = "1";
  };

  const handleMouseOut = () => {
    cursor.classList.remove("cursor--active");
  };

  // Eventos con listeners no pasivos
  document.addEventListener("mousemove", handleMouseMove, { passive: false });
  document.addEventListener("mouseout", handleMouseOut, { passive: false });

  document.addEventListener("mouseover", (e) => {
    if (e.target && e.target.hasAttribute("data-pointer")) {
      handleHover(e);
    }
  }, { passive: false });

  document.addEventListener("mouseout", (e) => {
    if (e.target && e.target.hasAttribute("data-pointer")) {
      handleLeave();
    }
  }, { passive: false });

  requestAnimationFrame(updateCursor);
});
