'use strict';

// const { app, BrowserWindow } = require('electron/main');
// const a = require('./file2.js');
import { app, BrowserWindow } from 'electron/main';
import { doSomething } from './file2.js';
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
      new webpack.DefinePlugin({
        'process.env.MY_SECRET_VARIABLE': JSON.stringify(process.env.MY_SECRET_VARIABLE)
      })
    ]
  });

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

    console.log('MY_SECRET_VARIABLE ' + process.env.MY_SECRET_VARIABLE)
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
