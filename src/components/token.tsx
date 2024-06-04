/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1ufVZxyICZB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Header from "./header"
import Utility from "./utility"
import About from "./about"
import Roadmap from "./roadmap"
import Metrics from "./metrics"

export function Token() {

	return (
		<div className="flex flex-col min-h-[100dvh]">
			<Header />
			<main className="flex-1">
				<Utility />
				<About />
				<Roadmap />
				<Metrics />
			</main>
		</div>
	)
}
