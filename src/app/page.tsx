import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
            <div className="flex flex-col text-center gap-y-3 items-center justify-center h-full text-3xl font-semibold">
                The Perfect Next 13 Template
                <Link
                    href="https://github.com/agusgarcia3007"
                    className="w-12 h-12 opacity-80 cursor-pointer hover:drop-shadow-3xl hover:-translate-y-2 transition-all duration-150 ease-in-out hover:opacity-100"
                >
                    <Image src="/github.svg" alt="github icon" width={100} height={100} />
                </Link>
            </div>
        </main>
    )
}
