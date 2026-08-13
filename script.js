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

document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "DEMO_KEY"; // NASA'nın herkese açık demo anahtarı
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.media_type === "image") {
                const imgElement = document.getElementById("nasa-img");
                const titleElement = document.getElementById("nasa-title");
                const dateElement = document.getElementById("nasa-date");
                const loadingElement = document.querySelector(".nasa-loading");

                imgElement.src = data.url;
                imgElement.alt = data.title;
                titleElement.textContent = `// NASA APOD: ${data.title}`;
                dateElement.textContent = `Tarih: ${data.date}`;

                loadingElement.style.display = "none";
                imgElement.style.display = "block";
            } else {
                // Eğer günün içeriği video ise fallback mesajı
                document.querySelector(".nasa-loading").textContent = "// Bugünkü NASA APOD içeriği bir video.";
            }
        })
        .catch(error => {
            console.error("NASA APOD çekilirken hata oluştu:", error);
            document.querySelector(".nasa-loading").textContent = "// NASA APOD yüklenemedi.";
        });
});