import DashboardLayout from "@/components/DashboardLayout";
import { getTree } from "@/lib/api";
import { useEffect, useState } from "react";

export default function TeamPage() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    getTree().then((res) => {
      setData(res);
    });
  }, []);

  if (!data) {
    return (
      <DashboardLayout>
        <h1 className="text-2xl font-bold mb-4">Team</h1>
        <p>Loading...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Team</h1>
      <p>Account Type: {data.access_type}</p>
      <div className="grid grid-cols-2 gap-8 mt-5">
        <div className="flex flex-row items-center shadow-lg rounded-lg p-4">
          <img
            src={`https://ui-avatars.com/api/?background=random&name=${data.manager.username}`}
            className="w-14 h-14 rounded-full"
          />
          <div className="ml-2">
            <p className="text-xs">Your Manager:</p>
            <p className="font-bold text-xl capitalize">
              {data.manager.username}
            </p>
            <p className="text-sm text-gray-500">{data.manager.email}</p>
          </div>
        </div>
        <div className="flex flex-row items-center shadow-lg rounded-lg p-4">
          <img
            src={`https://ui-avatars.com/api/?background=random&name=${data.referrer.username}`}
            className="w-14 h-14 rounded-full"
          />
          <div className="ml-2">
            <p className="text-xs">Your Referrer:</p>
            <p className="font-bold text-xl capitalize">
              {data.referrer.username}
            </p>
            <p className="text-sm text-gray-500">{data.referrer.email}</p>
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="text-2xl font-bold mb-4">Your Referrals</h1>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Username</th>
                <th className="text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {data.children.map((child: any) => (
                <tr key={child.id}>
                  <td className="text-left">{child.username}</td>
                  <td className="text-left">{child.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
