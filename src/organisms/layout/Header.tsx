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
  Link
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header: FC = memo(() => {
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
            <Link mr={2}>アカウント</Link>
            <Link mr={2}>パスワード</Link>
            <Link mr={2}>ログアウト</Link>
          </Box>
        </Flex>
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: "block", md: "none" }}
        />
      </Flex>
      <Drawer placement="left" size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody>
              <Button>アカウント</Button>
              <Button>パスワード</Button>
              <Button>ログアウト</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
