
// TODO: this needs to be more configurable...
const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:8080/api' : '/api';

export function apiURL() {
    return ROOT_URL;
}
