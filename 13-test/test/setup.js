import { jsdom } from 'jsdom';

// jsdom 用于在nodejs中模拟浏览器环境
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
