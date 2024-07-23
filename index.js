document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('email').focus();

    document.getElementById('emailForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value;
        
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (emailPattern.test(emailValue)) {
            document.querySelector('dialog').showModal();
            emailInput.value = '';
        } else {
            console.error(msg);
        }
    });
    
    document.getElementById('dialog').addEventListener('click',function(){
        document.getElementById('dialog').style.display = 'none';
    });
});