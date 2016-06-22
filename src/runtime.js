import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const register = async () => {
    if (!('serviceWorker' in window.navigator)) {
        return null;
    }
    
    if (process.env.NODE_ENV === 'production') {
        return runtime.register();
    }
    
    const workers = await window.navigator.serviceWorker.getRegistrations();
    
    for (const worker in workers) {
        if ('unregister' in worker) {
            worker.unregister();
        }
    }
    
    return null;
};

export { register };