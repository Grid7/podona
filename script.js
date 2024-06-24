document.addEventListener('DOMContentLoaded', function () {
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    toggleSidebarButton.addEventListener('click', function () {
        if (sidebar.style.display === 'none' || sidebar.style.display === '') {
            sidebar.style.display = 'block';
        } else {
            sidebar.style.display = 'none';
        }
    });

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`'${searchTerm}'에 대한 검색 결과가 없습니다.`);
        }
    });
});
