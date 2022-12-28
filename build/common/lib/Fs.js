import fs from 'fs-extra';
class Fs {
    /**
     *
     * @param err
     */
    static isErrorNotFound(err) {
        return err.code === 'ENOENT';
    }
    /**
     * Async awaited version of the check if a path resolves to a dir
     *
     * @param {string} path
     * @returns {Promise<boolean>}
     */
    async isFolder(path) {
        const stats = await fs.stat(path).catch((err) => {
            if (Fs.isErrorNotFound(err))
                return false;
            throw err;
        });
        // @ts-ignore
        return !stats ? stats : stats.isDirectory();
    }
    /**
     *
     * @param path
     * @returns {Promise<boolean>}
     */
    async isFile(path) {
        const stats = await fs.stat(path).catch((err) => {
            if (Fs.isErrorNotFound(err))
                return false;
            throw err;
        });
        // @ts-ignore
        return !stats ? stats : stats.isFile();
    }
    /**
     * Read a file
     *
     * @param {string} path
     * @returns {Promise<string>}
     */
    async readFile(path) {
        return fs.readFile(path, 'utf8');
    }
    /**
     *
     * @param path
     * @param data
     * @returns {Promise<void>}
     */
    async writeFile(path, data) {
        await fs.writeFile(path, data, { encoding: 'utf8', flag: 'w' });
    }
    /**
     *
     * @param path
     * @returns {Promise<void>}
     */
    async remove(path) {
        await fs.remove(path);
    }
    /**
     *
     * @param path
     * @returns {Promise<void>}
     */
    async emptyDir(path) {
        await fs.emptyDir(path);
    }
    /**
     *
     * @param source
     * @param destination
     * @returns {Promise<void>}
     */
    async copy(source, destination) {
        await fs.copy(source, destination);
    }
}
export default new Fs();
