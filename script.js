// Üst menü butonlarının sayfayı kaydırması için basit bir script
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const textToType = "yazılım geliştirici.";
const typewriterElement = document.getElementById("typewriter");
let charIndex = 0;

function typeEffect() {
    if (charIndex < textToType.length) {
        typewriterElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100); // Yazma hızı (100ms = 0.1 saniye)
    }
}

// Sayfa yüklendiğinde yazma efektini başlat
document.addEventListener("DOMContentLoaded", typeEffect);