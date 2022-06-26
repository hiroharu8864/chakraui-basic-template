import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack
} from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Login: FC = memo(() => {
  const navigate = useNavigate();
  const onClickMypage = useCallback(() => {
    navigate("/mypage");
  }, [navigate]);
  const onClickButtonSample = useCallback(() => {
    navigate("/button");
  }, [navigate]);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="gray.50" w="sm" p={5} borderRadius="md" shadow="lg">
        <Heading size="lg" textAlign="center">
          MyPage Login
        </Heading>
        <Divider my={5} />
        <Stack spacing={2} py={5} px={5}>
          <Input placeholder="login ID" />
          <Button
            bg="orange.200"
            _hover={{ opacity: 0.5 }}
            onClick={onClickMypage}
          >
            LOGIN
          </Button>
        </Stack>
        <Stack spacing={2} py={5} px={5}>
          <Button
            bg="pink.200"
            _hover={{ opacity: 0.5 }}
            onClick={onClickButtonSample}
          >
            Button Sample Page
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
});
