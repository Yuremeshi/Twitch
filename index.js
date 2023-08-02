document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", e => {
        if (e.target.classList.contains("dropdown-button")) {
            if (e.target.closest(".dropdown").querySelector(".dropdown-content").classList.contains("show")) {
                e.target.closest(".dropdown").querySelector(".dropdown-content").classList.remove('show');
                return;
            }
            document.querySelectorAll(".dropdown-content").forEach(div => div.classList.remove("show"));
            e.target.closest(".dropdown").querySelector(".dropdown-content").classList.toggle("show");
        } else if (e.target.classList.contains("close")) {
            document.querySelectorAll(".dropdown-content").forEach(div => div.classList.remove("show"));
        }
    })
})