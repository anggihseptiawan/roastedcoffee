import {
	Box,
	Button,
	Container,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Heading,
	HStack,
	Image,
	Link,
	SimpleGrid,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRef } from "react";

export default function Home() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef(null);

	return (
		<>
			<Head>
				<title>roastedcoffee</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<Container maxW="container.lg">
					<Flex justifyContent="space-between" py="7">
						<Heading size="sm">roastedcoffee</Heading>
						<HStack spacing="15px" d={["none", "flex"]}>
							<Link fontSize="12px" fontWeight="medium" color="gray.500">
								HOME
							</Link>
							<Link fontSize="12px" fontWeight="medium" color="gray.500">
								ABOUT US
							</Link>
							<Link fontSize="12px" fontWeight="medium" color="gray.500">
								CREATE YOUR PLAN
							</Link>
						</HStack>
						<Button
							ref={btnRef}
							colorScheme="teal"
							onClick={onOpen}
							d={["block", "none"]}
							size="sm"
						>
							menu
						</Button>
					</Flex>
					<Box
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
							<Button
								background="teal.500"
								color="white"
								_hover={{ bg: "teal.600" }}
								_active={{ bg: "teal.600" }}
								mt="8"
								px="6"
							>
								Create your plan
							</Button>
						</Box>
					</Box>
				</Container>
			</header>

			<main>
				<Container maxW="container.lg" py="20">
					{/* Collection Section */}
					<Heading
						fontSize="7xl"
						align="center"
						position="relative"
						opacity=".05"
						bottom="-20px"
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
						mt="40"
						pt="20"
						pb="36"
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
								Dsicover an endless variety of the world&apos;s best
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
								Dsicover an endless variety of the world&apos;s best
								artisan coffee from each of our roasters
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
								Dsicover an endless variety of the world&apos;s best
								artisan coffee from each of our roasters
							</Text>
						</Box>
					</SimpleGrid>

					{/* Section how it works */}
					<Box mt="40" mb="20">
						<Heading as="h5" fontSize="md" opacity="0.6">
							How it works
						</Heading>
						<Box w="full">
							<Flex>
								<Box
									my="14"
									position="relative"
									w="full"
									_after={{
										content: "''",
										position: "absolute",
										display: "block",
										width: "100%",
										top: "8px",
										background: "red.200",
										height: "3px",
										zIndex: -1,
									}}
								>
									<Box
										height="20px"
										width="20px"
										borderRadius="full"
										border="solid"
										borderColor="teal.500"
										background="white"
									></Box>
								</Box>
								<Box
									my="14"
									position="relative"
									w="full"
									_after={{
										content: "''",
										position: "absolute",
										display: "block",
										width: "100%",
										top: "8px",
										background: "red.200",
										height: "3px",
										zIndex: -1,
									}}
								>
									<Box
										height="20px"
										width="20px"
										borderRadius="full"
										border="solid"
										borderColor="teal.500"
										background="white"
										ml="3"
									></Box>
								</Box>
								<Box
									my="14"
									position="relative"
									w="full"
									_after={{
										content: "''",
										position: "absolute",
										display: "block",
										width: "100%",
										top: "8px",
										background: "red.200",
										height: "3px",
										zIndex: -1,
									}}
								>
									<Box
										height="20px"
										width="20px"
										borderRadius="full"
										border="solid"
										borderColor="teal.500"
										background="white"
										ml="5"
									></Box>
								</Box>
							</Flex>
						</Box>

						<Box>
							<SimpleGrid columns={[1, 2, 3]} spacing="10">
								<Box>
									<Heading fontSize="4xl" mb="10" color="red.200">
										01
									</Heading>
									<Heading mb="5" fontSize="lg" opacity="0.8">
										Pick your coffee
									</Heading>
									<Text>
										Lorem ipsum, dolor sit amet consectetur
										adipisicing elit. Id nemo culpa assumenda maxime
										excepturi neque aliquam voluptatem veritatis non
										veniam.
									</Text>
								</Box>
								<Box>
									<Heading fontSize="4xl" mb="10" color="red.200">
										02
									</Heading>
									<Heading mb="5" fontSize="lg" opacity="0.8">
										Choose the frequency
									</Heading>
									<Text>
										Lorem ipsum, dolor sit amet consectetur
										adipisicing elit. Voluptas at asperiores
										doloremque eius earum ratione iste ipsum odit
										minus tempora!
									</Text>
								</Box>
								<Box>
									<Heading fontSize="4xl" mb="10" color="red.200">
										03
									</Heading>
									<Heading mb="5" fontSize="lg" opacity="0.8">
										Receive and enjoy!
									</Heading>
									<Text>
										Lorem ipsum dolor, sit amet consectetur
										adipisicing elit. Delectus blanditiis ullam
										voluptates optio tenetur architecto corporis
										mollitia, ut commodi accusamus?
									</Text>
								</Box>
							</SimpleGrid>
							<Button
								background="teal.500"
								color="white"
								_hover={{ bg: "teal.600" }}
								_active={{ bg: "teal.600" }}
								mt="12"
								px="6"
							>
								Create your plan
							</Button>
						</Box>
					</Box>
				</Container>
			</main>

			<footer>
				<Container maxW="container.lg" mb="8">
					<Box background="blackAlpha.800" py="6" px="8" borderRadius="md">
						<SimpleGrid columns={[1, 3]} spacing="10">
							<Heading fontSize="md" color="whiteAlpha.900">
								roastedcoffee
							</Heading>
							<Box d="flex" justifyContent="center">
								<Link color="whiteAlpha.700" mr="4" fontSize="xs">
									HOME
								</Link>
								<Link color="whiteAlpha.700" mr="4" fontSize="xs">
									ABOUT US
								</Link>
								<Link color="whiteAlpha.700" mr="4" fontSize="xs">
									CREATE YOUR PLAN
								</Link>
							</Box>
							<Box d="flex" justifyContent="flex-end">
								<Image
									src="/assets/images/facebook.png"
									alt="facebook"
									w="20px"
									filter="invert(1)"
									mr="2"
								/>
								<Image
									src="/assets/images/twitter.png"
									alt="twitter"
									w="20px"
									filter="invert(1)"
									mr="2"
								/>
								<Image
									src="/assets/images/instagram.png"
									alt="instagram"
									w="20px"
									filter="invert(1)"
								/>
							</Box>
						</SimpleGrid>
					</Box>
				</Container>
			</footer>

			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Choose your menu</DrawerHeader>

					<DrawerBody>
						<Stack spacing="5">
							<Link fontSize="12px" fontWeight="medium" color="gray.500">
								HOME
							</Link>
							<Link fontSize="12px" fontWeight="medium" color="gray.500">
								ABOUT US
							</Link>
							<Link fontSize="12px" fontWeight="medium" color="gray.500">
								CREATE YOUR PLAN
							</Link>
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
