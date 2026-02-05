
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // For static deployment (Demo mode)
  // To receive real emails without a backend, consider using services like Formspree or Web3Forms
  console.log("Form Data:", { name, email, message });

  // Simulate network delay
  const btn = e.target.querySelector('button');
  const originalText = btn.innerText;
  btn.innerText = 'Sending...';

  setTimeout(() => {
    alert("Message sent successfully ✅ (Demo Mode)");
    document.getElementById("contactForm").reset();
    btn.innerText = originalText;
  }, 1000);

  /* 
  // Backend Integration Code (Uncomment if using a Node.js server)
  try {
    const res = await fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });
    const data = await res.json();
    if (data.success) {
      alert("Message sent successfully ✅");
      document.getElementById("contactForm").reset();
    }
  } catch (error) {
    alert("Server error ❌");
  }
  */
});


// Hamburger Menu Logic
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
  });
}

// Close menu when clicking a link
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav-active');
    if (hamburger) hamburger.classList.remove('toggle');
  });
});
const modal = document.getElementById("hireModal");
const btn = document.querySelector(".hire-btn");
const span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// SPA / View Switching Logic
const navItems = document.querySelectorAll('.nav-links a, .hero-actions a[href^="#"]');
const sections = document.querySelectorAll('.section-view');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = item.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Hide all sections
      sections.forEach(sec => sec.classList.remove('active'));
      // Show target section
      targetSection.classList.add('active');

      // Close mobile menu if open
      document.querySelector('.nav-links').classList.remove('nav-active');

      // Scroll to top
      window.scrollTo(0, 0);
    }
  });
});
