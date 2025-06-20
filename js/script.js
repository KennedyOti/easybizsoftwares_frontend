// Wait for the document to be fully loaded
$(document).ready(function () {
  console.log("EasyBiz Software Solutions - Website Loaded!");

  // Smooth scrolling for anchor links
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  // More JS functionality will be added later (e.g., carousel, animations)
  
  
});



