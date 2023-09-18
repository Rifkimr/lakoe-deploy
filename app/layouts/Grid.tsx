import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { LeftNavigation } from '~/components/LeftNavigation';
import { LeftNavigationAdmin } from '~/components/LeftNavigationAdmin';
import RightSideAdminDeclined from '~/components/RightSideAdminDeclined';
import RightSideAdminProcessing from '~/components/RightSideAdminProcessing';
import RightSideAdminRequest from '~/components/RightSideAdminRequest';
import RightSideAdminSuccess from '~/components/RightSideAdminSuccess';

interface LayoutProps {
  children: ReactNode;
}

export function ImplementGrid({ children }: LayoutProps) {
  return (
    <Flex justify={'center'} minHeight={'100vh'} direction={'column'}>
      <Box
        width={'100%'}
        height={'7.5vh'}
        position={'fixed'}
        top={0}
        borderBottom={'1px'}
        borderBottomColor={'gray.200'}
        backgroundColor={'white'}
        zIndex={10}
      />
      <Flex justify={'center'} minHeight={'100vh'}>
        <Box
          width={'25%'}
          position={'fixed'}
          top={'7.5vh'}
          left={0}
          height={'100vh'}
          borderRight={'1px'}
          borderRightColor={'gray.200'}
        >
          <LeftNavigation />
        </Box>
        <Box width={'50%'} p={5} backgroundColor={'whitesmoke'}>
          {children}
        </Box>
        <Box
          width={'25%'}
          position={'fixed'}
          top={'7.5vh'}
          right={0}
          height={'100vh'}
          borderLeft={'1px'}
          borderLeftColor={'gray.200'}
        >
          {/* <Flex align={'center'} justify={'center'} px={5} h={'100vh'}>
            <Heading textAlign={'center'} mb={'7.5vh'}>
              Test Right Sidebar
            </Heading>
          </Flex> */}
        </Box>
      </Flex>
    </Flex>
  );
}

export function ImplementGridProcess({ children }: LayoutProps) {
  return (
    <Box
      justifyContent={'center'}
      // minHeight={"100vh"}
      width={'100%'}
      display={'flex'}
      w="100%"
      h="100%"
      bgGradient="linear(0deg, #D9AFD9 0%, #97D9E1 100%)"
    >
      <Box width={'20%'}>
        <LeftNavigationAdmin />
      </Box>

      <Box width={'55%'} margin={'auto'} justifyContent={'center'}>
        {children}{' '}
      </Box>

      <Box width={'25%'}>
        <RightSideAdminProcessing />
      </Box>
    </Box>
  );
}

export function ImplementGridSuccess({ children }: LayoutProps) {
  return (
    <Box
      justifyContent={'center'}
      // minHeight={"100vh"}
      width={'100%'}
      display={'flex'}
      w="100%"
      h="100%"
      bgGradient="linear(0deg, #D9AFD9 0%, #97D9E1 100%)"
    >
      <Box width={'20%'}>
        <LeftNavigationAdmin />
      </Box>

      <Box
        width={'55%'}
        justifyContent={'center'}
        display={'flex'}
        mx={'auto'}
        my={'0'}
      >
        {children}{' '}
      </Box>

      <Box width={'25%'}>
        <RightSideAdminSuccess />
      </Box>
    </Box>
  );
}

export function ImplementGridRequest({ children }: LayoutProps) {
  return (
    <Box
      justifyContent={'center'}
      // minHeight={"100vh"}
      width={'100%'}
      display={'flex'}
      w="100%"
      h="100%"
      bgGradient="linear(0deg, #D9AFD9 0%, #97D9E1 100%)"
    >
      <Box width={'20%'}>
        <LeftNavigationAdmin />
      </Box>

      <Box
        width={'55%'}
        margin={'auto'}
        justifyContent={'center'}
        display={'flex'}
        alignContent={'none'}
      >
        {children}{' '}
      </Box>

      <Box width={'25%'}>
        <RightSideAdminRequest />
      </Box>
    </Box>
  );
}

export function ImplementGridDeclined({ children }: LayoutProps) {
  return (
    <Box
      justifyContent={'center'}
      // minHeight={"100vh"}
      width={'100%'}
      display={'flex'}
      w="100%"
      h="100%"
      bgGradient="linear(0deg, #D9AFD9 0%, #97D9E1 100%)"
    >
      <Box width={'20%'}>
        <LeftNavigationAdmin />
      </Box>

      <Box
        width={'55%'}
        margin={'auto'}
        justifyContent={'center'}
        display={'flex'}
        alignItems={'none'}
      >
        {children}{' '}
      </Box>

      <Box width={'25%'}>
        <RightSideAdminDeclined />
      </Box>
    </Box>
  );
}
