import {
  Container,
  Stack,
  Avatar,
  Heading,
  Button,
  HStack,
} from '@chakra-ui/react';
const GantiFotoProfil = () => {
  return (
    <Stack as={Container} maxW={'4xl'} data-aos="fade-up">
      <Stack spacing={5} py={5} justifyContent={'center'}>
        <Stack spacing={4} w={'full'} rounded={'xl'} borderWidth={1} p={6}>
          <Stack spacing={6} justify="center" align="center">
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
              Ganti Foto Profil
            </Heading>
            <Avatar size="2xl" src="https://bit.ly/sage-adebayo" />
            <Stack as="form" w={'full'} maxW={'xl'}>
              <input type="file"></input>
              <HStack w="full">
                <Button w="full" colorScheme="red">
                  BATAL
                </Button>
                <Button w="full" colorScheme="green">
                  PILIH GAMBAR
                </Button>
              </HStack>
              <Button type="submit" colorScheme="teal" w="full">
                SIMPAN
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default GantiFotoProfil;
