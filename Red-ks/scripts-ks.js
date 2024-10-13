document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

        const targetTab = button.getAttribute('data-tab');
        document.getElementById(targetTab).classList.add('active');
        button.classList.add('active');
    });
});

document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = "../index.html";
});
