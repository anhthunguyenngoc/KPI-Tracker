  
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
                    backgroundColor: '#9CB2D7'
                },
                {
                    id: '#KPI1task2',
                    title: 'Nghiên cứu ứng dụng',
                    start: '2024-06-01T09:00:00',
                    end: '2024-06-01T11:30:00',
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



document.addEventListener('DOMContentLoaded', function() {

// Add KPI
const addKPIContainer = document.querySelector("#addKPI");
const closeAddKPIContainer = document.querySelector("#closeButton");
const openAddKPIContainer = document.querySelector("#openAddKPIContainer");

const addKPIButton = document.getElementById('addKPIButton');
const submitButton = document.querySelector("#KPIaddButton");
const errorLabel = document.querySelector("#errorMissingField");

const KPIContainer = document.querySelector("#title-kpi");
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
    KPI.className = 'KPI_container';
    KPI.innerHTML=`
      <div class="KPI" style="background-color:${storage.KPIs[i].color}">${storage.KPIs[i].name}</div>
      <div class="hour">${storage.KPIs[i].hour}</div>
    `;

    KPIContainer.appendChild(KPI);
  }
}

placeKPI();


const initAddKPIContainer = () =>{
        realContent.innerHTML = `
        <div class="inputTitle flex KPIinput">
            <div>1</div>
            <div>
              <input type="text" placeholder="Thêm chỉ tiêu" class="KPIName">
            </div>
            <div>
              <select name=""  class="KPIcolor">
              <option value="#F2DEDE" style="background-color:#F2DEDE">Hồng sáng </option>
              <option value="#9CB2D7" style="background-color:#9CB2D7">Xanh dương đậm</option>
              <option value="#FFDBA6" style="background-color:#FFDBA6">Cam</option>
              <option value="#64B5F6" style="background-color:#64B5F6">Xanh dương nhạt</option>
              <option value="#4DB6AC" style="background-color:#4DB6AC">Xanh lam</option>
              <option value="#90A4AE" style="background-color:#90A4AE">Xám</option>
              </select>
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
        `;
        realContent.parentElement.appendChild(realContent);
}
      const realContent = document.getElementById('inputContainer');
      let kpiIndex = 1;

      addKPIButton.addEventListener('click', function() {
        kpiIndex++;
        const kpiInput = document.createElement('div');
        kpiInput.className = 'inputTitle flex KPIinput';
        kpiInput.innerHTML = `
          <div>${kpiIndex}</div>
          <div>
            <input type="text" placeholder="Thêm chỉ tiêu" class="KPIName">
          </div>
          <div>
            <select name=""  class="KPIcolor">
            <option value="#F2DEDE" style="background-color:#F2DEDE">Hồng sáng </option>
            <option value="#9CB2D7" style="background-color:#9CB2D7">Xanh dương đậm</option>
            <option value="#FFDBA6" style="background-color:#FFDBA6">Cam</option>
            <option value="#64B5F6" style="background-color:#64B5F6">Xanh dương nhạt</option>
            <option value="#4DB6AC" style="background-color:#4DB6AC">Xanh lam</option>
            <option value="#90A4AE" style="background-color:#90A4AE">Xám</option>
            </select>
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
        `;
        realContent.appendChild(kpiInput);
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
                    id: "#KPI" + (storage.KPIs.length + index + 1).toString(),
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
            }
          // Here you can store kpiData to localStorage, send it to a server, etc.
      });

openAddKPIContainer.addEventListener('click', () => {
    addKPIContainer.classList.remove("hidden");
    document.getElementById('overlay').classList.remove("hidden");
    initAddKPIContainer();
    tuto.goToStep(3).start();
    
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
    node.addEventListener("click", chooseTask);
  }
}

addAllTask();

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






const submitTaskButton = document.getElementById("taskAddButton");
  const selectTasksButton = document.getElementById("selectTasksButton");
  

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
  
  
  function chooseTask (e) {
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

  }
  
  const addTasksContainer = document.querySelector("#addTask");
  let container = document.getElementById("list"); 
  const closeAddTasksContainer = document.querySelector("#closeTaskButton");
  
  closeAddTasksContainer.addEventListener("click", ()=>{
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
      tuto.goToStep(3).start();
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
  
/////////////////////
  
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
  });

  
 


