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