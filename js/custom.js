// Button Hover Effect

const btnObj = {
  // DOM 컨트롤 클래스 요소 객체 정의
  commonBtn: '.common-btn', // 버튼 요소
  wArrow: '.white', // 흰색 화살표 요소
  bArrow: '.black', // 검은색 화살표 요소
};

const swiperObj = {
  commonBtn: '.swiper-navigation div', // 버튼 요소
  wArrow: '.arrow-white', // 흰색 화살표 요소
  bArrow: '.arrow-black', // 검은색 화살표 요소
};

// 호버 시 화살표 색상 교체 함수 정의
function btnHoverEffect(obj) {
  const hoverBtn = document.querySelectorAll(obj.commonBtn);

  hoverBtn.forEach((btn) => {
    const wArrow = btn.querySelector(obj.wArrow);
    const bArrow = btn.querySelector(obj.bArrow);

    btn.addEventListener('mouseenter', function () {
      wArrow.style.display = 'block';
      bArrow.style.display = 'none';
    });

    btn.addEventListener('mouseleave', function () {
      wArrow.style.display = 'none';
      bArrow.style.display = 'block';
    });
  });
}

btnHoverEffect(btnObj); // 함수 호출 기능을 만드는것
btnHoverEffect(swiperObj); // 함수 호출 기능을 만드는것

//Swiper Plugin Codes
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// mobile header toggle active //
// 1. 아이콘 클릭 -> 2. 아이콘에 'on' 클래스 추가 -> 3. 네비게이션 높이 저장 -> 4. 'on' 클래스가 있을 때 네비게이션 활성화 -> 5. 'on' 클래스가 없을 때 네비게이션 비 활성화

const menuIcon = document.querySelector('.menu-icon'); //메뉴 아이콘 요소 저장
const navi = document.querySelector('.navi'); // 네비게이션 박스 요소 저장

menuIcon.addEventListener('click', function () {
  // console.log(this);
  navi.classList.toggle('on'); //menu-icon 클릭 할때마다 on 클래스 추가 및 제거
  const navHeight = navi.scrollHeight; //navi 박스의 자식요소를 포함한 높이

  if (this.classList.toggle('on')) {
    console.log(true); //menu-icon에 on 클래스가 있다면
    navi.style.height = navHeight + 'px';
  } else {
    // console.log(false); //menu-icon에 on 클래스가 없다면
    navi.style.height = 0;
  }
});

// IF PC size browser, navigation height to normal
window.addEventListener('resize', function () {
  const winWidth = this.window.outerWidth; //윈도우 화면 가로 사이즈 저장

  if (winWidth > 980) {
    menuIcon.classList.remove('on');
    navi.style.height = '0';
  } else {
    navi.style.height = 0;
  }
});
