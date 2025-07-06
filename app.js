let currentVisible = -1;

document.querySelectorAll('.column').forEach((column, index) => {
    column.addEventListener('click', () => {
        const overlay = column.querySelector('.overlay');
        const content = column.querySelector('.column-content');

        if (currentVisible !== -1 && currentVisible !== index) {
            // 隱藏之前顯示的內容
            const prevColumn = document.querySelector(`[data-index="${currentVisible}"]`);
            if (prevColumn) {
                const prevOverlay = prevColumn.querySelector('.overlay');
                const prevContent = prevColumn.querySelector('.column-content');
                prevOverlay.classList.remove('hidden');
                prevContent.classList.remove('visible', 'highlight');
            }
        }

        if (overlay.classList.contains('hidden')) {
            // 隱藏內容
            overlay.classList.remove('hidden');
            content.classList.remove('visible', 'highlight');
            currentVisible = -1;
        } else {
            // 顯示內容
            overlay.classList.add('hidden');
            content.classList.add('visible', 'highlight');
            currentVisible = index;
        }
    });
});

function showAll() {
    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.classList.add('hidden');
    });
    document.querySelectorAll('.column-content').forEach(content => {
        content.classList.add('visible');
        content.classList.remove('highlight');
    });
    currentVisible = -1;
}

function hideAll() {
    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.classList.remove('hidden');
    });
    document.querySelectorAll('.column-content').forEach(content => {
        content.classList.remove('visible', 'highlight');
    });
    currentVisible = -1;
}