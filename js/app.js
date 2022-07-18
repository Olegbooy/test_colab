const removeElem = (el) => {
    if(el) {
        el.style.display = 'none';
        console.log(el);
    }
}


const closeMenuArea = (el) => {
    const popupDetails = document.querySelector('.details__modal');
    const popupSubmit = document.querySelector('.submit__modal');
    if(popupDetails && popupSubmit) {
        popupDetails.style.animationName = 'deleting';
        popupSubmit.style.animationName = 'deleting';
        function classRemove() {
            popupDetails.classList.remove('show')
            popupSubmit.classList.remove('show');
        }
        const timeOut = setTimeout(() => {
            classRemove();
            clearTimeout(timeOut)
        }, 600);
    }
}




const showDetails = (item) => {
    const popupDetails = document.querySelector('.details__modal');
    if(popupDetails) {
        popupDetails.classList.add('show');
        popupDetails.style.animationName = 'showing';
    }
}




//кнопка по умолчанию

const defaultButton = (el) => {
    let switchInputs = document.querySelectorAll('input[type="checkbox"]');
    switchInputs.forEach(item => {
        item.setAttribute('checked', 'true');
    })
    document.querySelector('.save__button').innerHTML = "Сохранить";

    const selectValue = document.querySelectorAll('.select__input span');
    selectValue.forEach(el => {
        const firstValue = selectBusiness.options.data[0].value;
        el.innerHTML = firstValue;
    })

    let selects = document.querySelectorAll('.select__list');
        selects.forEach(item => {
        
        let selectElems = item.children;
        let items = [...selectElems];

        items.forEach(els => {
            els.classList.remove('selected');
        })
        item.children[0].classList.add('selected');
    })
}









//кнопка сохранить


const saveButton = (el) => {
    if(document.querySelector('.submit__modal')) {
        document.querySelector('.submit__modal').classList.add('show');
        document.querySelector('.submit__modal').style.animationName = 'showing';
        document.querySelector('.submit__modal .modal__success').style.display = "none";
        document.querySelector('.submit__modal .modal__body').style.display = "block";
    }

    if(document.querySelector('.submit__modal').classList.contains('show')) {
        document.querySelector('.cancel').onclick = () => {
            document.querySelector('.submit__modal').style.animationName = 'deleting';
            document.querySelector('.submit__modal').classList.remove('show');
        }
    }

    document.querySelector('.submit').onclick = () => {
        document.querySelector('.submit__modal .modal__body').style.display = "none";
        document.querySelector('.submit__modal .modal__success').style.display = "block";
    }

}
