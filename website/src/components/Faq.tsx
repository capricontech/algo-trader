/* This example requires Tailwind CSS v2.0+ */
import { classNames } from "@/lib/helpers";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How does staking work?",
    answer: `Staking is a method of verifying and securing transactions on proof of stake blockchains. It’s faster and more energy efficient than other methods such as proof of work. Plus, participants get rewarded for helping in the process. In exchange for delegating  your crypto, you get rewarded with more assets from the network. 
      To generate staking rewards on a Proof of Stake blockchain, a node has to designate a certain amount of tokens on the network as a stake (similar to a security deposit). The chance of that node being chosen to validate the next block is typically proportional to the number of tokens being staked. If the node successfully validates a block, it is 
      awarded the staking reward, similar to a miner being rewarded in Proof of Work chains. Validators lose part of their stake if they approve a 
      fraudulent transaction — this incentivizes them to only approve valid transactions.`,
  },
  {
    question: "What is the difference between staking and mining?",
    answer: `Staking is a method of verifying and securing transactions on proof of stake blockchains. It’s faster and more energy efficient than other methods such as proof of work. Plus, participants get rewarded for helping in the process. In exchange for delegating  your crypto, you get rewarded with more assets from the network.`,
  },
  {
    question: "How does ETH staking work?",
    answer:
      "ETH staking, like other staking, allows you to delegate your ETH to help secure the blockchain and earn rewards in return. However, currently ETH staking works differently in some ways. To learn more see this  help center page.",
  },
  {
    question: "What’s the difference between staking and DeFi yield?",
    answer: `Staking lets you earn rewards by helping secure a  network, while DeFi yield is the process of lending 
    your crypto to a third-party DeFi protocol to earn rewards. Both can be complicated to do on your own so we’ve made 
    it easier by handling the complex details for you. You can access staking and DeFi yield right from your Coinbase 
    app. Either opt-in or enroll in just a few clicks.`,
  },
];

export default function FAQ() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
