import { Box, Flex, Text, Button, ButtonGroup, Link } from "@chakra-ui/core";
import scrapeImage from "../assets/images/cherry-searching.svg";

const Loader = ({ children }) => (
  <Box
    position="absolute"
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)"
  >
    <Text color="white" fontSize="50px">
      {children}
    </Text>
    <img src={scrapeImage}></img>
  </Box>
);

export default Loader;
