import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack
} from "@chakra-ui/react";
import { FC, memo } from "react";

export const Login: FC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="gray.50" w="sm" p={5} borderRadius="md" shadow="lg">
        <Heading size="lg" textAlign="center">
          MyPage Login
        </Heading>
        <Divider my={5} />
        <Stack spacing={2} py={5} px={5}>
          <Input placeholder="login ID" />
          <Button bg="orange.200" _hover={{ opacity: 0.5 }}>
            LOGIN
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
});
