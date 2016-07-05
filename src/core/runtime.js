import { register } from 'serviceworker-webpack-plugin/lib/runtime';

const unregister = async () => {
    const serviceWorker = window.navigator.serviceWorker;
    const workers = await serviceWorker.getRegistrations();
    
    return Promise.all(workers.map(unregisterWorker));
};

const unregisterWorker = (worker) => {
    if (worker.unregister) {
        return worker.unregister();
    } else {
        return null;
    }
};

const runtime = () => {
    const browser = process.env.APP_ENV === 'browser';
    const production = process.env.NODE_ENV === 'production';
    const supported = 'serviceWorker' in window.navigator;
    
    if (browser && supported) {
        if (production) {
            return register();
        } else {
            return unregister();
        }
    }
    
    return null;
};

export default runtime;