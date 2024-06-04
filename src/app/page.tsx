import About from "@/components/about";
import Header from "@/components/header";
import Metrics from "@/components/metrics";
import Roadmap from "@/components/roadmap";
import Utility from "@/components/utility";

export default function Home() {
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
	);
}
