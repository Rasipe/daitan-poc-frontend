
function getUrl() {
    const queryString = window.location.search;
    return new URLSearchParams(queryString);
}

export function getUrlParams(param: string): string | null {
    const urlParams = getUrl();
    return urlParams.get(param);
}

export function setUrlParams(param: string, value: any): void {
    const urlParams = getUrl();
    urlParams.set(param, value);
    updateUrl(urlParams, value, param);
}

function updateUrl(urlParams: URLSearchParams, value: string, param: string): void {
    const url = new URL(window.location.toString())
    url.search = urlParams.toString();
    window.history.pushState(value, param, url)
}