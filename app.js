document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuButton = document.querySelector(".mobile-menu");
    const navMenu = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav-link a");
  
    // Funktion, um das Menü zu schließen
    function closeMenu() {
      navMenu.classList.add("hidden");
    }
  
    // Toggle das Menü, wenn der Menü-Button geklickt wird
    mobileMenuButton.addEventListener("click", () => {
      navMenu.classList.toggle("hidden");
    });
  
    // Schließe das Menü, wenn auf einen Link im mobilen Menü geklickt wird
    navLinks.forEach(link => {
      link.addEventListener("click", closeMenu);
    });
  
    // Überwache die Fenstergröße und schließe das Menü, wenn der Bildschirm auf "desktop" umschaltet
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {  // Wenn die Bildschirmbreite >= 768px ist (größer als mobile Größe)
        closeMenu();  // Schließt das Menü
      }
    });
  });
  
  