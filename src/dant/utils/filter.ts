// export const filterHasSingleValue = () => {
//   const result = multipleData.value.map(value => {
//     return props.data.find(data => {
//       return data.value === value
//     })
//   })
//   return result
// }
export const filterHasMultipleValue = (dataArr:any, targetArr:any, value:string) => {
  const result = targetArr.map((item:any) => {
    return dataArr.find((data:any) => {
      return data[value] === item
    })
  })
  return result
}
