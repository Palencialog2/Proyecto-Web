       // Variables
        const header = document.getElementById('header');
        const menuBtn = document.getElementById('menuBtn');
        const nav = document.getElementById('nav');
        const overlay = document.getElementById('overlay');
        const navLinks = document.querySelectorAll('nav a');

        // Función para cambiar el estilo del header al hacer scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Función para abrir/cerrar el menú móvil
        menuBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', closeMenu);

        // Cerrar menú al hacer clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        function toggleMenu() {
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Cambiar el icono del botón
            if (nav.classList.contains('active')) {
                menuBtn.textContent = '✕';
            } else {
                menuBtn.textContent = '☰';
            }
        }

        function closeMenu() {
            nav.classList.remove('active');
            overlay.classList.remove('active');
            menuBtn.textContent = '☰';
        }

        // Scroll suave para los enlaces de navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
   