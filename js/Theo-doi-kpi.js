const kpiPercentage = [45, 75, 45, 30];
const kpiName = ["Giảng dạy", "Nghiên cứu", "Phục vụ", "Cá nhân"];
const kpiUp = [2, 8, 5, 3];
const kpiNow = [24, 26, 32, 16];
const kpiGoal = [53, 35, 71, 53];

const chartData = {
    labels: ["29/4", "30/4", "1/5", "2/5", "3/5", "4/5", "5/5"],
    datasets: [{
        data: [8, 18, 2, 8, 3, 5, 6],
        fill: false,
        borderColor: "#2a7378",
        tension: 0,
        pointStyle: 'rectRot',
        pointBackgroundColor: "#9CD6D3",
        pointBorderWidth: 2,
        pointRadius: 10,
        pointHoverRadius: 15,
        pointHoverBorderWidth: 3,
        pointHoverBackgroundColor: "#439BA1",
        pointBorderColor:"#2a7378"
    }] 
};

const chartAreaBorder = {
    id: 'line-chart',
    beforeDraw(chart, args, options) {
      const {ctx, chartArea: {left, top, width, height}} = chart;
      ctx.save();
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.setLineDash(options.borderDash || []);
      ctx.lineDashOffset = options.borderDashOffset;
      ctx.strokeRect(left, top, width, height);
      ctx.restore();
    }
  };

const lineChart = document.getElementById("line-chart");

new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: chartData,
    options: {
        chartAreaBorder: {
            borderColor: "#2a7378",
            borderWidth: 2,
            borderDash: [5, 5],
            borderDashOffset: 2,
          },
        animation: {
            easing: 'easeInCubic',
        },
        interaction: {
            intersect: false,
            mode: 'index',
          },
        reponsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                usePointStyle: true,
                position: 'nearest',
            }                                     
        }
    },
    plugins: [chartAreaBorder],
    });

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
        template.innerHTML += `
        .kpi-detail:nth-of-type(${i+1}) .kpi-circle svg:nth-of-type(1){
            height: ${height}px;
            transform: translateY(${y});
        }

        `
    })
    
    return template.innerHTML;
}

function addKPI(){
    kpiName.forEach((v, i) => {           
        const section = document.createElement("section");
        section.className = "kpi-detail";
        section.innerHTML = `      
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
        <div class="kpi-info">
            <span class="heading1">${v}</span>
            <span>${kpiNow[i]}/${kpiGoal[i]} giờ</span>
            <span>
                <span>+${kpiUp[i]}%</span>
                <span class="small-text">so với tuần trước</span>
            </span>
        </div>       
    `;           
        document.getElementById("kpi-detail-list").appendChild(section);
    });
    document.getElementById("kpi-detail-list").innerHTML += `<style>`+ addKPIcss()+`<\style>`;
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

addKPI();

clickAndDrag("kpi-detail-list", ".kpi-detail", ".lr");