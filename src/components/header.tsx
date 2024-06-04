import { logo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center position-sticky top-0 z-10">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
                <Image src={logo} alt="Token Logo" className="h-9 w-9 rounded-full" />
                <span className="ml-2 text-lg font-bold">Bitnomia</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link target='_blank' href="https://etherscan.io/address/0xd804b50a4147f0fcb982e98663621736c1cdea80" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Explorer
                </Link>
                <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    About
                </Link>
                <Link href="#roadmap" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Roadmap
                </Link>
                <Link href="#metrics" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Metrics
                </Link>
            </nav>
        </header>
    )
}

export default Header