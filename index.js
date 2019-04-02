const electron = require("electron");
const { app, BrowserWindow, Menu, shell, Tray, dialog } = electron;

var win = null;


app.on('ready', function () {
    // const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
    win = new BrowserWindow({
        width: 1280,
        height: 900,
        icon: "./static/img/ats.png",
        // maxWidth: 1000,
        // maxHeight: 800,
        minWidth: 1280,
        minHeight: 900
    })

    win.loadURL(`file://${__dirname}/static/pages/index.html`);
    win.openDevTools();
    win.on('closed', () => {
        win = null;
    })

    //选择文件
    // console.log(dialog.showOpenDialog({ properties: ["openFile", "openDirectory", "multiSelections"] }));

    //自定义菜单
    // const template = [
    //     {
    //         label: "自定义菜单",
    //         submenu: [{ label: "菜单项-1" }, { label: "菜单项-2" }]
    //     }
    // ];
    // win.setMenu(Menu.buildFromTemplate(template));

    //打开系统默认浏览器
    // shell.openExternal("https://github.com");

    //通知区域
    // tray = new Tray("./static/img/ats.png");
    // const contextMenu = Menu.buildFromTemplate([{ label: "Item1", type: "radio" }, { label: "Item2", type: "radio" }, { label: "Item3", type: "radio", checked: true }, { label: "Item4", type: "radio" }]);
    // tray.setToolTip("This is my application.");
    // tray.setContextMenu(contextMenu);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});