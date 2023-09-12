import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";
import { IOrderDetailInvoice } from "~/interfaces/orderDetail";
import useDetailPengiriman from "~/modules/order/hooks/useDetailPengiriman";
import copy from "~/assets/DetailOrderIcon/copy.svg";
import { useState } from "react";
import { useBiteshipTrack } from "~/hooks/useBiteshipTrack";

export interface ITracking {
  id: string;
  waybill_id?: string;
  courier?: {
    company: string;
    name: string;
    phone: string;
  };
  destination?: {
    contact_name?: string;
    address?: string;
  };
  history?: {
    note?: string;
    service_type?: string;
    status?: string;
    updated_at?: string;
  };
  origin?: {
    contact_name?: string;
    address?: string;
  };
  status?: string;
}

export default function ModalInShipping(props: {
  isOpen: boolean;
  onClose: () => void;
  data: ITracking;
}) {
  const { trackingInfoArray, activeStep, trackingInfo } = useBiteshipTrack();
  console.log("ini", trackingInfo)
  const toast = useToast();
  const [_, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = props.data.waybill_id as string;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);

      toast({
        title: "Teks telah disalin ke clipboard!",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    });
  };

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent minWidth="fit-content" height="fit-content">
          <ModalHeader>Lacak Pengiriman</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Box
                width={"606px"}
                height={"176px"}
                padding={"10px"}
                gap={"10px"}
                display={"flex"}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  width={"288px"}
                  height={"156px"}
                  gap={3}
                >
                  <Box width={"288px"} height={"44px"} gap={1}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      color={"#1D1D1D"}
                    >
                      Kurir
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"700"}
                      lineHeight={"20px"}
                      color={"#1D1D1D"}
                    >
                      {props.data?.courier?.company}
                    </Text>
                  </Box>
                  <Box width={"288px"} height={"44px"} gap={1}>
                    <Box display={"flex"} gap={1}>
                      <Text
                        fontSize={"14px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        color={"#1D1D1D"}
                      >
                        No. Resi
                      </Text>
                      <Image
                        height={"18px"}
                        width={"18px"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        src={copy}
                        onClick={handleCopyClick}
                        style={{ cursor: "pointer" }}
                        color={"gray.900"}
                      />
                    </Box>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"700"}
                      lineHeight={"20px"}
                      color={"#1D1D1D"}
                    >
                      {props.data?.waybill_id}
                    </Text>
                  </Box>
                  <Box width={"288px"} height={"44px"} gap={1}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      color={"#1D1D1D"}
                    >
                      Pengirim
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"700"}
                      lineHeight={"20px"}
                      color={"#1D1D1D"}
                    >
                      {props.data?.origin?.contact_name}
                    </Text>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  width={"288px"}
                  height={"86px"}
                  gap={4}
                >
                  <Box width={"288px"} height={"44px"} gap={"4px"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      color={"#1D1D1D"}
                    >
                      Penerima
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"700"}
                      lineHeight={"20px"}
                      color={"#1D1D1D"}
                    >
                      {props.data?.destination?.contact_name}
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      color={"#1D1D1D"}
                    >
                      {props.data?.destination?.address}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box
                width={"606px"}
                height={"20px"}
                padding={"10px"}
                gap={"2px"}
                display={"flex"}
              >
                <Box width={"55px"} height={"20px"}>
                  <Text
                    fontSize={"16px"}
                    fontWeight={"500"}
                    lineHeight={"20px"}
                    color={"#1D1D1D"}
                  >
                    Status:
                  </Text>
                </Box>
                <Box width={"196px"} height={"20px"}>
                  <Text
                    fontSize={"16px"}
                    fontWeight={"700"}
                    lineHeight={"20px"}
                    color={"#1D1D1D"}
                  >
                    {props.data?.status}
                  </Text>
                </Box>
              </Box>
              <Box
                width={"606px"}
                height={"300px"}
                padding={" 20px 16px 0px 16px"}
              >
                <Stepper
                  size={"sm"}
                  border={"1px solid #E6E6E6"}
                  borderRadius={"12px"}
                  index={activeStep}
                  orientation="vertical"
                  height="110%"
                  width={"100%"}
                  gap="5"
                  p={"16px"}
                >
                  {trackingInfoArray.map((step) => (
                    <Step key={step.id}>
                      <StepIndicator fontSize={"11px"}>
                        <StepStatus
                          complete={<BsCircleFill />}
                          incomplete={<BsCircleFill color="gray" />}
                          active={<BsCircleFill color="gray" />}
                        />
                      </StepIndicator>

                      <Box flexShrink="0">
                        <StepTitle>{step.history?.note}</StepTitle>
                        <StepDescription>
                          {step.history?.updated_at}
                        </StepDescription>
                      </Box>

                      <StepSeparator />
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}
