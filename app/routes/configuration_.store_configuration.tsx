import { Flex, Heading } from '@chakra-ui/react';
import { ImplementGrid } from '~/layouts/Grid';

export default function StoreConfiguration() {
  return (
    <ImplementGrid>
      <Flex align={'center'} justify={'center'} px={5} h={'100vh'}>
        <Heading textAlign={'center'}>
          This is Store Configuration's Route
        </Heading>
      </Flex>
    </ImplementGrid>
  );
}