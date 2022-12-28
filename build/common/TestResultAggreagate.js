import Fs from './lib/Fs';
class TestResultAggregate {
    path = '';
    results = {
        TestStatus: {
            PASSED: 0,
            FAILED: 0,
            SKIPPED: 0,
        },
    };
    get resultFilePath() {
        return this.path;
    }
    set resultFilePath(path) {
        this.path = path;
    }
    get result() {
        return this.results;
    }
    set result(value) {
        this.results = value;
    }
    async getResultFromFile() {
        if (await Fs.isFile(this.path))
            return JSON.parse(await Fs.readFile(this.path));
        return this.results;
    }
    async setResult2File(result) {
        await Fs.writeFile(this.path, JSON.stringify(result));
    }
}
export default new TestResultAggregate();
