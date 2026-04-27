// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', () => {
    
    const navbar = document.querySelector('.navbar');
    
    // 監聽捲動事件，改變 Navbar 外觀
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.borderBottom = 'none';
        }
    });

    // 平滑捲動補強 (針對所有錨點連結)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});