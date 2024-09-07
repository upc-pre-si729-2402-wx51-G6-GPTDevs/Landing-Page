document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});

document.querySelector('.navbar__ul').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.querySelector('#contact').addEventListener('click', function () {
    alert("Gracias, se te contactará en los siguientes días.")
});