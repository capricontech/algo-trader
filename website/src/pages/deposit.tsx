import CopyBlock from "@/components/CopyBlock";
import DashboardLayout from "@/components/DashboardLayout";

export default function DepositPage() {
  return (
    <DashboardLayout>
      <div className="my-4">
        <div className="flex pb-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png"
            className="w-12 h-8 p-2"
          />
          <h1 className="text-lg font-bold">UPI Deposit ID</h1>
        </div>
        <CopyBlock data="triunits@ybl" />
      </div>
      <hr />
      <div className="my-4">
        <div className="flex pb-2">
          <img
            src="https://loanscanada.ca/wp-content/uploads/2020/06/Canada%E2%80%99s-Five-Major-Banks-1.png"
            className="h-8 mr-2"
          />
          <h1 className="text-lg font-bold">Bank Account Details</h1>
        </div>
        <CopyBlock data={"Account Name: TRIUNITS INFOTECH PRIVATE LIMITED"} />
        <CopyBlock data={"Account No: 77900200000167"} />
        <CopyBlock data={"IFSC CODE- BARB0VJMBAR"} />
        <CopyBlock data={"Branch: BARASAT 24 PGS (N)-700124"} />
      </div>
      <hr />
      <div className="my-4">
        <div className="flex pb-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
            className="h-8 mr-2"
          />
          <h1 className="text-lg font-bold">Crypto Details</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full">
          <p className="mr-2">USDT - Tether (ERC20): </p>
          <CopyBlock className="flex-grow" data={"0x2363132429ae5bde3b858885be6c08dbc116bb6f"} />
        </div>
      </div>
      <hr />
    </DashboardLayout>
  );
}
