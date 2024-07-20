import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { FaRegSmile } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Button as={Link} href={'/members'} color={'primary'} variant={'bordered'} startContent={<FaRegSmile />}>
        Click me!
      </Button>
    </>
  );
}
