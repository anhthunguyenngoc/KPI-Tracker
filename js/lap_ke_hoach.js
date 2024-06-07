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

/*
function updateKPIProcess(taskID, isDone) {
  let targetKPI;
  let targetTask;
  for (let kpi of storage.KPIs) {
    targetTask = kpi.tasks.find(task => task.id === taskID);
    if (targetTask) {
      targetKPI = kpi;
      break;
    }
  }

  if (targetTask) {
    targetTask.done = isDone ? 1 : 0;

    let totalProgress = 0;
    for (let task of targetKPI.tasks) {
      totalProgress += task.done === 1 ? task.progress : 0;
    }
    targetKPI.progress = totalProgress;
  }
}

function calculateKPIProcess() {
  storage.KPIs.forEach(kpi => {
    let totalProgress = 0;
    kpi.tasks.forEach(task => {
      if (task.done === 1) {
        totalProgress += task.progress;
      }
    });
    kpi.progress = totalProgress;
  });
}

calculateKPIProcess();
*/
//document.addEventListener('DOMContentLoaded', function() {

// Add KPI

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

function getTotalProgressForKPI(kpiId) {
  let totalProgress = 0;
  kpi = storage.KPIs[kpiId];
  for (let task of kpi.tasks) {
    if (task.inCalender === 1) {
      totalProgress += task.progress*10;
    }
  }
  return totalProgress/10;
}

function placeKPI() {
  KPIContainer.innerHTML="";
  for (let i = 0; i< storage.KPIs.length; i++) {
    let KPI = document.createElement('li');
    KPI.id = 'kpi_' + i;
    KPI.className = 'KPI_container';
    KPI.innerHTML=`
      <li class="color-task">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="15" fill="${storage.KPIs[i].color}"/>
        </svg>
      </li>
      <div> ${getTotalProgressForKPI(i)}/${storage.KPIs[i].hour} ${storage.KPIs[i].unit}</div>
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
      <button id="delete-kpi" class="img-button">
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
    document.body.removeChild(kpiInfo);
    document.getElementById('overlay').classList.add("hidden");
  })
  document.getElementById('delete-kpi').addEventListener('click', () => {
    showConfirmNoti("Bạn có chắc chắn là muốn xóa KPI này không?");
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
  taskId = event?.id;
  let kpiIndex = taskId.indexOf('KPI') + 3; 
  let kpiNumber = parseInt(taskId.substring(kpiIndex, taskId.indexOf('task'))); 
  const template = document.createElement("template");
  template.innerHTML = `
  <ul class="list-task" id="${event?.id}">
      <li class="color-task">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="30" rx="15" fill="${event?.backgroundColor}"/>
      </svg>
      </li>
      <li class="name-task">${event?.title}</li>
      <li class="unit"><div>${event?.progress}</div> <div>${storage.KPIs[kpiNumber].unit}</div></li>
  </ul>
  `;
  return template.content.firstElementChild;
}

let allEvents  =[]; 

function addAllTask() {
  listTasks.innerHTML = "";
  allEvents.length = 0;
  allEvents = storage.KPIs.map(kpi => kpi.tasks).reduce((acc, events) => acc.concat(events), []);
  allEvents = allEvents.sort((a, b) => a.title.localeCompare(b.title));
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

function addSortTask(arr) {
  listTasks.innerHTML = "";

  for (let i = 0; i < arr.length  ; i++ ){
    const node = oneTask(arr[i])
    listTasks.appendChild(node);
    taskId = arr[i].id;
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
        <input type="datetime-local" class="startTime" >
      </div>
      <div>
        <input type="datetime-local" name="" class="endTime">
      </div>
      <div>
        <input type="number" name="" class="KPIProgress">         
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
  document.querySelector(".KPIProgress").addEventListener("focus", (e)=> {
    let kpiID = document.querySelector(".KPIID").value;
    console.log(kpiID);
    let KPI = storage.KPIs.find(kpi => kpi.id === kpiID);
    if ( KPI.unit === "Giờ"){
      let startTime = new Date(document.querySelector(".startTime").value);
      let endTime = new Date(document.querySelector(".endTime").value);
      let diff;
      if (startTime && endTime) {
        diff = Math.abs(endTime - startTime) / (1000 * 3600);
        console.log(diff);
        e.target.value = diff;
      }
    }
  } )
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
                    <input type="datetime-local" class="startTime" >
                  </div>
                  <div>
                    <input type="datetime-local" name="" class="endTime">
                  </div>
                  <div>
                    <input type="number" name="" class="KPIProgress">         
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
  document.querySelectorAll(".task-input").forEach(input => {
    input.querySelector(".KPIProgress").addEventListener("focus", (e)=> {
      let kpiID = input.querySelector(".KPIID").value;
      if (kpiID) {

        let KPI = storage.KPIs.find(kpi => kpi.id === kpiID);
        console.log(KPI);
        if ( KPI.unit === "Giờ"){
          let startTime = new Date(input.querySelector(".startTime").value);
          let endTime = new Date(input.querySelector(".endTime").value);
          let diff;
          if (startTime && endTime) {
            diff = Math.abs(endTime - startTime) / (1000 * 3600);
            e.target.value = diff;
          }
        }
      }
    })
   } 
  );
});

  const toggleSelectTasksButton = () => {
    if (!selectTasksButton.classList.contains("on")){
        selectTasksButton.classList.add("on");
        listTasks.style.border = "3px solid #2a7378";
        selectTasksButton.innerHTML =`
            Hủy
        `;
        document.getElementById('addToKHButton').style.display = 'block';
        document.getElementById('delTasks').style.display = 'block';
        document.getElementById('list').style.padding = '7px';
    } else {
    selectTasksButton.classList.remove("on");
    listTasks.style.border = "";
    document.getElementById('addToKHButton').style.display = 'none';
    document.getElementById('delTasks').style.display = 'none';
    document.getElementById('list').style.padding = '0';
    let elements = document.querySelectorAll('.list-task');
      elements.forEach(function(element) {
      element.style.border = "";
      selectedTasksId.length = 0;
    });
    selectTasksButton.innerHTML=`
      <span>Chọn</span>
      `;
    }
}
  
  selectTasksButton.addEventListener('click', toggleSelectTasksButton);
 
  const addTasksContainer = document.querySelector("#addTask");
  let container = document.getElementById("list"); 
  const closeAddTasksContainer = document.querySelector("#closeTaskButton");
  
  closeAddTasksContainer.addEventListener("click", ()=>{
    addTasksContainer.classList.add("hidden");
    document.getElementById('overlay').classList.add("hidden");
    errorLabelTask.textContent = "";
  });

  document.getElementById("addToKHButton").addEventListener("click", function() {
    console.log(selectedTasksId);
    addTaskToCalendar(selectedTasksId);
    localStorage.setItem('Storage', JSON.stringify(storage));
    console.log(allEvents);
    toggleSelectTasksButton();
  });

  document.getElementById("add-task-button").addEventListener("click", function() {
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
      const progress = input.querySelector('.KPIProgress').value;
      const startTime = input.querySelector('.startTime').value;
      const endTime = input.querySelector('.endTime').value;
      const additionalInfo = "" + input.querySelector('.additionalInfo').value;
      const recurrence = input.querySelector('.recurrence').value;

      // Check if all required fields are filled
      if (!taskName || !kpiID || !progress || !startTime || !endTime) {
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
        start:startTime,
        end:endTime,
        additionalInfo: additionalInfo,
        recurrence: recurrence,
        progress: progress,
        backgroundColor: KPI.color,
        done: 0,
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
      localStorage.setItem('Storage', JSON.stringify(storage));
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

dateRange = {
  start: '2024-05-26',

}


// calendar


    let editable = false;
    var calendarEl = document.getElementById('calendar');
    let calendarInit = {
        initialView: 'dayGridMonth',
        //validRange: dateRange,
        eventStartEditable: editable,
        height: 'auto',
        locale: 'vi',
        allDaySlot: false,
        slotLabelFormat: {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short'
        },
        eventStartEditable: true,
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
                    Hủy
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

            selectDate: {

            }
        },
        titleFormat: {  
            month: '2-digit', 
            day: '2-digit' ,
            omitCommas: true,
        },
        headerToolbar : {
            start: 'dayGridMonth,timeGridWeek',
            center: 'prev,title,next', //'title,selectDate','prev,today,next', 
            end: 'select,share,insert'
        },
        buttonText: {
            today: 'Today',
            week: 'Tuần',
            month: 'Tháng'
        },
        events : [
        ]
            
        };
    let calendar = new FullCalendar.Calendar(calendarEl, calendarInit);
    calendar.render();

    function changeInCalendarValue(taskId, newValue) {
      // Duyệt qua mảng KPIs
      for (let i = 0; i < storage.KPIs.length; i++) {
          // Tìm task có id tương ứng trong mỗi KPI
          let task = storage.KPIs[i].tasks.find(task => task.id === taskId);
          // Nếu tìm thấy task, thay đổi giá trị của inCalendar và kết thúc hàm
          if (task) {
              task.inCalender = newValue;
              return; // Kết thúc hàm sau khi thay đổi giá trị
          }
      }
  }

    function addTaskToCalendar (tasksSeleted) {
      console.log(tasksSeleted);
      for (let i = 0; i < tasksSeleted.length; i++) {
        changeInCalendarValue(tasksSeleted[i], 1);
        for (let m = 0; m < allEvents.length; m++) {
          if (tasksSeleted[i] === allEvents[m].id) {
            calendar.addEvent(allEvents[m]);
          }
        }
      }
    }

    function getTasksInCalender() {
      let tasksInCalender = [];
      for (let kpi of storage.KPIs) {
        for (let task of kpi.tasks) {
          console.log(task);
          console.log(task.inCalender);
          if (task.inCalender === 1) {
            tasksInCalender.push(task.id);
          }
        }
      }
      return tasksInCalender;
    }

    function initCalendar () {
      addTaskToCalendar (getTasksInCalender());
    }

    initCalendar();
    document.querySelector('.fc-share-button').innerHTML = `
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_358_6337)">
      <path d="M8.18331 9.52942H6.00519V11.7077H8.18331V9.52942Z" fill="white"/>
      <path d="M17.7127 9.52942H15.5346V11.7077H17.7127V9.52942Z" fill="white"/>
      <path d="M14.5363 9.52942H12.3582V11.7077H14.5363V9.52942Z" fill="white"/>
      <path d="M8.18331 12.9328H6.00519V15.1111H8.18331V12.9328Z" fill="white"/>
      <path d="M14.5363 12.9328H12.3582V15.1111H14.5363V12.9328Z" fill="white"/>
      <path d="M11.3598 12.9328H9.1817V15.1111H11.3598V12.9328Z" fill="white"/>
      <path d="M17.7127 16.3361H15.5346V18.5144H17.7127V16.3361Z" fill="white"/>
      <path d="M14.5363 16.3361H12.3582V18.5144H14.5363V16.3361Z" fill="white"/>
      <path d="M11.3598 16.3361H9.1817V18.5144H11.3598V16.3361Z" fill="white"/>
      <path d="M19.7047 2.35641H17.9335V4.05462C17.9335 4.68826 17.4114 5.20359 16.7698 5.20359H14.4571C13.8155 5.20359 13.2935 4.68826 13.2935 4.05462V2.35641H10.4213V4.03865C10.4213 4.68112 9.89353 5.20359 9.24477 5.20359H6.95779C6.30903 5.20359 5.78124 4.68112 5.78124 4.03865V2.35641H4.01001C2.85821 2.35641 1.92114 3.28501 1.92114 4.42636V19.8479C1.92114 20.9892 2.85821 21.9178 4.01001 21.9178H19.7047C20.8583 21.9178 21.7967 20.9892 21.7967 19.8479V4.42636C21.7967 3.28505 20.8583 2.35641 19.7047 2.35641ZM20.2993 19.8077C20.2993 20.1741 20.0531 20.4202 19.6867 20.4202H4.0312C3.66476 20.4202 3.41857 20.1741 3.41857 19.8077V7.62367H20.2993V19.8077Z" fill="white"/>
      <path d="M6.95847 4.38814H9.24409C9.43763 4.38814 9.59507 4.23176 9.59507 4.03951V0.877269C9.59507 0.393536 9.19824 0 8.7104 0H7.49212C7.00432 0 6.60736 0.393493 6.60736 0.877269V4.03951C6.6074 4.23176 6.76485 4.38814 6.95847 4.38814Z" fill="white"/>
      <path d="M14.4571 4.38814H16.7698C16.9559 4.38814 17.1073 4.23776 17.1073 4.05312V0.863784C17.1073 0.387543 16.7166 0 16.2361 0H14.9908C14.5104 0 14.1197 0.387543 14.1197 0.863784V4.05312C14.1196 4.23776 14.2711 4.38814 14.4571 4.38814Z" fill="white"/>
      </g>
      <rect class="share-rect" width="6.84932" height="8.90411" transform="translate(11.8624 16.0959)"/>
      <rect class="share-rect" width="5.82192" height="11.3014" transform="translate(18.7117 13.6986)"/>
      <rect class="share-rect" width="14.726" height="5.47945" transform="translate(9.80756 19.5205)"/>
      <path d="M18.9115 15.1541C18.8664 15.1572 18.8226 15.1678 18.7824 15.1853C18.7422 15.2028 18.7065 15.227 18.6773 15.2563C18.6481 15.2856 18.626 15.3195 18.6124 15.3561C18.5987 15.3927 18.5936 15.4312 18.5975 15.4695V18.0408C14.2596 18.4047 11.4628 20.9275 11.4058 23.4746C11.4058 23.6202 11.4628 23.7172 11.577 23.7172C11.6911 23.7172 11.7768 23.6444 11.8909 23.4504C12.5759 22.1404 14.1169 21.3884 18.5975 21.2186V23.5716C18.5936 23.6099 18.5987 23.6484 18.6124 23.685C18.626 23.7216 18.6481 23.7555 18.6773 23.7849C18.7065 23.8142 18.7422 23.8383 18.7824 23.8558C18.8226 23.8733 18.8664 23.8839 18.9115 23.887C18.9562 23.8891 19.0008 23.8813 19.0408 23.8643C19.0809 23.8473 19.115 23.8217 19.1398 23.79L23.8487 19.7874C23.9189 19.7207 23.9577 19.6343 23.9577 19.5448C23.9577 19.4553 23.9189 19.369 23.8487 19.3022L19.1398 15.2512C19.115 15.2195 19.0809 15.1938 19.0408 15.1768C19.0008 15.1598 18.9562 15.152 18.9115 15.1541Z" fill="white"/>
      <defs>
      <clipPath id="clip0_358_6337">
      <rect width="21.9178" height="21.9178" fill="white" transform="translate(0.900024)"/>
      </clipPath>
      </defs>
      </svg>
    `;
    document.querySelector('.fc-insert-button').innerHTML = `
  <img src="../images/edit.svg" />
    `;
 


///
//      Upload Excel
// 

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
      <button id="del-task" class="img-button">
        <img src="../images/bin.svg" alt="">
      </button>
      </p>

      <div id="task-info-container">
        <p class="row-10px">Tên nhiệm vụ: <span>${storage.KPIs[id].tasks[taskId].title}</span></p>
        <p class="row-10px">Loại chỉ tiêu: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="30" rx="15" fill="${storage.KPIs[id].color}"/>
        </svg> <span>${storage.KPIs[id].name}</span></p>

        <p class="row-10px">Mục tiêu nhiệm vụ đạt được: <span>${storage.KPIs[id].tasks[taskId].progress}</span></p>
        <p class="row-10px">Thời gian bắt đầu: <span>${storage.KPIs[id].tasks[taskId].start}</span></p>
        <p class="row-10px">Thời gian kết thúc: <span>${storage.KPIs[id].tasks[taskId].end}</span></p>
        <p class="row-10px">Ghi chú: <span>${storage.KPIs[id].tasks[taskId].note}</span>
        </p>     
      </div>
  `
  document.body.appendChild(taskInfo);
  document.getElementById('closeTaskInfoButton').addEventListener("click", () => {
    document.body.removeChild(taskInfo);
    document.getElementById('overlay').classList.add("hidden");
  })
  document.getElementById('del-task').addEventListener('click', () => {
    showConfirmNoti("Bạn có chắc chắn là muốn xóa nhiệm vụ này không?")
  });
}

/*

var table = document.getElementById('kpi-task-list');
var html = table.outerHTML;

// Chuyển đổi HTML thành Excel
var blob = new Blob([html], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
});
saveAs(blob, "ten_file.xlsx"); 

// Tạo một nút hoặc liên kết để người dùng có thể tải xuống
var downloadLink = document.createElement("a");
downloadLink.href = URL.createObjectURL(blob);
downloadLink.download = "ten_file.xlsx";  // Tên file Excel khi tải xuống
downloadLink.click();
*/

let sortUp = true;
let criteria = 'name';
let openOpt = true

let options = document.querySelectorAll('.option');

options.forEach(option => {
    option.addEventListener('click', function() {
        // Loại bỏ lớp "active" khỏi tất cả các tùy chọn
        options.forEach(opt => {
            opt.classList.remove('active');
        });
        // Thêm lớp "active" vào tùy chọn được chọn
        this.classList.add('active');
    });
});

document.getElementById('sort-name').addEventListener('click', () => {
  document.getElementById('sort-opt').style.display = 'none';
  criteria = 'name';
})

document.getElementById('sort-point').addEventListener('click', () => {
  document.getElementById('sort-opt').style.display = 'none';
  criteria = 'point';
})

document.getElementById('sort-task').addEventListener('click', () => {
  
  if(openOpt){
    document.getElementById('sort-opt').style.display = 'block';
    openOpt = false;
  }
  
  document.getElementById('unsort-task').style.display = 'block';

  sortedTask = storage.KPIs.map(kpi => kpi.tasks).reduce((acc, events) => acc.concat(events), []);
  if(sortUp){
    document.getElementById('sort-task').innerHTML = `<img style="width: 100%; height: 100%;" src="../images/sort-up.svg">`;
    if(criteria === 'name') {
      sortedTask = sortedTask.sort((a, b) => a.title.localeCompare(b.title));
    }else if(criteria = 'sort'){
      sortedTask = sortedTask.sort((a, b) => a.progress - b.progress); 
    }
     
  }else {
    document.getElementById('sort-task').innerHTML = `<img style="width: 100%; height: 100%;" src="../images/sort-down.svg">`;
    if(criteria === 'name') {
      sortedTask = sortedTask.sort((a, b) => b.title.localeCompare(a.title));
    }else if(criteria = 'sort'){
      sortedTask = sortedTask.sort((a, b) => b.progress - a.progress); 
    }
  }

  addSortTask(sortedTask);
  sortUp = !sortUp;

  document.getElementById('sort-task').style.borderRadius = 0;
  document.getElementById('sort-task').style.borderTopRightRadius = '5px';
  document.getElementById('sort-task').style.borderBottomRightRadius = '5px';
  document.getElementById('sort-task').style.backgroundColor = document.documentElement.style.getPropertyValue('--color-element2');
  document.getElementById('unsort-task').style.backgroundColor = document.documentElement.style.getPropertyValue('--color-element2');
})

document.getElementById('unsort-task').addEventListener('click', () => {
  openOpt = true;
  sortedTask = storage.KPIs.map(kpi => kpi.tasks).reduce((acc, events) => acc.concat(events), []);
  sortedTask = sortedTask.sort((a, b) => a.title.localeCompare(b.title));
  addSortTask(sortedTask);
    document.getElementById('sort-opt').style.display = 'none';
    document.getElementById('unsort-task').style.display = 'none';
    document.getElementById('sort-task').style.borderRadius = '5px';
    document.getElementById('sort-task').style.backgroundColor = document.documentElement.style.getPropertyValue('--color-button');
})