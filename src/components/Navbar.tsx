import { useRef } from "react";
import {
	Button,
	Flex,
	Heading,
	Stack,
	HStack,
	Link,
	useDisclosure,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
} from "@chakra-ui/react";
import NextLink from "next/link";

export function Navbar({ page }: { page: string }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef(null);
	return (
		<>
			<Flex justifyContent="space-between" py="7">
				<Link>
					<NextLink href="/">
						<Heading size="sm">roastedcoffee</Heading>
					</NextLink>
				</Link>
				{page !== "plan" && (
					<>
						<HStack spacing="15px" d={["none", "flex"]}>
							<Link fontSize="12px" fontWeight="bold" color="gray.500">
								HOME
							</Link>
							<Link
								href="#why"
								fontSize="12px"
								fontWeight="bold"
								color="gray.500"
							>
								ABOUT US
							</Link>
							<Link
								href="#plan"
								fontSize="12px"
								fontWeight="bold"
								color="gray.500"
							>
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
					</>
				)}
			</Flex>

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
							<Link
								href="#why"
								fontSize="12px"
								fontWeight="medium"
								color="gray.500"
							>
								ABOUT US
							</Link>
							<Link
								href="#plan"
								fontSize="12px"
								fontWeight="medium"
								color="gray.500"
							>
								CREATE YOUR PLAN
							</Link>
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
