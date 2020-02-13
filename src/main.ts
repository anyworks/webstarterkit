const {app,BrowserWindow} = require('electron');

let mainWindow = null;

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});
app.allowRendererProcessReuse = true;
app.on('ready', function () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        center: true,
        resizable: true,
        'node-integration': false,
        webPreferences  : {
            preload : app.getAppPath() + "/preload.js"
        }
    });
    mainWindow.on('closed',function () {
        mainWindow = null;
    });
//    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.loadFile("index.html");
});

