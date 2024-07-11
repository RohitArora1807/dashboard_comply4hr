import React from "react";
import LIC_REG_CARD from "./LIC_REG_CARD";
import PAYROLL_COMP_CHK_CARD from "./PAYROLL_COMP_CHK_CARD";
import SUMMARY_CARDS from "./SUMMARY_CARDS";
import PAYMENTS_DELAY_CARD from "./PAYMENTS_DELAY_CARD";
import RETURN_DELAY_CARD from "./RETURN_DELAY_CARD";
import VENDOR_COMPLIANCE_AUDIT_CARD from "./VENDOR_COMPLIANCE_AUDIT_CARD";
import UPCOMING_CARD from "./UPCOMING_CARD";
import INSPECTION_RETURN_CARD from "./INSPECTION_RETURN_CARD";
import CALENDER_CARD from "./CALENDER_CARD";

const Board = () => {
  return (
    <div className="w-full   pt-4 tablet:pl-14 ">
      <div className="flex flex-col laptop:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <div className="flex-1">
          {/* Row of 5 summary cards */}
          <SUMMARY_CARDS />

          {/* Flex container for the tables */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-2">
            {/* License and Registration table */}
            <LIC_REG_CARD />

            {/* Payroll compliance table */}
            <PAYROLL_COMP_CHK_CARD />
          </div>

          {/* Flex container for Payments Delay, Return Delay, and Vendor Compliance Audits */}
          <div className="flex flex-col md:flex-row lg:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-2 ">
            <div className="flex-1 flex flex-col space-y-2 ">
              {/* Payments Delay (Slippage Metrics) */}
              <PAYMENTS_DELAY_CARD />

              {/* Return Delay summary card */}
              <RETURN_DELAY_CARD />
            </div>

            {/* Vendor Compliance Audits card */}
            <VENDOR_COMPLIANCE_AUDIT_CARD />
          </div>
        </div>

    {/* Right sidebar */}
    <div className="w-full laptop:w-1/4 flex flex-col space-y-2 bg-white shadow-md rounded-lg p-2">
          {/* Upcoming events card */}
          <UPCOMING_CARD />

          {/* Inspection and return card */}
          <INSPECTION_RETURN_CARD />

          {/* Calendar card */}
          <CALENDER_CARD />
        </div>
      </div>
    </div>
  );
};

export default Board;
