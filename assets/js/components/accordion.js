const accordion_type_2 = document.querySelectorAll('.accordion-type-2');

accordion_type_2.forEach( accordion => {

    const button = accordion.querySelector('.button-drop');
    const angle_img = accordion.querySelector('.angle-img');
    const content = accordion.querySelector('.accordion-type-2__body--content');

    let status_accordion = false;

    button.addEventListener('click' , () => {

        status_accordion = !status_accordion;
        rotateImg(status_accordion);
        showContent(status_accordion);
        
    });


    const rotateImg = ( status ) => {

        switch( status ){

            case true:
                angle_img.classList.remove('disabled');
                angle_img.classList.add('active');
            break;

            case false:
                angle_img.classList.remove('active');
                angle_img.classList.add('disabled');
            break;

        }
    }

    const showContent = ( status ) => {
        switch( status ){

            case true:
                content.classList.add('active');
            break;

            case false:
                content.classList.remove('active');
            break;

        }
    }

});







