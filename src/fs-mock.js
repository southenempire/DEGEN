
// Updated code using browser-compatible alternatives
export const promises = {
    readFile: async (filePath) => {
        if (typeof window !== 'undefined') {
            const response = await fetch(filePath);
            return await response.text();
        }
        throw new Error('readFile is not supported outside browsers.');
    },
    writeFile: async () => {
        throw new Error('writeFile is not supported in browsers.');
    },
    stat: async () => {
        throw new Error('stat is not supported in browsers.');
    },
};
export const statSync = () => { throw new Error('statSync not supported in browser'); };
export const createReadStream = () => { throw new Error('createReadStream not supported in browser'); };
export default promises;