document.addEventListener('DOMContentLoaded', () => {
    const endpoint = "http://localhost:3000";

    fetch(endpoint)
        .then(response => response.json())
        .then(produtos => {
            const shopWrapper = document.getElementById('shop-wrapper');
            shopWrapper.innerHTML = ''; // Limpar qualquer conteúdo existente

            produtos.forEach(produto => {
                const productHTML = `
                    <div class="swiper-slide">
                        <div class="box">
                            <div class="image">
                                <img src="${produto.image_url}" alt="${produto.name}">
                                <div class="add">
                                    <span class="lnr lnr-cart"></span>
                                    <span class="lnr lnr-heart"></span>
                                    <span class="lnr lnr-magnifier"></span>
                                </div>
                            </div>
                            <div class="info">
                                <h4>${produto.name}</h4>
                                <span>R$${produto.price}</span>
                            </div>
                        </div>
                    </div>
                `;
                shopWrapper.insertAdjacentHTML('beforeend', productHTML);
            });

            // Inicialize o Swiper após adicionar todos os produtos
            new Swiper('.shop-swiper', {
                slidesPerView: 1,
                spaceBetween: 10,
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    921: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        })
        .catch(error => console.error('Erro ao consumir a API:', error));
});

// ==============================HOME========================
var homeSwiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//==================================BARRA DE NAVEGAÇÃO===============================
const menuBtn = document.querySelector('.lnr-menu');
const navList = document.querySelector('.navlist');

menuBtn.onclick = function () {
    menuBtn.classList.toggle('lnr-chevron-up');
    navList.classList.toggle('active');
};

//==================================SCROLL REVEAL===============================

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false,
});

sr.reveal('.home-container .home-search', { delay: 200, origin: 'left' });
sr.reveal('.services-container', { delay: 200, origin: 'top' });
sr.reveal('.experts-container', { delay: 200, origin: 'top' });
