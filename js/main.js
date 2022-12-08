//=========================== loader ==========================================
let loader = document.querySelector('.load')
window.addEventListener('load', () => { loader.style.display = 'none' })
//=========================== loader ==========================================

//=========================== NavBar Section ==================================
let nav = document.querySelector('.nav');
let linksdiv = document.querySelector('.nav .container .links');
let links = document.querySelectorAll('.nav .container .links a');
let linksMenuResponsive = document.querySelectorAll('.menu .container .links a');
// linksdiv.addEventListener('click', (e) => {

//     e.target.classList.add('active')
// });

links.forEach((e) => {
    e.addEventListener('click', (e) => {
        links.forEach((e) => {
            e.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})

let burgerMenu = document.querySelector('.nav .container .burger-menu');
let menu = document.querySelector('.menu');
let menuClose = document.querySelector('.menu .close');

burgerMenu.addEventListener('click', () => { menu.style.display = `block` });
menuClose.addEventListener('click', () => { menu.style.display = `none` });
linksMenuResponsive.forEach((e) => {
    e.addEventListener('click', () => {
        menu.style.display = `none`;
    })
})
window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        nav.style.backgroundColor = `#37517ef1`;
    }
})
//=========================== NavBar Section ====================================



//=========================== Start Landing Section ========================================

//=========================== Start Animation On Section ========================================
let landingSection = document.querySelector(".section")
let landingText = document.querySelector(".section .container .text"),
    landingImg = document.querySelector(".section .container .imge");

window.addEventListener('load', () => {
    landingText.style.cssText = `animation:upwithOpacity .7s linear forwards`;
    landingImg.style.cssText = `transform:scale(1) translateY(0);animation: upAndDown 3s 1s infinite alternate;`
})

//=========================== end Animation On Section ==========================================

//=========================== end Landing Section ==========================================





//=========================== Start Client Imges Section ========================================

//=========================== Start Animation On Section ========================================

let clientImges = document.querySelector(".imges .container")



//=========================== end Client ImgesSection ==========================================




//=========================== Start About Section ========================================

//=========================== Start Animation On Section ========================================

let aboutSection = document.querySelector(".about")



//=========================== end About ImgesSection ==========================================



//=========================== Why Us Section ==================================
let liRead = document.querySelectorAll('.Why-us .container .text .list-read ul li'),
    readMore = document.querySelectorAll('.btnRead');

//start making toggle 3 paragraph and arrow
liRead.forEach((e) => {
    e.addEventListener('click', (el) => {
        if (el.target.className === 'btnRead' || el.target.className === 'btnRead btnReadToggle') {
            liRead.forEach((e) => {

                e.setAttribute("TrueOrFalse", "");
                e.childNodes[5].setAttribute("TrueOrFalseBtn", 'false')
                el.currentTarget.setAttribute("TrueOrFalse", "true");
                el.target.setAttribute("TrueOrFalseBtn", "true");

                if (e.getAttribute("TrueOrFalse") === "true") {
                    e.classList.toggle('liToggle')
                    el.target.classList.toggle('btnReadToggle')
                } else { e.setAttribute("TrueOrFalse", "false") };
                if (e.getAttribute("TrueOrFalse") === "false") {
                    e.classList.value = '';
                }
            })

            readMore.forEach((e) => {
                if (e.getAttribute("TrueOrFalseBtn") === "false") {
                    e.className = `btnRead`;
                }
            })




        }
    })
})
//end making toggle 3 paragraph and arrow



//=========================== Start Animation On Section ========================================

let whyUSSection = document.querySelector('.Why-us '),
    whyText = document.querySelector('.Why-us .container .text'),
    wyhImge = document.querySelector('.Why-us .container .imge');


//=========================== Why Us Section ==================================



//=========================== Start Skill Section ==================================
let SkillsSection = document.querySelector('.skills-section');
let imgeSkill = document.querySelector('.skills-section .container .imge');
let contentSkill = document.querySelector('.skills-section .container .content');
let skills = document.querySelectorAll('.skills-section .container .content .skills .skill .bar .rate');








//=========================== End Skill Section ==================================




//=========================== Start Services Section ==================================

//=========================== Start Animation On Section ========================================


let servicesSection = document.querySelector('.services'),
    boxsSections = document.querySelectorAll('.services .container:last-child .box');



//=========================== End Services Section ====================================





//=========================== Sart Call Us Section ====================================


//=========================== Start Animation On Section ========================================


let callUsSection = document.querySelector('.cta-section'),
    containerCallUsSection = document.querySelector('.cta-section .container');


//=========================== End Call Us Section =====================================





//=========================== Start portfolio Section ==================================

let portfolioSection = document.querySelector('.portfolio'),
    titleContainerPortfolio = document.querySelector('.portfolio .container:nth-child(1)'),
    switchSelecting = document.querySelector('.portfolio .container:nth-child(2)'),
    portfolioConatiner = document.querySelector('.portfolio .container:nth-child(3)'),
    imges = document.querySelectorAll('.portfolio .container:nth-child(3) .imge'),
    img = document.querySelectorAll('.portfolio .container:nth-child(3) .imge img');



//start-filter
switchSelecting.addEventListener('click', (e) => {
    if (e.target.className === `container`) {
        return false
    }


    for (let i = 0; i < e.currentTarget.children.length; i++) {
        e.currentTarget.children[i].style.cssText = `background-color:#fff;color:#333;`;
        e.target.style.cssText = `background-color:#0db1fd;color:#fff;`;
    }


    for (let i = 0; i < imges.length; i++) {
        imges[i].id = img[i].id;
        imges[i].style.display = `flex`;


        if (imges[i].id !== e.target.id) {
            if (e.target.id === 'all') {
                imges[i].style.display = `flex`;
            }
            else {
                imges[i].style.display = `none`;
            }
        }
    }
})
//end-filter

//start creating text element for imges
var x1 = 0;
var x2 = 0;
var x3 = 0;

for (let i = 0; i < imges.length; i++) {
    let desDiv = document.createElement('div');
    desDiv.className = `buttonsDiv`;
    imges[i].appendChild(desDiv);

    let textDiv = document.createElement('div');
    textDiv.className = `text`;
    if (img[i].id === 'App') {
        x1++
        textDiv.append(`${img[i].id}-${x1}`);
    }
    if (img[i].id === 'Web') {
        x2++
        textDiv.append(`${img[i].id}-${x2}`);
    }
    if (img[i].id === 'Card') {
        x3++
        textDiv.append(`${img[i].id}-${x3}`);
    }
    desDiv.appendChild(textDiv);

    let linkAndShowBtnsDiv = document.createElement('div');
    linkAndShowBtnsDiv.className = 'linkAndShowBtnsDiv';
    desDiv.appendChild(linkAndShowBtnsDiv);

    let spanBtn = document.createElement('span');
    spanBtn.id = `${img[i].id}`;
    spanBtn.appendChild(document.createTextNode('+'))
    linkAndShowBtnsDiv.appendChild(spanBtn)

    let linkBtn = document.createElement('a');
    linkBtn.href = `portfolio.html`;
    let iconLink = document.createElement('i');
    iconLink.className = 'fa-solid fa-link';
    linkBtn.appendChild(iconLink);
    linkAndShowBtnsDiv.appendChild(linkBtn);
}
//end creating text element for imges

// start butting imges by array & filter(HOF)
let imgAppSources = ["img/portfolio/portfolio-3.jpg", "img/portfolio/portfolio-4.jpg", "img/portfolio/portfolio-9.jpg", "img/portfolio/portfolio-details-1.jpg", "img/portfolio/portfolio-details-3.jpg"];
let imgWebSources = ["img/portfolio/portfolio-1.jpg", "img/portfolio/portfolio-6.jpg", "img/portfolio/portfolio-7.jpg"];
let imgCardSources = ["img/portfolio/portfolio-2.jpg", "img/portfolio/portfolio-5.jpg", "img/portfolio/portfolio-8.jpg", "img/portfolio/portfolio-details-2.jpg"];
let slidePerant = document.querySelector('.slide-perant');
let slideImgs = document.querySelector('.slide-perant .imgs');
let slideClose = document.querySelector('.slide-perant .close');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let allSlides;
let posX = 0;
let var1;
let toggle;
let toggle2;
let toggle3;



slideImgs.setAttribute('TrueOrFalse', 'false');
imges.forEach((e) => {
    e.addEventListener('click', (e) => {
        nav.style.cssText = `display:none;`;
        slidePerant.style.cssText = `transform: scale(1);`;

        if (e.target.id === 'App') {
            toggle = imgAppSources;
        } else if (e.target.id === 'Card') {
            toggle = imgCardSources;
        } else if (e.target.id === 'Web') {
            toggle = imgWebSources;
        };

        var1 = [e.currentTarget.childNodes[1].src];
        toggle2 = var1.concat(toggle);


        for (let i = 0; i < toggle2.length; i++) {
            if (toggle2[0].includes(toggle2[i + 1])) {
                toggle2[i + 1] = null;
            };

        };

        toggle3 = toggle2.filter((e) => {
            if (e !== null) {
                return e;
            };
        });


        slideImgs.remove()
        slideImgs = document.createElement('div');
        slideImgs.className = 'imgs';


        slidePerant.appendChild(slideImgs)
        for (let i = 0; i < toggle3.length; i++) {

            let slides = document.createElement('div');

            slides.className = 'swiper-slide';
            slideImgs.appendChild(slides);
            slideImgs.setAttribute('TrueOrFalse', 'true');

            let imgs = document.createElement('img');
            imgs.src = toggle3[i];
            slides.appendChild(imgs)
        };


        allSlides = document.querySelectorAll('.slide-perant .swiper-slide');
        posX = 0;
        allSlides.forEach((e) => {
            e.style.left = `-${posX}%`;

        })
        nextBtn.style.opacity = '1';
        prevBtn.style.opacity = '0.5';
    });
});
// end butting imges by array & filter(HOF)


//start making imge slider 
// i call it here because if i not console will log error because he will not can read what i called
slideClose.addEventListener('click', () => { slidePerant.style.cssText = `transform: scale(0);`; });
function swichSlide(name) {
    if (name === 'next') {
        prevBtn.style.opacity = '1';
        if (name === 'next') {
            if (posX === (allSlides.length - 1) * 100) {
                return false;
            }
            if (posX === (allSlides.length - 2) * 100) {
                nextBtn.style.opacity = '0.5'
            }
            posX += 100;
            allSlides.forEach((e) => {
                e.classList.add('transitionActive')
                e.style.left = `-${posX}%`;
            })



        }
    } else {
        nextBtn.style.opacity = '1'
        if (posX <= 0) {
            prevBtn.style.opacity = '0.5';
            return false
        } else if (posX === 100) {
            prevBtn.style.opacity = '0.5';
        }

        posX -= 100;
        allSlides.forEach((e) => {
            e.classList.add('transitionActive')
            e.style.left = `-${posX}%`

        })
    }
}
prevBtn.addEventListener('click', () => swichSlide('prev'));
nextBtn.addEventListener('click', () => swichSlide('next'));
//end making imge slider 

//=========================== End portfolio Section ==================================

//=========================== Start Team section ====================================
let teamSection = document.querySelector('.team-section '),
    titleContainerTeam = document.querySelector('.team-section .container:first-child'),
    contentTeam = document.querySelector('.team-section .container:last-child'),
    boxsTeam = document.querySelectorAll('.team-section .container:last-child .box');

    // I called The Varibals To Use It In Animation Which You Will Find It Down
//=========================== End Team section ======================================


//=========================== Start prices section ====================================
let pricesSection = document.querySelector('.price-section'),
    titleContainerPrices = document.querySelector('.price-section .container:first-child'),
    contentPrices= document.querySelector('.price-section .container:last-child'),
    boxsPrices = document.querySelectorAll('.price-section  .container:last-child .box');


    // I called The Varibals To Use It In Animation Which You Will Find It Down
//=========================== End prices section ======================================

//=========================== start frequently asked qustions section ==================================
let faqSection = document.querySelector('.faq-section'),
    titleContainerFaqSection = document.querySelector('.faq-section .container:first-child'),
    contentFaqSection = document.querySelector('.faq-section .container:last-child'),
    boxs = document.querySelectorAll('.faq-section .container:last-child .box'),
    contents = document.querySelectorAll('.faq-section .container:last-child .box .content'),
    arrows = document.querySelectorAll('.faq-section .container:last-child .box .content i');



boxs.forEach((e) => {
    e.setAttribute('trueOrFlase', false)
    e.addEventListener('click', (event) => {
        if (event.target.id !== 'arrow') {
            return false

        }
        if (event.target.id = 'arrow') {
            if (e.getAttribute('trueOrFlase') === 'false') {
                boxs.forEach((e) => {
                    e.classList.remove('active')
                });
                arrows.forEach((e) => {
                    e.classList.remove('active');
                })
            }
            if (event.currentTarget.getAttribute('trueOrFlase') === 'false') {
                boxs.forEach((e) => {
                    e.setAttribute('trueOrFlase', false)
                })
                event.currentTarget.setAttribute('trueOrFlase', true);
            }
        }

        if (event.currentTarget.getAttribute('trueOrFlase') === 'true') {
            event.currentTarget.classList.toggle('active');
            event.target.classList.toggle('active');
        }
    })
})
//=========================== End frequently asked qustions section ====================================








//=========================== start contact section ====================================
let contactSection = document.querySelector('.conatct-section'),
    formContact = document.querySelector('.conatct-section form'),
    allInputs = document.querySelectorAll('.conatct-section form input'),
    nameField = document.getElementById('name'),
    emailField = document.getElementById('email'),
    subjectField = document.getElementById('subject'),
    textArea = document.getElementById('message'),
    button = document.querySelector('.conatct-section form button'),
    allWarnningMessage = document.querySelectorAll('.warnning'),
    warnningMessage1 = document.getElementById('warnning1'),
    warnningMessage2 = document.getElementById('warnning2'),
    warnningMessage3 = document.getElementById('warnning3'),
    warnningMessage4 = document.getElementById('warnning4'),
    dot1 = document.getElementById('dot1'),
    dot2 = document.getElementById('dot2'),
    textVar,
    interval,
    i = 0,
    Rgx = /[^0-9.]\w+(.\w+)?(\d+)?@\w+\b.\w+/ig,
    tank,
    filtring,
    var2;



formContact.addEventListener('submit', (e) => {

    if (nameField.value == '' ||
        emailField.value == '' ||
        subjectField.value == '' ||
        textArea.value == '' ||
        dot2.getAttribute('trueOrFalse') === 'false' ||
        dot1.getAttribute('trueOrFalse') === 'false'
    ) {
        allWarnningMessage.forEach((e) => {
            e.textContent = 'Your Field Must Not Be Empty'
        });

        if (nameField.value !== '') {
            warnningMessage1.textContent = '';
        };
        if (emailField.value !== '') {
            warnningMessage2.textContent = '';
        };
        if (subjectField.value !== '') {
            warnningMessage3.textContent = '';
        };
        if (textArea.value !== '') {
            warnningMessage4.textContent = '';
        };
        if (dot1.getAttribute('trueOrFalse') === 'true') {
            warnningMessage1.textContent = '';
        };
        if (dot2.getAttribute('trueOrFalse') === 'true') {
            warnningMessage2.textContent = '';
        };
        if (dot1.getAttribute('trueOrFalse') === 'false') {
            warnningMessage1.textContent = 'Your Name Is Wrong';
        };
        if (dot2.getAttribute('trueOrFalse') === 'false') {
            warnningMessage2.textContent = 'Your Email Is Wrong';
        };
        if (dot1.getAttribute('trueOrFalse') === 'null') {
            warnningMessage1.textContent = 'Your Field Must Not Be Empty';
        };
        if (dot2.getAttribute('trueOrFalse') === 'null') {
            warnningMessage2.textContent = 'Your Field Must Not Be Empty';
        };
        e.preventDefault();
        return false
    };

});
//start name

var regxForNameField = /[a-z](\s+)?/ig;
console.log('ttts'.match(regxForNameField));
nameField.addEventListener('input', (e) => {
    // to filtring
    filtring = nameField.value.match(regxForNameField);
    if (filtring === null) {
        filtring = [];
        nameField.value = '';
    }
    nameField.value = filtring.join("");
    // to filtring


    if (nameField.value.length <= 7 || nameField.value.length > 20) {
        dot1.style.backgroundColor = 'red';
        dot1.setAttribute('trueOrFalse', 'false');
    } else {
        dot1.style.backgroundColor = 'green';
        dot1.setAttribute('trueOrFalse', 'true')
    };
    if (nameField.value === '') {
        dot1.style.backgroundColor = '#0db1fd';
        dot1.setAttribute('trueOrFalse', 'null');
    };
    console.log(nameField.value);
});
//end name

//start email
emailField.addEventListener('input', () => {
    tank = emailField.value.match(Rgx);
    if (tank === null || tank[0] !== emailField.value) {
        tank = '';
        dot2.style.backgroundColor = 'red';
        dot2.setAttribute('trueOrFalse', 'false');
    };
    if (emailField.value === '') {
        dot2.style.backgroundColor = '#0db1fd';
        dot2.setAttribute('trueOrFalse', 'null');
    };
    if (tank[0] === emailField.value) {
        dot2.style.backgroundColor = 'green';
        dot2.setAttribute('trueOrFalse', 'true');

    };
})

//end email

// To Avoid Worng 
window.addEventListener('load', () => {

    // for name 
    if (nameField.value.length <= 7 || nameField.value.length > 20) {
        dot1.style.backgroundColor = 'red';
        dot1.setAttribute('trueOrFalse', 'false');
    } else {
        dot1.style.backgroundColor = 'green';
        dot1.setAttribute('trueOrFalse', 'true');
    };
    if (nameField.value === '') {
        dot1.style.backgroundColor = '#0db1fd';
        dot1.setAttribute('trueOrFalse', 'null');
    };
    // for name 

    // for email 
    tank = emailField.value.match(Rgx);
    console.log(tank);
    if (tank === null || tank[0] !== emailField.value) {
        tank = ''
        dot2.style.backgroundColor = 'red';
        dot2.setAttribute('trueOrFalse', 'false');
    };
    if (emailField.value === '') {
        dot2.style.backgroundColor = '#0db1fd';
        dot2.setAttribute('trueOrFalse', 'null');
    };
    if (tank[0] === emailField.value) {
        dot2.style.backgroundColor = 'green';
        dot2.setAttribute('trueOrFalse', 'true');

    };
    // for email 

});
// To Avoid Worng 

allInputs.forEach((e) => {
    e.addEventListener('click', () => {
        allWarnningMessage.forEach((e) => {
            e.textContent = '';
        })
    })
})

//=========================== end contact section ======================================






//=========================== start scroll to top button ======================================
let scrollToTopBtn = document.getElementById('scrolltop');
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
})
window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        scrollToTopBtn.style.opacity = '1'
    } else {
        scrollToTopBtn.style.opacity = '0'
    }
})

//=========================== end scroll to top button ========================================







//=========================== Start Animation On Section ========================================

window.addEventListener('scroll', () => {
    if (document.body.offsetWidth <= 900) {

        if (window.scrollY >= clientImges.offsetTop - 400) {
            clientImges.style.cssText = `transform:scale(1); opacity:1;`
        }
        if (window.scrollY >= aboutSection.offsetTop - 500) {
            aboutSection.style.cssText = `transform:translateY(0); opacity:1;`
        }
        if (window.scrollY >= whyUSSection.offsetTop - 500) {
            whyText.style.cssText = `transform:translateY(0); opacity:1;`
            wyhImge.style.cssText = 'transform:scale(1);'
        }

        if (window.scrollY >= SkillsSection.offsetTop - 500) {
            imgeSkill.style.cssText = `transform:translate(0,0); opacity:1;`
            contentSkill.style.cssText = 'transform:translate(0,0); opacity:1;'
        }
        if (window.scrollY >= SkillsSection.offsetTop - 40) {
            skills.forEach((skill) => {
                skill.style.width = skill.dataset.width
            })
        }
        if (window.scrollY >= servicesSection.offsetTop - 500) {
            servicesSection.style.cssText = `transform:translateY(0); opacity:1;`
            boxsSections.forEach((box) => {
                box.style.transform = `scale(1)`;
            })
        }
        if (window.scrollY >= callUsSection.offsetTop - 500) {
            containerCallUsSection.style.cssText = `transform:scale(1); opacity:1;`
        }
        if (window.scrollY >= portfolioSection.offsetTop - 500) {
            titleContainerPortfolio.style.cssText = `transform:translateY(0); opacity:1;`;
            switchSelecting.style.cssText = `transform:translateY(0); opacity:1;`;
            portfolioConatiner.style.cssText = `transform:translateY(0); opacity:1;`;
        }
        if (window.scrollY >= teamSection.offsetTop - 500) {
            titleContainerTeam.style.cssText = `transform:translateY(0); opacity:1;`;
            contentTeam.style.cssText = `transform:translateY(0); opacity:1;`;
            boxsTeam.forEach((e) => {
                e.style.cssText = `transform:scale(1)`
            })
        }
        if (window.scrollY >= pricesSection.offsetTop - 500) {
            titleContainerPrices.style.cssText = `transform:translateY(0); opacity:1;`;
            contentPrices.style.cssText = `transform:translateY(0); opacity:1;`;
            boxsPrices.forEach((e) => {
                e.style.cssText = `transform:scale(1)`
            })
        }
        if (window.scrollY >= faqSection.offsetTop - 500) {
            titleContainerFaqSection.style.cssText = `transform:translateY(0); opacity:1;`;
            contentFaqSection.style.cssText = `transform:translateY(0); opacity:1;`;
            boxs.forEach((e) => {
                e.style.cssText = `transform:scale(1)`
            })
        }
        if (window.scrollY >= contactSection.offsetTop - 500) {
            contactSection.style.cssText = `transform:translateY(0); opacity:1;`;
           
        }
    }

    else {
        if (window.scrollY >= clientImges.offsetTop - 900) {
            clientImges.style.cssText = `transform:scale(1); opacity:1;`
        }
        if (window.scrollY >= aboutSection.offsetTop - 600) {
            aboutSection.style.cssText = `transform:translateY(0); opacity:1;`
        }
        if (window.scrollY >= whyUSSection.offsetTop - 600) {
            whyText.style.cssText = `transform:translateY(0); opacity:1;`
            wyhImge.style.cssText = 'transform:scale(1);'
        }
        if (window.scrollY >= SkillsSection.offsetTop - 500) {
            imgeSkill.style.cssText = `transform:translate(0,0); opacity:1;`
            contentSkill.style.cssText = 'transform:translate(0,0); opacity:1;'
        }
        if (window.scrollY >= SkillsSection.offsetTop - 480) {
            skills.forEach((skill) => {
                skill.style.width = skill.dataset.width
            })
        }
        if (window.scrollY >= servicesSection.offsetTop - 500) {
            servicesSection.style.cssText = `transform:translateY(0); opacity:1;`
            boxsSections.forEach((box) => {
                box.style.transform = `scale(1)`;
            })
        }
        if (window.scrollY >= callUsSection.offsetTop - 600) {
            containerCallUsSection.style.cssText = `transform:scale(1); opacity:1;`
        }
        if (window.scrollY >= portfolioSection.offsetTop - 600) {
            titleContainerPortfolio.style.cssText = `transform:translateY(0); opacity:1;`;
            switchSelecting.style.cssText = `transform:translateY(0); opacity:1;`;
            portfolioConatiner.style.cssText = `transform:translateY(0); opacity:1;`;
        }
        if (window.scrollY >= teamSection.offsetTop - 600) {
            titleContainerTeam.style.cssText = `transform:translateY(0); opacity:1;`;
            contentTeam.style.cssText = `transform:translateY(0); opacity:1;`;
            boxsTeam.forEach((e) => {
                e.style.cssText = `transform:scale(1)`
            })
        }
        if (window.scrollY >= pricesSection.offsetTop - 600) {
            titleContainerPrices.style.cssText = `transform:translateY(0); opacity:1;`;
            contentPrices.style.cssText = `transform:translateY(0); opacity:1;`;
            boxsPrices.forEach((e) => {
                e.style.cssText = `transform:scale(1)`
            })
        }
        if (window.scrollY >= faqSection.offsetTop - 600) {
            titleContainerFaqSection.style.cssText = `transform:translateY(0); opacity:1;`;
            contentFaqSection.style.cssText = `transform:translateY(0); opacity:1;`;
            boxs.forEach((e) => {
                e.style.cssText = `transform:scale(1)`
            })
        }
        if (window.scrollY >= contactSection.offsetTop - 495) {
            contactSection.style.cssText = `transform:translateY(0); opacity:1;`;

        }
    }
})  
//=========================== end Animation On Section ==========================================


























//=========================== Draft ==================================




// let arr = [1, 2, 3, 4, 6];
// arr[2].remove()

// let arr1 = ['yousef', 2, 3, 4, 5];
// let arr2 = [6, 7, 'yousef', 9, 10];
// let arr3 = arr1.concat(arr2)
// console.log(arr3);

// let arr4 = arr1.filter((e)=> {
//     if (arr1[0].includes(e)) {
//         console.log(e)
//     }
// })

// let text = 'yousef sayed ahmed';
// console.log(text.includes('lo'));


// let lol;
// let arr = [1, 'y', 2, 3, 4, 'o', 6, 'u', 7, 's', 8, 'e', 9, 'f'];
// lol=arr.filter((e) => {
//     if (typeof e === typeof 1) {
//         return e;
//     }
// })
// console.log(lol);
// let swiperSlideDiv = document.createElement('div');
                // // swiperSlideDiv.className = 'swiper-slide';
                // // swiperDiv.appendChild(swiperSlideDiv);

                // // let swiberSlideClone = swiberSlide.cloneNode(true);
                // // swiperDiv.appendChild(swiberSlideClone)

                // swiberSlide.remove();
                // let swiperSlideDiv = document.createElement('div');
                // swiperSlideDiv.className = classswiper;
                // swiperDiv.appendChild(swiperSlideDiv);

                // let swiperImgs = document.createElement('img');
                // swiperImgs.src = imgAppSources[i];
                // swiperSlideDiv.appendChild(swiperImgs);
// let arr = 'yousef (.html)';
// console.log(arr.split(' ')[0]);

// let arrr = [1, 3, 4, 5];
// let arrr2 = [6, 5, 7, 4, 8, 2];

// console.log(arrr.copyWithin());
