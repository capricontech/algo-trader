import { register } from "@/lib/api";
import { classNames, isValidEmail } from "@/lib/helpers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function RegisterScreen() {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    referrer: "",
    manager: "",
  });
  const [referEditable, setReferEditable] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Access the router's `query` object and set referral code
    const { referral, email } = router.query;

    if (email) {
      setData({
        ...data,
        email: email as string,
      });
    }

    if (referral) {
      setData({
        ...data,
        referrer: referral as string,
        email: email as string,
      });
      setReferEditable(false);
    }
  }, [router]);

  const handleRegister = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    register(data)
      .then((res) => {
        router.push("/login");
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="h-screen flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <a href="/">
                <img
                  className="h-12 w-auto"
                  src="https://triunits.com/tri.png"
                  alt="Workflow"
                />
              </a>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Register with Us
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                <b>Note:</b> You need a referral code to register with us.
              </p>
            </div>
            <div className="mt-6">
              <div>
                <form action="" method="POST" className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={data.name}
                        onChange={(e) =>
                          setData({ ...data, name: e.target.value })
                        }
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone_number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="phone_number"
                        name="phone_number"
                        type="tel"
                        autoComplete="phone_number"
                        required
                        value={data.phone_number}
                        onChange={(e) =>
                          setData({ ...data, phone_number: e.target.value })
                        }
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={data.email}
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    {isValidEmail(data.email) ? (
                      <div className="text-green-500 text-xs mt-1">
                        Valid Email
                      </div>
                    ) : (
                      <div className="text-red-500 text-xs mt-1">
                        Invalid Email
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={data.password}
                        onChange={(e) =>
                          setData({ ...data, password: e.target.value })
                        }
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="referral"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Referral Code
                    </label>
                    <div className="mt-1">
                      <input
                        id="referral"
                        name="referral"
                        type="text"
                        required
                        value={data.referrer}
                        disabled={!referEditable}
                        onChange={(e) =>
                          setData({ ...data, referrer: e.target.value })
                        }
                        className={classNames(
                          "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                          referEditable ? "" : "bg-gray-200"
                        )}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="manager"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Manager Code (Optional)
                    </label>
                    <div className="mt-1">
                      <input
                        id="manager"
                        name="manager"
                        type="text"
                        value={data.manager}
                        onChange={(e) =>
                          setData({ ...data, manager: e.target.value })
                        }
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row-reverse items-center justify-between">
                    <div className="text-sm">
                      <a
                        href="/login"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Already have a account? Sign in
                      </a>
                    </div>
                  </div>

                  <div>
                    {loading ? (
                      <div>Loading...</div>
                    ) : (
                      <button
                        type="submit"
                        onClick={handleRegister}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Register
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/screenshot-1.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
