let allTasks = [];
function addAllTask () {
    allTasks.length = 0;
    allTasks = storage.KPIs.map(kpi => kpi.tasks).reduce((acc, events) => acc.concat(events), []);
    console.log(allTasks);
}
addAllTask();


function getDate(isoString) {
    return isoString.match(/\d{4}-\d{2}-\d{2}/)[0];
}

function getTime (isoString) {
    return isoString.split('T')[1]; 
}

function getTaskByDay (format) {
    const task = [];
    allTasks.forEach((v) => {
        if (getDate(v.end) === format) {
            task.push(v);
        }
    }) 
    return task;
}

function updateKPIProgress(KPI) {
    storage.KPIs.forEach(kpi => {
        if (kpi.id === KPI.id) {
            kpi.progress = 0;
            kpi.tasks.forEach(taskItem => {
                if (taskItem.done === 1) {
                    kpi.progress += Number(taskItem.progress);
                }
            });
            document.getElementById('completed-task').textContent = getCompletePer();
            localStorage.setItem('Storage', JSON.stringify(storage));

        }
      });
}

function changeStatusTaskById(task, status) {
    storage.KPIs.forEach(kpi => {
        if (kpi.id === task.kpiID) {
          kpi.tasks.forEach(taskItem => {
            if (taskItem.id === task.id) {
              taskItem.done = status;
              updateKPIProgress(kpi);
              console.log(storage);
            }
          });
        }
      });
    kpiPercentage = getKPIPercentages();
    updatePercentageValues();
  }

function getKPINames() {
    let kpiNames = [];
    for (let kpi of storage.KPIs) {
      kpiNames.push(kpi.name);
    }
    return kpiNames;
  }

  function roundPercentage(percentage) {
    let roundedPercentage;
    if (percentage % 1 < 0.5) {
      roundedPercentage = Math.floor(percentage);
    } else {
      roundedPercentage = Math.ceil(percentage);
    }
    return roundedPercentage;
  }

  function getKPIPercentages() {
    let kpiPercentages = [];
    for (let kpi of storage.KPIs) {
      let percentage = (kpi.progress / parseInt(kpi.hour)) * 100;
      kpiPercentages.push(roundPercentage(percentage));
    }
    return kpiPercentages;
  } 

  let kpiPercentage = getKPIPercentages();

  let kpiName = getKPINames();


const color_pink_pastel = "#F06292"; //"#F48FB1"; 
const color_blue_pastel = "#64B5F6"; //"#90CAF9";  
const color_yellow_pastel = "#FFD54F"; //"#FFE082";
var today = new Date();
var selectDay = {
    dd: today.getDate(),
    mm: today.getMonth(),
    yyyy: today.getFullYear()
}

const chartData = {
    labels: kpiName,
    datasets: [{
        data: [8, 10, 12],
        backgroundColor: [color_pink_pastel + 'A4', color_blue_pastel + 'A4', color_yellow_pastel + 'A4'],
        hoverBackgroundColor: [color_pink_pastel + 'ff', color_blue_pastel + 'ff', color_yellow_pastel + 'ff'],
        borderWidth:0,
    }] 
};

const taskData = {
    name: ["Phát triển hệ thống QLDT - B1.506", "Giao diện và trải nghiệm người dùng", "Nghiên cứu công nghệ Blockchain"],
    time: ["9:00 - 11:45", "16:00 - 17:30", "18:00 - 19:00"],
    note: ["Ghi chú", "Ghi chú", "Ghi chú"],
    state: [true, false, false],
};

const font = {
    size: 18,
    family: 'Roboto Flex',                     
};

function getResponsiveFontSize() {
    const width = window.innerWidth;
    if (width < 780) {
        return {
            size: 11,
            family: 'Roboto Flex',                     
        };
    } else return font;
}

const pieChart = document.getElementById("pie-chart");
Chart.defaults.padding = 0;
Chart.defaults.margin = 0;

// Function returns size for responsive 

function getResponsiveFontSize() {
    const width = window.innerWidth;
    if (width < 780) {
        return {
            size: 11,
            family: 'Roboto Flex',                     
        };
    } else return font;
}

chartText = localStorage.getItem('--color-text');

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: chartData,
    plugins: [ChartDataLabels],
    options: {
        plugins: {
            datalabels: {
                color: "#fff",
                font: getResponsiveFontSize(),
            },
            legend: {
                position: 'right',
                fullSize: true,
                labels: {
                    color: chartText,
                    font: getResponsiveFontSize(),
                    padding: 10,
                    usePointStyle: true,
                    pointStyle: 'rectRounded',
                },
                onHover: handleHover,
                onLeave: handleLeave
            }, 
            tooltip: {
                enabled: true
            },                                  
        },
        reponsive: true
    }
    });

    function handleHover(evt, item, legend) {
        legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
            colors[index] = index === item.index ? color.slice(0, -2) + 'ff' : color.slice(0, -2) + '4D';
        });
        legend.chart.update();
      }
    
    function handleLeave(evt, item, legend) {
        legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
            colors[index] = color.endsWith('4D') ? color.slice(0, -2) + 'A4' : color.slice(0, -2) + 'A4';
        });
        legend.chart.update();
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
            div.id = 'kpi-per_'+i;
            div.innerHTML = `      
            <div class="kpi-circle"">  
                                                 
                    <svg width="109" x="0" viewBox="0 0 110 107" xmlns="http://www.w3.org/2000/svg">
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

    function updatePercentageValues() {
        let kpiList = document.getElementById('kpi-list'); // Lấy ra phần tử có class "kpi-list"
        let kpiPerIds = kpiList.querySelectorAll('.kpi'); // Lấy ra tất cả các phần tử có id bắt đầu bằng "kpi_per_id"
        
        kpiPerIds.forEach(kpi => {
          id = kpi.id.substring(8);
          let percentageValue = kpiPercentage[id];
          kpi.querySelector('.percentage').textContent = percentageValue+' %'; // Cập nhật giá trị của class "percentage"
        });
      }
      
      // Sử dụng hàm để cập nhật giá trị của class "percentage"
      updatePercentageValues();
      

    function addDay(arr){
        var today = new Date();
        document.getElementById("week-list").innerHTML=``;
        for(i=0; i<arr.length; i++){
            const button = document.createElement("button");
            button.className = "day-button";
            button.data = i;
            if(arr[i].dd==today.getDate() && arr[i].mm == today.getMonth()+1 && arr[i].yyyy == today.getFullYear()){
                button.classList.add("active");
            }
            button.innerHTML = `${arr[i].dd}`;
            document.getElementById("week-list").appendChild(button);
            
            button.addEventListener('click', () => {
                selectDay = arr[button.data];
                console.log(selectDay);
                const day = selectDay.dd.toString().padStart(2, '0');
                const month = selectDay.mm.toString().padStart(2, '0');
                const format = `${selectDay.yyyy}-${month}-${day}`;
                addTask(getTaskByDay(format));
                console.log(getTaskByDay(format));

                console.log(format);
            });
        }
    }

    function getCompletePer(){
  res = 0;
  storage.KPIs.forEach((v, i) => {
    res += v.progress;
  });
  return (res/storage.KPIs.length).toFixed(2);
}

document.getElementById('completed-task').textContent = getCompletePer();
    
    function addTask(tasksArray){
        /*taskData.name.forEach((v, i) => {
            const div = document.createElement("div");
            div.className = "one-task";
            div.innerHTML = `      
            <div class="color-task">
            <svg id="a" data-target="${i}" style="display: block;" onclick="changeSVG(this)" width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M53 27.5C53 41.3071 41.8071 52.5 28 52.5C14.1929 52.5 3 41.3071 3 27.5C3 13.6929 14.1929 2.5 28 2.5C41.8071 2.5 53 13.6929 53 27.5Z"/>
            </svg>

            <svg id="b" data-target="${i}" style="display: none;" onclick="changeSVG(this)" width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3811_578)">
                <path d="M28.0002 4.58398C23.4677 4.58398 19.037 5.92802 15.2684 8.44614C11.4997 10.9643 8.56244 14.5433 6.82793 18.7308C5.09343 22.9183 4.6396 27.5261 5.52384 31.9715C6.40809 36.4169 8.59069 40.5002 11.7956 43.7052C15.0006 46.9101 19.084 49.0927 23.5294 49.977C27.9748 50.8612 32.5825 50.4074 36.77 48.6729C40.9575 46.9384 44.5366 44.0011 47.0547 40.2325C49.5728 36.4638 50.9168 32.0331 50.9168 27.5007C50.9168 24.4912 50.3241 21.5112 49.1724 18.7308C48.0207 15.9504 46.3327 13.4241 44.2047 11.2961C42.0767 9.16811 39.5504 7.48008 36.77 6.32841C33.9896 5.17674 31.0096 4.58398 28.0002 4.58398ZM41.0077 23.4604L27.2577 36.0646C26.8223 36.4638 26.2497 36.6795 25.6592 36.6667C25.0687 36.6539 24.5059 36.4135 24.0883 35.9959L17.2133 29.1209C16.9944 28.9095 16.8198 28.6566 16.6997 28.377C16.5796 28.0974 16.5164 27.7967 16.5138 27.4924C16.5111 27.1881 16.5691 26.8864 16.6843 26.6047C16.7996 26.3231 16.9697 26.0672 17.1849 25.852C17.4001 25.6369 17.6559 25.4667 17.9376 25.3515C18.2192 25.2363 18.521 25.1783 18.8253 25.1809C19.1295 25.1836 19.4303 25.2468 19.7098 25.3669C19.9894 25.487 20.2423 25.6616 20.4537 25.8804L25.7773 31.204L37.9093 20.0825C38.3573 19.6717 38.9501 19.4556 39.5574 19.4818C40.1646 19.508 40.7366 19.7744 41.1475 20.2223C41.5583 20.6703 41.7744 21.2631 41.7482 21.8703C41.722 22.4776 41.4556 23.0496 41.0077 23.4604Z"/>
                </g>
                <rect x="1" y="0.5" width="54" height="54" rx="27"/>
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
        })*/

        document.getElementById("task-list").innerHTML = ``;
        for (let i = 0; i < tasksArray.length; i++ ) {
            
            const div = document.createElement("div");
            div.className = "one-task";
            if (tasksArray[i].done === 0){
                div.innerHTML = `      
                <div class="color-task">
                <svg id="a" data-target="${tasksArray[i].id}" style="display: block;" onclick="changeSVG(this)" width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M53 27.5C53 41.3071 41.8071 52.5 28 52.5C14.1929 52.5 3 41.3071 3 27.5C3 13.6929 14.1929 2.5 28 2.5C41.8071 2.5 53 13.6929 53 27.5Z"/>
                </svg>

                <svg id="b" data-target="${tasksArray[i].id}" style="display: none;" onclick="changeSVG(this)" width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3811_578)">
                    <path d="M28.0002 4.58398C23.4677 4.58398 19.037 5.92802 15.2684 8.44614C11.4997 10.9643 8.56244 14.5433 6.82793 18.7308C5.09343 22.9183 4.6396 27.5261 5.52384 31.9715C6.40809 36.4169 8.59069 40.5002 11.7956 43.7052C15.0006 46.9101 19.084 49.0927 23.5294 49.977C27.9748 50.8612 32.5825 50.4074 36.77 48.6729C40.9575 46.9384 44.5366 44.0011 47.0547 40.2325C49.5728 36.4638 50.9168 32.0331 50.9168 27.5007C50.9168 24.4912 50.3241 21.5112 49.1724 18.7308C48.0207 15.9504 46.3327 13.4241 44.2047 11.2961C42.0767 9.16811 39.5504 7.48008 36.77 6.32841C33.9896 5.17674 31.0096 4.58398 28.0002 4.58398ZM41.0077 23.4604L27.2577 36.0646C26.8223 36.4638 26.2497 36.6795 25.6592 36.6667C25.0687 36.6539 24.5059 36.4135 24.0883 35.9959L17.2133 29.1209C16.9944 28.9095 16.8198 28.6566 16.6997 28.377C16.5796 28.0974 16.5164 27.7967 16.5138 27.4924C16.5111 27.1881 16.5691 26.8864 16.6843 26.6047C16.7996 26.3231 16.9697 26.0672 17.1849 25.852C17.4001 25.6369 17.6559 25.4667 17.9376 25.3515C18.2192 25.2363 18.521 25.1783 18.8253 25.1809C19.1295 25.1836 19.4303 25.2468 19.7098 25.3669C19.9894 25.487 20.2423 25.6616 20.4537 25.8804L25.7773 31.204L37.9093 20.0825C38.3573 19.6717 38.9501 19.4556 39.5574 19.4818C40.1646 19.508 40.7366 19.7744 41.1475 20.2223C41.5583 20.6703 41.7744 21.2631 41.7482 21.8703C41.722 22.4776 41.4556 23.0496 41.0077 23.4604Z"/>
                    </g>
                    <rect x="1" y="0.5" width="54" height="54" rx="27"/>
                    <defs>
                    <clipPath id="clip0_3811_578">
                    <rect x="0.5" width="55" height="55" rx="27.5" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                </div>
                <div id="center">
                    <div id="task-name-container" class="row-5px">
                        <span id="task-name">${tasksArray[i].title}</span>
                    </div>
                    <span id="memo">${tasksArray[i].note}</span>
                </div>
                <div>
                    <span id="time">${getTime(tasksArray[i].start)} - ${getTime(tasksArray[i].end)}</span>
                </div>      
                `;
            } else {
                div.innerHTML = `      
                <div class="color-task">
                <svg id="a" data-target="${tasksArray[i].id}" style="display: none;" onclick="changeSVG(this)" width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M53 27.5C53 41.3071 41.8071 52.5 28 52.5C14.1929 52.5 3 41.3071 3 27.5C3 13.6929 14.1929 2.5 28 2.5C41.8071 2.5 53 13.6929 53 27.5Z"/>
                </svg>

                <svg id="b" data-target="${tasksArray[i].id}" style="display: block;" onclick="changeSVG(this)" width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3811_578)">
                    <path d="M28.0002 4.58398C23.4677 4.58398 19.037 5.92802 15.2684 8.44614C11.4997 10.9643 8.56244 14.5433 6.82793 18.7308C5.09343 22.9183 4.6396 27.5261 5.52384 31.9715C6.40809 36.4169 8.59069 40.5002 11.7956 43.7052C15.0006 46.9101 19.084 49.0927 23.5294 49.977C27.9748 50.8612 32.5825 50.4074 36.77 48.6729C40.9575 46.9384 44.5366 44.0011 47.0547 40.2325C49.5728 36.4638 50.9168 32.0331 50.9168 27.5007C50.9168 24.4912 50.3241 21.5112 49.1724 18.7308C48.0207 15.9504 46.3327 13.4241 44.2047 11.2961C42.0767 9.16811 39.5504 7.48008 36.77 6.32841C33.9896 5.17674 31.0096 4.58398 28.0002 4.58398ZM41.0077 23.4604L27.2577 36.0646C26.8223 36.4638 26.2497 36.6795 25.6592 36.6667C25.0687 36.6539 24.5059 36.4135 24.0883 35.9959L17.2133 29.1209C16.9944 28.9095 16.8198 28.6566 16.6997 28.377C16.5796 28.0974 16.5164 27.7967 16.5138 27.4924C16.5111 27.1881 16.5691 26.8864 16.6843 26.6047C16.7996 26.3231 16.9697 26.0672 17.1849 25.852C17.4001 25.6369 17.6559 25.4667 17.9376 25.3515C18.2192 25.2363 18.521 25.1783 18.8253 25.1809C19.1295 25.1836 19.4303 25.2468 19.7098 25.3669C19.9894 25.487 20.2423 25.6616 20.4537 25.8804L25.7773 31.204L37.9093 20.0825C38.3573 19.6717 38.9501 19.4556 39.5574 19.4818C40.1646 19.508 40.7366 19.7744 41.1475 20.2223C41.5583 20.6703 41.7744 21.2631 41.7482 21.8703C41.722 22.4776 41.4556 23.0496 41.0077 23.4604Z"/>
                    </g>
                    <rect x="1" y="0.5" width="54" height="54" rx="27"/>
                    <defs>
                    <clipPath id="clip0_3811_578">
                    <rect x="0.5" width="55" height="55" rx="27.5" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                </div>
                <div id="center">
                    <div id="task-name-container" class="row-5px">
                        <span id="task-name">${tasksArray[i].title}</span>
                    </div>
                    <span id="memo">${tasksArray[i].note}</span>
                </div>
                <div>
                    <span id="time">${getTime(tasksArray[i].start)} - ${getTime(tasksArray[i].end)}</span>
                </div>      
                `;
            }
            
            document.getElementById("task-list").appendChild(div);
        }
    }

    var today = new Date();
    document.querySelector('.sBtn-text').textContent = 'Tháng 0' + (today.getMonth()+1) + '/ ' + today.getFullYear();
    addDay(getWeekDays(today.getFullYear(), today.getMonth() + 1));

  addKPI();


  clickAndDrag("week-list", ".day-button", ".container svg");

  clickAndDrag("kpi-list", ".kpi", ".lr");

    // Lấy các phần tử cần thiết
    const kpiDetailList = document.getElementById('kpi-list');
    const lDir = document.getElementById('kpi-list-left');
    const rDir = document.getElementById('kpi-list-right');

    // Thêm sự kiện click cho l-dir và r-dir
    lDir.addEventListener('click', function() {
    kpiDetailList.scrollLeft -= 320; // Điều chỉnh giá trị lùi đi khi click
    });

    rDir.addEventListener('click', function() {
    kpiDetailList.scrollLeft += 320; // Điều chỉnh giá trị tiến đi khi click
    });

    // Lấy các phần tử cần thiết
    const weekList = document.getElementById('week-list');
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    
    left.addEventListener('click', function() {
        weekList.scrollLeft -= 455; // Điều chỉnh giá trị lùi đi khi click
    });
    
    right.addEventListener('click', function() {
        weekList.scrollLeft += 455; // Điều chỉnh giá trị tiến đi khi click
    });


    function changeSVG(svg) {
        var target = svg.getAttribute('data-target');
        var targetSVGs = document.querySelectorAll('svg[data-target="' + target + '"]');
        targetSVGs.forEach(function (targetSVG) {  
            let task = allTasks.find(task => task.id === target);
            if (targetSVG.id === "a" ) {
                if (targetSVG.style.display === 'none') {
                    targetSVG.style.display = 'block';
                    changeStatusTaskById(task, 0);
                } else {
                    targetSVG.style.display = 'none';
                    changeStatusTaskById(task, 1);
                }
            } else {
                if (targetSVG.style.display === 'none') {
                    targetSVG.style.display = 'block';
                } else {
                    targetSVG.style.display = 'none';
                }
            }

            /*if (targetSVG.style.display === 'none') {
                targetSVG.style.display = 'block';
                console.log(targetSVG.parentElement);
            } else {
                targetSVG.style.display = 'none';
                //console.log(targetSVG.parentElement);
            }*/
        });
      }


    function monthSelection(){
        document.getElementById("month-selection").innerHTML = `
        <div class="month-picker-header">
            <div id="prev-year">
            <svg viewBox="0 0 18 34" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2911 0.25L17.1079 2.25428L3.74149 17L17.1079 31.7457L15.2911 33.75L0.107903 17L15.2911 0.25Z"/>
            </svg>
            </div>
            <span id="year">2024</span>
            <div id="next-year">
            <svg viewBox="0 0 18 34"  xmlns="http://www.w3.org/2000/svg">
                <path d="M1.9247 33.75L0.10791 31.7457L13.4743 17L0.10791 2.25427L1.9247 0.25L17.1079 17L1.9247 33.75Z"/>
            </svg>   
            </div> 
        </div>
        <div class="month-picker">
            <div class="year-picker-body" id="year-picker">
                <button class="year" data-year="2021">2021</button>
                <button class="year" data-year="2022">2022</button>   
                <button class="year" data-year="2023">2023</button>
                <button class="year" data-year="2024">2024</button>
                <button class="year" data-year="2025">2025</button>
                <button class="year" data-year="2026">2026</button>
                <button class="year" data-year="2027">2027</button>
                <button class="year" data-year="2028">2028</button>
                <button class="year" data-year="2029">2029</button>
                <button class="year" data-year="2030">2030</button>
                <button class="year" data-year="2031">2031</button>
                <button class="year" data-year="2032">2032</button>
            </div>
            <div class="month-picker-body">
                <button class="month" data-month="01">1</button>
                <button class="month" data-month="02">2</button>   
                <button class="month" data-month="03">3</button>
                <button class="month" data-month="04">4</button>
                <button class="month" data-month="05">5</button>
                <button class="month" data-month="06">6</button>
                <button class="month" data-month="07">7</button>
                <button class="month" data-month="08">8</button>
                <button class="month" data-month="09">9</button>
                <button class="month" data-month="10">10</button>
                <button class="month" data-month="11">11</button>
                <button class="month" data-month="12">12</button>
            </div>
        </div>
        <div class="month-picker-footer">
            <button id="back-to-month">Quay lại</button>
            <button id="this-month">Tháng này</button>
        </div>
    `
    }

    monthSelection();

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }
      
    function getWeekDays(currentYear, selectedMonth) {
        var daysInMonth = getDaysInMonth(currentYear, selectedMonth); 
        var weekDays = [];
        
        for (var i = 1; i <= daysInMonth; i++) {
            var date = new Date(currentYear, selectedMonth, i); 
            var dayOfWeek = date.getDay();
        
            if (dayOfWeek >= 0 && dayOfWeek <= 6) {
                a = {
                    dd: i,
                    mm: selectedMonth,
                    yyyy: currentYear
                }
                weekDays.push(a);
            }
        }
        
        // Nếu ngày 1 không bắt đầu từ thứ Hai, thêm ngày của tháng trước
        var firstDay = new Date(currentYear, selectedMonth - 1, 1).getDay(); 
        if (firstDay !== 1) {
            var daysInPreviousMonth = getDaysInMonth(currentYear, selectedMonth - 1); 
            for (var j = 0; j < firstDay-1; j++) {
                a = {
                    dd: daysInPreviousMonth - j,
                    mm: selectedMonth-1,
                    yyyy: currentYear
                }
                weekDays.unshift(a);
            }
        }else if(firstDay == 0){
            var daysInPreviousMonth = getDaysInMonth(currentYear, selectedMonth - 1); 
            for (var j = 0; j < 6; j++) {
                a = {
                    dd: daysInPreviousMonth - j,
                    mm: selectedMonth-1,
                    yyyy: currentYear
                }
                weekDays.unshift(a);
            }
        }
        
        // Nếu ngày cuối cùng không kết thúc vào cn, thêm ngày của tháng sau
        var lastDay = new Date(currentYear, selectedMonth - 1, weekDays[weekDays.length - 1]).getDay(); 
        if (lastDay !== 0) {
            for (var j = 1; j <= 7-lastDay; j++) {
                a = {
                    dd: j,
                    mm: selectedMonth+1,
                    yyyy: currentYear
                }
                weekDays.push(a);
            }
        }
        return weekDays;
    }
      
    document.addEventListener('DOMContentLoaded', function () {
        const yearSpan = document.getElementById('year');
        let currentYear = new Date().getFullYear();
    
        function updateYear(newYear) {
            currentYear = newYear;
            yearSpan.textContent = currentYear;
        }
    
        document.getElementById('prev-year').addEventListener('click', function () {
            updateYear(currentYear - 1);
        });
    
        document.getElementById('next-year').addEventListener('click', function () {
            updateYear(currentYear + 1);
        });
    
        document.querySelectorAll('.month').forEach(function (monthDiv) {
            monthDiv.addEventListener('click', function () {
                const selectedMonth = Number(monthDiv.getAttribute('data-month'));
                var weekDaysArray = getWeekDays(currentYear, selectedMonth);
                document.querySelector('.sBtn-text').textContent = 'Tháng ' + selectedMonth + '/ ' + currentYear;
                document.getElementById('month-selection').style.display = 'none';
                addDay(weekDaysArray);
            });
        });
    
        updateYear(currentYear);
    });
    
    const yearSpan = document.getElementById('year');
    const yearPicker = document.getElementById('year-picker');
    const monthPickerBody = document.querySelector('.month-picker-body');

    function openYearPicker() {
        yearPicker.style.display = 'grid';
        monthPickerBody.style.display = 'none';
        document.getElementById('back-to-month').style.visibility = 'visible';
    }

    function hideYear(year) {
        yearSpan.textContent = year;
        yearPicker.style.display = 'none';
        monthPickerBody.style.display = 'grid';
        document.getElementById('back-to-month').style.visibility = 'hidden';
    }

    yearSpan.addEventListener('click', openYearPicker);
    document.getElementById('back-to-month').addEventListener('click', () => {
        hideYear(yearSpan.textContent);
    });

    const yearOptions = yearPicker.querySelectorAll('.year');
    yearOptions.forEach(year => {
        year.addEventListener('click', () => {
            hideYear(year.textContent);
        });
    });

    const selectBtn = document.querySelector('.select-btn');

    function toggleMonthSelection() {
        const monthSelection = document.getElementById('month-selection');
        if(monthSelection.style.display == 'flex'){
            monthSelection.style.display = 'none';
        }else {
            monthSelection.style.display = 'flex';
        }
        
    }

    selectBtn.addEventListener('click', toggleMonthSelection);

    let todayDate = new Date();

    let year = todayDate.getFullYear();
    let month = String(todayDate.getMonth() + 1).padStart(2, '0'); // Add leading zero
    let day = String(todayDate.getDate()).padStart(2, '0'); // Add leading zero
    
    let formattedDate = `${year}-${month}-${day}`;
    
    console.log(formattedDate); // e.g., "2024-06-05"
    addTask(getTaskByDay(formattedDate));