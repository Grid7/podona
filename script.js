document.addEventListener("DOMContentLoaded", function() {
    const sidebarToggleBtn = document.querySelector('.btn-sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const showMoreButtons = document.querySelectorAll('.btn-show-more');
    const mainTitle = document.getElementById('mainTitle');
    const homeLink = document.getElementById('homeLink');

    // 사이드바 토글
    sidebarToggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // 페이지 로드 시 모든 섹션 보이기
    tabContents.forEach(content => content.classList.add('active'));

    // PODONA 클릭 시 모든 섹션 보이기
    mainTitle.addEventListener('click', function() {
        tabContents.forEach(content => content.classList.add('active'));
        // 추천 앱 섹션으로 스크롤 이동
        const recommendedSection = document.getElementById('recommended');
        const headerOffset = 100; // 고정된 검색창과 섹션 링크의 높이 조정
        const elementPosition = recommendedSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });

    // 탭 클릭 시 섹션 스크롤 애니메이션
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute('data-tab');
            tabLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            tabContents.forEach(content => content.classList.remove('active'));
            const targetContent = document.getElementById(targetTab);
            targetContent.classList.add('active');

            // 스크롤 애니메이션 구현
            const headerOffset = 100; // 고정된 검색창과 섹션 링크의 높이 조정
            const elementPosition = targetContent.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });

    // 더보기 버튼 클릭 이벤트
    function toggleHiddenApps(buttonId, containerId, initialVisibleCount) {
        const button = document.getElementById(buttonId);
        const appBoxes = document.querySelectorAll(`#${containerId} .app-box`);
        let isHidden = true;

        button.addEventListener("click", function () {
            appBoxes.forEach(function (app, index) {
                if (index >= initialVisibleCount) { // 처음 initialVisibleCount 개는 항상 보이도록 설정
                    app.classList.toggle("hidden", !isHidden);
                }
            });
            isHidden = !isHidden;
            if (this.textContent === "더보기") {
                this.textContent = "숨기기";
            } else {
                this.textContent = "더보기";
            }
        });

        // 처음에는 처음 initialVisibleCount 개 앱 박스만 보이도록 설정
        appBoxes.forEach((app, index) => {
            if (index >= initialVisibleCount) {
                app.classList.add("hidden");
            }
        });
    }

    // 특정 섹션의 더보기 버튼 설정
    toggleHiddenApps("toggleApplicationsApps", "applications", 4); // 추천 앱 섹션: 처음 2개 보이기
    toggleHiddenApps("toggleProductivityApps", "productivity", 4); // 생산성 앱 섹션: 처음 3개 보이기
    toggleHiddenApps("toggleFavoritesApps", "favorites", 4); // 즐겨찾기 앱 섹션: 처음 2개 보이기
    toggleHiddenApps("toggleThemoresApps", "themores", 4); // 즐겨찾기 앱 섹션: 처음 2개 보이기


    // PODONA 링크 클릭 시 추천 앱 섹션으로 스크롤 이동
    if (homeLink) {
        homeLink.addEventListener('click', function() {
            tabContents.forEach(content => content.style.display = 'block');
            // 추천 앱 섹션으로 스크롤 이동
            const recommendedSection = document.getElementById('recommended');
            const headerOffset = 100; // 고정된 검색창과 섹션 링크의 높이 조정
            const elementPosition = recommendedSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    }

    // 팝업 설정
    const appData = [
        {
            id: 1,
            title: "Grid q",
            image: "img/1.jpg",
            features: ["특징 1 가나다라마바사" , "특징 2", "특징 3"],
            description: "<h2>App 1 설명입니다.</h2> <p>아무런 말없이 ㅇ링ㄹ밍ㄹ ㅣㅁ알 밍ㄹ ㅣㅁㄹ 밍 ㄹ미<br> dfjdkfjdl fdlf aldf<p> ",
            downloadLink: "다운로드 링크 1",
            link: "링크 연결 1"
        },
        {
            id: 2,
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
});