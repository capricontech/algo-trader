import { ClipboardDocumentIcon, ShareIcon } from "@heroicons/react/24/outline";
import { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function ReferralSection() {
  const [referralCode, setReferralCode] = useState<string>("HWJPKdwd");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setReferralCode(user.referral_id);
  }, []);

  // Copy text to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    toast.success("Copied to clipboard");
  };

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
      <div className="bg-gray-200 p-2 mt-2 rounded text-gray-600 flex justify-between">
        <p>{referralCode}</p>
        <button onClick={handleCopy}>
          <ClipboardDocumentIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>
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
