export const fetchByUrl = (url: string, httpConfig = {} as RequestInit) => {
    return fetch(url, httpConfig)
    .then((response) => response.json())
    .then((data:any) => console.log(data))
    .catch((error) => console.error(`Error: ${error}`));
};