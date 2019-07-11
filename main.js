const arrows = document.querySelectorAll('.fa-sort-down');
const chevrons = document.querySelectorAll('.fa-chevron-up');
const block = document.querySelector('.customers_info');
const avatars = document.querySelectorAll('.team_avatars img');
let counter = 1;

arrows.forEach((elem)=> {
    elem.onclick = () => {
        if (elem.classList.contains('swing')) {
            elem.classList.remove('swing');
            elem.classList.add('unswing');
            elem.parentElement.classList.add('close_service');
            elem.parentElement.classList.remove('open_service');
        } else if (elem.classList.contains('unswing')) {
            elem.classList.remove('unswing');
            elem.classList.add('swing');
            elem.parentElement.classList.add('open_service');
            elem.parentElement.classList.remove('close_service');
        }
    }
});

chevrons.forEach((elem) => {
    elem.onclick = () => {
        let subBlock = document.querySelector('.info');
        let height = subBlock.clientHeight + 70;
        if (elem.classList.contains('rotate-chevrone')) {
            if (counter >= 3) return;
            block.style.transform = `translateY(${-height*counter}px)`;
            block.style.transition = "transform 1s ease";
            counter++;
            chevrons[0].style.opacity = '';
            if (counter == 3) {
                chevrons[1].style.opacity = '.5';
            }
        } else {
            if (counter <= 1) return;
            block.style.transform = `translateY(${height*(2-counter)}px)`;
            block.style.transition = "transform 1s ease";
            counter--;
            chevrons[1].style.opacity = '';
            if (counter == 1) {
                chevrons[0].style.opacity = '.5';
            }
        }
    }
})

avatars.forEach((elem) => {
    elem.onclick = () => {
        if (elem.classList.contains('active_avatar')) {
            return;
        } else {
            let activeElems = document.querySelectorAll('.active_avatar');
            activeElems.forEach((elem) => {
                elem.classList.remove('active_avatar');
                elem.classList.add('passive_avatar');
            });
            elem.classList.remove('passive_avatar');
            elem.classList.add('active_avatar');
        }
        let headline = document.querySelector('.just_sophie h2');
        headline.textContent = elem.dataset.name;
    }
})