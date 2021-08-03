import {
	Box,
	Container,
	Heading,
	Text,
	SimpleGrid,
	Grid,
	GridItem,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Line } from "../components/Line";

export default function Plan() {
	return (
		<>
			<Container maxW="container.lg">
				<Navbar />
				<Box
					position="relative"
					borderRadius="md"
					overflow="hidden"
					py="24"
					px="16"
					_after={{
						content: '""',
						display: "block",
						position: "absolute",
						inset: 0,
						width: "100%",
						background: "linear-gradient(to right, #000, rgba(0,0,0,0))",
					}}
				>
					<Box
						_after={{
							content: '""',
							position: "absolute",
							inset: 0,
							zIndex: -1,
							background: "url('/assets/images/coffee-thumbnail.jpg')",
							backgroundSize: "cover",
							display: "block",
							width: "100%",
						}}
					>
						<Box w={["90%", "50%"]} position="relative" zIndex="1">
							<Heading color="white" mb="4">
								Create a plan
							</Heading>
							<Text color="whiteAlpha.700">
								Build a subscription plan that best fits for your needs.
								We offer an assortment of the best artisan coffees from
								around the globe delivered fresh to your door.
							</Text>
						</Box>
					</Box>
				</Box>

				<Box
					background="blackAlpha.800"
					px="14"
					pt="4"
					pb="14"
					my="20"
					borderRadius="md"
					color="white"
				>
					<Line type="plan" />

					<Box>
						<SimpleGrid columns={[1, 2, 3]} spacing="10">
							<Box>
								<Heading
									fontSize="4xl"
									mb={["2", "10"]}
									color="red.200"
								>
									01
								</Heading>
								<Heading mb={["2", "5"]} fontSize="lg" opacity="0.8">
									Pick your coffee
								</Heading>
								<Text>
									Select from our evolving range fo artisan coffees.
									Our beans are ethically sourced and we pay fair price
									of them. There are new coffees in all profiles every
									month for you to try out.
								</Text>
							</Box>
							<Box>
								<Heading
									fontSize="4xl"
									mb={["2", "10"]}
									color="red.200"
								>
									02
								</Heading>
								<Heading mb={["2", "5"]} fontSize="lg" opacity="0.8">
									Choose the frequency
								</Heading>
								<Text>
									Customize your order frequency, quantity, even your
									roast style and grind type. Pause, skip or cancel
									your subscription with no commitment through our
									pipeline portal.
								</Text>
							</Box>
							<Box>
								<Heading
									fontSize="4xl"
									mb={["2", "10"]}
									color="red.200"
								>
									03
								</Heading>
								<Heading mb={["2", "5"]} fontSize="lg" opacity="0.8">
									Receive and enjoy!
								</Heading>
								<Text>
									We ship your package within 48 ours, freshly roasted.
									Sit back and enjoy award winning world class coffees
									curated to provide a distinct tasting experience
								</Text>
							</Box>
						</SimpleGrid>
					</Box>
				</Box>

				<Grid templateColumns="repeat(6, 1fr)" gap="10" my="20">
					<GridItem colSpan={2}>
						<Text pb="2" mb="4" borderBottom="2px solid gray">
							01 &nbsp;&nbsp; Preferences
						</Text>
						<Text pb="2" mb="4" borderBottom="2px solid gray">
							02 &nbsp;&nbsp; Bean Type
						</Text>
						<Text pb="2" mb="4" borderBottom="2px solid gray">
							03 &nbsp;&nbsp; Quantity
						</Text>
						<Text pb="2" mb="4" borderBottom="2px solid gray">
							04 &nbsp;&nbsp; Grind Option
						</Text>
						<Text pb="2" mb="4" borderBottom="2px solid gray">
							05 &nbsp;&nbsp; Deliveries
						</Text>
					</GridItem>
					<GridItem colSpan={4}>
						<Heading fontSize="2xl">
							How do you drink your coffee ?
						</Heading>
					</GridItem>
				</Grid>
			</Container>
			<Footer />
		</>
	);
}
