import { Box, Button, Input, VStack, Link } from "@chakra-ui/react";

function Login() {
  return (
    <VStack spacing={4} align="stretch">
      <Input placeholder="Email or Username" />
      <Input placeholder="Password" type="password" />
      <Button colorScheme="blue">Login</Button>
      <Link color="blue.500" href="#">
        Forgot Password?
      </Link>
    </VStack>
  );
}

export default Login;
