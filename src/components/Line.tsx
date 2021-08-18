import { Box, Flex } from "@chakra-ui/react";

export function Line({ type }: { type: string }) {
  return (
    <Box w="full">
      <Flex>
        <Box
          my={["8", "14"]}
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
            zIndex: `${type === "plan" ? 1 : -1}`,
          }}
        >
          <Box
            height="20px"
            width="20px"
            borderRadius="full"
            border="solid"
            borderColor="teal.500"
            background="white"
            position="relative"
            zIndex="2"
          ></Box>
        </Box>
        <Box
          my={["8", "14"]}
          position="relative"
          w="full"
          _after={{
            content: "''",
            position: "absolute",
            display: "block",
            width: `${type === "plan" ? "111%" : "100%"}`,
            top: "8px",
            background: "red.200",
            height: "3px",
            zIndex: `${type === "plan" ? 1 : -1}`,
          }}
        >
          <Box
            height="20px"
            width="20px"
            borderRadius="full"
            border="solid"
            borderColor="teal.500"
            background="white"
            position="relative"
            zIndex="2"
            ml="3"
          ></Box>
        </Box>
        <Box
          my={["8", "14"]}
          position="relative"
          w="full"
          _after={{
            content: "''",
            position: "absolute",
            display: "block",
            width: "100%",
            top: "8px",
            background: `${type === "plan" ? "" : "red.200"}`,
            height: "3px",
            zIndex: `${type === "plan" ? 1 : -1}`,
          }}
        >
          <Box
            height="20px"
            width="20px"
            borderRadius="full"
            border="solid"
            borderColor="teal.500"
            background="white"
            position="relative"
            zIndex="2"
            ml={`${type === "plan" ? 3 : 5}`}
          ></Box>
        </Box>
      </Flex>
    </Box>
  );
}
