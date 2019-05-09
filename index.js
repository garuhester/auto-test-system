const electron = require("electron");
const { app, BrowserWindow, Menu, shell, Tray, dialog } = electron;
var win = null;

var path = require('path');
var pyPath = path.dirname(app.getPath('exe'));

app.on('ready', function () {
    // const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
    win = new BrowserWindow({
        width: 1280,
        height: 900,
        icon: "./static/img/ats.png",
        // maxWidth: 1000,
        // maxHeight: 800,
        minWidth: 960,
        minHeight: 700
    })

    win.loadURL(`file://${__dirname}/static/pages/index.html`);
    // win.openDevTools();
    win.on('closed', () => {
        win = null;
    })

    //选择文件
    // console.log(dialog.showOpenDialog({ properties: ["openFile", "openDirectory", "multiSelections"] }));

    //自定义菜单
    let template = [
        {
            label: '操作',
            submenu: [
                {
                    label: '打开日志目录',
                    click: function (item, focusedWindow) {
                        electron.shell.openExternal(`${pyPath}/logs`);
                    }
                }, {
                    label: '重新加载',
                    accelerator: 'CmdOrCtrl+R',
                    click: function (item, focusedWindow) {
                        if (focusedWindow) {
                            // on reload, start fresh and close any old
                            // open secondary windows
                            if (focusedWindow.id === 1) {
                                BrowserWindow.getAllWindows().forEach(function (win) {
                                    if (win.id > 1) {
                                        win.close()
                                    }
                                })
                            }
                            focusedWindow.reload()
                        }
                    }
                }, {
                    label: '切换开发者工具',
                    accelerator: (function () {
                        if (process.platform === 'darwin') {
                            return 'Alt+Command+I'
                        } else {
                            return 'Ctrl+Shift+I'
                        }
                    })(),
                    click: function (item, focusedWindow) {
                        if (focusedWindow) {
                            focusedWindow.toggleDevTools()
                        }
                    }
                }]
        }
    ];
    win.setMenu(Menu.buildFromTemplate(template));

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