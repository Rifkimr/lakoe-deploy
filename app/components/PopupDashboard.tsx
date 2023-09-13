import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import TarikKredit from './PopupTarikKredit';
import { redirect } from '@remix-run/node';
import { Form, Link } from '@remix-run/react';

export default function DashboardPopup({ dataBank, createWithdraw }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showTarikKredit, setShowTarikKredit] = useState(false);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  // alert
  const [alertMessage, setAlertMessage] = useState('');
  const [isFormValidation, setIsFormValidation] = useState(true);

  const [formData, setFormData] = useState({
    actionType: 'create',
    amount: '',
    bankAccount: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleTarikKredit = () => {
    const { actionType, amount, bankAccount } = formData;

    if (!amount || !bankAccount) {
      setIsFormValidation(false);
      setAlertMessage('Please complete the data above!');
      setTimeout(() => {
        setIsFormValidation(true);
      }, 5000);
    } else {
      setIsFormValidation(true);
      setShowTarikKredit(!showTarikKredit);
    }
    console.log(
      'ini data-data inputan withdraw',
      actionType,
      amount,
      bankAccount
    );
  };

  const handleAddRekeningClick = () => {
    return redirect('/bank');
  };

  return (
    <>
      <Button onClick={onOpen} bg={'#8dc63f'} color={'#fff'} colorScheme="none">
        Tarik Credit
      </Button>
      {/* <Text>ini id withdraw{withdrawId}</Text> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={() => {
          setIsFormValidation(true);
          onClose();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <Form method="post">
            <Input type="hidden" name="actionType" value="create" />
            {/* <Input type="text" name="withdrawId" value={withdrawId} /> */}
            {/* <Input type="text" name="storeId" /> */}
            {/* <Input type="text" name="approvedById" /> */}
            <ModalHeader display={'flex'} alignItems={'center'}>
              <Text ml={'5px'}>Tarik Credit</Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Box
                borderLeft={'2px solid'}
                borderColor={'blue.700'}
                bg={'blue.100'}
                padding={'10px'}
                fontSize={'13px'}
              >
                <UnorderedList>
                  <ListItem>
                    Withdraw hanya dapat dilakukan 1x per hari
                  </ListItem>
                  <ListItem>
                    Dan akan diproses pada hari kerja pada jam 09:00 - 17:00 WIB
                  </ListItem>
                  <ListItem>
                    Direkomendasikan Withdraw ke Rekening BCA, selain rekening
                    BCA akan memakan waktu 2-3 hari kerja
                  </ListItem>
                </UnorderedList>
              </Box>

              <FormControl mt={4}>
                <FormLabel>Berapa banyak yang ingin anda tarik?</FormLabel>
                <Input
                  value={formData.amount}
                  // onChange={(event) => {
                  //   handleChange(event);
                  //   handleAmountChange(event);
                  // }}
                  onChange={handleChange}
                  type="number"
                  ref={initialRef}
                  placeholder="Jumlah penarikan"
                  name="amount"
                />
                <Text
                  // fontStyle={"italic"}
                  color={'blue.500'}
                  fontSize={'13px'}
                  mt={'1'}
                >
                  Max amount:{''}
                  <Text as="span" fontWeight={700}>
                    Rp.2.500.000
                  </Text>
                </Text>
              </FormControl>

              <FormControl mt={4}>
                {/* <FormLabel>Tarik Ke:</FormLabel> */}
                {/* {dataBank === null ? ( */}
                <button onClick={handleAddRekeningClick}>Tarik ke:</button>
                {/* : ( */}
                <Select
                  fontSize={'13px'}
                  name="bankAccount"
                  onChange={handleChange}
                  value={formData.bankAccount}
                  // onChange={(event) => {
                  //   handleChange(event);
                  //   handleBankAccountChange(event);
                  // }}
                >
                  <option value="">Select Your Bank Account</option>
                  {dataBank.map((data: any) => (
                    <option
                      value={`${data.bank} - ${data.accountName} - ${data.accountNumber}`}
                      key={data.id}
                    >
                      {`${data.bank} - ${data.accountName} - ${data.accountNumber}`}
                    </option>
                  ))}
                </Select>
                {/* )} */}
                <Link to={'/bank'}>
                  <Text
                    fontSize={'13px'}
                    color={'blue.500'}
                    // fontStyle={"italic"}
                    mt={'1'}
                  >
                    didn't have bank account?
                  </Text>
                </Link>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  // onChange={(event) => {
                  //   handleChange(event);
                  //   handlePasswordChange(event);
                  // }}
                  // onChange={handlePasswordChange}
                  type="password"
                  ref={initialRef}
                  placeholder="Silakan masukkan kata sandi akun anda"
                />
              </FormControl>
              {!isFormValidation && (
                <Text
                  color={'red.600'}
                  mt={2}
                  fontSize="14px"
                  fontStyle="italic"
                >
                  {alertMessage}
                </Text>
              )}
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="none"
                mr={3}
                onClick={onClose}
                color={'gray.500'}
                border={'1px solid'}
                borderColor={'gray.500'}
              >
                Batal
              </Button>
              <div>
                <Button
                  colorScheme="green"
                  mr={3}
                  onClick={() => {
                    toggleTarikKredit();
                  }}
                  type="submit"
                >
                  Tarik Kredit
                </Button>
                {showTarikKredit && (
                  <TarikKredit
                    // id={createWithdraw.id}
                    amount={formData.amount}
                    bankAccount={formData.bankAccount}
                  />
                )}{' '}
              </div>
            </ModalFooter>
          </Form>
        </ModalContent>
      </Modal>
    </>
  );
}
