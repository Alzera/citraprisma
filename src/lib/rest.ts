import { show } from '$lib/toast'

export default (url: string, method: string, params: object | string | null = null): Promise<any> => {
  const body = params && params instanceof Object ? JSON.stringify(params) : params;
  return new Promise<any>((resolve, _) => {
    fetch("https://www.citraprisma.com/api/" + url, {
      credentials: 'include',
      method,
      headers: {
        "content-type": "application/json"
      },
      body
    })
    .then(r => r.json())
    .then(r => {
      if(r.status) resolve(r)
      else throw "API Fail"
    })
    .catch(err => {
      console.error(err);
      show("Something wrong, please contact administrator")
    });
  })
}