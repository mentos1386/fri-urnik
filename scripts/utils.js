import { exec as run } from 'child_process';
import { resolve } from 'path';
import { readFile, writeFile } from 'fs';
import { createReadStream, createWriteStream } from 'fs';

const base = resolve(__dirname, '..');

function first(results) {
    return results[0];
}

function wrap(func, resolver = first) {
    function wrapped(...args) {
        return new Promise((resolve, reject) => {
            func(...args, (error, ...results) => {
                if (error) reject(error);
                else resolve(resolver(results));
            });
        });
    }
    
    return wrapped;
}

function path(...path) {
    return resolve(base, ...path);
}

const _read = wrap(readFile);

function read(file, encoding = 'utf-8') {
    return _read(file, encoding);
}

const _write = wrap(writeFile);

function write(file, content, encoding = 'utf-8') {
    return _write(file, content, encoding);
}

function copy(source, destination) {
    const reader = createReadStream(source);
    
    return new Promise((resolve, reject) => {
        reader.pipe(createWriteStream(destination));
        
        reader.on('end', resolve);
        reader.on('error', reject);
    });
}

const exec = wrap(run, results => results);

export { wrap, path, read, write, copy, exec };