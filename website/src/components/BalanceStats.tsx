/* This example requires Tailwind CSS v2.0+ */
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import {
  MapIcon,
  CurrencyRupeeIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { classNames } from "@/lib/helpers";
import { useEffect, useState } from "react";
import { getBalance } from "@/lib/api";

export default function BalanceStats() {
  const [stats, setStats] = useState([
    {
      id: 1,
      name: "Current Balance",
      stat: "0",
      icon: CurrencyRupeeIcon,
      change: "0",
      changeType: "increase",
      button: "Withdraw",
    },
    {
      id: 2,
      name: "Total Rewards Earned",
      stat: "0",
      icon: MapIcon,
      change: "0%",
      changeType: "increase",
      button: "View History",
    },
    {
      id: 3,
      name: "Total Money Invested",
      stat: "0",
      icon: WalletIcon,
      change: "0%",
      changeType: "decrease",
      button: "Invest More",
    },
  ]);

  useEffect(() => {
    getBalance()
      .then((data) => {
        setStats((prev) => {
          let new_data = [...prev];
          new_data.forEach((item) => {
            switch (item.id) {
              case 1:
                item.stat = data.balance;
                break;
              case 2:
                item.stat = data.pending_deposit;
                break;
              case 3:
                item.stat = data.pending_withdrawal;
                break;
            }
          });

          return new_data;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Last 30 days
      </h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-indigo-500 rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {item.stat} $
              </p>
              <p
                className={classNames(
                  item.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600",
                  "ml-2 flex items-baseline text-sm font-semibold"
                )}
              >
                {item.changeType === "increase" ? (
                  <ArrowUpIcon
                    className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">
                  {item.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                  by
                </span>
                {item.change}
              </p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {item.button}
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
