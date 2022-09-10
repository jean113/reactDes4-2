import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps 
{
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element 
{
  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent>
          <ModalBody>
            <Image src={imgUrl} maxWidth="900px" maxHeight="600px"/>
          </ModalBody>

          <ModalFooter background="gray.600" width="100%" padding="20px">
            <Link href={imgUrl}>
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}
