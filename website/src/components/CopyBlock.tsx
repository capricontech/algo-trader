import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

export default function CopyBlock({ data, className }: any) {
  // Copy text to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(data);
    toast.success("Copied to clipboard");
  };

  return (
    <div
      className={`bg-gray-200 p-2 mt-2 rounded text-gray-600 flex justify-between ${className}`}
    >
      <p>{data}</p>
      <button onClick={handleCopy}>
        <ClipboardDocumentIcon className="h-5 w-5 text-gray-500" />
      </button>
    </div>
  );
}
