import { Box, Text } from "@chakra-ui/core";
import JobCardsLayout from "../components/JobsectionCards";

const AboutPage = () => (
  <JobCardsLayout>
    <Box>
      <Text color="white" textAlign="center" fontSize="40px" mt={10}>
        About Jobaho
      </Text>
      <Box mt="35px" textAlign="center" color="white" fontSize="35px">
        <Text>Jobaho aggregates IT-CS jobs in Cebu</Text>
      </Box>
    </Box>
  </JobCardsLayout>
);

export default AboutPage;
