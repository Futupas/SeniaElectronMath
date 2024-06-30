'use strict';

// const { app, BrowserWindow } = require('electron/main');
// const a = require('./file2.js');
import { app, BrowserWindow } from 'electron/main';
import { doSomething } from './file2.js';

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    win.loadFile('index.html');
};

doSomething();

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
