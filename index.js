/*
window.addEventListener('load', function() {
    document.addEventListener('click', function(event) {
        document.querySelectorAll('.dropdown-content').forEach(function(el) {
            if (el != event.target) el.classList.remove('show');
        });
        if (event.target.matches('.dropdown-button')) {
            event.target.closest('.dropdown').querySelector('.dropdown-content').classList.toggle('show');
        }
    })
})
*/
let open = 0;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dropdown-button").forEach(btn => {
        btn.addEventListener("click", e=> {
            document.querySelectorAll(".dropdown-content").forEach(div => div.classList.remove("show"));

            e.target.closest(".dropdown").querySelector(".dropdown-content").classList.add("show");
        })
    })

    document.addEventListener("click", e => {
        if (e.target.classList.contains("dropdown-button") && open == 0) {
            open = 1;
            return;
        }
        document.querySelectorAll('.dropdown-content').forEach(div => div.classList.remove('show'));
        open = 0;
    })
})