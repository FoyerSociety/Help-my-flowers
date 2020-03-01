// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindowFull (win) {
  win.hide()

  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 620,
    webPreferences: {
      nodeIntegrations: true
    }
  })

  mainWindow.setMenu(null)
  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:1107/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

function createWindow(){

  const win = new BrowserWindow({
    width:600,
    height:200,
    frame: false
  })

  win.loadFile('./static/loading.html')

  setTimeout(function(){createWindowFull(win)}, 5000)
  
}

app.on('ready', createWindow)