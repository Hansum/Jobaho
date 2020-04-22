import {
  Box,
  Flex,
  Text,
  Button,
  ButtonGroup,
  Link,
  Input,
} from "@chakra-ui/core";

const JobCards = ({ title, company, location, url, index }) => {
  return (
    <Box
      m={["15px", "20px", "10px"]}
      borderWidth="1px"
      bg="white"
      flex="0 1 24%"
      p={[20, 12, 6]}
      rounded="lg"
      mt={5}
      key={index}
    >
      <Box>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          textTransform="uppercase"
          fontSize="xs"
          textAlign="center"
        >
          {company}
        </Box>
      </Box>
      <Box
        mt="2"
        fontWeight="semibold"
        fontSize="lg"
        textAlign="center"
        color="blue.600"
      >
        <Link href={url} isExternal>
          {title}
        </Link>
      </Box>
      <Box mt="2" color="gray.600" fontSize="sm" textAlign="center">
        {location}
      </Box>
    </Box>
  );
};

export default JobCards;
