document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('email').focus();

    document.getElementById('emailForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value;
        
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (emailPattern.test(emailValue)) {
            document.querySelector('.user-email').textContent = emailValue
            // document.querySelector('dialog').showModal();
            document.getElementById('dialog').style.display = 'grid';
            document.querySelector('.newsletter-cta').style.display = 'none';
            emailInput.value = '';
        } else {
            console.error(msg);
        }
    });
    
    document.getElementById('dialog').addEventListener('click',function(){
        document.getElementById('dialog').style.display = 'none';
        document.querySelector('.newsletter-cta').style.display = 'grid';
    });
});