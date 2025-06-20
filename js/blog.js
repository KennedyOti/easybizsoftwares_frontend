// Blog Filter Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Filter blog posts
  const filterButtons = document.querySelectorAll(".category-btn");
  const blogPosts = document.querySelectorAll(".blog-post");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filterValue = button.getAttribute("data-category");

      // Animate filtering
      blogPosts.forEach((post) => {
        post.style.opacity = "0";
        post.style.transition = "opacity 0.3s ease";

        setTimeout(() => {
          if (
            filterValue === "all" ||
            post.getAttribute("data-category") === filterValue
          ) {
            post.style.display = "block";
          } else {
            post.style.display = "none";
          }

          // Trigger reflow to restart animation
          void post.offsetWidth;
          post.style.opacity = "1";
        }, 50);
      });
    });
  });

  // Add animation to blog cards on scroll
  const animateOnScroll = function () {
    const blogCards = document.querySelectorAll(".post-card");

    blogCards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (cardPosition < screenPosition) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animation
  const blogCards = document.querySelectorAll(".post-card");
  blogCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.5s ease";
  });

  // Add scroll event listener
  window.addEventListener("scroll", animateOnScroll);
  // Trigger once on load
  animateOnScroll();
});
