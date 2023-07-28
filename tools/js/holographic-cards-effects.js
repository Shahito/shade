export function createHoloCards() {
    const els = document.querySelectorAll(".service-card");
    var is_hover = false;
    els.forEach((el) => {
        let wrap = el.querySelector(".service-card-wrapper");
        let w = el.clientWidth;
        let h = el.clientHeight;
        el.addEventListener("mousemove", (e) => {
            let rect = el.getBoundingClientRect();
            let X = (e.clientX - rect.left) / w;
            let Y = (e.clientY - rect.top) / h;
            let rX = -(X - 0.5) * 26;
            let rY = (Y - 0.5) * 26;
            let bgX = 40 + 20 * X;
            let bgY = 40 + 20 * Y;
            document.documentElement.style.setProperty("--x", 100 * X + "%");
            document.documentElement.style.setProperty("--y", 100 * Y + "%");
            document.documentElement.style.setProperty("--bg-x", bgX + "%");
            document.documentElement.style.setProperty("--bg-y", bgY + "%");
            el.style.setProperty("--r-x", rX + "deg");
            el.style.setProperty("--r-y", rY + "deg");
            is_hover = true;
            el.classList.add("hover");
            setTimeout(() => {
                if (is_hover == true) {
                    el.classList.remove("mouse-out");
                }
            }, 300);
        });
        el.addEventListener("mouseout", (e) => {
            el.style.setProperty("--x", 100 * 0 + "%");
            el.style.setProperty("--y", 100 * 0 + "%");
            el.style.setProperty("--bg-x", 0 + "%");
            el.style.setProperty("--bg-y", 0 + "%");
            el.style.setProperty("--r-x", 0 + "deg");
            el.style.setProperty("--r-y", 0 + "deg");
            el.classList.add("mouse-out");
            el.classList.remove("hover");
            is_hover = false;
        });

        el.addEventListener("touchmove", (e) => {
            let rect = e.target.getBoundingClientRect();
            let X = (e.touches[0].clientX - rect.left) / w;
            let Y = (e.touches[0].clientY - rect.top) / h;
            let rX = -(X - 0.5) * 26;
            let rY = (Y - 0.5) * 26;
            let bgX = 40 + 20 * X;
            let bgY = 40 + 20 * Y;
            document.documentElement.style.setProperty("--x", 100 * X + "%");
            document.documentElement.style.setProperty("--y", 100 * Y + "%");
            document.documentElement.style.setProperty("--bg-x", bgX + "%");
            document.documentElement.style.setProperty("--bg-y", bgY + "%");
            el.style.setProperty("--r-x", rX + "deg");
            el.style.setProperty("--r-y", rY + "deg");
        });
        el.addEventListener("touchstart", (e) => {
            is_hover = true;
            el.classList.add("hover");
            setTimeout(() => {
                if (is_hover == true) {
                    el.classList.remove("mouse-out");
                }
            }, 300);
        });
        el.addEventListener("touchend", (e) => {
            el.style.setProperty("--x", 100 * 0 + "%");
            el.style.setProperty("--y", 100 * 0 + "%");
            el.style.setProperty("--bg-x", 0 + "%");
            el.style.setProperty("--bg-y", 0 + "%");
            el.style.setProperty("--r-x", 0 + "deg");
            el.style.setProperty("--r-y", 0 + "deg");
            el.classList.add("mouse-out");
            el.classList.remove("hover");
            is_hover = false;
        });
    });
}