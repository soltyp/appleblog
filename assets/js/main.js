/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SLIDER ===============*/
document.getElementById('next').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('previous').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

/*=============== DARK MODE ===============*/
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    var image = document.getElementById('changeable-image');

    if (image.src.includes('apple.png')) {
        image.src = 'apple2.png'; 
        image.style.width = '29px';
        image.style.marginLeft = '5px';
    } else {
        image.src = 'apple.png'; 
        image.style.width = '40px';
        image.style.marginLeft = '0px';
    }
    
});
document.getElementById('changeable-image').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('changeable-image').addEventListener('click', function() {
    if (this.src.includes('apple.png')) {
        this.src = 'apple2.png'; 
        this.style.width = '29px';
        this.style.marginLeft = '5px';
    } else {
        this.src = 'apple.png'; 
        this.style.width = '40px';
        this.style.marginLeft = '0px';
    }
});