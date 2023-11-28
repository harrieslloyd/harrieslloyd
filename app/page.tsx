"use client";
import { Code, Link, Card, CardHeader, CardBody, CardFooter, Image, Button, Tabs, Tab } from "@nextui-org/react"
import Typewriter from "@/components/typewriter"
import React from "react";
import WebsiteEmbed from "@/components/websiteEmbed"

export default function Home() {
	const [selectedKey, setSelectedKey] = React.useState(new Set(["text"]));

	const selectedValue = React.useMemo(
		() => Array.from(selectedKey).join(", "),
		[selectedKey]
	);
	return (
		<main className="min-h-screen min-w-screen">
			<section className="flex flex-col items-center align-items-center justify-center min-h-screen gap-4 py-8 md:py-10">
				<Code size="lg" className="inline max-w-[90%] whitespace-pre-wrap text-center">
					<Typewriter text="hey! i'm harries. i like building things." delay={90} />
				</Code>
				<div><Link href="#websites" className="font-mono" isBlock >my websites ▼</Link><Link href="#printer" className="font-mono" isBlock >my 3d printer ▼</Link></div>
			</section>
			<section id="websites" className="flex flex-wrap items-center align-items-center justify-center min-h-screen gap-10 p-8">
				<WebsiteEmbed link="https://atomicmodel.harrieslloyd.com" title="the forefathers of the atomic model" desc="a fun chemistry project" />
				<WebsiteEmbed link="https://calamityrobotics.com" title="calamity robotics" desc="a website for my robotics team" />
				<WebsiteEmbed link="https://swaggernext.harrieslloyd.com" title="swagger (in development)" desc="a website for the celtic rock band swagger (in development)" />
				<WebsiteEmbed link="https://yesno.harrieslloyd.com" title="yes/no button" desc="a cool little tool i built" />
				<WebsiteEmbed link="https://resfinder.harrieslloyd.com" title="residual finder" desc="a little tool to find residuals" />
			</section>
			<section id="printer" className="flex flex-wrap items-center align-items-center justify-center min-h-screen gap-10 p-8">
				<Card className="w-[90%] md:w-[55%]">
					<CardBody>
						<Tabs fullWidth variant="bordered">
							<Tab key="printer" title="the printer">
								<Card className="border-2 border-zinc-700">
								<Image
										alt="image of the printer"
										width={750}
										height={850}
										src="https://via.placeholder.com/750x850"
									/>
									<CardFooter>this is my 3d printer!</CardFooter>
								</Card>
							</Tab>
							<Tab key="drive" title="direct drive">
								<Card className="border-2 border-zinc-700">
								<Image
										alt="image of the printer"
										width={750}
										height={850}
										src="https://via.placeholder.com/750x850"
									/>
									<CardFooter>i installed a direct drive</CardFooter>
								</Card>
							</Tab>
							<Tab key="lights" title="lights">
								<Card className="border-2 border-zinc-700">
								<Image
										alt="image of the printer"
										width={750}
										height={850}
										src="https://via.placeholder.com/750x850"
									/>
									<CardFooter>i soldered some lights</CardFooter>
								</Card>
							</Tab>
							<Tab key="mobo" title="motherboard">
								<Card className="border-2 border-zinc-700">
								<Image
										alt="image of the printer"
										width={750}
										height={850}
										src="https://via.placeholder.com/750x850"
									/>
									<CardFooter>the new silent motherboard makes the motors silent</CardFooter>
								</Card>
							</Tab>
							<Tab key="marlin" title="custom marlin">
								<Card className="border-2 border-zinc-700">
								<Image
										alt="image of the printer"
										width={750}
										height={850}
										src="https://via.placeholder.com/750x850"
									/>
									<CardFooter>i set up and compiled my own custom firmware! </CardFooter>
								</Card>
							</Tab>
							<Tab key="octo" title="octopi">
								<Card className="border-2 border-zinc-700">
								<Image
										alt="image of the printer"
										width={750}
										height={850}
										src="https://via.placeholder.com/750x850"
									/>
									<CardFooter><div><p className="inline max-w-full whitespace-pre-wrap">octopi allows me to completly control my printer from my computer or my phone</p></div></CardFooter>
								</Card>
							</Tab>
						</Tabs>
					</CardBody>
				</Card>
			</section>
		</main>
	);
}
