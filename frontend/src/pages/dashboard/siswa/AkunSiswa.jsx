import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Avatar,
  Divider,
  Text,
  Container,
} from '@chakra-ui/react';

const AkunSiswa = () => {
  return (
    <Stack as={Container} maxW={'7xl'} data-aos="fade-up">
      <Stack spacing={5} py={5} justifyContent={'center'}>
        <Stack spacing={4} w={'full'} rounded={'xl'} borderWidth={1} p={6}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Informasi Akun
          </Heading>
          <FormControl>
            <FormLabel>Foto Profil</FormLabel>
            <Avatar size="2xl" src="https://bit.ly/sage-adebayo" />
          </FormControl>
        </Stack>
        <Divider />
        <Stack spacing={4} w={'full'} rounded={'xl'} border="1px" p={6} my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Ubah Email & Kata Sandi
          </Heading>
          <Text>Harap selalu ingat kata sandi yang digunakan.</Text>
          <Button
            to="email-password"
            w="max-content"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
              bg: 'accentLight.500',
            }}>
            Ubah Email & Kata Sandi
          </Button>
        </Stack>
        <Divider />
        <Stack spacing={4} w={'full'} rounded={'xl'} border="1px" p={6} my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Hapus Akun
          </Heading>
          <Text>
            Penghapusan akun tidak bisa dibatalkan, anda harus mendaftar ulang
            untuk dapat menjadi parnter mentor kami lagi
          </Text>
          <Button
            w="max-content"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
              bg: 'red.500',
            }}>
            Hapus Akun
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AkunSiswa;
