$("video").prop("volume", 0.05);
document.addEventListener("DOMContentLoaded", function () {
    const headerLinks = document.querySelectorAll(".header-text");

    function highlightHeaderLink() {
        const scrollPosition = window.scrollY;

        headerLinks.forEach((link) => {
            const sectionId = link.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (
                    scrollPosition >= sectionTop - 1 &&
                    scrollPosition < sectionTop + sectionHeight - 1
                ) {
                    link.classList.add("hovered");
                } else {
                    link.classList.remove("hovered");
                }
            }
        });
    }


    highlightHeaderLink();

    window.addEventListener("scroll", highlightHeaderLink);
});

