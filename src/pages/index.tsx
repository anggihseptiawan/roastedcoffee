import {
	Box,
	Button,
	Container,
	Heading,
	Image,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Line } from "../components/Line";
import { Navbar } from "../components/Navbar";

export default function Home() {
	return (
		<>
			<Head>
				<title>roastedcoffee</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<Container maxW="container.lg">
					<Navbar page="home" />
					<Box
						id="home"
						background="url('/assets/images/thumbnail.jpg')"
						backgroundSize="cover"
						py={[10, 20]}
						px={[5, 10]}
						borderRadius="md"
						overflow="hidden"
						position="relative"
						_after={{
							content: '""',
							position: "absolute",
							inset: 0,
							background:
								"linear-gradient(to right, #000000d4, #00000040)",
						}}
					>
						<Box
							maxW={{ sm: "100%", md: "50%" }}
							position="relative"
							zIndex="2"
						>
							<Heading as="h3" mb="4" color="white">
								Great coffee made simple
							</Heading>
							<Text color="whiteAlpha.800" fontWeight="medium">
								Start your mornings with the worlds best coffees. Try
								our expertly curated artisan coffees from ours best
								roasters delivered directly to your door, at your
								schedule.
							</Text>
							<Link href="/plan" passHref>
								<Button
									as="a"
									background="teal.500"
									color="white"
									_hover={{ bg: "teal.600" }}
									_active={{ bg: "teal.600" }}
									mt="8"
									px="6"
								>
									Create your plan
								</Button>
							</Link>
						</Box>
					</Box>
				</Container>
			</header>

			<main>
				<Container maxW="container.lg" py={["10", "20"]}>
					{/* Collection Section */}
					<Heading
						fontSize={["4xl", "7xl"]}
						align="center"
						position="relative"
						opacity=".05"
						bottom={["-14px", "-20px"]}
						zIndex="-1"
					>
						our collection
					</Heading>
					<SimpleGrid columns={[2, 3, 4]} spacing={[5, 10]}>
						<Box>
							<Image
								borderRadius="md"
								src="/assets/images/sample 1.jpg"
								alt="coffee 1"
							/>
							<Text
								fontWeight="bold"
								align="center"
								mt="4"
								mb="3"
								fontSize="18"
							>
								Gran expresso
							</Text>
							<Text align="center">
								Light and flavorful blend with cocoa and black paper for
								an intense experinece
							</Text>
						</Box>
						<Box>
							<Image
								borderRadius="md"
								src="/assets/images/sample 2.jpg"
								alt="coffee 2"
							/>
							<Text
								fontWeight="bold"
								align="center"
								mt="4"
								mb="3"
								fontSize="18"
							>
								Planalto
							</Text>
							<Text align="center">
								Brazilian dark roast with rich and velvety body, and
								hints of fruit and nuts
							</Text>
						</Box>
						<Box>
							<Image
								borderRadius="md"
								src="/assets/images/sample 3.jpg"
								maxH="163.5px"
								w="100%"
								objectFit="cover"
								alt="coffee 3"
							/>
							<Text
								fontWeight="bold"
								align="center"
								mt="4"
								mb="3"
								fontSize="18"
							>
								Piccolo
							</Text>
							<Text align="center">
								Mild and smooth blend featuring notes of toasted almond
								and dried cherry
							</Text>
						</Box>
						<Box>
							<Image
								borderRadius="md"
								src="/assets/images/sample 4.jpg"
								alt="coffee 4"
							/>
							<Text
								fontWeight="bold"
								align="center"
								mt="4"
								mb="3"
								fontSize="18"
							>
								Danche
							</Text>
							<Text align="center">
								Ethipiant hand-harvested blend densely packed with
								vibrant fruit notes
							</Text>
						</Box>
					</SimpleGrid>

					{/* Section Collection */}
					<Box
						id="why"
						mt={["20", "40"]}
						pt={["10", "20"]}
						pb={["28", "36"]}
						d="flex"
						justifyContent="center"
						background="blackAlpha.800"
						borderRadius="md"
					>
						<Box w={["90%", "50%"]}>
							<Heading align="center" color="white" mb="4">
								Why choose us ?
							</Heading>
							<Text align="center" color="whiteAlpha.800">
								A large part of our rule is choosing which particular
								coffees will be featured in our range. This means
								working closely with the best coffee growers to give you
								a more impactful experience on every level
							</Text>
						</Box>
					</Box>
					<SimpleGrid columns={[1, 2, 3]} spacing="5" px="10" mt="-95px">
						<Box background="teal.500" borderRadius="5" px="5" py="8">
							<Image
								src="/assets/images/coffeebeans.png"
								alt="coffee beans"
								d="block"
								mx="auto"
								mb="6"
								filter="invert(1)"
								height="40px"
							/>
							<Heading
								as="h5"
								color="white"
								fontSize="lg"
								textAlign="center"
								mb="4"
							>
								Best Quality
							</Heading>
							<Text color="whiteAlpha.800" align="center">
								Discover an endless variety of the world&apos;s best
								artisan coffee from each of our roasters
							</Text>
						</Box>
						<Box background="teal.500" borderRadius="5" px="5" py="8">
							<Image
								src="/assets/images/gift.png"
								alt="benefits"
								d="block"
								mx="auto"
								mb="6"
								filter="invert(1)"
								height="40px"
							/>
							<Heading
								as="h5"
								color="white"
								fontSize="lg"
								textAlign="center"
								mb="4"
							>
								Exclusive benefits
							</Heading>
							<Text color="whiteAlpha.800" align="center">
								Special offers and swag when you subscribe, including
								30% of your first shipment.
							</Text>
						</Box>
						<Box background="teal.500" borderRadius="5" px="5" py="8">
							<Image
								src="/assets/images/shipping.png"
								alt="free shipping"
								d="block"
								mx="auto"
								mb="6"
								filter="invert(1)"
								height="40px"
							/>
							<Heading
								as="h5"
								color="white"
								fontSize="lg"
								textAlign="center"
								mb="4"
							>
								Free shipping
							</Heading>
							<Text color="whiteAlpha.800" align="center">
								We cover the cost and coffee is delivered fast. Peak
								freshness guaranted.
							</Text>
						</Box>
					</SimpleGrid>

					{/* Section how it works */}
					<Box
						id="plan"
						mt={["20", "40"]}
						mb="20"
						style={{ scrollPaddingTop: "10px" }}
					>
						<Heading as="h5" fontSize="md" opacity="0.6">
							How it works
						</Heading>

						<Line type="full" />

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
										Our beans are ethically sourced and we pay fair
										price of them. There are new coffees in all
										profiles every month for you to try out.
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
										Customize your order frequency, quantity, even
										your roast style and grind type. Pause, skip or
										cancel your subscription with no commitment
										through our pipeline portal.
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
										We ship your package within 48 ours, freshly
										roasted. Sit back and enjoy award winning world
										class coffees curated to provide a distinct
										tasting experience
									</Text>
								</Box>
							</SimpleGrid>
							<Link href="/plan" passHref>
								<Button
									as="a"
									background="teal.500"
									color="white"
									_hover={{ bg: "teal.600" }}
									_active={{ bg: "teal.600" }}
									mt={["8", "12"]}
									px="6"
								>
									Create your plan
								</Button>
							</Link>
						</Box>
					</Box>
				</Container>
			</main>

			<Footer />
		</>
	);
}
