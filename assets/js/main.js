
// show menu

const toggleBtn = document.getElementById('nav_toggle'),
        navMenu = document.getElementById('nav_menu'),
        navLink = document.querySelectorAll('.nav_link');


if( toggleBtn && navMenu ) {
    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    })
};


// remove menu 

function menuRemove () {
    navMenu.classList.remove('show');
};

navLink.forEach( n => n.addEventListener('click', menuRemove));

// scroll Active---질문

const sections = document.querySelectorAll('section[id]');
// []의 뜻이 뭔지 알기--[속성?]

function scrollActive () {
    const scrollY = window.pageYOffset; //내가 스크롤한 양?

    sections.forEach( current => {
        // offsetTop, offsetHeight개념 정확히
        const sectionHeight = current.offsetHeight,
        // 지정된 것의 전체 높이
             sectionTop = current.offsetTop - 50;
            //  내 기준점으로 얼마나 떨어진지
            //  왜 - 50을 해줬는지 모르겠다. 절반?

        sectionId = current.getAttribute('id');
        let  sectionLink = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ) {
            sectionLink.classList.add('active_link');
        } else {
            sectionLink.classList.remove('active_link');

        }

    })
}

window.addEventListener('scroll', scrollActive);


// change bg color

