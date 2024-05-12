const createBtn = document.getElementById('create');
const loginBtn = document.getElementById('login');

createBtn.addEventListener('mouseenter', function() {
    loginBtn.style.backgroundColor = '#fff';
    loginBtn.style.color = '#00224D'; 
});

createBtn.addEventListener('mouseleave', function() {
    loginBtn.style.backgroundColor = '#00224D';
    loginBtn.style.color = '#fff';
});
