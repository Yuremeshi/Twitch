document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", e => {
        if (e.target.classList.contains("dropdown-button")) {
            if (e.target.closest(".dropdown").querySelector(".dropdown-content").classList.contains("show")) {
                e.target.closest(".dropdown").querySelector(".dropdown-content").classList.remove('show');
                return;
            }
            document.querySelectorAll(".dropdown-content").forEach(div => div.classList.remove("show"));
            e.target.closest(".dropdown").querySelector(".dropdown-content").classList.toggle("show");
        } 
        try {
            if (e.target.classList.contains("close")) {
                document.querySelectorAll(".dropdown-content").forEach(div => div.classList.remove("show"));
            }
            if (e.target.parentElement.classList.contains('dropdown-content')) {
                return;
            }
            if (e.target.parentElement.parentElement.classList.contains('dropdown-content')) {
                return;
            }

        } catch (err) {
            document.querySelectorAll(".dropdown-content").forEach(div => div.classList.remove("show"));
        }
        return;
    })
})