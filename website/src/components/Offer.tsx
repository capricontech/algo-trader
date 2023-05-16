/* This example requires Tailwind CSS v2.0+ */
export default function Offer() {
    return (
      <div className="relative bg-gray-50 pt-16 overflow-hidden sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Offer</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Get Renault Kwid on 61,000 $ Business
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              Get Renault Kwid on joining people whose net value is more than 61k $. This offer is only valid for 50 days.
              Start spreading the word.
            </p>
          </div>
          <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-40">
            <img
              className="rounded-lg shadow-xl object-cover ring-1 ring-black ring-opacity-5 w-full"
              src="https://www.motorbeam.com/wp-content/uploads/2022-Renault-Kwid-Price-1200x675.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
  