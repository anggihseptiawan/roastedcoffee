import {
	Box,
	Container,
	Heading,
	Text,
	SimpleGrid,
	Grid,
	GridItem,
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	AccordionItem,
	Button,
	Flex,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Line } from "../components/Line";

export default function Plan() {
	return (
		<>
			<Container maxW="container.lg">
				<Navbar page="plan" />
				<Box
					position="relative"
					borderRadius="md"
					overflow="hidden"
					py={["8", "14"]}
					px={["6", "10"]}
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
						<Box w={["100%", "50%"]} position="relative" zIndex="1">
							<Heading color="white" fontSize={["lg", "4xl"]} mb="4">
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
					px={["6", "14"]}
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
					<GridItem colSpan={[6, 2]} px={[4, 0]}>
						<Heading
							pb="3"
							mb="5"
							fontSize="sm"
							opacity=".5"
							borderBottom="2px solid gray"
						>
							01 &nbsp;&nbsp; Preferences
						</Heading>
						<Heading
							pb="3"
							mb="5"
							fontSize="sm"
							opacity=".5"
							borderBottom="2px solid gray"
						>
							02 &nbsp;&nbsp; Bean Type
						</Heading>
						<Heading
							pb="3"
							mb="5"
							fontSize="sm"
							opacity=".5"
							borderBottom="2px solid gray"
						>
							03 &nbsp;&nbsp; Quantity
						</Heading>
						<Heading
							pb="3"
							mb="5"
							fontSize="sm"
							opacity=".5"
							borderBottom="2px solid gray"
						>
							04 &nbsp;&nbsp; Grind Option
						</Heading>
						<Heading
							pb="3"
							mb="5"
							fontSize="sm"
							opacity=".9"
							borderBottom="2px solid gray"
						>
							05 &nbsp;&nbsp; Deliveries
						</Heading>
					</GridItem>
					<GridItem colSpan={[6, 4]}>
						<Accordion defaultIndex={[0]} allowMultiple>
							<AccordionItem border="0" mb="6">
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											<Heading fontSize={["md", "xl"]} opacity=".6">
												How do you drink your coffee ?
											</Heading>
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel py={4}>
									<SimpleGrid columns={[2, 3]} gap="5">
										<Box
											py="6"
											px="4"
											bg="gray.100"
											borderRadius="md"
										>
											<Text fontWeight="extrabold" mb="2">
												Capsule
											</Text>
											<Text>
												Compatible with Nespresso system and similar
												brewers
											</Text>
										</Box>
										<Box
											py="6"
											px="4"
											bg="teal.400"
											borderRadius="md"
											color="white"
										>
											<Text fontWeight="extrabold" mb="2">
												Filter
											</Text>
											<Text>
												For pour over or drip methods like
												Aeropress, Chemex, and V60
											</Text>
										</Box>
										<Box
											py="6"
											px="4"
											bg="gray.100"
											borderRadius="md"
										>
											<Text fontWeight="extrabold" mb="2">
												Espresso
											</Text>
											<Text>
												Dense and finely ground beans for intense,
												flavorful experience
											</Text>
										</Box>
									</SimpleGrid>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem border="0" mb="6">
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											<Heading fontSize={["md", "xl"]} opacity=".6">
												What type of coffee ?
											</Heading>
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel py={4}>
									<SimpleGrid columns={[2, 3]} gap="5">
										<Box
											py="6"
											px="4"
											bg="gray.100"
											borderRadius="md"
										>
											<Text fontWeight="extrabold" mb="2">
												Single Origin
											</Text>
											<Text>
												Distinct, high quality coffee from a
												specific family owned farm
											</Text>
										</Box>
										<Box
											py="6"
											px="4"
											bg="teal.400"
											borderRadius="md"
											color="white"
										>
											<Text fontWeight="extrabold" mb="2">
												Decaf
											</Text>
											<Text>
												Just like regular coffee, excepet the
												caffein has been removed
											</Text>
										</Box>
										<Box
											py="6"
											px="4"
											bg="gray.100"
											borderRadius="md"
										>
											<Text fontWeight="extrabold" mb="2">
												Blended
											</Text>
											<Text>
												Combination of two or three dark roasted
												beans of organic coffees
											</Text>
										</Box>
									</SimpleGrid>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem border="0" mb="6">
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											<Heading fontSize={["md", "xl"]} opacity=".6">
												How much would you like ?
											</Heading>
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel py={4}>
									<SimpleGrid columns={[2, 3]} gap="5">
										<Box
											py="6"
											px="4"
											bg="teal.400"
											borderRadius="md"
											color="white"
										>
											<Text fontWeight="extrabold" mb="2">
												250g
											</Text>
											<Text>
												Perfect for the solo drinker. Yields about
												12 delicious cups
											</Text>
										</Box>
										<Box
											py="6"
											px="4"
											bg="gray.100"
											borderRadius="md"
										>
											<Text fontWeight="extrabold" mb="2">
												500g
											</Text>
											<Text>
												Perfect oprtion for a couple, yields about
												40 delectable cups
											</Text>
										</Box>
										<Box
											py="6"
											px="4"
											bg="gray.100"
											borderRadius="md"
										>
											<Text fontWeight="extrabold" mb="2">
												1000g
											</Text>
											<Text>
												Perfect for offices and avents, yields about
												90 delightful cups
											</Text>
										</Box>
									</SimpleGrid>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem border="0" mb="6">
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											<Heading fontSize={["md", "xl"]} opacity=".6">
												Want us to grind them ?
											</Heading>
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel py={4}>
									<SimpleGrid columns={[2, 3]} gap="5">
										<Box
											py="6"
											px="4"
											bg="gray.100"
											borderRadius="md"
										>
											<Text fontWeight="extrabold" mb="2">
												Wholebean
											</Text>
											<Text>
												Best choice if you cherish the full sensory
												experience
											</Text>
										</Box>
										<Box
											py="6"
											px="4"
											bg="gray.100"
											borderRadius="md"
										>
											<Text fontWeight="extrabold" mb="2">
												Filter
											</Text>
											<Text>
												For drip or pour over coffees methods such
												as V60 or Aeropress
											</Text>
										</Box>
										<Box
											py="6"
											px="4"
											bg="teal.400"
											borderRadius="md"
											color="white"
										>
											<Text fontWeight="extrabold" mb="2">
												Cafetiere
											</Text>
											<Text>
												Course ground beans specially suited for
												french press coffee
											</Text>
										</Box>
									</SimpleGrid>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem border="0" mb="6">
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											<Heading fontSize={["md", "xl"]} opacity=".6">
												How often should we deliver ?
											</Heading>
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel py={4}>
									<SimpleGrid columns={[2, 3]} gap="5">
										<Box
											py="6"
											px="4"
											bg="gray.100"
											borderRadius="md"
										>
											<Text fontWeight="extrabold" mb="2">
												Every week
											</Text>
											<Text>
												$14.00 per shipment, includes free first
												class shipping
											</Text>
										</Box>
										<Box
											py="6"
											px="4"
											bg="teal.400"
											borderRadius="md"
											color="white"
										>
											<Text fontWeight="extrabold" mb="2">
												Every 2 weeks
											</Text>
											<Text>
												$17.25 per shipment, includes free priority
												shipping
											</Text>
										</Box>
										<Box
											py="6"
											px="4"
											bg="gray.100"
											borderRadius="md"
										>
											<Text fontWeight="extrabold" mb="2">
												Every month
											</Text>
											<Text>
												$22.50 per shipment, include free priority
												shipping
											</Text>
										</Box>
									</SimpleGrid>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>

						{/* Order summary */}
						<Box
							mt="16"
							py="4"
							px="8"
							bg="blackAlpha.800"
							mx="4"
							borderRadius="md"
						>
							<Text color="whiteAlpha.700" mb="3">
								Order summary
							</Text>
							<Heading
								fontSize="sm"
								color="white"
								mb="2"
								lineHeight="1.5"
							>
								&quot; I drink my coffee as{" "}
								<Text as="span" color="teal.400">
									Filter,
								</Text>{" "}
								with a{" "}
								<Text as="span" color="teal.400">
									Deaf
								</Text>{" "}
								type of bean,{" "}
								<Text as="span" color="teal.400">
									250g
								</Text>{" "}
								ground ala{" "}
								<Text as="span" color="teal.400">
									Cafetiere,
								</Text>{" "}
								sent to me{" "}
								<Text as="span" color="teal.400">
									every Week
								</Text>{" "}
								&quot;
							</Heading>
						</Box>
						<Flex w="full" justifyContent="flex-end" pr="4">
							<Button colorScheme="teal" mt="8">
								Create my plan!
							</Button>
						</Flex>
					</GridItem>
				</Grid>
			</Container>
			<Footer />
		</>
	);
}
