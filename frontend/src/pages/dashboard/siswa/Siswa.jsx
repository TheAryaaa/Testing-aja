import { Box, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://6382a6221ada9475c8f10b2d.mockapi.io/Siswa'
      );
      setStudents(result.data);
    };
    fetchData();
  }, []);

  return (
    <Box>
      {students.map(student => (
        <Box key={student.id} p={4} shadow="md" borderWidth="1px">
          <Image src={student.avatar} alt={student.firstName} />
          <Heading as="h3" size="md">
            {student.firstName} {student.lastName}
          </Heading>
          <Text>{student.subjects}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default App;
