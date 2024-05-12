const createBtn = document.getElementById('create');
const loginBtn = document.getElementById('login');

createBtn.addEventListener('mouseenter', function() {
    loginBtn.style.backgroundColor = '#000';
});

createBtn.addEventListener('mouseleave', function() {
    loginBtn.style.backgroundColor = 'aqua';
});
