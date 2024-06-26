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
    toggleHiddenApps("toggleRecommendedApps", "recommended", 4); // 추천 앱 섹션: 처음 4개 보이기
    toggleHiddenApps("toggleProductivityApps", "productivity", 3); // 생산성 앱 섹션: 처음 3개 보이기
    toggleHiddenApps("toggleFavoritesApps", "favorites", 2); // 즐겨찾기 앱 섹션: 처음 2개 보이기

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
});
