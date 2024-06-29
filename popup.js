// 팝업 설정
const appData = [
    {
        id: 1,
        title: "App 2",
        image: "img/2.png",
        features: ["특징 A", "특징 B", "특징 C"],
        description: "App 2 설명입니다.",
        downloadLink: "다운로드 링크 2",
        link: "링크 연결 2"
    },
    {
        id: 2,
        title: "Upscayl",
        image: "img/1.jpg",
        features: ["Work on Linux🐧, MacOS 🍏 and Windows 🐌" , "Upscale Images 🖼", "Upscayl is a free"],
        description: "<h2>Upscayl은 고급 AI 모델을 사용하여 저해상도 이미지를 확장할 수 있는 무료 오픈 소스 데스크톱 응용 프로그램입니다..</h2> <p>아무런 말없이 ㅇ링ㄹ밍ㄹ ㅣㅁ알 밍ㄹ ㅣㅁㄹ 밍 ㄹ미<br> dfjdkfjdl fdlf aldf<p> ",
        downloadLink: "https://upscayl.org/#desktop",
        link: "https://upscayl.org"
    },
    {
        id: 3,
        title: "App 2",
        image: "img/2.png",
        features: ["특징 A", "특징 B", "특징 C"],
        description: "App 2 설명입니다.",
        downloadLink: "다운로드 링크 2",
        link: "링크 연결 2"
    },
    {
        id: 4,
        title: "App 2",
        image: "img/2.png",
        features: ["특징 A", "특징 B", "특징 C"],
        description: "App 2 설명입니다.",
        downloadLink: "다운로드 링크 2",
        link: "링크 연결 2"
    }
];

// 팝업 생성 함수
function createPopup(app) {
    const popupOverlay = document.createElement('div');
    popupOverlay.classList.add('popup-overlay');
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popupContent.innerHTML = `
        <button class="popup-close">&times;</button>
        <h2 class="popup-title">${app.title}</h2>
        <div class="popup-body">
            <div class="popup-image-container">
                <img src="${app.image}" alt="App 이미지" class="popup-image">
            </div>
            <div class="popup-features">
                <h3>특징</h3>
                <ul>
                    ${app.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        </div>
        <p class="popup-description">${app.description}</p>
        <div class="popup-buttons">
            <a href="${app.downloadLink}" class="download-link" target="_blank">다운로드</a>
            <a href="${app.link}" class="link-button" target="_blank">링크 연결</a>
        </div>
    `;
    popupOverlay.appendChild(popupContent);
    document.body.appendChild(popupOverlay);

    // 팝업 닫기
    popupOverlay.querySelector('.popup-close').addEventListener('click', () => {
        popupOverlay.remove();
    });

    // 팝업 외부 클릭 시 닫기
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.remove();
        }
    });

    // 팝업을 화면에 표시
    popupOverlay.style.display = 'flex';
}

// 앱 박스 클릭 이벤트 설정
document.querySelectorAll('.app-box').forEach(item => {
    item.addEventListener('click', event => {
        const appId = item.getAttribute('data-app-id');
        const app = appData.find(app => app.id == appId);
        if (app) {
            createPopup(app);
        }
    });
});