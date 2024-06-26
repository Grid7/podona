document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggleButton = document.querySelector('.btn-sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');

    // 사이드바 토글 버튼 클릭 이벤트
    sidebarToggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // 탭 링크 클릭 이벤트
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const tab = this.getAttribute('data-tab');

            tabLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tab).classList.add('active');
        });
    });

    // 모든 섹션을 초기 로드 시 보이도록 설정
    tabContents.forEach(content => content.classList.add('active'));

    // "더보기" 버튼 클릭 이벤트
    const showMoreButtons = document.querySelectorAll('.btn-show-more');

    showMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const hiddenApps = this.parentNode.querySelectorAll('.app-box.hidden');
            hiddenApps.forEach(app => app.classList.remove('hidden'));
            this.style.display = 'none';
        });
    });
});
