  
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

let KPICounter = 0;
let taskCounter = -1;


  
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

  let container = document.getElementById("list"); 
  document.getElementById("add-task-button").addEventListener("click", function() {
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

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    let calendarInit = {
        initialView: 'timeGridWeek',
        eventStartEditable: false,

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
                    if (calendarInit.eventStartEditable === true) {
                        calendar.destroy();
                        calendarInit.eventStartEditable = false;
                        calendarInit.customButtons.select.text = "Chọn";
                        calendar = new FullCalendar.Calendar(calendarEl, calendarInit);
                        calendar.render();
                        const selectButton = document.querySelector(".fc-select-button");
                        selectButton.style["backgroundColor"] = "#2a7378";
                        document.querySelector('.fc-share-button').innerHTML = `
                            <img src="../images/share-schedule.svg" />
                                `;
                        document.querySelector('.fc-insert-button').innerHTML = `
                            <img src="../images/edit.svg" />
                                `;
                    } else {
                        calendar.destroy();
                        calendarInit.eventStartEditable = true;
                        calendarInit.customButtons.select.text = "";
                        calendar = new FullCalendar.Calendar(calendarEl, calendarInit);
                        calendar.render();
                        const selectButton = document.querySelector(".fc-select-button");
                        selectButton.style["backgroundColor"] = "#3aafa9";
                        selectButton.innerHTML = `
                        <img src="../images/x.svg" />
                          `;
                          document.querySelector('.fc-share-button').innerHTML = `
                        <img src="../images/share-schedule.svg" />
                            `;
                            document.querySelector('.fc-insert-button').innerHTML = `
                        <img src="../images/edit.svg" />
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
                calendar.destroy();
                calendarInit.events = storage.KPIs[0].tasks;
                calendarInit.events.push(storage.KPIs[1].tasks[0]);
                calendar = new FullCalendar.Calendar(calendarEl, calendarInit);
                calendar.render();
                document.querySelector('.fc-share-button').innerHTML = `
  <img src="../images/share-schedule.svg" />
    `;
    document.querySelector('.fc-insert-button').innerHTML = `
  <img src="../images/edit.svg" />
    `;
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

  
 