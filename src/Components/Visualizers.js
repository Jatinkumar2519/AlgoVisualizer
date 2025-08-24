import { useState } from "react";

export default function Visualizers() {
  const [arr,setarr] = useState([5, 2, 6, 4, 1, 3]);
  let prev = [...arr];
  const sort = () => {
    let newarr = [...arr];
    let flag = true;
    for(let i = 0;i < newarr.length && flag;i++){
      for(let j = 0;j + 1 < newarr.length && flag;j++){
        if(newarr[j] > newarr[j + 1]){
          let temp = newarr[j];
          newarr[j] = newarr[j + 1];
          newarr[j + 1] = temp;
          setarr(newarr);
          flag = false;
        }
      }
    }
  }
  const reset = () => {
    setarr(prev);
  }
  const change = () =>{
    prev = [...arr];
  }
  const show = () =>{
    return (
    <div className="container" style={{marginTop:'30px'}}>
      <div className="d-flex align-items-end justify-content-center gap-2">
        {arr.map((val, indx) => (
          <div
            className="bg-success text-white d-flex align-items-end justify-content-center rounded-top"
            key={indx}
            style={{ background: 'black', width: '50px', height: `${val * 20}px` }}
          >{val}</div>
        ))}
      </div>
    </div>
    );
  };
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Comming Soon....</h1>
        <div style={{ marginLeft: '290px', background: 'black', width: '500px', height: '3px', borderRadius: '2px' }}></div>
        Working.. on it
      </div>
      <img
        src="/visual.gif"
        alt="working..."
        className="img-fluid rounded shadow"
        style={{ width: '350px', height: '250px', marginTop: '20px', marginLeft: '390px' }}
      />
      {show()}
      <div className="text-center mt-3" style={{marginBottom:'50px'}}>
        <button className="btn btn-primary" onClick={sort}>
          next
        </button>
        <button className="btn btn-primary" style={{marginLeft:'5px'}} onClick={reset}>
          reset
        </button>
      </div>
    </>
  )
}
