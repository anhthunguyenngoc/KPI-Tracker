  function oneTask() {
    const template = document.createElement("template");
    template.innerHTML = `
    <ul class="list-task">
        <li class="color-task">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="15" fill="#9CB2D7"/>
        </svg>
        </li>
        <li class="name-task">Phát triển hệ thống</li>
    </ul>
    `;
    return template.content.firstElementChild;
  }

  let container = document.getElementById("list"); 
  document.getElementById("add-task-button").addEventListener("click", function() {
    const node = oneTask();
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
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek',
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
                alert('clicked the custom button!');
                }
            },
            share: {
                click: function() {
                alert('clicked the custom button!');
                },
            },
            insert: {
                click: function() {
                alert('clicked the custom button!');
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
            
        }

  );
  let event = calendar.getEventById('a') // an event object!
    let start = event.start // a property (a Date object)
    console.log(start.toISOString()) // "2018-09-01T00:00:00.000Z"
    calendar.render();
    document.querySelector('.fc-share-button').innerHTML = `
  <img src="../images/share-schedule.svg" />
    `;
    document.querySelector('.fc-insert-button').innerHTML = `
  <img src="../images/edit.svg" />
    `;
  });

  
 