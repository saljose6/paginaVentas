document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada");

    // Función para desplazarse a una sección específica
    window.scrollToSection = (sectionId) => {
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    // Cambiar el título de la página cuando el usuario intenta salir
    window.addEventListener("blur", () => {
        document.title = "No te vayas - GizmoShop";
    });

    // Restaurar el título cuando el usuario regresa
    window.addEventListener("focus", () => {
        document.title = "GizmoShop - Bienvenido";
    });

    // Carrusel
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function updateCarousel() {
        const track = document.querySelector('.carousel-track');
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    window.moveCarousel = (direction) => {
        currentIndex = (currentIndex + direction + totalItems) % totalItems;
        updateCarousel();
    };

    // Auto desplazamiento cada 5 segundos
    setInterval(() => {
        moveCarousel(1);
    }, 5000);

    // Mostrar solo las primeras 8 tarjetas al cargar la página
    const productItems = document.querySelectorAll('.product-item');
    let productsToShow = 8;
    showInitialProducts();

    function showInitialProducts() {
        for (let i = 0; i < productsToShow; i++) {
            if (productItems[i]) {
                productItems[i].classList.add('visible');
            }
        }
    }

    // Función para mostrar más productos en incrementos de 8 (dos filas)
    window.toggleProductMenu = () => {
        const btn = document.querySelector('.btn-view-all');
        const nextSet = Array.from(productItems).slice(productsToShow, productsToShow + 8);

        if (nextSet.length > 0) {
            nextSet.forEach(item => item.classList.add('visible'));
            productsToShow += 8;
        } else {
            // Si no hay más productos para mostrar, ocultar el botón
            btn.style.display = 'none';
        }
    };

    // Función para filtrar productos según la búsqueda
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchValue = document.querySelector('.search-input').value.toLowerCase();
        filterProducts(searchValue);
    });

    function filterProducts(searchValue) {
        productItems.forEach(item => {
            const productName = item.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(searchValue)) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }
});