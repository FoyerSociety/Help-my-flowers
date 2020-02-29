// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 620,
    webPreferences: {
      nodeIntegrations: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:1107/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}



app.on('ready', createWindow)