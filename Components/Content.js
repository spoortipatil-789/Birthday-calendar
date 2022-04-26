import './Content.css'
import { useState } from 'react';
import Data from './Data';
import Card from './Card';

const Content = () => {

  const [data, setData] = useState(Data);

  const submitHandler = (event) => {
    event.preventDefault();
    setData([]);
  }
 const restoreData =()=>{
  //  const data1=data.filter((keyword)=>
  //   data.type=="lunch"
  //  )
   setData(Data);
 }
  return (
    <div>
      <div className="main">
        <div className="content">
          <h1> Today's BirthDay</h1>
          <div>
            {data.map((item, index) => (

              <Card name={item} key={index}></Card>

            ))}
          </div>
          <button type="button" onClick={submitHandler} >Clear All</button>
          <button type="button" onClick={restoreData}>Restore</button>

        </div>
      </div>


    </div>

  )
}

export default Content