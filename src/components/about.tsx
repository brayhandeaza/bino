import { design } from "@/assets"
import { CheckIcon } from "@radix-ui/react-icons"
import Image from "next/image"

const About = () => {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex flex-col items-center">
            <div className="container px-4 md:px-6">
                <div className="grid  lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                            About Bitnomia Token
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            A Token with Real Utility
                        </h2>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
                            Bitnomia is not just a token. It's a community-driven project with real-world use cases and a
                            roadmap for long-term growth. Our mission is to provide real profit to our holders over the time in every transaction.
                        </p>
                        <ul className="grid gap-4">
                            <li className="flex items-start gap-2">
                                <CheckIcon className="mt-1 h-5 w-5 text-[#f9d423]" />
                                <div>
                                    <h3 className="text-lg font-bold">Liquidity Increase</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Bitnomia Token has a built-in mechanism to add more liquidity to the exchange by a percentage of every transaction.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckIcon className="mt-1 h-5 w-5 text-[#f9d423]" />
                                <div>
                                    <h3 className="text-lg font-bold">Passive Income Rewards</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Holders of Bitnomia Token earn passive income through a percentage of every transaction, encouraging
                                        long-term investment.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckIcon className="mt-1 h-5 w-5 text-[#f9d423]" />
                                <div>
                                    <h3 className="text-lg font-bold">Community Governance</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Bitnomia Token holders have a say in the project's direction through a decentralized governance
                                        model, ensuring the community's voice is heard.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="p-3 bg-gray-200">
                        <Image
                        
                            src={design}
                            width={550}
                            height={550}
                            objectFit="cover"
                            alt="Bitnomia Token"
                            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About