'use client';

import { Session } from 'next-auth';
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react';
import Link from 'next/link';
import { signOutUser } from '@/app/actions/authActions';

type Props = {
  user: Session['user'];
};

const UserMenu = ({ user }: Props) => {
  return (
    <Dropdown placement={'bottom-end'}>
      <DropdownTrigger>
        <Avatar
          as={'button'}
          className={'transition-transform'}
          color={'secondary'}
          name={user?.name || 'user avatar'}
          size={'sm'}
          src={user?.image || '/images/user.png'}
        />
      </DropdownTrigger>
      <DropdownMenu variant={'flat'} aria-label={'User actions menu'}>
        <DropdownSection showDivider={true}>
          <DropdownItem isReadOnly={true} as={'span'} className={'h-14 flex flex-row'} aria-label={'username'}>
            Sign in as {user?.name}
          </DropdownItem>
        </DropdownSection>
        <DropdownItem as={Link} href={'/members/edit'}>
          Edit profile
        </DropdownItem>
        <DropdownItem color={'danger'} onClick={async () => signOutUser()}>
          Log out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserMenu;
