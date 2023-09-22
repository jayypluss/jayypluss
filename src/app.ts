// src/app.js
import path from 'path'
import { Liquid } from 'liquidjs'
import { writeFileSync } from 'fs'

export async function main() {
    let scope = {};

    const engine = new Liquid({
        root: path.resolve(__dirname, 'template/'),
        extname: '.liquid'
    });

    engine.renderFile('README', scope).then((content: any) => {
        writeFileSync(path.join(__dirname, '../README.md'), content, {flag: 'w'});
    });
}

main().then(r => {})