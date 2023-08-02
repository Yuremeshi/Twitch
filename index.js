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
let dropdownClass;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dropdown-button").forEach(btn => {
        btn.addEventListener("click", e=> {
            document.querySelectorAll(".dropdown-content").forEach(div => div.classList.remove("show"));

            e.target.closest(".dropdown").querySelector(".dropdown-content").classList.toggle("show");
            console.log(e.target);


        })
    })

    document.addEventListener("click", e => {
        if (e.target.classList.contains("dropdown-button")) {
            console.log("Hello3");
            return;
        }

        if (e.target.classList.contains("search-bar-message")) return;

        if (e.target.closest(".dropdown")) {
            if (e.target.classList.contains("close")) {
                document.querySelectorAll('.dropdown-content').forEach(div => div.classList.remove('show'));
                console.log("Hello4")
            }
            if (e.target.closest(".dropdown").querySelector(".dropdown-content").classList.contains("show")) return;
        }

        document.querySelectorAll('.dropdown-content').forEach(div => div.classList.remove('show'));
        

        console.log(e.target)
        console.log(e.target.closest(".dropdown-content"))
        console.log("Hello5");
    })
})