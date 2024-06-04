import React from 'react'

const Metrics = () => {
    return (
        <section id="metrics" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                            Token Metrics
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Bitnomia Token by the Numbers
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Check out the key metrics and details about the Bitnomia Token supply, distribution, and tokenomics.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="text-xl font-bold">Token Details</h3>
                        <div className="mt-4 grid gap-4 text-gray-500 dark:text-gray-400">
                            <div className="flex justify-between">
                                <span>Token Name:</span>
                                <span>Bitnomia</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Token Symbol:</span>
                                <span>BINO</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Token Type:</span>
                                <span>ERC-20</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Total Supply:</span>
                                <span>1,000,000,000 BINO</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Circulating Supply:</span>
                                <span>750,000,000 BINO</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Liquility Rate:</span>
                                <span>2% per transaction</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Rewards:</span>
                                <span>5% per transaction</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="text-xl font-bold">How to Buy</h3>
                        <div className="mt-4 grid gap-4 text-gray-500 dark:text-gray-400">
                            <p>Bitnomia Token is currently available for purchase on the following decentralized exchanges:</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Metrics