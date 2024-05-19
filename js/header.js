class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header class="header">
      <div class="left">
        <a class = "logo" id="home" href="../html/trang-chu.html">
          <svg width="60" height="70" viewBox="-5 -5 78 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="t" d="M39.8335 31.5957V73.9993" stroke-width="25"/>
            <path class="k" d="M44.833 9C43.7876 9.9762 42.8162 10.8834 41.9315 11.7096C41.1499 12.4394 39.9568 13.5536 39.0366 14.4128C38.1085 15.2796 37.2676 16.0648 36.6119 16.6771C36.1011 17.1541 35.3912 17.817 34.738 18.427C33.9521 19.1609 33.2125 19.8516 32.3671 20.6411C30.8025 22.1021 29.642 23.1858 28.2431 24.4921C26.4678 26.15 24.961 27.5571 23.4878 28.9328C22.9987 29.3895 22.1886 30.146 21.4997 30.7894" />
            <path class="k" d="M9 9V59.8418" />
            <path class="k" d="M44.833 59.8418C43.7503 58.721 42.7441 57.6794 41.8278 56.7308C41.0184 55.8929 39.7826 54.6136 38.8296 53.6271C37.8683 52.6319 36.9974 51.7304 36.3183 51.0274C35.7893 50.4797 35.054 49.7186 34.3775 49.0182C33.5635 48.1756 32.7975 47.3826 31.9219 46.4761C30.3014 44.7986 29.0995 43.5544 27.6506 42.0545C25.8119 40.151 24.2513 38.5355 22.7254 36.956C22.2189 36.4316 21.3799 35.5631 20.6663 34.8244" />
            <path class="t" d="M15.6665 25.9469C16.1921 26.1211 17.2897 26.0993 17.9277 26.1419C21.1536 26.3574 24.4235 26.5138 27.6792 26.6532C32.1234 26.8434 36.7483 26.7059 41.2182 26.7059C43.6911 26.7059 46.0767 26.6395 48.5388 26.5583C50.1459 26.5053 51.8376 26.5921 53.4287 26.495C56.943 26.2806 60.4291 26.0418 63.9998 26.0418" stroke-width="18" />
          </svg>
    
          <span class="kpi-tracker">KPI Tracker</span>
    
          <svg width="35" height="35" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9998 0.166016C16.8794 0.166016 12.8515 1.38787 9.42547 3.67707C5.99944 5.96626 3.32918 9.21998 1.75236 13.0268C0.175531 16.8336 -0.237039 21.0225 0.56682 25.0637C1.37068 29.105 3.35486 32.8171 6.26846 35.7307C9.18205 38.6443 12.8942 40.6285 16.9355 41.4324C20.9767 42.2362 25.1656 41.8237 28.9724 40.2468C32.7792 38.67 36.0329 35.9998 38.3221 32.5737C40.6113 29.1477 41.8332 25.1198 41.8332 20.9993C41.8332 18.2635 41.2943 15.5544 40.2473 13.0268C39.2004 10.4992 37.6658 8.20251 35.7312 6.26796C33.7967 4.3334 31.5 2.79883 28.9724 1.75186C26.4448 0.704886 23.7357 0.166016 20.9998 0.166016ZM32.8248 17.3264L20.3248 28.7848C19.9291 29.1477 19.4085 29.3437 18.8717 29.3321C18.3348 29.3204 17.8232 29.102 17.4436 28.7223L11.1936 22.4723C10.9946 22.2801 10.8359 22.0502 10.7267 21.796C10.6175 21.5418 10.5601 21.2685 10.5577 20.9918C10.5553 20.7152 10.608 20.4409 10.7127 20.1849C10.8175 19.9288 10.9722 19.6962 11.1678 19.5006C11.3634 19.305 11.596 19.1503 11.852 19.0456C12.1081 18.9408 12.3824 18.8881 12.659 18.8905C12.9356 18.8929 13.209 18.9504 13.4632 19.0596C13.7174 19.1687 13.9472 19.3275 14.1394 19.5264L18.979 24.366L30.0082 14.2556C30.4154 13.8821 30.9543 13.6856 31.5064 13.7095C32.0584 13.7333 32.5784 13.9755 32.9519 14.3827C33.3254 14.7899 33.5219 15.3288 33.4981 15.8809C33.4742 16.4329 33.2321 16.9529 32.8248 17.3264Z" fill="#2A7378"/>
          </svg>
        </a>
    
        <a class="mouse-layer" id="home" href="../html/trang-chu.html">
        <svg viewBox="0 0 31 29" class="svg1" xmlns: "http://www.w3.org/2000/svg">
            <path d="M29 14.7549V16.6563C29 21.5323 29 23.9704 27.4183 25.4851C25.8368 27 23.2911 27 18.2 27H12.8C7.70883 27 5.16325 27 3.58162 25.4851C2 23.9704 2 21.5323 2 16.6563V14.7549C2 11.8944 2 10.4641 2.70092 9.27843C3.40184 8.09276 4.68238 7.35689 7.24344 5.88516L9.94344 4.33359C12.6507 2.77786 14.0043 2 15.5 2C16.9957 2 18.3493 2.77786 21.0566 4.33359L23.7566 5.88515C26.3177 7.35689 27.5982 8.09276 28.2991 9.27843"/>
            <path d="M19.55 22H11.45"/>
        </svg>
        <span>Trang chủ</span>
        </a>
        
        <a class="mouse-layer" id="kpi" href="../html/Theo-doi-kpi.html">
        <svg viewBox="0 0 33 32" class="svg1" xmlns: "http://www.w3.org/2000/svg">
            <path d="M22.3 10.4V6.2L26.65 2L28.1 4.8L31 6.2L26.65 10.4H22.3ZM22.3 10.4L16.5 15.9999M31 16C31 23.7319 24.5081 30 16.5 30C8.49187 30 2 23.7319 2 16C2 8.26801 8.49187 2 16.5 2M23.75 16C23.75 19.866 20.504 23 16.5 23C12.4959 23 9.25 19.866 9.25 16C9.25 12.134 12.4959 9 16.5 9" stroke-linejoin="round"/>
        </svg>
        <span>Theo dõi KPI</span>
        </a>


    
        <a class="mouse-layer" id="schedule" href="../html/lap_ke_hoach.html">
          <svg viewBox="0 0 29 31" class="svg2" xmlns: "http://www.w3.org/2000/svg">
              <path d="M27.7917 15.4997C27.4712 15.4997 27.1639 15.6086 26.9373 15.8024C26.7106 15.9962 26.5833 16.259 26.5833 16.5331V19.6331C26.5833 19.9071 26.7106 20.17 26.9373 20.3638C27.1639 20.5575 27.4712 20.6664 27.7917 20.6664C28.1121 20.6664 28.4195 20.5575 28.6461 20.3638C28.8727 20.17 29 19.9071 29 19.6331V16.5331C29 16.259 28.8727 15.9962 28.6461 15.8024C28.4195 15.6086 28.1121 15.4997 27.7917 15.4997ZM28.4683 11.5421C28.4011 11.5027 28.328 11.4715 28.2508 11.4491C28.1787 11.418 28.1012 11.397 28.0213 11.3871C27.8271 11.3538 27.6264 11.3619 27.4368 11.4105C27.2472 11.4592 27.0744 11.5469 26.9338 11.6661C26.8218 11.7626 26.7332 11.8771 26.673 12.003C26.6129 12.1289 26.5824 12.2637 26.5833 12.3997C26.5833 12.6738 26.7106 12.9366 26.9373 13.1304C27.1639 13.3242 27.4712 13.4331 27.7917 13.4331C28.1121 13.4331 28.4195 13.3242 28.6461 13.1304C28.8727 12.9366 29 12.6738 29 12.3997C28.9956 12.1261 28.8704 11.8641 28.6496 11.6661L28.4683 11.5421Z" />
              <path d="M25.375 3.1H24.1667C24.1667 2.27783 23.7847 1.48933 23.1049 0.907969C22.4251 0.326606 21.5031 0 20.5417 0H8.45833C7.49692 0 6.57489 0.326606 5.89507 0.907969C5.21525 1.48933 4.83333 2.27783 4.83333 3.1H3.625C2.68011 3.09971 1.77243 3.41495 1.09532 3.97855C0.418211 4.54215 0.0251971 5.30957 0 6.11733V27.9827C0.0251971 28.7904 0.418211 29.5578 1.09532 30.1214C1.77243 30.6851 2.68011 31.0003 3.625 31H25.375C26.3199 31.0003 27.2276 30.6851 27.9047 30.1214C28.5818 29.5578 28.9748 28.7904 29 27.9827V22.7333C29 22.4593 28.8727 22.1964 28.6461 22.0027C28.4195 21.8089 28.1121 21.7 27.7917 21.7C27.4712 21.7 27.1639 21.8089 26.9372 22.0027C26.7106 22.1964 26.5833 22.4593 26.5833 22.7333V27.9827C26.559 28.2422 26.421 28.4842 26.197 28.6605C25.973 28.8367 25.6794 28.9342 25.375 28.9333H3.625C3.3206 28.9342 3.02704 28.8367 2.80302 28.6605C2.579 28.4842 2.44102 28.2422 2.41667 27.9827V6.11733C2.44102 5.85785 2.579 5.61578 2.80302 5.43953C3.02704 5.26328 3.3206 5.16583 3.625 5.16667H4.83333C4.83333 5.98884 5.21525 6.77734 5.89507 7.3587C6.57489 7.94006 7.49692 8.26667 8.45833 8.26667H20.5417C21.5031 8.26667 22.4251 7.94006 23.1049 7.3587C23.7847 6.77734 24.1667 5.98884 24.1667 5.16667H25.375C25.6794 5.16583 25.973 5.26328 26.197 5.43953C26.421 5.61578 26.559 5.85785 26.5833 6.11733V8.26667C26.5833 8.54072 26.7106 8.80356 26.9372 8.99734C27.1639 9.19113 27.4712 9.3 27.7917 9.3C28.1121 9.3 28.4195 9.19113 28.6461 8.99734C28.8727 8.80356 29 8.54072 29 8.26667V6.11733C28.9748 5.30957 28.5818 4.54215 27.9047 3.97855C27.2276 3.41495 26.3199 3.09971 25.375 3.1ZM21.75 5.16667C21.75 5.44072 21.6227 5.70356 21.3961 5.89734C21.1695 6.09113 20.8621 6.2 20.5417 6.2H8.45833C8.13786 6.2 7.83052 6.09113 7.60391 5.89734C7.37731 5.70356 7.25 5.44072 7.25 5.16667V3.1C7.25 2.82594 7.37731 2.56311 7.60391 2.36932C7.83052 2.17554 8.13786 2.06667 8.45833 2.06667H20.5417C20.8621 2.06667 21.1695 2.17554 21.3961 2.36932C21.6227 2.56311 21.75 2.82594 21.75 3.1V5.16667Z" />
              <path d="M22.0642 12.7409L12.0833 22.2683L6.89958 17.8663C6.66843 17.697 6.37109 17.6085 6.06698 17.6186C5.76287 17.6286 5.47439 17.7364 5.2592 17.9205C5.044 18.1045 4.91793 18.3512 4.90618 18.6113C4.89444 18.8713 4.99788 19.1256 5.19583 19.3233L11.2375 24.4899C11.4606 24.6846 11.7646 24.7961 12.0833 24.7999C12.2479 24.7968 12.4099 24.7649 12.5595 24.7062C12.7091 24.6476 12.8431 24.5635 12.9533 24.4589L23.8283 14.1256C24.043 13.9214 24.1541 13.6527 24.1371 13.3785C24.1201 13.1043 23.9765 12.8471 23.7377 12.6634C23.499 12.4798 23.1847 12.3848 22.864 12.3994C22.5434 12.4139 22.2426 12.5368 22.0279 12.7409H22.0642Z" />
          </svg>

          <span>Lập kế hoạch</span>
        </a>
        
      </div>
    
      <div></div>
    
      <div class="right">
          <div id="guidance">
              <button class="user-button"> 
                  <img 
                  class="right-icon" 
                  loading="lazy" 
                  alt="" 
                  src="../images/top-app-bar/help.svg"
                  /> 
              </button> 
          </div>

        <div id="notification">
          <div id="alert" class="hidden">
              <div id="title">Thông báo</div>
              <div id="content">
                  <div id="alert-content">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                  </div>
              </div>
              <div id="read-mark">Đánh dấu là đã đọc</div>
          </div>
              <button class="user-button" id="alert-button"> 
                  <img 
                  class="right-icon" 
                  loading="lazy" 
                  alt="" 
                  src="../images/top-app-bar/alert.svg" 
                  /> 
              </button> 
          </div>
          <div id="user-avatar-part">
              <button class="user-button" id="user-button"> 
                  <img 
                  class="user" 
                  loading="lazy" 
                  alt="" 
                  src="../images/user.svg" 
                  /> 
              </button> 

              <div id="user-popup-container" class="hidden">
                  <div id="user-popup" >
                      <a id="settings-container" href="setting.html">
                          <img 
                          class="right-icon" 
                          loading="lazy" 
                          alt="" 
                          src="../images/setting.svg" >
                          <p>Cài đặt</p>
                      </a>
                      <a id="logout-container" href="../index.html">
                          <img 
                          class="right-icon" 
                          loading="lazy" 
                          alt="" 
                          src="../images/logout.svg" >
                          <p>Đăng xuất</p>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    </header>
    
        <style>
          #user-popup-container {
            z-index: 10;
            position: absolute;
            top: 85px;
            right: 20px ;
          }
          #user-popup a p {
              color: var(--MyM3-color-dark-theme-text, #FFF);
              text-align: center;
              font-family: var(--body-font);
              font-size: var(--body-size);
              font-style: normal;
              font-weight: 400;
              line-height: normal;
          }
          #user-popup a {
              display: flex;
              height: 65px;
              padding-left: 30px;
              flex-direction: row;
              align-items: center;
              gap: var(--gap-11xl);
              flex-shrink: 0;
              align-self: stretch;
              border-radius: var(--button-border-radius);
              background-color: var(--color-mode-1-button);
          }
          #user-popup a:hover {
              background-color: var(--color-mode-1-button-hover);
              border: 2px solid var(--color-mode-1-button);
          }
          #user-popup {
              display: flex;
              width: 225px;
              height: 174px;
              padding: 10px;
              flex-direction: column;
              justify-content: space-between;
              align-items: flex-end;
              border-radius: 15px;
              background-color: var(--color-mode-1-frame-background);
              box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
          }
          #content::-webkit-scrollbar {
              width: 6px;
          }

              /* Track */
          #content::-webkit-scrollbar-track {
              background: var(--color-mode-1-footer); 
              border-radius: 2px;
              width: 6px;
          }
              
              /* Handle */
          #content::-webkit-scrollbar-thumb {
              width: 4px;
              background: var(--color-mode-1-button); 
              border-radius: 2px;
          }

              /* Handle on hover */
          #content::-webkit-scrollbar-thumb:hover {
              background: #154e53; 
              
          }
          #title {
              margin-top: 14px;
              padding-left: 9px;
              font-family: "Roboto Flex";
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 24px; /* 150% */
              letter-spacing: 0.15px;
          }
          #read-mark {
              margin-top: 20px;
              padding-left: 73px;
              font-family: "Roboto Flex";
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: 20px; /* 142.857% */
              letter-spacing: 0.1px;
          }
          #read-mark:hover {
              color: var(--color-mode-1-button);
              cursor: pointer;
          }
          #alert {
              width: 209px;
              height: 342px;
              position:absolute ;
              top: 20px;
              right: 150px;
              z-index: 10;
              background-color: var(--color-mode-1-frame-background) ;
              border-radius: var(--button-border-radius);
              box-shadow: -4px 4px 4px 0 rgba(0, 0, 0, 0.25);
          }
          #content {
              width: 198px;
              height: 247px;
              overflow-y: scroll;
              overflow-x: hidden;
          }

          a{
              text-decoration: none;
          }
          .header {
              width: 100%;
              height: auto;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              padding: 10px 20px 10px 20px;
              }
  
              .header div:nth-of-type(2) {
              width: 100%;
              }
  
              .logo {
              width: auto;
              height: 70px;
              display: flex;
              flex-direction: row;
              padding: 18px 15px 18px 15px;
              gap: 12px;
              align-items: center;
              }
              
              .logo:hover {
              border-radius: var(--button-border-radius);
              border: none;
              background-color: var(--color-mode-1-frame-background); 
              cursor: pointer;
              }
              
              .kpi-tracker {
              font-size: 38px;
              font-family: var(--logo-font);
              color: var(--color-mode-1-button);
              width: auto;
              }
              
              .left {
              width: fit-content;
              height: inherit;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              gap: 20px;
              }
              
              .mouse-layer {
              width: auto;
              height: 55px;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              gap: 10px;
              padding: 20px 10px 20px 10px;
              }
              
              .mouse-layer:hover{
              border-radius: var(--button-border-radius);
              border: none;
              background-color: var(--color-mode-1-frame-background); 
              cursor: pointer;
              }
  
              .mouse-layer span {
              font-size: var(--page-title);
              color: var(--color-mode-1-button);
              font-weight: 500px;
              white-space:nowrap;
              }
              
              .mouse-layer svg {
              width: 26px;
              height: 26px;
              fill: none;
              }
              
              .svg1 path {
              stroke: var(--color-mode-1-button);
              stroke-width: 3;
              stroke-linecap: round;
              }
              
              .svg2 path {
              fill: var(--color-mode-1-button);
              }
              
              .right {
              width: fit-content;
              height: fit-content;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              gap: 15px;
              }
              
              .right-icon {
              width: 28px;
              height: 28px;
              }
  
              .user-button{
              width: 50px;
              height: 50px;
              border-radius: 100px;
              }
  
              .user {
              width: 28px;
              height: 28px;
              }
  
              .t {
              stroke: var(--color-mode-1-footer); 
              stroke-linecap: round;
              }
  
              .k {
              stroke: var(--color-mode-1-button); 
              stroke-width: 25;
              stroke-linecap: round;
              }
              .hidden {
                  display: none;
              }

              #alert-content {
                  margin-top: 15px;
                  margin-left: 5px;
              }

              #alert-content div {
                  width: 187px;
                  height: 47px;
                  margin-bottom: 6px;
              }
              #alert-content div:hover {
                  background-color: var(--color-mode-1-footer);
              }
        </style>

      `;
    }
  }
  
  customElements.define('header-component', Header);
  document.addEventListener('DOMContentLoaded', (event) => {
    const notification = document.querySelector("#alert");
    const alertButton = document.querySelector("#alert-button");
    const userAvatar = document.querySelector("#user-avatar-part");
    const userPopup = document.querySelector("#user-popup-container");
    const hideBoth = () => {
        notification.classList.add("hidden");
        userPopup.classList.add("hidden");
    };

    document.body.addEventListener("click", (e) => {
        if (!notification.contains(e.target) && !alertButton.contains(e.target)) {
            notification.classList.add("hidden");
        }
        if (!userPopup.contains(e.target) && !userAvatar.contains(e.target)) {
            userPopup.classList.add("hidden");
        }
    });

    userAvatar.addEventListener("click", (e) => {
        e.stopPropagation();
        notification.classList.add("hidden"); 
        userPopup.classList.toggle("hidden");
    });

    alertButton.addEventListener("click", (e) => {
        e.stopPropagation();
        userPopup.classList.add("hidden"); 
        notification.classList.toggle("hidden");
    });
});
