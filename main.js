// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindowFull (win) {
  win.hide()

  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 620,
    center:true,
    minWidth: 1200,
    minHeight: 620,
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
    width:500,
    height:300,
    center:true,
    frame: false
  })

  win.loadFile('./static/loading.html')

  setTimeout(function(){createWindowFull(win)}, 5000)
  
}

app.on('ready', createWindow)
