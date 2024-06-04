import { logo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Utility = () => {
    return (
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#f9d423] to-[#ff6b6b] items-center">
            <div className="px-4 md:px-6 text-center">
                <div className="space-y-4">
                    <Image src={logo} width={80} height={80} alt="Token Logo" className="mx-auto rounded-full" />
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Bitnomia Token</h1>
                    <p className="max-w-[600px] mx-auto text-gray-700 md:text-xl dark:text-gray-900">
                        A token that&apos;s taking the crypto world by storm. Join the Bitnomia Army and ride the wave up to the
                        infinite and beyond!
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50  dark:bg-gray-950 dark:focus-visible:ring-gray-300"
                            prefetch={false}
                        >
                            Buy Bitnomia(BINO)
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300"
                            prefetch={false}
                        >
                            CoinMarketCap
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Utility