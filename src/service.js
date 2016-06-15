/* eslint-env serviceworker */
/* global fetch, location, URL, serviceWorkerOption */

import 'babel-polyfill';

const MAIN_CACHE = new Date().toISOString();
const OPTIONAL_CACHE = 'OPTIONAL_CACHE';

const { assets } = serviceWorkerOption;
const main = assets.filter(asset => /\.(js|html)$/.test(asset));

const invalidCache = (cache) => {
    return cache !== MAIN_CACHE && cache !== OPTIONAL_CACHE;
};

const findAsset = (url, fallback = './index.html') => {
    const asset = `.${url.pathname}`;
    
    if (assets.includes(asset)) {
        return asset;
    } else {
        return fallback;
    }
};

const openCache = (asset) => {
    if (main.includes(asset)) {
        return caches.open(MAIN_CACHE);
    } else {
        return caches.open(OPTIONAL_CACHE);
    }
};

const install = async () => {
    try {
        const cache = await caches.open(MAIN_CACHE);
        cache.addAll(main);
        
        skipWaiting();
    } catch (error) {
        console.error(error);
    }
};

const activate = async () => {
    const keys = await caches.keys();
    const deleted = keys.filter(invalidCache);
    await Promise.all(deleted.map(key => caches.delete(key)));
    
    const cache = await caches.open(OPTIONAL_CACHE);
    const cached = await cache.keys();
    
    const names = cached.map(request => findAsset(new URL(request.url)));
    const invalid = names.filter(asset => !assets.includes(asset));
    await Promise.all(invalid.map(asset => cache.delete(asset)));
    
    clients.claim();
};

const respond = (event) => {
    const { request } = event;
    
    if (request.method !== 'GET') {
        return;
    }
    
    const url = new URL(request.url);
    
    if (url.origin !== location.origin) {
        return;
    }
    
    if (url.pathname.startsWith('/api/')) {
        return;
    }
    
    event.respondWith(load(findAsset(url)));
};

const load = async (asset) => {
    const cache = await openCache(asset);
    const cached = await cache.match(asset);
    
    if (cached) {
        return cached;
    }
    
    const response = await fetch(asset);
    cache.put(asset, response.clone());
    
    return response;
};

addEventListener('install', (event) => event.waitUntil(install()));
addEventListener('activate', (event) => event.waitUntil(activate()));
addEventListener('fetch', (event) => respond(event));