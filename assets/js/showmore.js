document.addEventListener('DOMContentLoaded', function() {
    const limit = 4;
    const nextOpen = (wrapper, button) => {

        const items = wrapper.querySelectorAll('.portfolio__item'),
        len = items.length - 1,
        endBox = wrapper.querySelector('.nextstop'),
        index = [...items].indexOf(endBox) + limit;

    if(endBox) endBox.classList.remove('nextstop');
    if(index < len) items[index].classList.add('nextstop');
    else button.remove();

    };

    document.querySelectorAll('.portfolio__items').forEach(wrapper => {
        const button = wrapper.nextElementSibling;
        button.addEventListener('click', nextOpen.bind(null, wrapper, button));
        nextOpen(wrapper, button);
    });
})