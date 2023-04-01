/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    title: "What is staking?",
    href: "https://www.coinbase.com/learn/crypto-basics/what-is-staking",
    category: { name: "Article", href: "#" },
    description: `The reason your crypto earns rewards while staked is because the blockchain puts it to work. Cryptocurrencies that allow staking use a “consensus mechanism” called Proof of Stake, which is the way they ensure that all transactions are verified and secured without a bank or payment processor in the middle.`,
    date: "Mar 16, 2022",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.ctfassets.net/q5ulk4bp65r7/3tzJIgkHEKOaubmZIUA5HY/35a85bd3cd3595af8bcf02725a020a0c/Learn_Illustration_What_is_Staking.png?w=768&fm=png",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "What is mining?",
    href: "https://www.coinbase.com/learn/crypto-basics/what-is-mining",
    category: { name: "Article", href: "#" },
    description: `Mining is the process that Bitcoin and several other cryptocurrencies use to generate new coins and 
      verify new transactions. It involves vast, decentralized networks of computers around the world that verify and 
      secure blockchains – the virtual ledgers that document cryptocurrency transactions.`,
    date: "Mar 10, 2022",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.ctfassets.net/q5ulk4bp65r7/77UG0yFqYxqIlehK6snIEO/ae54bbb1ad0dcf55934959bc9ade74ab/Copy_of_Learn_Illustration_What_is_Mining.jpg?w=768&fm=png",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "How DeFi Protocols Generate Revenue and Why It’s Important",
    href: "https://academy.binance.com/en/articles/how-defi-protocols-generate-revenue-and-why-it-s-important",
    category: { name: "Case Study", href: "#" },
    description: `Decentralized finance (DeFi) protocols offer a range of financial services that operate via smart contracts. For example, a DeFi protocol could offer decentralized exchange services, loans, and liquidity pools, all run via smart contracts on a blockchain.`,
    date: "Feb 12, 2022",
    datetime: "2020-02-12",
    imageUrl:
      "https://public.bnbstatic.com/static/academy/uploads-original/bf34e232b1af4df9b33ee8a5b2bdb468.png",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Blogs() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Be always updated with the latest news and articles from our blog.
            We cover a wide range of topics from blockchain, crypto, and DeFi.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
