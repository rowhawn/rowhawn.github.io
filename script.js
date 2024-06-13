document.addEventListener('DOMContentLoaded', function () {
    let tabs = document.querySelectorAll('.tab-link');
    let content = document.querySelectorAll('.tab-content');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            let target = document.querySelector('#' + this.dataset.tab);

            // Hide all content
            content.forEach(function(content) {
                content.style.display = 'none';
            });

            // Remove active class from all tabs
            tabs.forEach(function(tab) {
                tab.classList.remove('active');
            });

            // Show current tab content and add active class
            target.style.display = 'block';
            tab.classList.add('active');
        });
    });

    // Trigger click on the first tab to open it by default
    tabs[0].click();
});
