  
// Simple data storage
  let storage = {
    KPIs: [
        {   
            id: '#KPI01',
            name: "Nghiên cứu",
            color : "#9CB2D7",
            tasks : [
                {
                    id: '#KPI01task01',
                    title: 'Phát triển hệ thống',
                    start: '2024-05-23T09:00:00',
                    end: '2024-05-23T11:07:00',
                    backgroundColor: '#9CB2D7'
                },
                {
                    id: '#KPI01task02',
                    title: 'Nghiên cứu ứng dụng',
                    start: '2024-05-24T09:00:00',
                    end: '2024-05-24T11:30:00',
                    backgroundColor: '#9CB2D7'
                },

            ]
        },
        {
            id: '#KPI02',
            name: "Giảng dạy",
            color : "#F2DEDE",
            tasks : [
                {
                    id: '#KPI02task01',
                    title: 'Giao diện và trải nghiệm',
                    start: '2024-05-24T14:10:00',
                    end: '2024-05-24T17:30:00',
                    backgroundColor: '#F2DEDE'
                },

            ]
        }
    ]
}



// Add KPI
const addKPIContainer = document.querySelector("#addKPI");
const closeAddKPIContainer = document.querySelector("#closeButton");
const openAddKPIContainer = document.querySelector("#openAddKPIContainer");

const addKPIButton = document.getElementById('addKPIButton');


let initAddKPIContainer = () =>{
        realContent.innerHTML = `
        <div class="inputTitle flex KPIinput">
        <div>1</div>
        <div>
          <input type="text" id="KPIName" placeholder="Thêm chỉ tiêu">
        </div>
        <div>
          <select name="" id="KPIcolor">
  
          </select>
        </div>
        <div>
          <input type="text" placeholder="Số giờ">
        </div>
        <div>Tạm lưu</div>
        <div>
          <button class="removeKPI">
            <img src="../images/bin.svg" alt="">
          </button>
        </div>
      </div>
        `;
        realContent.appendChild(kpiInput);

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
            <input type="text" placeholder="Thêm chỉ tiêu">
          </div>
          <div>
            <select name="" id="KPIcolor${kpiIndex}">
              <option value="#9CB2D7">Hồng sáng</option>
              <option value="#9CB2D7">Xanh nhạt</option>
            </select>
          </div>
          <div>
            <input type="text" placeholder="Số giờ">
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

const addKPIContainerInit = () => {

}

openAddKPIContainer.addEventListener('click', () => {
    addKPIContainer.classList.remove("hidden");
    document.getElementById('overlay').classList.remove("hidden");
    tuto.goToStep(3).start();
    initAddKPIContainer();
})
closeAddKPIContainer.addEventListener("click", () => {
    addKPIContainer.classList.add("hidden");
    document.getElementById('overlay').classList.add("hidden");
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
  
  
  const submitButton = document.querySelector("#add-task-button"); 
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
  

  let container = document.getElementById("list"); 
  document.getElementById("add-task-button").addEventListener("click", function() {
    if (selectTasksButton.classList.contains("on")) {
        for (let i = 0; i < selectedTasksId.length; i++) {
            console.log(selectedTasksId[i]);
          }
          toggleSelectTasksButton();
          
    } else {
    let node;
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
    node.addEventListener("click", chooseTask);
}
  });
  
/////////////////////
  
  
  
  function oneTask(event) {
    const template = document.createElement("template");
    template.innerHTML = `
    <ul class="list-task" id="${event.id}">
        <li class="color-task">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="15" fill="${event.backgroundColor}"/>
        </svg>
        </li>
        <li class="name-task">${event.title}</li>
    </ul>
    `;
    return template.content.firstElementChild;
  }

  





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

document.addEventListener('DOMContentLoaded', function() {
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
            {
            id: 'a',
            title: 'Testing',
            start: '2024-05-23T09:00:00',
            end: '2024-05-23T11:07:00',
            display: 'auto',
            backgroundColor: '#F2DEDE'
            },
            {
                id: 'a',
                title: 'Testing',
                start: '2024-05-23T06:00:00',
                end: '2024-05-23T08:07:00',
                display: 'auto',
                backgroundColor: '#F2DEDE'
                }
        ]
            
        };
    let calendar = new FullCalendar.Calendar(calendarEl, calendarInit);
    calendar.render();
    document.querySelector('.fc-share-button').innerHTML = `
  <img src="../images/share-schedule.svg" />
    `;
    document.querySelector('.fc-insert-button').innerHTML = `
  <img src="../images/edit.svg" />
    `;
  });

  
 


