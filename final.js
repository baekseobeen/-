/*(function () {
    const spanEl = document.querySelector("main h2 span");
    const txtArr = ['guitarist','novelist','worker','scientist'];
    let index = 0;
    let currentTxt = txtArr[index].split("");
    function writeTxt() {
        spanEl.textContent += currentTxt.shift();
        if (currentTxt.length !== 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        } else {
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }
    function deleteTxt() {
        currentTxt.pop();
        spanEl.textContent = currentTxt.join("");
        if (currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        } else {
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            console.log(currentTxt)
            writeTxt();
        }
    }
    writeTxt();
})();

const headerEl = document.querySelector("header");
window.addEventListener('scroll', function () {
    requestAnimationFrame(scrollCheck);
});
function scrollCheck() {
    let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if (browserScrollY > 0) {
        headerEl.classList.add('active');
    } else {
        headerEl.classList.remove("active")
    }
};

const animationMove = function (selector) {
    const targerEl = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = targerEl.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
};
<header>
<div class="container">
        <h1>
            <button data-animation-scroll="true" data-target='#main'>Youth</button>
        </h1>
        <nav>
            <ul>
                <li>
                    <button data-animation-scroll="true" data-target='#about'>
                        About
                    </button>
                </li>
                <li>
                    <button data-animation-scroll="true" data-target='#features'>
                        Features
                    </button>
                </li>
                <li>
                    <button data-animation-scroll="true" data-target='#portfolio'>
                        Portfolio
                    </button>
                </li>
                <li>
                    <button data-animation-scroll="true" data-target='#contact'>
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</header>;

const scrollMoveEl= document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener('click', function(e){
        const target = this.dataset.targer;
        animationMove(target);
    })
}
*/
(function () {
    const spanEl = document.querySelector("main h2 span");
    const txtArr = ['guitarist', 'composer', 'Arduino Developer', 'Competition Instructor'];
    let index = 0;
    let currentTxt = txtArr[index].split("");
    function writeTxt() {
        spanEl.textContent += currentTxt.shift();
        if (currentTxt.length !== 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        } else {
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }
    function deleteTxt() {
        currentTxt.pop();
        spanEl.textContent = currentTxt.join("");
        if (currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
        } else {
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
        }
    }
    writeTxt();
})();
/* end text_iife.js */

/* scroll_request.js */
/* 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제 */
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function () {
    requestAnimationFrame(scrollCheck);
});
function scrollCheck() {
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if (browerScrollY > 0) {
        headerEl.classList.add("active");
    } else {
        headerEl.classList.remove("active");
    }
}
/* end scroll_request.js */

/* move.js */
/* 애니메이션 스크롤 이동 */
const animationMove = function (selector) {
    // ① selector 매개변로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // ② 현재 브라우저의 스크롤 정보(y 값)
    const browserScrollY = window.pageYOffset;
    // ③ 이동할 대상의 위치(y 값)
    const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
    // ④ 스크롤 이동
    window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
};
// 스크롤 이벤트 연결하기
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for (let i = 0; i < scollMoveEl.length; i++) 
    scollMoveEl[i].addEventListener('click', function (e) {
        const target = this.dataset.target;
        animationMove(target);
    });