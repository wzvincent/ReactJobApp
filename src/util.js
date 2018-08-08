export function getRedirectPath({type, icon}){
  let url = (type==='boss')?'/boss':'/genius'
  if(!icon){
    url += 'info'
  }
  return url
}
