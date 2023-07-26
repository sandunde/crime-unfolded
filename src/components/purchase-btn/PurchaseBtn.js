import React from "react";
import Button from "@mui/material/Button";
import { BiMoney } from "react-icons/bi";

const PurchaseBtn = () => {
  return (
    <div>
      <Button
        variant="outlined"
        style={{
          marginTop: 20,
          borderColor: "#FFD700",
          color: "#FFD700",
          height: 50,
          width: 170,
        }}
      >
        Buy - රු5000.00
        <span style={{ color: "red", marginTop: 4, marginLeft: 3 }}>
          <BiMoney />
        </span>
      </Button>
    </div>
  );
};

export default PurchaseBtn;
