color_mode_1_button = "#2a7378";
color_mode_1_footer = "#3aafa9";
color_mode_1_frame_background = "#def2f1";
color_mode_1_element2 = "#9CD6D3";
color_mode_1_button_hover = "#439BA1";
color_mode_1_background = "#fff";

color_mode_2_button = "#254E58";
color_mode_2_footer = "#458797";
color_mode_2_frame_background = "#def2f1";
color_mode_2_element2 = "#9CD6D3";
color_mode_2_button_hover = "#439BA1";
color_mode_2_background = "#FFFFF7";

color_mode_3_button = "#1C3334";
color_mode_3_footer = "#1C3334";
color_mode_3_frame_background = "#def2f1";
color_mode_3_element2 = "#9CD6D3";
color_mode_3_button_hover = "#439BA1";
color_mode_3_background = "#376E6F";

color_mode_4_button = "#254E58";
color_mode_4_footer = "#45A29E";
color_mode_4_frame_background = "#C5C6C7";
color_mode_4_element2 = "#9CD6D3";
color_mode_4_button_hover = "#439BA1";
color_mode_4_background = "#080808";

color_black_text = "#000";
color_white_text = "#fff";


function theme1Click() {
        // Lưu trữ giá trị của các biến vào Local Storage
    localStorage.setItem('--color-button', color_mode_1_button);
    localStorage.setItem('--color-footer', color_mode_1_footer);
    localStorage.setItem('--color-frame-background', color_mode_1_frame_background);
    localStorage.setItem('--color-element2', color_mode_1_element2);
    localStorage.setItem('--color-button-hover', color_mode_1_button_hover);
    localStorage.setItem('--color-background', color_mode_1_background);
    localStorage.setItem('--color-text', color_black_text);
    loadTheme();
  }
  
  function theme2Click() {
    localStorage.setItem('--color-button', color_mode_2_button);
    localStorage.setItem('--color-footer', color_mode_2_footer);
    localStorage.setItem('--color-frame-background', color_mode_2_frame_background);
    localStorage.setItem('--color-element2', color_mode_2_element2);
    localStorage.setItem('--color-button-hover', color_mode_2_button_hover);
    localStorage.setItem('--color-background', color_mode_2_background);
    localStorage.setItem('--color-text', color_black_text);
    loadTheme();
  }
  
  function theme3Click() {
    localStorage.setItem('--color-button', color_mode_3_button);
    localStorage.setItem('--color-footer', color_mode_3_footer);
    localStorage.setItem('--color-frame-background', color_mode_3_frame_background);
    localStorage.setItem('--color-element2', color_mode_3_element2);
    localStorage.setItem('--color-button-hover', color_mode_3_button_hover);
    localStorage.setItem('--color-background', color_mode_3_background);
    localStorage.setItem('--color-text', color_white_text);
    loadTheme();
  }

  function theme4Click() {
    localStorage.setItem('--color-button', color_mode_4_button);
    localStorage.setItem('--color-footer', color_mode_4_footer);
    localStorage.setItem('--color-frame-background', color_mode_4_frame_background);
    localStorage.setItem('--color-element2', color_mode_4_element2);
    localStorage.setItem('--color-button-hover', color_mode_4_button_hover);
    localStorage.setItem('--color-background', color_mode_4_background);
    localStorage.setItem('--color-text', color_white_text);
    loadTheme();
  }

  function loadTheme() {
      // Khôi phục giá trị của các biến từ Local Storage khi trang web được tải lại
    console.log( localStorage.getItem('--color-button'));
    document.documentElement.style.setProperty('--color-button', localStorage.getItem('--color-button'));
    document.documentElement.style.setProperty('--color-footer', localStorage.getItem('--color-footer'));
    document.documentElement.style.setProperty('--color-frame-background', localStorage.getItem('--color-frame-background'));
    document.documentElement.style.setProperty('--color-element2', localStorage.getItem('--color-element2'));
    document.documentElement.style.setProperty('--color-button-hover', localStorage.getItem('--color-button-hover'));
    document.documentElement.style.setProperty('--color-background', localStorage.getItem('--color-background'));
    document.documentElement.style.setProperty('--color-text', localStorage.getItem('--color-text'));
  }

  let font_size_min = getComputedStyle(document.documentElement).getPropertyValue('--body-size-min').trim();
  font_size_min = parseFloat(font_size_min);

  let heading1_min = getComputedStyle(document.documentElement).getPropertyValue('--heading1-min').trim();
  heading1_min = parseFloat(heading1_min);

function changeFontSize(value){
  localStorage.setItem('--body-size', value);
  localStorage.setItem('--heading1', value - font_size_min + heading1_min);
  document.documentElement.style.setProperty('--body-size', localStorage.getItem('--body-size')+'px');
  document.documentElement.style.setProperty('--heading1', localStorage.getItem('--heading1')+'px');
}

function changeFont(value){
  localStorage.setItem('--body-font', value);
  document.documentElement.style.setProperty('--body-font', localStorage.getItem('--body-font'));
}

  loadTheme();
  changeFontSize(localStorage.getItem('--body-size'));
  changeFont(localStorage.getItem('--body-font'));