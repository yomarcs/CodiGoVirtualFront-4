const seccion6 = document.getElementById("seccion-6");
const seccion7 = document.getElementById("seccion-7");

var io = new IntersectionObserver((entries) => {
    console.log(entries);
}, {
    threshold: [1],
});

// Obervando elementos
io.observe(seccion6);
io.observe(seccion7);