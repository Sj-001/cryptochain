import React from "react";

const Transaction = ({ transaction }) => {
  const { input, outputMap } = transaction;
  const recipients = Object.keys(outputMap);

  return (
    <div
      style={{ backgroundColor: "black", color: "white", fontSize: "120%" }}
      className="Transaction"
    >
      <div>
        From: {`${input.address.substring(0, 20)}...`} | Balance: {input.amount}
      </div>
      {recipients.map((recipient) => (
        <div key={recipient}>
          To: {`${recipient.substring(0, 20)}...`} | Sent:{" "}
          {outputMap[recipient]}
        </div>
      ))}
    </div>
  );
};

export default Transaction;
