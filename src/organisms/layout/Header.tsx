import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  useDisclosure
} from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  /** useHistory is not a function */
  const navigate = useNavigate();
  const onClickLogin = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onClickMypageAccount = useCallback(() => {
    navigate("/mypage/account");
  }, [navigate]);
  const onClickMypagePassword = useCallback(() => {
    navigate("/mypage/password");
  }, [navigate]);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.100"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex mr={8}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            Mypage Sample
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          mr={4}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link mr={2} onClick={onClickMypageAccount}>
              アカウント
            </Link>
            <Link mr={2} onClick={onClickMypagePassword}>
              パスワード
            </Link>
            <Link mr={2} onClick={onClickLogin}>
              ログアウト
            </Link>
          </Box>
        </Flex>
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.200">
              <Button w="100%">アカウント</Button>
              <Button w="100%">パスワード</Button>
              <Button w="100%">ログアウト</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
