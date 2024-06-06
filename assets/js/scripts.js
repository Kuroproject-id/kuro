 // Mencegah penyalinan dengan JavaScript
 document.addEventListener('copy', function(e) {
    e.clipboardData.setData('text/plain', 'Penyalinan teks tidak diizinkan.');
    e.preventDefault();
});

// Mencegah klik kanan dan seleksi teks
//document.addEventListener('contextmenu', function(e) {
//    e.preventDefault();
//});

//document.addEventListener('mousedown', function(e) {
//    if (e.detail > 1) {
//        e.preventDefault();
//    }
//}, false);

// Mencegah seleksi teks melalui keyboard
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'a' || e.key === 'A' || e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
    }
});

// popup modal
function openModal(imageUrl, caption) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("modalImage");
    // var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = imageUrl;
    captionText.innerHTML = caption;
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}
// popup Form Payments
function openModal(imageUrl, caption) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("modalImage");
    // var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = imageUrl;
    captionText.innerHTML = caption;
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// Popup Order WhataApp
function openPopup(event) {
    event.stopPropagation();
    var popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = "block";
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
}

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function sendOrderToWhatsApp(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var projectType = document.getElementById("project-type").value.trim();
    var description = document.getElementById("description").value.trim();

    // Log values for debugging
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Project Type:", projectType);
    console.log("Description:", description);

    // Encode the message for WhatsApp
    var message = `Halo, saya ingin memesan project baru.\n\nTipe Project: ${projectType}\nDeskripsi Project: ${description}`;
    var encodedMessage = encodeURIComponent(message);

    // WhatsApp URL
    var whatsappURL = `https://wa.me/6282321159657?text=${encodedMessage}`;

    // Open WhatsApp with the message
    window.open(whatsappURL, '_blank');

    // Optionally, close the popup
    closePopup();
}

// Document ready
document.addEventListener('DOMContentLoaded', function() {
    // Burger menu
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('nav-active');
            burgerMenu.classList.toggle('change');
        });
    }

    // WhatsApp form submission
    const whatsappForm = document.getElementById('rsvp-form');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const attendance = document.getElementById('attendance').value;
            const userMessage = document.getElementById('message').value;

            const message = `Nama: ${name}\nEmail: ${email}\nKehadiran: ${attendance}\nPesan Tambahan: ${userMessage}`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/6282321159657?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
        });
    }

    // Floating button and icons
    const floatingBtn = document.getElementById('floatingBtn');
    const floatingIcons = document.querySelector('.floating-icons');

    if (floatingBtn && floatingIcons) {
        floatingBtn.addEventListener('click', function() {
            floatingIcons.classList.toggle('show');
        });
    }
});

// FLOATING ANIMASI
function toggleFloatingIcons() {
    var floatingIcons = document.getElementById("floatingIcons");
    floatingIcons.classList.toggle("show");
}

// waktu
function updateTime() {
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');
    
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('id-ID', options);
    const timeString = now.toLocaleTimeString('id-ID');

    dateElement.textContent = dateString;
    timeElement.textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000);
