// JavaScript 文件

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // 导航栏滚动效果
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('py-2', 'shadow-md');
            nav.classList.remove('py-4');
        } else {
            nav.classList.add('py-4');
            nav.classList.remove('py-2', 'shadow-md');
        }
    });
    
    // 移动端菜单切换
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // 移动端菜单项点击关闭菜单
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 英雄区域动画
    gsap.from('#hero h1', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5
    });
    
    gsap.from('#hero p', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.8
    });
    
    gsap.from('#hero a', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.1
    });
    
    gsap.from('#hero img', {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        delay: 0.3,
        ease: "back.out(1.7)"
    });
    
    // 作品项滚动动画
    const workItems = document.querySelectorAll('.work-item');
    
    workItems.forEach((item, index) => {
        ScrollTrigger.create({
            trigger: item,
            start: "top 80%",
            onEnter: () => {
                item.classList.add('visible');
            }
        });
        
        // GSAP动画
        gsap.from(item.querySelector('h3'), {
            scrollTrigger: {
                trigger: item,
                start: "top 80%"
            },
            opacity: 0,
            y: 30,
            duration: 0.8
        });
        
        gsap.from(item.querySelectorAll('img'), {
            scrollTrigger: {
                trigger: item,
                start: "top 80%"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2
        });
        
        gsap.from(item.querySelector('p'), {
            scrollTrigger: {
                trigger: item,
                start: "top 80%"
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.4
        });
    });
    
    // 关于我区域动画
    gsap.from('#about h2', {
        scrollTrigger: {
            trigger: '#about',
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 0.8
    });
    
    gsap.from('#about p', {
        scrollTrigger: {
            trigger: '#about',
            start: "top 80%"
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2
    });
    
    gsap.from('#about .social-link', {
        scrollTrigger: {
            trigger: '#about',
            start: "top 80%"
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1
    });
    
    gsap.from('#about img', {
        scrollTrigger: {
            trigger: '#about',
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15
    });
    
    // 图片悬停效果
    const images = document.querySelectorAll('.work-item img');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3
            });
        });
        
        img.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3
            });
        });
    });
    
    // 添加加载动画
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loading);
    
    // 页面加载完成后隐藏加载动画
    window.addEventListener('load', function() {
        setTimeout(() => {
            loading.classList.add('hidden');
        }, 500);
    });
});