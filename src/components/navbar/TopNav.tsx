import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import NavLink from '@/components/navbar/NavLink';
import { auth } from '@/auth';
import UserMenu from '@/components/navbar/UserMenu';

const TopNav = async () => {
  const session = await auth();
  return (
    <Navbar
      maxWidth={'xl'}
      className={'bg-transparent'}
      classNames={{ item: ['text-xl data-[active=true]:text-cyan-500'] }}
    >
      <NavbarBrand>
        <p className='font-bold text-5xl font-serif'>NM</p>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavLink href={'/members'} label={'Members'} />
        <NavLink href={'/lists'} label={'Lists'} />
        <NavLink href={'/messages'} label={'Messages'} />
      </NavbarContent>
      <NavbarContent justify='end'>
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <>
            <Button as={Link} href={'/login'} variant={'bordered'}>
              Login
            </Button>
            <Button as={Link} href={'/register'} variant={'bordered'}>
              Register
            </Button>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default TopNav;
