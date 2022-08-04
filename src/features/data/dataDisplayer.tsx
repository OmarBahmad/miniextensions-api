import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { DataInstance, StudentData } from "./dataAPI";
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

  const redenredData :any = data.Classes?.map((eachData: any) => {

      {console.log("datasecondmap", eachData)}
    return(
      <>
        <p>{eachData}</p>
      </>
    )
  })
  console.log("redenredData", redenredData)

  return(
    <div>
      <h1>{data.Name}</h1>
      <h2>{redenredData}</h2>
    </div>
  )
}

export default DataDisplayer;