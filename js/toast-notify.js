function addNotify(content, linkText, isdisplay){
    document.querySelector('.toast').innerHTML = `

        <div class="toast-content">
            <div class="toast-message">
                <svg width="45" height="45" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9998 0.166016C16.8794 0.166016 12.8515 1.38787 9.42547 3.67707C5.99944 5.96626 3.32918 9.21998 1.75236 13.0268C0.175531 16.8336 -0.237039 21.0225 0.56682 25.0637C1.37068 29.105 3.35486 32.8171 6.26846 35.7307C9.18205 38.6443 12.8942 40.6285 16.9355 41.4324C20.9767 42.2362 25.1656 41.8237 28.9724 40.2468C32.7792 38.67 36.0329 35.9998 38.3221 32.5737C40.6113 29.1477 41.8332 25.1198 41.8332 20.9993C41.8332 18.2635 41.2943 15.5544 40.2473 13.0268C39.2004 10.4992 37.6658 8.20251 35.7312 6.26796C33.7967 4.3334 31.5 2.79883 28.9724 1.75186C26.4448 0.704886 23.7357 0.166016 20.9998 0.166016ZM32.8248 17.3264L20.3248 28.7848C19.9291 29.1477 19.4085 29.3437 18.8717 29.3321C18.3348 29.3204 17.8232 29.102 17.4436 28.7223L11.1936 22.4723C10.9946 22.2801 10.8359 22.0502 10.7267 21.796C10.6175 21.5418 10.5601 21.2685 10.5577 20.9918C10.5553 20.7152 10.608 20.4409 10.7127 20.1849C10.8175 19.9288 10.9722 19.6962 11.1678 19.5006C11.3634 19.305 11.596 19.1503 11.852 19.0456C12.1081 18.9408 12.3824 18.8881 12.659 18.8905C12.9356 18.8929 13.209 18.9504 13.4632 19.0596C13.7174 19.1687 13.9472 19.3275 14.1394 19.5264L18.979 24.366L30.0082 14.2556C30.4154 13.8821 30.9543 13.6856 31.5064 13.7095C32.0584 13.7333 32.5784 13.9755 32.9519 14.3827C33.3254 14.7899 33.5219 15.3288 33.4981 15.8809C33.4742 16.4329 33.2321 16.9529 32.8248 17.3264Z" fill="#2A7378"/>
                </svg>
                <div>${content}</div>
            </div>
            <a href="https://www.example.com" target="_blank" class="link">${linkText}</a>
        </div>
        <div class="toast-progress"></div>

    <style>
        .toast {
            display: flex;
            flex-direction: column;
            visibility: hidden;
            width: 30%;
            height: fit-content;
            background-color: var(--color-white-text);
            color: var(--color-black-text);
            text-align: center;
            border-radius: 5px;
            position: fixed;
            z-index: 5;
            top: 13%;
            right: 0;
            box-shadow: 0 0 10px var(--color-shadow);
            transition: visibility 0s, opacity 0.5s linear;
            opacity: 0;
        }
        
        .toast.show {
            visibility: visible;
            opacity: 1;
        }
        
        .toast-content {
            display: flex;
            flex-direction: row;
            gap: 20px;
            height: fit-content;
            padding: 20px;
            align-items: center;
        }

        .toast-message {
            width: 100%;
            height: fit-content;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 20px;
        }
        .toast-message div{
            justify-content: flex-start;
        }
        .toast-content .link{
            width: 30%;
            height: fit-content;
            display: ${isdisplay};
        }

        .toast-progress {
            background-color: var(--color-button);
            height: 5px;
            width: 100%;
            transition: width 3s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        
        .toast-progress.run {
            width: 0;
        }
    </style>
    `;
}

function showToast(content, linkText, isdisplay) {
    addNotify(content, linkText, isdisplay);
    const toast = document.getElementById('toast');
    const progress = toast.querySelector('.toast-progress');
    
    toast.classList.add('show');
    
    // Force a reflow before adding the 'run' class to trigger the animation
    void progress.offsetWidth;
    progress.classList.add('run');
    
    setTimeout(function() {
        toast.classList.remove('show');
        progress.classList.remove('run');
    }, 3000); // Toast sẽ hiển thị trong 3 giây
}

function addConfirmNoti(content){
    let confirmNoti = document.createElement('template');
    confirmNoti.innerHTML =
    `
    <div id="popup-container">
    <div style="display: flex; flex-direction: column; width: 100%; align-items: flex-end;">
    <svg id="closeNoti" class="icon-svg" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.095 47.095" xml:space="preserve">

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
      <button id="cancel-btn">Từ chối</button>
      <button id="confirm-btn">Đồng ý</button>        
    </div>
    
</div>

<style>

  #popup-container {
    display: flex;
    flex-direction: column;
    position: fixed;
    gap: 20px;
    top: 50%;
    left: 50%;
    max-width: 30%;
    height: 30%;
    height: fit-content;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
    background-color: var(--color-white-text);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px var(--color-shadow);
    text-align: center;
    z-index: 6;
  }

  .popup-content{
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: fit-content;
    align-items: center;
    height: fit-content;
  }
  
  #popup-buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  #popup-buttons button {
    white-space: nowrap;
    padding: 10px;
  }
</style>
`
return confirmNoti.content.firstElementChild;
}

function showConfirmNoti(content) {
    document.body.appendChild(addConfirmNoti(content));
}