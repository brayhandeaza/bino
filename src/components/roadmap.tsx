import React from 'react'

const Roadmap = () => {
    return (
        <section id="roadmap" className="w-full py-12 md:py-24 lg:py-32">
            <div className="px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Roadmap</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Path to Success</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Bitnomia Token has an ambitious roadmap that will take us to new heights. Check out our planned milestones
                            and see how we&apos;re building the future of desentralized financial tokens.
                        </p>
                    </div>
                </div>
                <div style={{ width: "80%" }} className="mx-auto grid items-start gap-6 py-12 lg:grid-cols-4 lg:gap-12">
                    <div className="grid gap-4">
                        <div style={{ width: 300 }} className="bg-gray-100 p-4 w-100 rounded-lg">
                            <h3 className="text-lg font-bold">Phase 1</h3>
                            <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                                <li>✅ Token Launch</li>
                                <li>✅ Listing on DEX</li>
                                <li>✅ Community Building</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div style={{ width: 300 }} className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-lg font-bold">Phase 2</h3>
                            <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                                <li>🔜 Interoperability</li>
                                <li>🔜 Global Expansion</li>
                                <li>🔜 Ecosystem Domination</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div style={{ width: 300 }} className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-lg font-bold">Phase 3</h3>
                            <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                                <li>🔜 Governance DAO</li>
                                <li>🔜 Community Building</li>
                                <li>🔜 Lending and Borrowing</li>
                            </ul>
                        </div>

                    </div>

                    <div className="grid gap-4">
                        <div style={{ width: 300 }} className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-lg font-bold">Phase 4</h3>
                            <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                                <li>🔜 Decentralized Financial System</li>
                                <li>🔜 Bitnomia Wallet Integration</li>
                                <li>🔜 More Features</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Roadmap