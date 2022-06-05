const phoneModal = () => {
    const orderCallBtn = document.querySelector('.header-phones__order-call-btn');
    const phoneModal = document.querySelector('.phone-modal-bg');
    const modalCloseBtn = phoneModal.querySelector('.top-part__close-btn');
    const form = phoneModal.querySelector('.modal__form');
    const submitBtn = form.querySelector('button');
    const nameInput = form.querySelector('#name');
    const surnameInput = form.querySelector('#surname');
    const phoneInput = form.querySelector('#phone');
    let formData;
    let fullNamePattern = /^[0-9~!@#$%^:;&*()_=+/.<>, ]*$/;
    let phonePattern = /^[A-Za-zА-Яа-яЁё~!@#$%^:;&*_=/.<>, ]*$/;

    orderCallBtn.addEventListener('click', () => {
        phoneModal.style.display = 'flex';
    })

    nameInput.addEventListener('input', function(){
        if(fullNamePattern.test(nameInput.value[nameInput.value.length-1])){
            nameInput.value = nameInput.value.slice(0, -1);
        }
    })
    
    surnameInput.addEventListener('input', function(){
        if(fullNamePattern.test(surnameInput.value[surnameInput.value.length-1])){
            surnameInput.value = surnameInput.value.slice(0, -1);
        }
    })
    
    phoneInput.addEventListener('input', function(){
        if(phonePattern.test(phoneInput.value[phoneInput.value.length-1])){
            phoneInput.value = phoneInput.value.slice(0, -1);
        }
    })

    modalCloseBtn.addEventListener('click', function(){
        phoneModal.style.display = 'none';
        form.reset();
    })
    
    window.addEventListener('click', function(e){
        if (e.target == phoneModal){
            phoneModal.style.display = 'none';
            form.reset();
        }
    })

    submitBtn.addEventListener('click', function(e){
        let isValid = true;
        formData = new FormData(form);
        const clientData = Object.fromEntries(formData.entries());
    
        for (let user_info in clientData){
            if (clientData[user_info] == ''){
                isValid = false;
            }
        }
    
        if (isValid == true){
            console.log(clientData);
            alert('Мы получили ваше сообщение, ждите звонка! :)');
        } else {
            alert('Заполните поля корректно!')
        }
    
        e.preventDefault();
    })
}

export default phoneModal;