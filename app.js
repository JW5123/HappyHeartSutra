let visibleColumns = [];

// 點擊事件 - 每個卡片獨立顯示/隱藏
document.querySelectorAll('.column').forEach((column, index) => {
    column.addEventListener('click', () => {
        const overlay = column.querySelector('.overlay');
        const content = column.querySelector('.column-content');

        if (overlay.classList.contains('hidden')) {
            // 當前是顯示狀態，點擊後隱藏
            overlay.classList.remove('hidden');
            content.classList.remove('visible', 'highlight');
            // 從可見列表中移除
            visibleColumns = visibleColumns.filter(i => i !== index);
        } else {
            // 當前是隱藏狀態，點擊後顯示
            overlay.classList.add('hidden');
            content.classList.add('visible', 'highlight');
            // 添加到可見列表中
            if (!visibleColumns.includes(index)) {
                visibleColumns.push(index);
            }
        }
    });
});

function showAll() {
    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.classList.add('hidden');
    });
    document.querySelectorAll('.column-content').forEach((content, index) => {
        content.classList.add('visible');
        content.classList.remove('highlight');
        if (!visibleColumns.includes(index)) {
            visibleColumns.push(index);
        }
    });
}

function hideAll() {
    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.classList.remove('hidden');
    });
    document.querySelectorAll('.column-content').forEach(content => {
        content.classList.remove('visible', 'highlight');
    });
    visibleColumns = [];
}