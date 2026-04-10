  const toggleBtn = document.getElementById("brxSidebarToggle");
    const sidebar = document.getElementById("brxSidebar");
    const doverlay = document.getElementById("brxSidebarOverlay");

    toggleBtn.onclick = function () {
      sidebar.classList.toggle("active");
      doverlay.classList.toggle("active");

      if (sidebar.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    doverlay.onclick = function () {
      sidebar.classList.remove("active");
      doverlay.classList.remove("active");

      document.body.style.overflow = "auto";
    };



    