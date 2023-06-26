// Intersection observer

// Identificar si un elemento esta visible

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver( entries =>  {
        if (entries[0].isIntersecting) {
            console.log('esta visible')
        }
    });

    observer.observe(document.querySelector('.premium'))
})