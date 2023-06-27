window.onload = () => {
    const $header = document.querySelector("header");
    const $menu = document.getElementById("menu");
    const $menuHamburguer = document.getElementById("menu-hamburguer");
    const $menuItemsMenu = document.querySelectorAll(".menu a");

    $menuHamburguer.onclick = () => {
        $menu.classList.toggle("show");
        $menuHamburguer.classList.toggle("close");
    };

    $menuItemsMenu.forEach(($menuItem) => {
        $menuItem.onclick = () => {
            if (window.innerWidth < 768) {
                $menu.classList.toggle("show");
                $menuHamburguer.classList.toggle("close");
            }
        };
    });

    //   STICKY MENU
    function toggleStickyHeader() {
        if (window.scrollY > 0) {
            $header.classList.add("sticky");
        } else {
            $header.classList.remove("sticky");
        }
    }

    window.addEventListener("scroll", toggleStickyHeader);
    toggleStickyHeader();


    //   OBSERVER
    function startAnimation(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }
    const observer = new IntersectionObserver(startAnimation, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
    });

    const headerContainer = document.querySelector("header .container");
    const heroHeader = document.querySelector(".hero__header");
    const heroImage = document.querySelector(".hero img");
    const heroPrice = document.querySelector(".price");
    const servicesHeader = document.querySelector('.services__header')
    const servicesItems = document.querySelectorAll('.services__list div')
    const orderOnlineImage = document.querySelector('.order-online img')
    const galleryImages = document.querySelectorAll('.gallery img')
    const productsItems = document.querySelectorAll('.products__item')
    const aboutUsDescription = document.querySelector('.about-us p')
    const aboutUsImage = document.querySelector('.about-us img')
    const footerElements = document.querySelectorAll('footer .container > div')

    const titles = document.querySelectorAll(' h2')

    const elementsToObserver = [headerContainer, heroHeader, heroPrice, heroImage, servicesHeader, ...servicesItems, ...titles, orderOnlineImage, ...galleryImages, ...productsItems, aboutUsDescription, aboutUsImage, ...footerElements];

    elementsToObserver.forEach((element) => {
        observer.observe(element);
    });
};
