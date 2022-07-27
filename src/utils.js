// geojson.bin 文件放在nginx上，返回的content-type 为json类型

const fetchGeo = () => fetch('http://localhost:8080/geojson.bin').then((response) => {
  return response.json()
})


let CacheData

export const getGeo = () => {
  if (CacheData) return Promise.resolve(CacheData)
  return fetchGeo().then(data => {
    CacheData = data
    return data
  })
}
