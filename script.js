// Validação do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function (e) {
    const form = e.target;
    if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
    }
    form.classList.add('was-validated');
});

