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
            // this is ugly code, but it's a temporary fix. 
            // this strategy essentially tries to force compiler into an error then uses it to execute our logic
            // this is obviously less predictable and scalable which makes it worse than predictable logic. 
            // there is even a bug where if you click in an area that's really close to the dropdown, it won't work - 
            // but that bug might be related to other things too? I am not sure
            // tldr; this is bad code that should only be used to satisfy angry customers that need changes made IMMEDIATELY
            document.querySelectorAll(".dropdown-content").forEach(div => div.classList.remove("show"));
        }
        return;
    })
})