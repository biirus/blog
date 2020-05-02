import { B as Build } from './index-564ea8d0.js';

function getApiHost() {
    if (Build.isBrowser) {
        return "http://localhost:8080";
    }
    return 'http://localhost:8080';
}

export { getApiHost as g };
