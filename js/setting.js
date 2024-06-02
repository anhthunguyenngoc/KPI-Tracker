document.addEventListener("DOMContentLoaded", function() {
  const selectBtn = document.getElementById("selectBtn");
  const optionMenu = document.getElementById("selectMenu");
  const options = document.getElementById("options");

  selectBtn.addEventListener("click", () => {
      optionMenu.classList.toggle("active");
      if (optionMenu.classList.contains("active")) {
          // Nếu select-menu được kích hoạt, đặt vị trí của options
          const rect = selectBtn.getBoundingClientRect();
          options.style.top = rect.bottom + "px";
          options.style.left = rect.left + "px";
      }
  });
});

function selectionClick(selectMenu, select_btn, option, btnText){
    const optionMenu = document.querySelector(selectMenu),
        selectBtn = optionMenu.querySelector(select_btn),
        options = optionMenu.querySelectorAll(option),
        sBtn_text = optionMenu.querySelector(btnText);

    selectBtn.addEventListener("click", () => {
        optionMenu.classList.toggle("active");
        if (optionMenu.classList.contains("active")) {
            // Nếu select-menu được kích hoạt, đặt vị trí của options
            const rect = selectBtn.getBoundingClientRect();
            options.style.top = rect.bottom + "px";
            options.style.left = rect.left + "px";
        }
        }
    );       

    options.forEach(option =>{option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
        });
    });
}

function switchClick(switchI, text) {
    const switchInput = document.getElementById(switchI);
    const switchText = document.getElementById(text);

switchInput.addEventListener('change', function() {
  if (this.checked) {
    switchText.textContent = 'Bật';
  } else {
    switchText.textContent = 'Tắt';
  }
});
}

switchClick('switch1', 'switchText1');

switchClick('switch2', 'switchText2');

switchClick('switch3', 'switchText3');

selectionClick(".select-menu1", ".select-btn", ".option", ".sBtn-text");

selectionClick(".select-menu2", ".select-btn", ".option", ".sBtn-text");

selectionClick(".select-menu3", ".select-btn", ".option", ".sBtn-text");

const scrollHandler = (elmRef) => {
  console.log(elmRef);
  window.scrollTo({
      top: elmRef.current.offsetTop, behavior: "smooth" 
  })
}

let font_size_max = getComputedStyle(document.documentElement).getPropertyValue('--body-size-max').trim();
let font_size = getComputedStyle(document.documentElement).getPropertyValue('--body-size').trim();

font_size_max = parseFloat(font_size_max);
font_size = parseFloat(font_size);

document.addEventListener("DOMContentLoaded", function() {
  const sliderfontSizeRangeInput = document.querySelector('.slider')
  sliderfontSizeRangeInput.min = font_size_min;
  sliderfontSizeRangeInput.max = font_size_max;
  sliderfontSizeRangeInput.value = localStorage.getItem('--body-size');
  
  // Set the attributes for the range input
  const fontSizeRangeInput = document.getElementById('font-size');
  fontSizeRangeInput.min = font_size_min;
  fontSizeRangeInput.max = font_size_max;
  fontSizeRangeInput.value = localStorage.getItem('--body-size');
});

const slider = document.querySelector('.slider');
const numberInput = document.getElementById('font-size');
const spinnerUp = document.querySelector('.spinner-up');
const spinnerDown = document.querySelector('.spinner-down');

// Đồng bộ hóa giá trị slider và ô input
slider.addEventListener('input', function() {
  numberInput.value = this.value;
  changeFontSize(this.value);
});

numberInput.addEventListener('input', function() {
  slider.value = this.value;
  changeFontSize(this.value);
});

// Tăng giảm giá trị khi bấm nút tăng hoặc giảm
spinnerUp.addEventListener('click', function() {
  slider.stepUp();
  numberInput.value = slider.value;
  changeFontSize(slider.value);
});

spinnerDown.addEventListener('click', function() {
  slider.stepDown();
  numberInput.value = slider.value;
  changeFontSize(slider.value);
});


/*
const sBtnText = document.querySelector('.sBtn-text'); // Giả sử id của thẻ span là "sBtn-text"
sBtnText.addEventListener('input', function() {
    localStorage.setItem('--body-font', sBtnText.textContent);
    console.log(sBtnText.textContent);
    document.documentElement.style.setProperty('--body-font', localStorage.getItem('--body-font'));
});

*/