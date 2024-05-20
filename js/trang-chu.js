const kpiPercentage = [45, 75, 45, 30];
const kpiName = ["Giảng dạy", "Nghiên cứu", "Phục vụ", "Cá nhân"];

const chartData = {
    labels: kpiName,
    datasets: [{
        data: [8, 18, 2, 8],
        backgroundColor: ["#e63946", "#254BDD", "#ffbe0b", "#1d3557"],
        hoverBackgroundColor: ["fff", "fff", "fff", "fff"],
    }] 
};

const taskData = {
    name: ["Phát triển hệ thống QLDT - B1.506", "Giao diện và trải nghiệm người dùng", "Nghiên cứu ứng dụng công nghệ B lockchain trong định danh điện tử"],
    time: ["9:00 - 11:45", "16:00 - 17:30", "18:00 - 19:00"],
    note: ["Ghi chú", "Ghi chú", "Ghi chú"],
    state: [true, false, false],
};

const font = {
    size: 18,
    family: 'Roboto Flex',                     
};

const pieChart = document.getElementById("pie-chart");

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: chartData,
    plugins: [ChartDataLabels],
    options: {
        plugins: {
            datalabels: {
                color: '#fff',
                font: {
                    size: 18,
                    family: 'Roboto Flex',
                    
                },
            },
            legend: {
                position: 'right',
                fullSize: true,
                labels: {
                    color: '#000',
                    font: font,
                    padding: 10,
                    usePointStyle: true,
                    pointStyle: 'rectRounded',
                },
                onHover: handleHover,
                onLeave: handleLeave
            }, 
            tooltip: {
                enabled: true
            }                                     
        },
        reponsive: true
    }
    });

    function handleHover(evt, item, legend) {
        legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
          colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
        });
        legend.chart.update();
      }
    
    function handleLeave(evt, item, legend) {
    legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
        colors[index] = color.length === 9 ? color.slice(0, -2) : color;
    });
    legend.chart.update();
    }

    function clickAndDrag(selector, tab, icon, scroll_speed = 3, classOnEvent = 'grabbed_elem', scrollW) {
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

    function getHeignt(percent){
        var height = 80 + 2.03*percent;
        return height;
    }

    function getY(height){
        var y = 81 - (height - 30);
        return y;
    }

    function addKPIcss(){
        const template = document.createElement("template");
        kpiName.forEach((v, i) => {
            var height = getHeignt(kpiPercentage[i]);
            var y = getY(height);
            console.log(height + " "+ y+ " "+ kpiPercentage[i]);
            template.innerHTML += `
            .kpi:nth-of-type(${i+1}) .kpi-circle svg:nth-of-type(1){
                height: ${height}px;
                transform: translateY(${y});
            }

            `
        })
        
        return template.innerHTML;
    }

    function addKPI(){
        kpiName.forEach((v, i) => {           
            const div = document.createElement("div");
            div.className = "kpi";
            div.innerHTML = `      
            <div class="kpi-circle">  
                                                 
                    <svg width="109" heigth="30" x="0" y="81" viewBox="0 0 110 107" xmlns="http://www.w3.org/2000/svg">
                        <defs><path id="gentle-wave" d="M-160 100c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v100h-352z" /></defs>
                        <g class="parallax">
                            <use class="back-layer" xlink:href="#gentle-wave" x="48" y="0" />
                            <use class="front-layer" xlink:href="#gentle-wave" x="48" y="7" />
                        </g>
                    </svg>
                    <svg>
                        <path class="outside" d="M58 113.5C88.3757 113.5 113 88.8757 113 58.5H118V118H58V113.5Z"/>
                        <path class="outside" d="M60 113.5C29.6243 113.5 5 88.8757 5 58.5H0V118H60V113.5Z"/>
                        <path class="outside" d="M58 5C88.3757 5 113 29.6243 113 60H118V0.5H58V5Z"/>
                        <path class="outside" d="M60 5C29.6243 5 5 29.6243 5 60H0V0.5H60V5Z"/>
                    </svg>
        
                <svg width="115" heigth="115" fill="none" viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg"> 
                    <circle cx="55" cy="55" r="52.5" stroke="#3AAFA9" stroke-width="5"/>
                </svg>
            </div>
            <span class="percentage">${kpiPercentage[i]}%</span> 
            <span>${v}</span>        
            
        `;           
            document.getElementById("kpi-list").appendChild(div);
        });
        document.getElementById("kpi-list").innerHTML += `<style>`+ addKPIcss()+`<\style>`;
    }

    function addDay(){
        let day = 29;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');

        for(i=0; i<30; i++){
            const button = document.createElement("button");
            button.className = "day-button";
            if(day==dd){
                button.classList.add("active");
            }
            button.innerHTML = `${day}`;
            if(day==30) {
                day = 0;
            }
            day++;
            document.getElementById("week-list").appendChild(button);
        }
    }

    function addTask(){
        taskData.name.forEach((v, i) => {
            const div = document.createElement("div");
            div.className = "one-task";
            div.innerHTML = `      
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
            <div id="center">
                <div id="task-name-container" class="row-5px">
                    <span id="task-name">${v}</span>
                </div>
                <span id="memo">${taskData.note[i]}</span>
            </div>
            <div>
                <span id="time">${taskData.time[i]}</span>
            </div>      
        `;
            document.getElementById("task-list").appendChild(div);
        })
    }

  addDay();

  addKPI();

  addTask();

  clickAndDrag("week-list", ".day-button", ".container svg");

  clickAndDrag("kpi-list", ".kpi", ".lr");