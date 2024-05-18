function oneTaskHome() {
    const template = document.createElement("template");
    template.innerHTML = `
    <div class="one-task">
        <div class="color-task">
            <svg width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3811_578)">
                <path d="M28.0002 4.58398C23.4677 4.58398 19.037 5.92802 15.2684 8.44614C11.4997 10.9643 8.56244 14.5433 6.82793 18.7308C5.09343 22.9183 4.6396 27.5261 5.52384 31.9715C6.40809 36.4169 8.59069 40.5002 11.7956 43.7052C15.0006 46.9101 19.084 49.0927 23.5294 49.977C27.9748 50.8612 32.5825 50.4074 36.77 48.6729C40.9575 46.9384 44.5366 44.0011 47.0547 40.2325C49.5728 36.4638 50.9168 32.0331 50.9168 27.5007C50.9168 24.4912 50.3241 21.5112 49.1724 18.7308C48.0207 15.9504 46.3327 13.4241 44.2047 11.2961C42.0767 9.16811 39.5504 7.48008 36.77 6.32841C33.9896 5.17674 31.0096 4.58398 28.0002 4.58398ZM41.0077 23.4604L27.2577 36.0646C26.8223 36.4638 26.2497 36.6795 25.6592 36.6667C25.0687 36.6539 24.5059 36.4135 24.0883 35.9959L17.2133 29.1209C16.9944 28.9095 16.8198 28.6566 16.6997 28.377C16.5796 28.0974 16.5164 27.7967 16.5138 27.4924C16.5111 27.1881 16.5691 26.8864 16.6843 26.6047C16.7996 26.3231 16.9697 26.0672 17.1849 25.852C17.4001 25.6369 17.6559 25.4667 17.9376 25.3515C18.2192 25.2363 18.521 25.1783 18.8253 25.1809C19.1295 25.1836 19.4303 25.2468 19.7098 25.3669C19.9894 25.487 20.2423 25.6616 20.4537 25.8804L25.7773 31.204L37.9093 20.0825C38.3573 19.6717 38.9501 19.4556 39.5574 19.4818C40.1646 19.508 40.7366 19.7744 41.1475 20.2223C41.5583 20.6703 41.7744 21.2631 41.7482 21.8703C41.722 22.4776 41.4556 23.0496 41.0077 23.4604Z" fill="#2A7378"/>
                </g>
                <rect x="1" y="0.5" width="54" height="54" rx="27" stroke="#2A7378"/>
                <defs>
                <clipPath id="clip0_3811_578">
                <rect x="0.5" width="55" height="55" rx="27.5" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
        <div class="center">
            <span id="task-name">Phát triển hệ thống</span>
            <span id="memo">Ghi chú</span>
        </div>
        <div>
            <span id="time">9:30 - 12:30</span>
        </div>
    </div>
    `;
    return template.innerHTML;
  }

  function week(){
    const template = document.createElement("template");
    template.innerHTML = `
        <button class="day-button">29</button>
        <button class="day-button active">30</button>
        <button class="day-button">01</button>
        <button class="day-button">02</button>
        <button class="day-button">03</button>
        <button class="day-button">04</button>
        <button class="day-button">05</button>
        <button class="day-button">06</button>
        <button class="day-button">07</button>
        <button class="day-button">08</button>
        <button class="day-button">09</button>
        <button class="day-button">10</button>
        <button class="day-button">11</button>
        <button class="day-button">12</button>
        <button class="day-button">13</button>
        <button class="day-button">14</button>
        <button class="day-button">15</button>
        <button class="day-button">16</button>
        <button class="day-button">17</button>
        <button class="day-button">18</button>
        <button class="day-button">19</button>
        <button class="day-button">20</button>
        <button class="day-button">21</button>
        <button class="day-button">22</button>
        <button class="day-button">23</button>
        <button class="day-button">24</button>
        <button class="day-button">25</button>
        <button class="day-button">26</button>
        <button class="day-button">27</button>
        <button class="day-button">28</button>
    `;
    return template.innerHTML;
  }

  function clickAndDrag(selector, tab, icon, scroll_speed = 3, classOnEvent = 'grabbed_elem') {
    const slider = document.getElementById(selector);
    arrowIcons = document.querySelectorAll(icon);
    allTabs = slider.querySelectorAll(tab);
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDown = true;
        slider.classList.add(classOnEvent);
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    
        // prevent default child behavior
        document.body.addEventListener('click', function( event ){
            if (slider.contains(event.target)) {
                event.preventDefault();
            }
        });
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove(classOnEvent);
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove(classOnEvent);
    });
    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * scroll_speed; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });

    const handleIcons = (scrollVal) => {
        let maxScrollableWidth = slider.scrollWidth - slider.clientWidth;
        arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
        arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
    }

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let scrollWidth = slider.scrollLeft += icon.id === "left" ? -455 : 455;
            handleIcons(scrollWidth);
        });
    });

    allTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            slider.querySelector(".active").classList.remove("active");
            tab.classList.add("active");
        });
    });

    }

  clickAndDrag("week-list", ".day-button", ".container svg");

  document.getElementById("week-list").innerHTML = week();
  
  document.getElementById("one-task").innerHTML = oneTaskHome();
