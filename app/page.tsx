"use client";

import Hjem from "@/components/hjem";
import OmOss from "@/components/omoss";
import SectionDivider from "@/components/section-divider";
import Tjenester from "@/components/tjenester";
import Priser from "@/components/priser";
import Kontakt from "@/components/kontakt";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between ml-10 mr-10 sm:ml-14 sm:mr-14">
			<Hjem />
			<SectionDivider />
			<OmOss />
			<SectionDivider />
			<Tjenester />
			<SectionDivider />
			<Priser />
			<SectionDivider />
			<Kontakt />
		</main>
	);
}
