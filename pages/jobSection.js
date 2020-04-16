import {
  Box,
  Flex,
  Link,
  Text,
  Image,
  Button,
  ButtonGroup,
} from "@chakra-ui/core";
import JobCardsLayout from "../components/JobsectionCards";
import juniorImage from "../assets/images/cherry-waiting.svg";
import midImage from "../assets/images/cherry-uploading.svg";
import seniorimage from "../assets/images/cherry-welcome.svg";

const JobCardSection = () => (
  <JobCardsLayout>
    <Box>
      <Text
        color="white"
        m={5}
        textAlign="center"
        fontSize="30px"
        fontFamily="Sen"
      >
        Job Categories
      </Text>
    </Box>
    <Flex flexWrap="wrap" justifyContent="center">
      <Box
        m={3}
        borderWidth="1px"
        bg="white"
        flex="0 1 24%"
        p={6}
        rounded="lg"
        mt={5}
      >
        <Box size="400px" pt={3}>
          <Image src={juniorImage} alt="junior svg"></Image>
        </Box>
        <Box
          color="gray.500"
          fontWeight="bold"
          letterSpacing="wide"
          textTransform="uppercase"
          fontSize="xl"
          textAlign="center"
        >
          Entry-level Jobs
        </Box>
        {/* <Box
          mt="2"
          fontWeight="semibold"
          fontSize="md"
          textAlign="center"
          color="blue.600"
        >
          Number of Jobs: 17
        </Box> */}
        <Box
          mt="7"
          fontWeight="semibold"
          fontSize="lg"
          textAlign="center"
          color="blue.800"
        >
          <Link href="/junior">See More</Link>
        </Box>
      </Box>
      <Box
        m={3}
        borderWidth="1px"
        bg="white"
        flex="0 1 24%"
        p={6}
        rounded="lg"
        mt={5}
      >
        <Box size="400px" pt={3}>
          <Image src={midImage} alt="junior svg"></Image>
        </Box>
        <Box
          color="gray.500"
          fontWeight="bold"
          letterSpacing="wide"
          textTransform="uppercase"
          fontSize="xl"
          textAlign="center"
        >
          Mid-level Jobs
        </Box>

        <Box
          mt="7"
          fontWeight="semibold"
          fontSize="lg"
          textAlign="center"
          color="blue.800"
        >
          <Link href="/mid">See More</Link>
        </Box>
      </Box>
      <Box
        m={3}
        borderWidth="1px"
        bg="white"
        flex="0 1 24%"
        p={6}
        rounded="lg"
        mt={5}
      >
        <Box size="400px" pt={3}>
          <Image src={seniorimage} alt="junior svg"></Image>
        </Box>
        <Box
          color="gray.500"
          fontWeight="bold"
          letterSpacing="wide"
          textTransform="uppercase"
          fontSize="xl"
          textAlign="center"
        >
          Senior-level Jobs
        </Box>
        <Box
          mt="7"
          fontWeight="semibold"
          fontSize="lg"
          textAlign="center"
          color="blue.800"
        >
          <Link href="/senior">See More</Link>
        </Box>
      </Box>
    </Flex>
  </JobCardsLayout>
);

export default JobCardSection;
