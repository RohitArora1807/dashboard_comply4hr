import React from "react";
import Lic_Reg_Card from "./Lic_Reg_Card";
import Payroll_Comp_Chk_Card from "./Payroll_Comp_Chk_Card";
import Summary_Cards from "./Summary_Cards";
import Payments_Delay_Card from "./Payments_Delay_Card";
import Return_Delay_Card from "./Return_Delay_Card";
import Vendor_Compliance_Audit_Card from "./Vendor_Compliance_Audit_Card";
import Upcoming_Card from "./Upcoming_Card";
import Inspection_Return_Card from "./Inspection_Return_Card";
import Calender_Card from "./Calender_Card";

const Board = () => {
  return (
    <div className="w-full   pt-4 tablet:pl-14 ">
      <div className="flex flex-col laptop:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <div className="flex-1">
          {/* Row of 5 summary cards */}
          <Summary_Cards />

          {/* Flex container for the tables */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-2">
            {/* License and Registration table */}
            <Lic_Reg_Card />

            {/* Payroll compliance table */}
            <Payroll_Comp_Chk_Card />
          </div>

          {/* Flex container for Payments Delay, Return Delay, and Vendor Compliance Audits */}
          <div className="flex flex-col md:flex-row lg:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-2 ">
            <div className="flex-1 flex flex-col space-y-2 ">
              {/* Payments Delay (Slippage Metrics) */}
              <Payments_Delay_Card />

              {/* Return Delay summary card */}
              <Return_Delay_Card />
            </div>

            {/* Vendor Compliance Audits card */}
            <Vendor_Compliance_Audit_Card />
          </div>
        </div>

    {/* Right sidebar */}
    <div className="w-full laptop:w-1/4 flex flex-col space-y-2 bg-white shadow-md rounded-lg p-2">
          {/* Upcoming events card */}
          <Upcoming_Card />

          {/* Inspection and return card */}
          <Inspection_Return_Card />

          {/* Calendar card */}
          <Calender_Card />
        </div>
      </div>
    </div>
  );
};

export default Board;
