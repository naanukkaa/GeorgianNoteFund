// -------- Mobile menu toggle --------
function toggleMobileMenu() {
    const mobileNav = document.querySelector('nav.mobile-nav');
    if (mobileNav.style.display === 'none' || mobileNav.style.display === '') {
        mobileNav.style.display = 'flex';
    } else {
        mobileNav.style.display = 'none';
    }
}

// -------- Fade in elements on scroll --------
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.book-card, .featured-content, footer');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
}

// -------- Page fade transition --------
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(fadeInOnScroll, 100);
    const mobileNav = document.querySelector('nav.mobile-nav');
    mobileNav.style.display = 'none';

    const links = document.querySelectorAll('a[href^="other pages/"], a[href="index.html"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.style.opacity = '0';
            document.body.style.transform = 'translateY(-20px)';
            document.body.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                window.location.href = this.href;
            }, 300);
        });
    });
});

window.addEventListener('scroll', fadeInOnScroll);

// -------- Cloudflare iframe script (optional, keep if needed) --------
(function() {
    function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
            var d = b.createElement('script');
            d.innerHTML = "window.__CF$cv$params={r:'99dfe143e38b95a6',t:'MTc2MzA1Mzc5OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName('head')[0].appendChild(d);
        }
    }
    if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c();
        else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else {
            var e = document.onreadystatechange || function() {};
            document.onreadystatechange = function(b) {
                e(b);
                'loading' !== document.readyState && (document.onreadystatechange = e, c());
            };
        }
    }
})();

// -------- Slick carousel for row-cards --------
$(document).ready(function(){
    $('.row-cards').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
});


