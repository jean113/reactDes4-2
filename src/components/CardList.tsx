import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface Card 
{
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps 
{
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element 
{
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [currentUrl, setCurrentUrl] = useState('');

  function handleViewImage(url: string): void 
  {
    onOpen();
    setCurrentUrl(url);
  }

  return (
    <>
      <SimpleGrid columns={3} gridGap="40">
        { cards.map( card => 
          {
            return (
              <Card key={card.id} data={card} viewImage={() => handleViewImage(card.url)} />
            );
          }
        )}
      </SimpleGrid>

      <ModalViewImage imgUrl={currentUrl} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
