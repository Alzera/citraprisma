import { toast } from '$lib/toast'

export default (url: string, method: string, params: object | string | null = null): Promise<any> => {
  const body = params && params instanceof Object ? JSON.stringify(params) : params;
  return new Promise<any>((resolve, reject) => {
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
      else if(r.error) {
        toast(r.error)
        reject(r.error)
      } else throw "API Fail"
    })
    .catch(err => {
      console.error(err);
      toast("Something wrong, please contact administrator")
      reject(err)
    });
  })
}