import React, { useEffect, useState } from "react";
import SendMoney from "./SendMoney";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { sendUserAtom } from "../store";
const User = ({ searchUser , sendAmountToUser }) => {
  const [showNewComponent, setShowNewComponent] = useState(false);
  const setAmountUser = useSetRecoilState(sendUserAtom);


  const sendMoney = (userId) => {
    setAmountUser(userId);
    setShowNewComponent(true);
  };


  return searchUser.map((user) => (
    <>
      <div key={user._id} className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-between items-center">
            {user.firstName}
            {user.lastName}
            <button
              onClick={() => sendMoney(user._id)}
              className="btn  btn-primary text-cyan-5 btn-square w-[auto] p-2  whitespace-nowrap"
            >
              Send Money
            </button>
          </div>
        </div>
        {showNewComponent && (
          <SendMoney setShowNewComponent={setShowNewComponent} sendAmountToUser={sendAmountToUser} />
        )}
      </div>
    </>
  ));
};

export default User;
