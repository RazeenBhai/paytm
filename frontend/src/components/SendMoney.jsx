import React from "react";
import { useRecoilState } from "recoil";
import { sendAmountAtom } from "../store";

const SendMoney = ({setShowNewComponent, sendAmountToUser}) => {

    const dontShow = () => {
        setShowNewComponent(false)
    }

    const [sendAmount, setSendAmount] = useRecoilState(sendAmountAtom);


  return (
    <div className="card fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Sending Money</h2>
        <p>Are you sure you want to send the Money?</p>
        <input type="number" value={sendAmount} onChange={(e)=>{setSendAmount(e.target.value)}} placeholder="1000" className="input input-bordered w-full max-w-xs" />
        <div className="card-actions justify-end">
          <button onClick={dontShow} className="btn btn-ghost">Deny</button>
          <button onClick={sendAmountToUser} className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
