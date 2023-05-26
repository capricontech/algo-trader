import { ClipboardDocumentIcon, ShareIcon } from "@heroicons/react/24/outline";
import { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import CopyBlock from "./CopyBlock";
export default function ReferralSection() {
  const [referralCode, setReferralCode] = useState<string>("HWJPKdwd");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setReferralCode(user.referral_id);
  }, []);

  const handleShare = async () => {
    const link = `https://staking.triunits.com/register?referral=${referralCode}`;
    if (!navigator.share) {
      navigator.clipboard.writeText(link);
      toast.success(
        "Share link copied to clipboard. Share it with your friends"
      );
    } else {
      await navigator.share({
        title: "Join Triunits Staking",
        text: "Use this referral code to get 18% per year interest on your investment",
        url: link,
      });
    }
  };

  return (
    <div>
      <h2 className="text-lg leading-6 font-medium text-gray-900">
        Referral Code
      </h2>
      <CopyBlock data={referralCode} />
      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 flex px-4 py-2 rounded"
          onClick={handleShare}
        >
          <ShareIcon className="h-5 w-5 text-white" />
          <p className="ml-2 text-white">Share</p>
        </button>
      </div>
      <hr className="my-4" />
    </div>
  );
}
