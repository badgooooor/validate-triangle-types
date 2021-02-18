import { observer } from "mobx-react";
import { data_store } from '../store/data';

const Result = observer(() => {
  
  console.log(data_store.result);
  
  return (
    <div>
      hey
      {
        data_store.result &&
        <h2>Result : {data_store.result}</h2>
      }
    </div>
  );
});

export default Result;
