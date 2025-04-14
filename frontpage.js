 // Mobile menu toggle
 document.getElementById('check').addEventListener('change', function() {
    if(this.checked) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Tab functionality
const tabBtns = document.querySelectorAll('.tab_btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

