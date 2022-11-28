export const filterHasMultipleValue = (dataArr:any, targetArr:any, value:string) => {
  const result = targetArr.map((item:any) => {
    return dataArr.find((data:any) => {
      return data[value] === item
    })
  })
  return result
}
