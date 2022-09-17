if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window;
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    }
}

document.querySelectorAll('.dropdown__wrapper').forEach(function(dropdownWrapper) {
    
    const dropdownButton = dropdownWrapper.querySelector('.dropdown__button');
    const dropdownList = dropdownWrapper.querySelector('.dropdown__list');
    const dropdownItem = dropdownList.querySelectorAll('.dropdown__item');
    const dropdownInput = dropdownWrapper.querySelector('.dropdown__input');
    
    dropdownButton.addEventListener('click', function() {
        dropdownButton.classList.toggle('active');
        dropdownList.classList.toggle('active');
    });
    
    dropdownItem.forEach(function (listItem) {
        listItem.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownButton.innerText = this.innerText;
            dropdownInput.value = this.dataset.value;
    
            dropdownButton.classList.remove('active');
            dropdownList.classList.remove('active');
        });
    });
    
    document.addEventListener('click', function(e) {
        if(e.target !== dropdownButton) {
            dropdownButton.classList.remove('active');
            dropdownList.classList.remove('active');
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if(e.key === 'Tab' || e.key === 'Escape') {
            dropdownButton.classList.remove('active');
            dropdownList.classList.remove('active');
        }
    });
})

