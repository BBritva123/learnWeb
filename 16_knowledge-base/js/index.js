document.addEventListener('DOMContentLoaded', function () {
    const select = () => {
        const element = document.querySelector('.js-choice');
        const choices = new Choices(element, {
            searchEnabled: false,
            shouldSort: false,

        })

        // на это ругается консоль!!
        // let ariaLabel = element.getAttribute('aria-label', ariaLabel);
        // element.closest('.choices').setAttribute('aria-label', ariaLabel)
    }
    select();

})
