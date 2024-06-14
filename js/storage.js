let storage;
storage = {
    KPIs: [
        {   
            id: '#KPI1',
            name: "Nghiên cứu",
            color : "#9CB2D7",
            hour: "70",
            unit: "Giờ",
            progress : 0,
            lastWeek: 0,
            tasks : [
                {
                    "id": "#KPI1task1",
                    "title": "Phát triển hệ thống",
                    "start": "2024-06-05T09:00",
                    "end": "2024-06-05T11:00",
                    "progress": 2,
                    "note": "Ghi chú",
                    "repeat": "task1repeat0",
                    "backgroundColor": "#9CB2D7",
                    "kpiID": "#KPI1",
                    "done": 0,
                    "inCalender": 1,
                    "textColor": "black"
                },
                {
                    "id": "#KPI1task2",
                    "title": "Nghiên cứu ứng dụng",
                    "day": "",
                    "start": "2024-06-05T09:00",
                    "end": "2024-06-05T11:30",
                    "progress": 2.5,
                    "note": "Ghi chú",
                    "repeat": "task1repeat0",
                    "backgroundColor": "#9CB2D7",
                    "kpiID": "#KPI1",
                    "done": 0,
                    "inCalender": 1,
                    "textColor": "black"
                },
                {
                    "id": "#KPI1task3",
                    "title": "Nghiên cứu ứng dụng của Blockchain",
                    "start": "2024-06-06T10:00",
                    "end": "2024-06-06T12:00",
                    "progress": 2,
                    "note": "Ghi chú",
                    "repeat": "task3repeat0",
                    "backgroundColor": "#9CB2D7",
                    "kpiID": "#KPI1",
                    "done": 0,
                    "inCalender": 1,
                    "textColor": "black"
                },
                {
                    "id": "#KPI1task4",
                    "title": "Viết báo cáo nghiên cứu",
                    "start": "2024-06-07T13:00",
                    "end": "2024-06-07T15:00",
                    "progress": 2,
                    "note": "Ghi chú",
                    "repeat": "task4repeat0",
                    "backgroundColor": "#9CB2D7",
                    "kpiID": "#KPI1",
                    "done": 0,
                    "inCalender": 1,
                    "textColor": "black"
                },
                {
                    "id": "#KPI1task5",
                    "title": "Thảo luận nhóm nghiên cứu",
                    "start": "2024-06-08T16:00",
                    "end": "2024-06-08T18:00",
                    "progress": 2,
                    "note": "Ghi chú",
                    "repeat": "task5repeat0",
                    "backgroundColor": "#9CB2D7",
                    "kpiID": "#KPI1",
                    "done": 0,
                    "inCalender": 1,
                    "textColor": "black"
                },
                {
                    "id": "#KPI1task6",
                    "title": "Điều tra thị trường",
                    "start": "2024-06-10T09:00",
                    "end": "2024-06-10T11:00",
                    "progress": 2,
                    "note": "Ghi chú",
                    "repeat": "task6repeat0",
                    "backgroundColor": "#9CB2D7",
                    "kpiID": "#KPI1",
                    "done": 0,
                    "inCalender": 1,
                    "textColor": "black"
                },
                {
                    "id": "#KPI1task7",
                    "title": "Phân tích dữ liệu về quản lý dự án phần mềm di động",
                    "start": "2024-06-15T09:00",
                    "end": "2024-06-15T12:00",
                    "progress": 3,
                    "note": "Ghi chú",
                    "repeat": "task6repeat0",
                    "backgroundColor": "#9CB2D7",
                    "kpiID": "#KPI1",
                    "done": 0,
                    "inCalender": 1,
                    "textColor": "black"
                },
                {
                    "id": "#KPI1task8",
                    "title": "Thảo luận nhóm nghiên cứu",
                    "start": "2024-06-15T16:00",
                    "end": "2024-06-15T18:00",
                    "progress": 2,
                    "note": "Ghi chú",
                    "repeat": "task5repeat1",
                    "backgroundColor": "#9CB2D7",
                    "kpiID": "#KPI1",
                    "done": 0,
                    "inCalender": 1,
                    "textColor": "black"
                },
                {
                    "id": "#KPI1task9",
                    "title": "Thảo luận nhóm nghiên cứu",
                    "start": "2024-06-22T16:00",
                    "end": "2024-06-22T18:00",
                    "progress": 2,
                    "note": "Ghi chú",
                    "repeat": "task5repeat2",
                    "backgroundColor": "#9CB2D7",
                    "kpiID": "#KPI1",
                    "done": 0,
                    "inCalender": 1,
                    "textColor": "black"
                },
                {
                    "id": "#KPI1task10",
                    "title": "Thảo luận nhóm nghiên cứu",
                    "start": "2024-06-29T16:00",
                    "end": "2024-06-29T18:00",
                    "progress": 2,
                    "note": "Ghi chú",
                    "repeat": "task5repeat3",
                    "backgroundColor": "#9CB2D7",
                    "kpiID": "#KPI1",
                    "done": 0,
                    "inCalender": 1,
                    "textColor": "black"
                },
                {
                    "id": "#KPI1task11",
                    "title": "Viết báo cáo nghiên cứu",
                    "start": "2024-06-14T13:00",
                    "end": "2024-06-14T15:00",
                    "progress": 2,
                    "note": "Ghi chú",
                    "repeat": "task4repeat1",
                    "backgroundColor": "#9CB2D7",
                    "kpiID": "#KPI1",
                    "done": 0,
                    "inCalender": 1,
                    "textColor": "black"
                },
            ]
        },
        {
            id: '#KPI2',
            name: "Giảng dạy",
            color : "#F2DEDE",
            hour: "80",
            unit: "Giờ",
            progress : 0,
            lastWeek: 0,
            tasks : [
                {
                    id: '#KPI2task1',
                    title: 'Giao diện và trải nghiệm người dùng',
                    start: '2024-06-14T14:00',
                    end: '2024-06-14T17:30',
                    backgroundColor: '#F2DEDE',
                    kpiID:'#KPI2',
                    done: 0,
                    repeat: "task1repeat0",
                    inCalender: 1,
                    progress: 3.5,
                    note: 'Ghi chú',
                    textColor: 'black'
                },
                {
                    id: '#KPI2task2',
                    title: 'Giao diện và trải nghiệm người dùng',
                    start: '2024-06-15T14:00',
                    end: '2024-06-15T17:30',
                    backgroundColor: '#F2DEDE',
                    kpiID:'#KPI2',
                    done: 0,
                    repeat: "task1repeat1",
                    inCalender: 1,
                    progress: 3.5,
                    note: 'Ghi chú',
                    textColor: 'black'
                },
                {
                    id: '#KPI2task3',
                    title: 'Giao diện và trải nghiệm người dùng',
                    start: '2024-06-16T14:00',
                    end: '2024-06-16T17:30',
                    backgroundColor: '#F2DEDE',
                    kpiID:'#KPI2',
                    done: 0,
                    repeat: "task1repeat2",
                    inCalender: 1,
                    progress: 3.5,
                    note: 'Ghi chú',
                    textColor: 'black'
                },
                {
                    id: '#KPI2task4',
                    title: 'Giao diện và trải nghiệm người dùng',
                    start: '2024-06-17T14:00',
                    end: '2024-06-17T17:30',
                    backgroundColor: '#F2DEDE',
                    kpiID:'#KPI2',
                    done: 0,
                    repeat: "task1repeat3",
                    inCalender: 1,
                    progress: 3.5,
                    note: 'Ghi chú',
                    textColor: 'black'
                },
                {
                    id: '#KPI2task5',
                    title: 'Giao diện và trải nghiệm người dùng',
                    start: '2024-06-18T14:00',
                    end: '2024-06-18T17:30',
                    backgroundColor: '#F2DEDE',
                    kpiID:'#KPI2',
                    done: 0,
                    repeat: "task1repeat4",
                    inCalender: 1,
                    progress: 3.5,
                    note: 'Ghi chú',
                    textColor: 'black'
                },
                {
                    id: '#KPI2task6',
                    title: 'Trí tuệ nhân tạo',
                    start: '2024-06-06T08:00',
                    end: '2024-06-06T10:30',
                    backgroundColor: '#F2DEDE',
                    kpiID:'#KPI2',
                    done: 0,
                    repeat: "task6repeat0",
                    inCalender: 1,
                    progress: 2,
                    note: 'Ghi chú',
                    textColor: 'black'
                },
                {
                    id: '#KPI2task7',
                    title: 'Trí tuệ nhân tạo',
                    start: '2024-06-13T08:00',
                    end: '2024-06-13T10:30',
                    backgroundColor: '#F2DEDE',
                    kpiID:'#KPI2',
                    done: 0,
                    repeat: "task6repeat1",
                    inCalender: 1,
                    progress: 2,
                    note: 'Ghi chú',
                    textColor: 'black'
                },
                {
                    id: '#KPI2task8',
                    title: 'Trí tuệ nhân tạo',
                    start: '2024-06-20T08:00',
                    end: '2024-06-20T10:30',
                    backgroundColor: '#F2DEDE',
                    kpiID:'#KPI2',
                    done: 0,
                    repeat: "task6repeat2",
                    inCalender: 1,
                    progress: 2,
                    note: 'Ghi chú',
                    textColor: 'black'
                },
                {
                    id: '#KPI2task9',
                    title: 'Trí tuệ nhân tạo',
                    start: '2024-06-27T08:00',
                    end: '2024-06-27T10:30',
                    backgroundColor: '#F2DEDE',
                    kpiID:'#KPI2',
                    done: 0,
                    repeat: "task6repeat3",
                    inCalender: 1,
                    progress: 2,
                    note: 'Ghi chú',
                    textColor: 'black'
                },
                {
                    id: '#KPI2task10',
                    title: 'Nhập môn công nghệ thông tin',
                    start: '2024-06-07T08:00',
                    end: '2024-06-07T10:30',
                    backgroundColor: '#F2DEDE',
                    kpiID:'#KPI2',
                    done: 0,
                    repeat: "task10repeat0",
                    inCalender: 1,
                    progress: 2,
                    note: 'Ghi chú',
                    textColor: 'black'
                },
                {
                    id: '#KPI2task11',
                    title: 'Nhập môn công nghệ thông tin',
                    start: '2024-06-14T08:00',
                    end: '2024-06-14T10:30',
                    backgroundColor: '#F2DEDE',
                    kpiID:'#KPI2',
                    done: 0,
                    repeat: "task10repeat1",
                    inCalender: 1,
                    progress: 2,
                    note: 'Ghi chú',
                    textColor: 'black'
                },
                {
                    id: '#KPI2task12',
                    title: 'Nhập môn công nghệ thông tin',
                    start: '2024-06-21T08:00',
                    end: '2024-06-21T10:30',
                    backgroundColor: '#F2DEDE',
                    kpiID:'#KPI2',
                    done: 0,
                    repeat: "task10repeat2",
                    inCalender: 1,
                    progress: 2,
                    note: 'Ghi chú',
                    textColor: 'black'
                },
                {
                    id: '#KPI2task13',
                    title: 'Nhập môn công nghệ thông tin',
                    start: '2024-06-28T08:00',
                    end: '2024-06-28T10:30',
                    backgroundColor: '#F2DEDE',
                    kpiID:'#KPI2',
                    done: 0,
                    repeat: "task10repeat3",
                    inCalender: 1,
                    progress: 2,
                    note: 'Ghi chú',
                    textColor: 'black'
                },
            ]
        },
        {
            id: '#KPI3',
            name: "Phục vụ",
            color : "#FFDBA6",
            hour: "60",
            unit: "Giờ",
            progress : 0,
            lastWeek: 0,
            tasks: []
        }
    ]
}



function changeStorage(){
    localStorage.setItem('Storage', JSON.stringify(storage));
}

function loadStorage(){
    let storageString = localStorage.getItem("Storage");
    if (storageString) {
        storage = JSON.parse(storageString);
    }
}

loadStorage();