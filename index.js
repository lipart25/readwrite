const fsp = require('fs').promises;

const tasks = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt']
const dest = 'dest.txt'

const readwrite = async filenames => {
    let content = '';
    for (const filename of filenames) {
        let data = await fsp.readFile(filename);
        content += data;
    }

    await fsp.writeFile(dest, content);
}

readwrite(tasks)
    .then(() => console.log('OK'))
    .catch(console.log)