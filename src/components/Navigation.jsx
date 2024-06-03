import { Box, HStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Box bg="gray.100" p={4}>
      <HStack spacing={4}>
        <Link as={NavLink} to="/dashboard">
          Dashboard
        </Link>
        <Link as={NavLink} to="/settings">
          Account Settings
        </Link>
      </HStack>
    </Box>
  );
}

export default Navigation;
