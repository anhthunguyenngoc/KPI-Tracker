  
// Simple data storage
  let storage = {
    KPIs: [
        {   
            id: '#KPI1',
            name: "Nghiên cứu",
            color : "#9CB2D7",
            hour: "70",
            tasks : [
                {
                  id: '#KPI1task1',
                  title: 'Phát triển hệ thống',
                  start: '2024-05-31T09:00:00',
                  end: '2024-05-31T11:07:00',              
                  note: '',
                  repeat: '',
                  backgroundColor: '#9CB2D7'
                },
                {
                  id: '#KPI1task2',
                  title: 'Nghiên cứu ứng dụng',
                  day: '',
                  start: '2024-06-01T09:00:00',
                  end: '2024-06-01T11:30:00',               
                  note: '',
                  repeat: '',
                  backgroundColor: '#9CB2D7'
                },
            ]
        },
        {
            id: '#KPI2',
            name: "Giảng dạy",
            color : "#F2DEDE",
            hour: "80",
            tasks : [
                {
                    id: '#KPI2task1',
                    title: 'Giao diện và trải nghiệm',
                    start: '2024-05-24T14:10:00',
                    end: '2024-05-24T17:30:00',
                    backgroundColor: '#F2DEDE'
                },

            ]
        },
        {
            id: '#KPI3',
            name: "Phục vụ",
            color : "#FFDBA6",
            hour: "60",
            tasks: []
        }
    ]
}

//document.addEventListener('DOMContentLoaded', function() {

// Add KPI
const addKPIContainer = document.querySelector("#addKPI");
const closeAddKPIContainer = document.querySelector("#closeButton");
const openAddKPIContainer = document.querySelector("#openAddKPIContainer");

const addKPIButton = document.getElementById('addKPIButton');
const submitButton = document.querySelector("#KPIaddButton");
const errorLabel = document.querySelector("#errorMissingField");

const KPIContainer = document.querySelector("#title-kpi");

const submitTaskButton = document.getElementById("taskAddButton");
const selectTasksButton = document.getElementById("selectTasksButton");
/*
//

<li id="kpi-example" class="KPI_container">
              <div class="KPI">Giảng dạy</div>
              <div class="hour">80 giờ</div>
            </li>
*/
function placeKPI() {
  KPIContainer.innerHTML="";
  for (let i = 0; i< storage.KPIs.length; i++) {
    let KPI = document.createElement('li');
    KPI.id = 'kpi_' + i;
    KPI.className = 'KPI_container';
    KPI.innerHTML=`
      <div class="KPI" style="background-color:${storage.KPIs[i].color}">${storage.KPIs[i].name}</div>
      <div class="hour">${storage.KPIs[i].hour}</div>
    `;

    KPI.addEventListener('click', function() {
      showKPIInfo(i);
    });

    KPIContainer.appendChild(KPI);
  }
}

function showKPIInfo(id){
  initKPIInfo(id); 
  document.getElementById('kpiInfo').classList.remove("hidden");
  document.getElementById('overlay').classList.remove("hidden");
}

function initKPIInfo(id){
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
      <button class="img-button">
        <img src="../images/bin.svg" alt="">
      </button>
      </p>

      <div id="kpi-info-container">
      <p class="row-10px">Tên chỉ tiêu: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="30" rx="15" fill="${storage.KPIs[id].color}"/>
        </svg> <span>${storage.KPIs[id].name}</span></p>

        <p class="row-10px">Mục tiêu cần đạt: <span>${storage.KPIs[id].hour}</span></p>

        <div class="row-10px">
          <span>Tiến độ hiện tại: </span>
          <div class="progress-bar">
            <div class="progress" style="width: 50%;">50%</div>
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
            `+addKpisTaskRow(id)+`
          </tbody>
        </table>
        
      </div>
  `
  document.body.appendChild(kpiInfo);
  document.getElementById('closeKpiInfoButton').addEventListener("click", () => {
    document.getElementById('kpiInfo').classList.add("hidden");
    document.getElementById('overlay').classList.add("hidden");
  })
  
}

function addKpisTaskRow(id){
  htmlText = ``
  for(let task of storage.KPIs[id].tasks){
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

placeKPI();


function addKPIRow(){
  return `
        <div>
          <input type="text" placeholder="Thêm chỉ tiêu" class="KPIName">
        </div>
        <div>
          <input type="text" class="KPIcolor"/>
        </div>
        <div>
          <input type="text" placeholder="Số giờ" class="KPIHours">
        </div>
        <div>Tạm lưu</div>
        <div>
          <button class="removeKPI">
            <img src="../images/bin.svg" alt="">
          </button>
        </div>
      </div>
  `
}

function addExcelKPIRow(name, color_value, hour){
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
        <div>Tạm lưu</div>
        <div>
          <button class="removeKPI">
            <img src="../images/bin.svg" alt="">
          </button>
        </div>
      </div>
  `
}

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

                if (!kpiName || !kpiColor || !kpiHours) {
                    allFieldsFilled = false;
                }

                kpiData.push({
                    id: "#KPI" + (storage.KPIs[id].length + index + 1).toString(),
                    name: kpiName,
                    color: kpiColor,
                    hour: kpiHours,
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
                placeKPI();
                addKPIContainer.classList.add("hidden");
                document.getElementById('overlay').classList.add("hidden");
                errorLabel.style.display = 'none';
                realContent.innerHTML=``;
                kpiIndex=1;
                showToast('Thêm chỉ tiêu KPI thành công', '', 'none');
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

let KPICounter = 0;
let taskCounter = -1;

  // Tương tác chọn nhiệm vụ idk 

  let selectedTasksId = [];
  const listTasks = document.querySelector("#list");

  function removeStringFromArray(array, stringToRemove) {
      let index = array.indexOf(stringToRemove);
      while (index !== -1) {
        array.splice(index, 1);  // Remove the element at the found index
        index = array.indexOf(stringToRemove);  // Find the next occurrence
      }
    }
  
  
/*

      Add tasks
     const allEvents = KPIs.map(kpi => kpi.event).reduce((acc, events) => acc.concat(events), []);

console.log(allEvents);
*/

//const openAddTask = document.querySelector();


function oneTask(event) {
  const template = document.createElement("template");
  template.innerHTML = `
  <ul class="list-task" id="${event?.id}">
      <li class="color-task">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="30" rx="15" fill="${event?.backgroundColor}"/>
      </svg>
      </li>
      <li class="name-task">${event?.title}</li>
  </ul>
  `;
  return template.content.firstElementChild;
}

let allEvents  =[]; 

function addAllTask() {
  listTasks.innerHTML = "";
  allEvents.length = 0;
  allEvents = storage.KPIs.map(kpi => kpi.tasks).reduce((acc, events) => acc.concat(events), []);
  console.log(allEvents);
  for (let i = 0; i < allEvents.length  ; i++ ){
    const node = oneTask(allEvents[i])
    listTasks.appendChild(node);
    taskId = allEvents[i].id;
    let kpiIndex = taskId.indexOf('KPI') + 3; 
    let kpiNumber = parseInt(taskId.substring(kpiIndex, taskId.indexOf('task'))); 

    let taskIndex = taskId.indexOf('task') + 4; 
    let taskNumber = parseInt(taskId.substring(taskIndex)); 
    node.addEventListener("click", e => {
      
        if (selectTasksButton.classList.contains("on")) {
          
              let selectedId = e.currentTarget.id;
              if (selectedTasksId.includes(selectedId)) {
  
                  selectedTasksId = selectedTasksId.filter(item => item !== selectedId);
                  e.currentTarget.style.border = ""; // Remove border styling
              } else {
                  selectedTasksId.push(selectedId);
                  e.currentTarget.style.border = "3px solid #2a7378"; // Apply border styling
              }
          }
        else{
          openTaskInfo(kpiNumber-1, taskNumber-1);
        }
    });
  }
}

addAllTask();

function openTaskInfo(id, taskId){
  initTaskInfo(id, taskId);
  document.getElementById('taskInfo').classList.remove("hidden");
  document.getElementById('overlay').classList.remove("hidden");
}

const inputContent = document.querySelector("#taskInputContainer");
const initAddTaskContainer = () =>{
  taskIndex = 1;
  inputContent.innerHTML = `
    <div class="flex task-input">
      <div>1</div>
      <div>
        <input type="text" class="taskName">
      </div>
      <div>
        <select name="" class="KPIID">
        <option value=""></option>
        ${generateKPIOptions()}
        </select>
      </div>
      <div>
        <input type="date" class="date" >
      </div>
      <div>
        <input type="time" name="" class="startTime">
      </div>
      <div>
        <input type="time" name="" class="endTime">         
      </div>
      <div>
        <input type="text" name="" class="additionalInfo">
      </div>
      <div>
        <select name="" class="recurrence">
        <option value="none">Không</option>
        <option value="day">Mỗi ngày</option>
        <option value="week">Mỗi tuần</option>
        </select>
      </div>
      <div>
        <button class="removeTask">
          <img src="../images/bin.svg" alt="">
        </button>
      </div>
    </div>
  `;
  inputContent.parentElement.appendChild(inputContent);
}
let taskIndex = 1;

function updateTaskIndexes() {
  const taskInputs = document.querySelectorAll('.task-input');
  taskInputs.forEach((input, index) => {

  input.firstElementChild.textContent = index + 1;
  });
  taskIndex = taskInputs.length;

}

const addTaskButton = document.querySelector("#addTaskButton>button");

function generateKPIOptions() {
  return storage.KPIs.map(kpi => `<option value="${kpi.id}">${kpi.name}</option>`).join('');
}

addTaskButton.addEventListener('click', function() {
  taskIndex++;
  const taskInput = document.createElement('div');
  taskInput.className = 'flex task-input';
  taskInput.innerHTML = `
                  <div>${taskIndex}</div>
                  <div>
                    <input type="text" class="taskName">
                  </div>
                  <div>
                    <select name="" class="KPIID">
                      <option value=""></option>
                      ${generateKPIOptions()}
                    </select>
                  </div>
                  <div>
                    <input type="date" class="date" >
                  </div>
                  <div>
                    <input type="time" name="" class="startTime">
                  </div>
                  <div>
                    <input type="time" name="" class="endTime">         
                  </div>
                  <div>
                    <input type="text" name="" class="additionalInfo">
                  </div>
                  <div>
                    <select name="" class="recurrence">
                      <option value="none">Không</option>
                      <option value="day">Mỗi ngày</option>
                      <option value="week">Mỗi tuần</option>
                    </select>
                  </div>
                  <div>
                    <button class="removeTask">
                      <img src="../images/bin.svg" alt="">
                    </button>
                  </div>
  `;
  inputContent.appendChild(taskInput);
  const removeButtons = document.querySelectorAll('.removeTask');
  removeButtons.forEach(button => {
      
          button.addEventListener('click', function() {
              if (taskIndex == 1) { 

              } else {
              button.parentElement.parentElement.remove();
              updateTaskIndexes();}
    });
  });
});

  const toggleSelectTasksButton = () => {
    if (!selectTasksButton.classList.contains("on")){
        selectTasksButton.classList.add("on");
        listTasks.style.border = "3px solid #2a7378";
        selectTasksButton.innerHTML =`
            <img src="../images/x.svg" />
        `;
        submitButton.innerHTML=`
            <img src="../images/left.svg" />
        `;
    } else {
    selectTasksButton.classList.remove("on");
    listTasks.style.border = "";
    let elements = document.querySelectorAll('.list-task');
      elements.forEach(function(element) {
      element.style.border = "";
      selectedTasksId.length = 0;
    });
    selectTasksButton.innerHTML=`
      <span>Chọn</span>
      `;
      submitButton.innerHTML=`
            <img src="../images/plus.svg" />
        `;
    }
}
  
  selectTasksButton.addEventListener('click', toggleSelectTasksButton);
 
  const addTasksContainer = document.querySelector("#addTask");
  let container = document.getElementById("list"); 
  const closeAddTasksContainer = document.querySelector("#closeTaskButton");
  
  closeAddTasksContainer.addEventListener("click", ()=>{
    addConfirmNoti("Bạn ");
    addTasksContainer.classList.add("hidden");
    document.getElementById('overlay').classList.add("hidden");
    errorLabelTask.textContent = "";
  });


  document.getElementById("add-task-button").addEventListener("click", function() {
    if (selectTasksButton.classList.contains("on")) {
            console.log(selectedTasksId);
          
          addTaskToCalendar(selectedTasksId);
          console.log(allEvents);
          toggleSelectTasksButton();
    } else {
      addTasksContainer.classList.remove("hidden");
      initAddTaskContainer();
      document.getElementById('overlay').classList.remove("hidden");
    /*let node;
    if (storage.KPIs[KPICounter].tasks[taskCounter+1] == undefined) {
        KPICounter ++;
        if (storage.KPIs[KPICounter] === undefined) return;
        taskCounter = 0;
        node = oneTask(storage.KPIs[KPICounter].tasks[taskCounter]);
        
    } else {
        taskCounter ++;
        node = oneTask(storage.KPIs[KPICounter].tasks[taskCounter]);
    }
    container.appendChild(node);
    node.addEventListener("click", chooseTask);*/
}
  });
  
  const errorLabelTask = document.getElementById("errorMissingFieldTask");
  
  submitTaskButton.addEventListener('click', () => {
      const taskInputs = document.querySelectorAll('.task-input');
    let allFieldsFilled = true;

    // To store task data temporarily
    let taskData = [];

    taskInputs.forEach(input => {
      const taskName = input.querySelector('.taskName').value;
      const kpiID = input.querySelector('.KPIID').value;
      const date = input.querySelector('.date').value;
      const startTime = input.querySelector('.startTime').value;
      const endTime = input.querySelector('.endTime').value;
      const additionalInfo = input.querySelector('.additionalInfo').value;
      const recurrence = input.querySelector('.recurrence').value;

      // Check if all required fields are filled
      if (!taskName || !kpiID || !date || !startTime || !endTime) {
        allFieldsFilled = false;
      } else {
        let KPI;
        for (let i = 0; i < storage.KPIs.length; i++){
          if (storage.KPIs[i].id === kpiID) {
          KPI = storage.KPIs[i];
        }
      }
      taskData.push({
        id: kpiID + "task" + (KPI.tasks.length + taskIndex).toString(),
        title: taskName,
        kpiID: kpiID,
        start: date+ "T" +startTime,
        end: date+ "T" +endTime,
        additionalInfo: additionalInfo,
        recurrence: recurrence,
        backgroundColor: KPI.color
        });
      }
    });

    if (allFieldsFilled) {
      // Clear any previous error message
      errorLabelTask.textContent = '';
      console.log(taskData);
      // Store tasks in the related KPI
      taskData.forEach(task => {
        const relatedKPI = storage.KPIs.find(kpi => kpi.id === task.kpiID
        );
        if (relatedKPI) {
          relatedKPI.tasks.push(task);
        }
      });
      addTasksContainer.classList.add("hidden");
      document.getElementById('overlay').classList.add("hidden");
      errorLabelTask.textContent = '';
      console.log(storage.KPIs); // Verify the tasks are stored correctly in the KPIs array
      // Here you can save KPIs to localStorage, send it to a server, etc.
      addAllTask();
      showToast('Thêm chỉ tiêu KPI thành công', '', 'none');
    } else {
      errorLabelTask.textContent = '*Hãy điền đủ các trường thông tin';
    }
  });

  function clickAndDrag(selector, scroll_speed = 3, classOnEvent = 'grabbed_elem') {
    const slider = document.querySelector(selector);
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

function clickAndDragY(selector, scroll_speed = 3, classOnEvent = 'grabbed_elem') {
  const slider = document.querySelector(selector);
  let isDown = false;
  let startY;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
      e.preventDefault();
      isDown = true;
      slider.classList.add(classOnEvent);
      startY = e.pageY - slider.o;
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
      const Y = e.pageY - slider.offsetLeft;
      const walk = (Y - startY) * scroll_speed; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
  });
}

// usage
clickAndDrag('.list');

clickAndDragY('.list');



// calendar


    let editable = false;
    var calendarEl = document.getElementById('calendar');
    let calendarInit = {
        initialView: 'timeGridWeek',
        eventStartEditable: editable,
        height: 'auto',
        locale: 'vi',
        allDaySlot: false,
        slotLabelFormat: {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short'
        },
        slotDuration: {hours:3},
        slotMinTime: '00:00:00',  // Start at midnight
        slotMaxTime: '24:00:00',  // End at midnight the next day
        //height: 'auto', // Automatically adjust height
        customButtons: {
            select: {
                text: 'Chọn',
                click: function() {
                    editable = !editable;
                    calendar.setOption('eventStartEditable',editable);
                    if (editable) {
                    document.querySelector('.fc-select-button').innerHTML = `
                    <img src="../images/x.svg" />
                        `;
                    } else {
                        document.querySelector('.fc-select-button').innerHTML = `
                        Chọn
                        `;
                    }
                }
            },
            share: {
                click: function() {
                    window.location.href = "../html/shared-schedules.html";
                },
            },
            insert: {
                click: function() {
               
                }
            },
        },
        titleFormat: {  
            month: '2-digit', 
            day: '2-digit' ,
            omitCommas: true,
        },
        headerToolbar : {
            start: 'title',
            center: 'prev,today,next',
            end: 'select,share,insert'
        },
        buttonText: {
            today: 'Today'
        },
        events : [
        ]
            
        };
    let calendar = new FullCalendar.Calendar(calendarEl, calendarInit);
    calendar.render();
    function addTaskToCalendar (tasksSeleted) {
      for (let i = 0; i < tasksSeleted.length; i++) {
        for (let m = 0; m < allEvents.length; m++) {
          if (tasksSeleted[i] === allEvents[m].id) {
            calendar.addEvent(allEvents[m]);
          }
        }
      }
    }
    document.querySelector('.fc-share-button').innerHTML = `
  <img src="../images/share-schedule.svg" />
    `;
    document.querySelector('.fc-insert-button').innerHTML = `
  <img src="../images/edit.svg" />
    `;
 


///
//      Upload Excel
// 

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
        ` +  addExcelKPIRow(addKPIArray[i].name, addKPIArray[i].color, addKPIArray[i].hour);
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

function uploadTaskExcel() {
  var fileInput = document.getElementById('task-file-upload');   

  fileInput.addEventListener('change', function() {
    document.getElementById('task-file-name').textContent = fileInput.files[0].name;
    reader = new FileReader();

    reader.onload = function(event) {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);

      jsonData.forEach((item, index) => {
          const newKPI = {
              id: `#KPI1task${storage.KPIs.length + 1}`,
              title: item['Tên nhiệm vụ*'],
              kpiId: item['Tên chỉ tiêu*'],
              hour: item['Ngày thực hiện'],
              start: item['Thời gian bắt đầu'],
              end: item['Thời gian kết thúc'],
              note: item['Ghi chú'],
              repeat: item['Lặp lại'],
              tasks: [] // Initialize with empty tasks array
          };
          storage.KPIs.push(newKPI);
      });

      console.log(storage);
  };

  if(fileInput.files.length > 0) {
      reader.readAsArrayBuffer(fileInput.files[0]);
  } else {
      alert("Please upload a file.");
  }

} );
}

function initTaskInfo(id, taskId){
  let taskInfo = document.createElement('div');
  taskInfo.classList.add('popUpWindow');
  taskInfo.classList.add('hidden');
  taskInfo.id = 'taskInfo';
  taskInfo.innerHTML = `
      <div id="popup-title"><h2 class="heading2">Chi tiết nhiệm vụ</h2></div>

      <svg id="closeTaskInfoButton" class="icon-svg" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.095 47.095" xml:space="preserve">

        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
        
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
        
        <g id="SVGRepo_iconCarrier"> <g> <path d="M45.363,36.234l-13.158-13.16l12.21-12.21c2.31-2.307,2.31-6.049,0-8.358c-2.308-2.308-6.05-2.307-8.356,0l-12.212,12.21 L11.038,1.906c-2.309-2.308-6.051-2.308-8.358,0c-2.307,2.309-2.307,6.049,0,8.358l12.81,12.81L1.732,36.831 c-2.309,2.31-2.309,6.05,0,8.359c2.308,2.307,6.049,2.307,8.356,0l13.759-13.758l13.16,13.16c2.308,2.308,6.049,2.308,8.356,0 C47.673,42.282,47.672,38.54,45.363,36.234z"/> </g> </g>
        
      </svg>

      <p class="row-10px" style="width: 100%; justify-content: flex-end; padding-right: 40px;"> 
      <button class="img-button">
        <img src="../images/edit.svg">
      </button> 
      <button class="img-button">
        <img src="../images/bin.svg" alt="">
      </button>
      </p>

      <div id="task-info-container">
        <p class="row-10px">Tên nhiệm vụ: <span>${storage.KPIs[id].tasks[taskId].title}</span></p>
        <p class="row-10px">Loại chỉ tiêu: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="30" rx="15" fill="${storage.KPIs[id].color}"/>
        </svg> <span>${storage.KPIs[id].name}</span></p>

        <p class="row-10px">Mục tiêu nhiệm vụ đạt được: <span>${storage.KPIs[id].tasks[taskId].id}</span></p>
        <p class="row-10px">Thời gian bắt đầu: <span>${storage.KPIs[id].tasks[taskId].start}</span></p>
        <p class="row-10px">Thời gian kết thúc: <span>${storage.KPIs[id].tasks[taskId].end}</span></p>
        <p class="row-10px">Ghi chú: <span>${storage.KPIs[id].tasks[taskId].note}</span>
        </p>     
      </div>
  `
  document.body.appendChild(taskInfo);
  document.getElementById('closeTaskInfoButton').addEventListener("click", () => {
    document.getElementById('taskInfo').classList.add("hidden");
    document.getElementById('overlay').classList.add("hidden");
  })
  
}