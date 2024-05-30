
const tuto = introJs();
tuto.setOptions({
steps:[
    { 
        title:"Chào mừng đến với <br> KPI Tracker!",
        intro:'<p class="intro-p">Trước tiên, hãy cùng khám phá trang web nhé.</p>'
    },
    {   
        title:"Tiến độ hiện tại",
        element: document.getElementById('kpi-tomtat'),
        intro:'<p class="intro-p">Khung hiển thị số phần trăm KPI tổng đã hoàn thành và số ngày dự kiến hoàn thành còn lại.</p>',
        position: "bottom"
    },
    {
        title:"Danh sách nhiệm vụ",
        element: document.getElementById('daily-task'),
        intro:'<p class="intro-p">Hiển thị danh sách các nhiệm vụ có trong ngày.</p>',
        position: "right",
    },
    {
        title:"Thống kê",
        element: document.getElementById('thong-ke'),
        intro:'<p class="intro-p">Hiển thị phần trăm hoàn thành của các KPI cụ thể và thống kê số lượng KPI đã hoàn thành trong tuần trước.</p>',
        position: "left"
    },
    {
        title:"Thanh điều hướng",
        element: document.getElementById('header-left'),
        intro:'<p class="intro-p">Bạn có thể click vào các nút điều hướng ở đây để di chuyển đến các trang khác.</p>',
        position: "bottom"
    },
    {
        title:"Về Trang chủ",
        element: document.getElementById('home'),
        intro:'<p class="intro-p">Bạn có thể quay lại trang chủ ở đây.</p>',
        position: "bottom"
    },
    {
        title:"Đến Theo dõi KPI",
        element: document.getElementById('kpi'),
        intro:'<p class="intro-p">Trang này sẽ hiển thị thông tin chi tiết trạng thái KPI của bạn, cùng với bản thống kê KPI đạt được.</p>',
        position: "bottom"},
    {
        title:"Đến Kế hoạch",
        element: document.getElementById('schedule'),
        intro:'<p class="intro-p">Đây sẽ là nơi để bạn thiết lập chỉ tiêu, thêm các nhiệm vụ và xây dựng bản kế hoạch cho riêng mình.</p>',
        position: "bottom"},
    {   
        title: "Khác",
        element: document.getElementById('header-right'),
        intro:'<p class="intro-p">Các nút để mở Trợ giúp, Thông báo, Cài đặt và đăng xuất.</p>',
        position: "bottom"
    },
    {   
        title: "Bắt đầu thiết lập KPI",
        element: document.getElementById('schedule'),
        intro:'<p class="intro-p">Tiếp theo, hãy click vào đây để bắt đầu thiết lập KPI và xây dựng bản kế hoạch nhé!.</p>',
        position: "bottom",
        disableInteraction: false,
    },
],
tooltipClass: "tutorial",
highlightClass: "highlight-tooltip",
autoPosition: true,
buttonClass: "tooltip-button",
skipLabel: "Bỏ qua",
nextLabel: "Tiếp theo",
prevLabel: "Quay lại",
doneLabel: "Hoàn thành",
showStepNumbers: true,
disableInteraction: true,
stepNumbersOfLabel: "trong",
hintShowButton: true,
hintButtonLabel: "Đã hiểu",
exitOnOverlayClick: true,
})

function helpClick() {
    tuto.addHints();
    tuto.start(); 
}

function setOpenIntro() {
    window.open("../html/trang-chu.html", '_top');
    helpClick();
}