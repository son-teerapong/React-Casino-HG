import React, {useState} from "react";
import "./Contents.css";
import { Alert } from 'reactstrap';

export default function Contents() {
    const[btn, setBtn] = useState('')
    const[hostName, setHostName] = useState('')
    const[random, setRandom] = useState('-')
    const[totalResult, setTotalResult] = useState(100)
    const [visible, setVisible] = useState(false);

 

    const btnNumber5 =()=>{
        setBtn(5)
    }
    const btnNumber10 =()=>{
        setBtn(10)
    }
    const btnNumber20 =()=>{
        setBtn(20)
    }
    const btnNumber50 =()=>{
        setBtn(50)
      
        
    }

    const hostNameH =(e)=>{
        setHostName('หัว')
    }
    const hostNameG =(e)=>{
        setHostName('ก้อย')
    }
    const randomNumber =()=>{
        let result = Math.floor(Math.random() * 1000)
        console.log(result)
        const answer = result > 499?"หัว":"ก้อย"
        setRandom(answer)
        
        if(hostName === answer){setTotalResult(Number(totalResult+btn));setVisible(true)}
        else{setTotalResult(Number(totalResult-btn));setVisible(false)}
        

        if(totalResult <= 0){setTotalResult(0)}
        setBtn('')
        setHostName('')
   
    }
    const onDismiss = () => setVisible(false);
    
   
  return (
    <div className="container">
        <Alert color="info" isOpen={visible} toggle={onDismiss}>
        <h5>ยินดีด้วยคุณได้รับเงินทั้งหมด {totalResult} บาท</h5>
       </Alert>
        <div className="select">
        <h4>จำนวนเงินที่เล่น: {btn}</h4>
        <button disabled={totalResult < 5 ? true : false} onClick={btnNumber5}>5</button>
        <button disabled={totalResult < 10 ? true : false} onClick={btnNumber10}>10</button>
        <button disabled={totalResult < 20 ? true : false} onClick={btnNumber20}>20</button>
        <button disabled={totalResult < 50 ? true : false} onClick={btnNumber50}>50</button>
      </div>
      <div className="hostname">
        <h4>เลือกเหรียญที่จะเล่น: {hostName}</h4>
      </div>
      <div className="coin">
        <button className="one" onClick={hostNameH}>
          <img src="/1.png" alt="" />
        </button>
        <button className="two" onClick={hostNameG}>
          <img src="/2.png" alt="" />
        </button>
      </div>
      <div className="random">
          <button disabled={!hostName ? true : false} onClick={randomNumber}>เริ่มสุ่ม</button>
      </div>
      <div className="result">
        <h4>ผลลัพธ์</h4>
        <p>{random}</p>
      </div>
      
      <div className="total">
        <h4>จำนวนเงินคงเหลือ</h4>
        <p >{totalResult}</p>
       
      </div>
    </div>
  );
}
