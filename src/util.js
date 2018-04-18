export function getRedirectPath({type, icon}){
  let url = (type==='boss')?'/boss':'/genuis'
  if(!icon){
    url += 'info'
  }
  return url
}
