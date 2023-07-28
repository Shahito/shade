function handleIntersection(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}

export function createObserver() {
    const options = {
        threshold: 0.85,
    }
    const observer = new IntersectionObserver(handleIntersection, options);

    var services_list = document.querySelectorAll("div.service");

    services_list.forEach(el => {
        observer.observe(el);
    });
}