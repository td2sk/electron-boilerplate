import { app, BrowserWindow, ipcMain } from 'electron';
import electronLocalshortcut from 'electron-localshortcut';
import path from 'path';

let mainWindow;

let url =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8080'
    : `file://${__dirname}/index.html`;

let createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve(path.resolve(__dirname, 'preload.js')),
    },
  });
  mainWindow.setMenu(null);
  mainWindow.loadURL(url);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  if (process.env.NODE_ENV !== 'production') {
    electronLocalshortcut.register(mainWindow, 'F12', () => {
      mainWindow.webContents.toggleDevTools();
    });
  }
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.handle('ipc-example', (event, message) => {
  return "I'm main process";
});
