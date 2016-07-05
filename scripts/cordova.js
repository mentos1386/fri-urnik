import webpack from 'webpack';

import Config from '../config/cordova';
import { wrap, path, read, write, copy, exec } from './utils';

process.chdir('cordova');

const platform = process.argv.slice(-1)[0];

const config = new Config(platform);
const compiler = webpack(config.webpack);

const updateVersion = async () => {
    const config = path('cordova', 'config.xml');
    
    const [ pkg, conf ] = await Promise.all([
        read(path('package.json')),
        read(path(config))
    ]);
    
    const version = JSON.parse(pkg).version;
    const updated = conf.replace(/version="[\d.]+"/, `version="${version}"`);
    
    return write(config, updated);
};

const updateAndroidBuild = () => {
    const source = path(
        'cordova', 'platforms', 'android',
        'build', 'outputs', 'apk', 'android-debug.apk'
    );
    
    const destination = path(
        'cordova', 'android-debug.apk'
    );
    
    return copy(source, destination);
};

const updateBuild = async () => {
    switch (platform) {
        case 'android':
            return updateAndroidBuild();
            
        default:
            return null;
    }
};

const compile = wrap(::compiler.run);

(async () => {
    try {
        const start = Date.now();
        
        await updateVersion();
        const stats = await compile();
        const json = stats.toJson();
        
        if (json.errors.length > 0) {
            console.log('Compilation errors:');
            json.errors.forEach(::console.log);
            console.log();
        }
        
        const command = `cordova build ${platform}`;
        
        console.log(`> ${command}`);
        const [ , errors ] = await exec(command);
        console.log(errors);
        
        await updateBuild();
        
        const elapsed = (Date.now() - start) / 1e3;
        console.log(`Finished build in ${elapsed.toFixed(2)} seconds`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})();