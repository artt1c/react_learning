export const retrivelStorage = <T,> (key:string) => {
  const obj = localStorage.getItem(key) || '';
  if (!obj) return {} as T
  return JSON.parse(obj) as T
}