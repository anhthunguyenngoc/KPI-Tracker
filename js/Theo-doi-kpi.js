let storage;
let storageString = localStorage.getItem("Storage");
if (storageString) {
  storage = JSON.parse(storageString);
} else {
    storage = {
        KPIs: [
            {   
                id: '#KPI1',
                name: "Nghiên cứu",
                color : "#9CB2D7",
                hour: "70",
                unit: "Giờ",
                progress : 0,
                tasks : [
                    {
                    id: '#KPI1task1',
                    title: 'Phát triển hệ thống',
                    start: '2024-06-05T09:00',
                    end: '2024-06-05T11:00',       
                    progress: 2,       
                    note: 'Ghi chú',
                    repeat: '',
                    backgroundColor: '#9CB2D7',
                    kpiID:'#KPI1',
                    done: 0,
                    inCalender: 1,
                    },
                    {
                    id: '#KPI1task2',
                    title: 'Nghiên cứu ứng dụng',
                    day: '',
                    start: '2024-06-05T09:00',
                    end: '2024-06-05T11:30', 
                    progress: 2.5,              
                    note: 'Ghi chú',
                    repeat: '',
                    backgroundColor: '#9CB2D7',
                    kpiID:'#KPI1',
                    done: 0,
                    inCalender: 0,
                    },
                ]
            },
            {
                id: '#KPI2',
                name: "Giảng dạy",
                color : "#F2DEDE",
                hour: "80",
                unit: "Giờ",
                progress : 0,
                tasks : [
                    {
                        id: '#KPI2task1',
                        title: 'Giao diện và trải nghiệm người dùng',
                        start: '2024-05-24T14:00',
                        end: '2024-05-24T17:30',
                        backgroundColor: '#F2DEDE',
                        kpiID:'#KPI2',
                        done: 0,
                        inCalender: 0,
                        progress: 3.5,
                        note: 'Ghi chú',
                    },

                ]
            },
            {
                id: '#KPI3',
                name: "Phục vụ",
                color : "#FFDBA6",
                hour: "60",
                unit: "Giờ",
                progress : 0,
                tasks: []
            }
        ]
    }
}

const kpiUp = [2, 8, 5, 3];

function getKPINames() {
    let kpiNames = [];
    for (let kpi of storage.KPIs) {
      kpiNames.push(kpi.name);
    }
    return kpiNames;
  }

  function getKPIGoal() {
    let kpiGoal = [];
    for (let kpi of storage.KPIs) {
      kpiGoal.push(kpi.hour);
    }
    return kpiGoal;
  }

  function getKPINow() {
    let kpiNow = [];
    for (let kpi of storage.KPIs) {
      kpiNow.push(kpi.progress);
    }
    return kpiNow;
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

  function getKPIPercentages(a, b) {
      let percentage = (a / parseInt(b)) * 100;
    return roundPercentage(percentage);
  } 

  let kpiPercentage = getKPIPercentages();
  let kpiName = getKPINames();
  let kpiNow = getKPINow();
  let kpiGoal = getKPIGoal();

var chartData = {
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
        pointBorderColor:"#2a7378",
        
    }] 
};
var xTitle = 'Ngày trong tuần';

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

const font = {
    size: 18,
    family: 'Roboto Flex',                     
};
Chart.defaults.font = font;
Chart.defaults.color = '#000';

const lineChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: chartData,
    options: {      
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
                backgroundColor: '#def2f1',
                titleColor: '#000',
                bodyColor: '#000',
                callbacks: {
                    label: (context) => {
                        console.log(context)
                        return ` Đã hoàn thành: ${context.raw} giờ`
                    }
                }
            }                                     
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 24,
                title: {
                    display: true,
                    text: 'Số chỉ tiêu đã hoàn thành'
                },
                border: {
                    color: "#9CD6D3",
                    width: 5,
                },
                grid: {
                    color: "#9CD6D3",
                }
              },
            x: {
                title: {
                    display: true,
                    text: 'Ngày trong tuần',
                },
                border: {
                    color: "#9CD6D3",
                    width: 5,
                },
                grid: {
                    color: "#9CD6D3",
                }
            }
        },
        /*
        chartAreaBorder: {
            borderColor: "#2a7378",
            borderWidth: 2,
            borderDash: [5, 5],
            borderDashOffset: 2,
          },
          */
    },
    //plugins: [chartAreaBorder],
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

function addKpisTaskRow(tasks){
    htmlText = ``
    for(let task of tasks){
      htmlText += `
      <tr>
        <td>${task.id.substring(9)}</td>
        <td>${task.title}</td>
        <td>${task.start}</td>
        <td>${task.end}</td>
        <td><div class="link" style="white-space: nowrap;">Xem chi tiết</div></td>
        <td>
          <button class="img-button">
            <img src="../images/bin.svg" alt="">
          </button>
        </td>
      </tr>
      `
    }
    return htmlText;
  }

  function addDelConfirmNoti(content, id){
    let confirmNoti = document.createElement('template');
    confirmNoti.id = 'confirmNoti';
    confirmNoti.innerHTML =
    `
    <div id="popup-container">
    <div class="noti-header">
    <svg id="closeNoti" class="icon-svg" onclick="closeConfirmNoti()" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.095 47.095" xml:space="preserve">

      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      
      <g id="SVGRepo_iconCarrier"> <g> <path d="M45.363,36.234l-13.158-13.16l12.21-12.21c2.31-2.307,2.31-6.049,0-8.358c-2.308-2.308-6.05-2.307-8.356,0l-12.212,12.21 L11.038,1.906c-2.309-2.308-6.051-2.308-8.358,0c-2.307,2.309-2.307,6.049,0,8.358l12.81,12.81L1.732,36.831 c-2.309,2.31-2.309,6.05,0,8.359c2.308,2.307,6.049,2.307,8.356,0l13.759-13.758l13.16,13.16c2.308,2.308,6.049,2.308,8.356,0 C47.673,42.282,47.672,38.54,45.363,36.234z"/> </g> </g>
      
    </svg>
  </div>
    <div class="popup-content">
      <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
        
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
        
        <g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"/> <path style="fill: var(--color-button);" fill-rule="evenodd" clip-rule="evenodd" d="M11 13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V13ZM13 15.9888C13 15.4365 12.5523 14.9888 12 14.9888C11.4477 14.9888 11 15.4365 11 15.9888V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V15.9888ZM9.37735 4.66136C10.5204 2.60393 13.4793 2.60393 14.6223 4.66136L21.2233 16.5431C22.3341 18.5427 20.8882 21 18.6008 21H5.39885C3.11139 21 1.66549 18.5427 2.77637 16.5431L9.37735 4.66136Z"/> </g>
        
      </svg>
      <p  style="display: flex; flex-direction: column; width: 100%; align-items: flex-start;">${content}</p>
    </div>
    
    <div id="popup-buttons">
      <button id="cancel-btn" onclick="closeConfirmNoti()">Từ chối</button>
      <button id="del-confirm-btn" onclick="remKPI(${id})">Đồng ý</button>        
    </div>
    
</div>
`
return confirmNoti.content.firstElementChild;
}

function showDelConfirmNoti(content, id) {
  document.body.appendChild(addDelConfirmNoti(content, id));
}

function showKPIInfo(id){
    initKPIInfo(id); 
    document.getElementById('kpiInfo').classList.remove("hidden");
    document.getElementById('overlay').classList.remove("hidden");
  }
  
  function initKPIInfo(id){
    idS = "#KPI" + id;
    kpi =  storage.KPIs.find(kpi => kpi.id === idS);
    let kpiInfo = document.createElement('div');
    kpiInfo.classList.add('popUpWindow');
    kpiInfo.classList.add('hidden');
    kpiInfo.id = 'kpiInfo';
    kpiInfo.innerHTML = `
        <div id="popup-title"><h2 class="heading2">Chi tiết KPI</h2></div>
  
        <svg id="closeKpiInfoButton" class="icon-svg" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.095 47.095" xml:space="preserve">
  
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          
          <g id="SVGRepo_iconCarrier"> <g> <path d="M45.363,36.234l-13.158-13.16l12.21-12.21c2.31-2.307,2.31-6.049,0-8.358c-2.308-2.308-6.05-2.307-8.356,0l-12.212,12.21 L11.038,1.906c-2.309-2.308-6.051-2.308-8.358,0c-2.307,2.309-2.307,6.049,0,8.358l12.81,12.81L1.732,36.831 c-2.309,2.31-2.309,6.05,0,8.359c2.308,2.307,6.049,2.307,8.356,0l13.759-13.758l13.16,13.16c2.308,2.308,6.049,2.308,8.356,0 C47.673,42.282,47.672,38.54,45.363,36.234z"/> </g> </g>
          
        </svg>
  
        <p class="row-10px" style="width: 100%; justify-content: flex-end; padding-right: 40px;"> 
        <button class="img-button">
          <img src="../images/edit.svg">
        </button> 
        <button id="delete-kpi" class="img-button">
          <img src="../images/bin.svg" alt="">
        </button>
        </p>
  
        <div id="kpi-info-container">
        <p class="row-10px">Tên chỉ tiêu: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="15" fill="${kpi.color}"/>
          </svg> <span>${kpi.name}</span></p>
  
          <p class="row-10px">Mục tiêu cần đạt: <span>${kpi.hour}</span></p>
  
          <div class="row-10px">
            <span>Tiến độ hiện tại: </span>
            <div class="progress-bar">
              <div class="progress" style="width: ${getKPIPercentages(kpi.progress, kpi.hour)};">${getKPIPercentages(kpi.progress, kpi.hour)}%</div>
            </div> 
            <div style="display: flex; flex-direction: row; align-items: center;">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  
              <g id="SVGRepo_bgCarrier" stroke-width="0"/>
              
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
              
              <g id="SVGRepo_iconCarrier">
              
              <path style="fill: var(--color-button);" d="M12.707 5.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11 8.414V18a1 1 0 1 0 2 0V8.414l2.293 2.293a1 1 0 0 0 1.414-1.414l-4-4Z"/>
              
              </g>
              
            </svg>
            <span>3% so với tuần trước</span>
          </div>
          </div>
          <p class="row-10px" style="justify-content: space-between; align-items: center;">Danh sách các nhiệm vụ <button class="addButton">Thêm nhiệm vụ mới +</button> </p>
          <table id="kpi-task-list">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên nhiệm vụ</th>
                <th>Thời gian bắt đầu</th>
                <th>Thời gian kết thúc</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              `+addKpisTaskRow(kpi.tasks)+`
            </tbody>
          </table>
          
        </div>
    `
    document.body.appendChild(kpiInfo);
    document.getElementById('closeKpiInfoButton').addEventListener("click", () => {
      document.body.removeChild(kpiInfo);
      document.getElementById('overlay').classList.add("hidden");
    })
    document.getElementById('delete-kpi').addEventListener('click', e => {
      showDelConfirmNoti("Bạn có chắc chắn là muốn xóa KPI này không?", id);
    });
  }

  function remKPI(id){
    id = "#KPI"+id;
    storage.KPIs = storage.KPIs.filter(kpi => kpi.id !== id);
    localStorage.setItem('Storage', JSON.stringify(storage));
    storage = JSON.parse(localStorage.getItem('Storage'));
    console.log(storage);
    console.log(id);
    closeConfirmNoti();
    //closeInfoKPI();
    //showToast("Xóa KPI thành công", "Hoàn tác", "block")
  }

function getCompletePer(){
  res = 0;
  storage.KPIs.forEach((v, i) => {
    res += v.progress;
  });
  return res/storage.KPIs.length;
}

document.getElementById('completed-task').textContent = getCompletePer();

function addKPI(){
    document.getElementById("kpi-detail-list").innerHTML = ``;
    storage = JSON.parse(localStorage.getItem('Storage'));
    storage.KPIs.slice().reverse().forEach((v, i) => {           
      let kpiNumber = parseInt(v.id.substring(4)); 
        const section = document.createElement("section");
        section.className = "kpi-detail";
        section.id = "kpi-detail-"+kpiNumber;
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
        <span class="percentage">${getKPIPercentages(v.progress, v.hour)}%</span>
        <div class="kpi-info">
            <span class="heading1">${v.name}</span>
            <span>${v.progress}/${v.hour} giờ</span>
            <span>
                <span>+${kpiUp[i]}%</span>
                <span class="small-text">so với tuần trước</span>
            </span>
        </div>       
    `;           
        
        document.getElementById("kpi-detail-list").appendChild(section);
        
    });
    document.getElementById("kpi-detail-list").innerHTML += `<style>`+ addKPIcss()+`<\style>`;

    storage.KPIs.forEach((v, i) => {           
      let kpiNumber = parseInt(v.id.substring(4)); 
        document.getElementById("kpi-detail-"+kpiNumber).addEventListener('click', function() {
            console.log('click');
            showKPIInfo(kpiNumber);
        });
    });
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
}

    document.getElementById("month").addEventListener("click", () => {
        chartData.labels = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"]
        chartData.datasets[0].data = [8, 18, 2, 8, 3, 5, 6, 8, 3, 5, 6, 20]
        lineChart.options.scales.x.title.text = 'Tháng trong năm'
        lineChart.update()
        document.getElementById("day").style.backgroundColor = color_mode_1_button
        document.getElementById("month").style.backgroundColor = color_mode_1_footer
    });

    document.getElementById("day").addEventListener("click", () => {
        chartData.labels = ["29/4", "30/4", "1/5", "2/5", "3/5", "4/5", "5/5"]
        chartData.datasets[0].data = [8, 18, 2, 8, 3, 5, 6]
        lineChart.options.scales.x.title.text = 'Ngày trong tuần'
        lineChart.update()
        document.getElementById("day").style.backgroundColor = color_mode_1_footer
        document.getElementById("month").style.backgroundColor = color_mode_1_button
    });

addKPI();

clickAndDrag("kpi-detail-list", ".kpi-detail", ".lr");

// Lấy các phần tử cần thiết
const kpiDetailList = document.getElementById('kpi-detail-list');
const lDir = document.getElementById('l-div');
const rDir = document.getElementById('r-div');

// Thêm sự kiện click cho l-dir và r-dir
lDir.addEventListener('click', function() {
  kpiDetailList.scrollLeft -= 100; // Điều chỉnh giá trị lùi đi khi click
});

rDir.addEventListener('click', function() {
  kpiDetailList.scrollLeft += 100; // Điều chỉnh giá trị tiến đi khi click
});

// Ẩn l-dir nếu không thể lùi được nữa
kpiDetailList.addEventListener('scroll', function() {
  if (kpiDetailList.scrollLeft === 0) {
    lDir.style.display = 'none';
    rDir.style.display = 'flex';
  } else {
    lDir.style.display = 'flex';
    rDir.style.display = 'none';
  }
});

const closeAddKPIContainer = document.querySelector("#closeButton");
const openAddKPIContainer = document.querySelector("#openAddKPIContainer");

const submitButton = document.querySelector("#KPIaddButton");
const errorLabel = document.querySelector("#errorMissingField");
const addKPIContainer = document.querySelector("#addKPI");
const addKPIButton = document.getElementById('addKPIButton');

function addColorLib(){
  var colorPickers = document.querySelectorAll('.KPIcolor');

  colorPickers.forEach(function(colorPicker) {
    $(colorPicker).spectrum({
      type: "component",
      showPalette: true,
      showSelectionPalette: true, 
      togglePaletteOnly: true,
      togglePaletteMoreText: 'Hiển thị thêm',
      togglePaletteLessText: 'Ẩn bớt',
      showInput: true,
      allowEmpty:true,
      localStorageKey: "spectrum.homepage",
      maxSelectionSize: 8,
      cancelText: "Hủy bỏ",
      chooseText: "Xác nhận",
      clearText: "Đặt lại màu",
      palette: [
        ["#F2DEDE","#9CB2D7", "#FFDBA6", "#64B5F6", "#4DB6AC", "#90A4AE"]
      ],
      containerClassName: 'kpi-color-class'
    });
  });
}

let addKPIArray = [];

function loadExcelToKPIContainer () {
    realContent.innerHTML='';
    kpiIndex=0;
    for (let i = 0; i< addKPIArray.length; i++) {
         
          kpiIndex++;
          const kpiInput = document.createElement('div');
          kpiInput.className = 'inputTitle flex KPIinput';
          kpiInput.innerHTML = `
            <div>${kpiIndex}</div>
          ` +  addExcelKPIRow(addKPIArray[i].name, addKPIArray[i].color, addKPIArray[i].hour, addKPIArray[i].unit);
          realContent.appendChild(kpiInput);
          addColorLib();
          const removeButtons = document.querySelectorAll('.removeKPI');
          removeButtons.forEach(button => {
              
                  button.addEventListener('click', function() {
                      if (kpiIndex == 1) { 
  
                      } else {
                      button.parentElement.parentElement.remove();
                      updateKPIIndexes();}
            });
          });
    }
  }

function uploadExcel() {
    var fileInput = document.getElementById('kpi-file-upload');   

    fileInput.addEventListener('change', function() {
      document.getElementById('kpi-file-name').textContent = fileInput.files[0].name;
      reader = new FileReader();

      reader.onload = function(event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
  
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);
  
        jsonData.forEach((item, index) => {
            newKPI = {
                id: `#KPI${storage.KPIs.length +addKPIArray.length + 1}`,
                name: item['Tên chỉ tiêu*'],
                color: item['Mã màu đại diện'],
                hour: item['Số giờ mục tiêu*'],
                unit: item['Đơn vị*'],
                progress: 0,
                tasks: [] // Initialize with empty tasks array
            };
            addKPIArray.push(newKPI);
        });
       
        console.log(addKPIArray);
              loadExcelToKPIContainer();

    };
  
      if(fileInput.files.length > 0) {
          reader.readAsArrayBuffer(fileInput.files[0]);
      } else {
          alert("Please upload a file.");
      }
  } );
}

function addKPIRow(){
    return `
          <div>
            <input type="text" placeholder="Thêm chỉ tiêu" class="KPIName">
          </div>
          <div>
            <input type="text" class="KPIcolor"/>
          </div>
          <div>
            <input type="text" class="KPIHours">
          </div>
          <div>
            <input type="text" placeholder="Ví dụ: Giờ" class="KPIUnit">
          </div>
          <div>
            <button class="removeKPI">
              <img src="../images/bin.svg" alt="">
            </button>
          </div>
        </div>
    `
  }
  
  function addExcelKPIRow(name, color_value, hour, input){
    return `
          <div>
            <input type="text" value='${name}' class="KPIName">
          </div>
          <div>
            <input type="text" class="KPIcolor" value='${color_value}' />
          </div>
          <div>
            <input type="text" value='${hour}'  class="KPIHours">
          </div>
          <div>
            <input type="text" value='${input}'  class="KPIUnit">
          </div>
          <div>
            <button class="removeKPI">
              <img src="../images/bin.svg" alt="">
            </button>
          </div>
        </div>
    `
  }

  const initAddKPIContainer = () =>{
    realContent.innerHTML = `
      <div class="inputTitle flex KPIinput">
        <div>1</div>`
      +addKPIRow();
    realContent.parentElement.appendChild(realContent);
    addColorLib();
}

const realContent = document.getElementById('inputContainer');
      let kpiIndex = 1;

      addKPIButton.addEventListener('click', function() {
        kpiIndex++;
        const kpiInput = document.createElement('div');
        kpiInput.className = 'inputTitle flex KPIinput';
        kpiInput.innerHTML = `
          <div>${kpiIndex}</div>
          `+ addKPIRow();
        realContent.appendChild(kpiInput);

        addColorLib();

        const removeButtons = document.querySelectorAll('.removeKPI');
        removeButtons.forEach(button => {
            
                button.addEventListener('click', function() {
                    if (kpiIndex == 1) { 

                    } else {
                    button.parentElement.parentElement.remove();
                    updateKPIIndexes();}
          });
        });
      });

      function updateKPIIndexes() {
        const kpiInputs = document.querySelectorAll('.KPIinput');
        kpiInputs.forEach((input, index) => {
    
        input.firstElementChild.textContent = index + 1;
        });
        kpiIndex = kpiInputs.length;

}

// Function to store the data from all input elements
submitButton.addEventListener('click', function() {
  const kpiData = [];
    const kpiInputs = document.querySelectorAll('.KPIinput');
    let allFieldsFilled = true;

    kpiInputs.forEach((input, index) => {
        const kpiName = input.querySelector('.KPIName').value;
        const kpiColor = input.querySelector('.KPIcolor').value;
        const kpiHours = input.querySelector('.KPIHours').value;
        const kpiUnit = input.querySelector('.KPIUnit').value;

        if (!kpiName || !kpiColor || !kpiHours ||!kpiUnit) {
            allFieldsFilled = false;
        }

        kpiData.push({
            id: "#KPI" + (storage.KPIs.length + index + 1).toString(),
            name: kpiName,
            color: kpiColor,
            hour: kpiHours,
            unit: kpiUnit,
            progress : 0,
            tasks: []
        });
    });

    if (!allFieldsFilled) {
        errorLabel.style.display = 'block';
    } else {
        errorLabel.style.display = 'none';
        console.log(kpiData);
        storage.KPIs = storage.KPIs.concat(kpiData);
        console.log(storage.KPIs);
        localStorage.setItem('Storage', JSON.stringify(storage));
        addKPIContainer.classList.add("hidden");
        document.getElementById('overlay').classList.add("hidden");
        errorLabel.style.display = 'none';
        realContent.innerHTML=``;
        kpiIndex=1;
        showToast('Thêm chỉ tiêu KPI thành công', '', 'none');
        addKPI();
    }
  // Here you can store kpiData to localStorage, send it to a server, etc.
});
        
openAddKPIContainer.addEventListener('click', () => {
    addKPIContainer.classList.remove("hidden");
    document.getElementById('overlay').classList.remove("hidden");
    initAddKPIContainer();  
})

closeAddKPIContainer.addEventListener("click", () => {
    addKPIContainer.classList.add("hidden");
    document.getElementById('overlay').classList.add("hidden");
    errorLabel.style.display = 'none';
    realContent.innerHTML=``;
    kpiIndex=1;
})

