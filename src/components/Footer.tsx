import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	Link,
	Text,
	SimpleGrid,
} from "@chakra-ui/react";

export function Footer() {
	return (
		<footer>
			<Container maxW="container.lg" mb="8">
				<Box background="blackAlpha.800" py="6" px="8" borderRadius="md">
					<SimpleGrid columns={[1, 3]} spacing="4">
						<Heading fontSize="md" color="whiteAlpha.900">
							roastedcoffee
						</Heading>
						<Box d="flex" justifyContent={["flex-start", "center"]}>
							<Link
								color="whiteAlpha.800"
								fontWeight="medium"
								mr="4"
								fontSize="xs"
							>
								HOME
							</Link>
							<Link
								color="whiteAlpha.800"
								fontWeight="medium"
								mr="4"
								fontSize="xs"
							>
								ABOUT US
							</Link>
							<Link
								color="whiteAlpha.800"
								fontWeight="medium"
								mr="4"
								fontSize="xs"
							>
								CREATE YOUR PLAN
							</Link>
						</Box>
						<Box d="flex" justifyContent={["flex-start", "flex-end"]}>
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
					<Flex mt="2" justifyContent="center">
						<Text as="small" color="whiteAlpha.700">
							Designed by{" "}
							<Link
								href="https://frontendmentor.io/"
								color="teal.400"
								isExternal
							>
								Frontend Mentor
							</Link>{" "}
						</Text>
					</Flex>
				</Box>
			</Container>
		</footer>
	);
}
