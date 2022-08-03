import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { DataInstance, InstanceData } from "./dataAPI";
import { fetchDataAsync } from "./dataSlice";

const DataDisplayer = () => {

  const [dataPresent, setDataPresent] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.data.data);
  console.log("data", data)

  useEffect(() => {

    if (!dataPresent) {
    
      dispatch(fetchDataAsync());
      setDataPresent(true);
    }
  }, []);

  const redenredData = data.map((eachData: DataInstance) => {
  console.log("datafirstmap", eachData)

    const insideElements = eachData.data.map((eachInstanceData: InstanceData) => {
      {console.log("datasecondmap", eachInstanceData)}
      return(<p> {eachInstanceData.header} : {eachInstanceData.length}</p>)
      
    })
    
    return(
      <>
        <h1>{eachData.header}</h1>
        {insideElements}
      </>
    )
  })
  console.log("redenredData", redenredData)

  return(
    <div>
      {redenredData}
    </div>
  )
}

export default DataDisplayer;