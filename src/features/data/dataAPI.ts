export type InstanceData = { header: string, length:number};
export type DataInstance  = { header: string, data: Array<InstanceData> };

export function FetchAPI(){
  return new Promise((resolve: (result: Array<DataInstance>) => void , reject) => {
    setTimeout(() => {
      const result: Array<DataInstance> = [
        {
          header: new Date().toISOString(),
          data: [{ header: "Billy", length: 1 }, { header: "John", length: 10 }, { header: "Emily", length: 15 } ]
        },
        {
          header: new Date().toISOString(),
          data: [{ header: "Billy", length: 9 }, { header: "John", length: 18 }, { header: "Emily", length: 12 } ]
        },
        {
          header: new Date().toISOString(),
          data: [{ header: "Billy", length: 19 }, { header: "John", length: 1 }, { header: "Emily", length: 11 } ]
        }
      ]
      resolve(result);
},5000)
})
}