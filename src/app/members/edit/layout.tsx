import { ReactNode } from 'react';
import { getAuthUserId, getUserById } from '@/app/actions/authActions';
import { notFound } from 'next/navigation';
import MemberSidebar from '@/app/members/MemberSidebar';
import { getMemberByUserId } from '@/app/actions/memberActions';
import { Card } from '@nextui-org/react';

const Layout = async ({ children }: { children: ReactNode }) => {
  const userId = await getAuthUserId();

  const member = await getMemberByUserId(userId);
  if (!member) return notFound();

  const basePath = '/members/edit';

  const navLinks = [
    { name: 'Edit Profile', href: `${basePath}` },
    { name: 'Update Photos', href: `${basePath}/photos` },
  ];

  return (
    <div className={'grid grid-cols-12 gap-5 h-[80vh]'}>
      <div className={'col-span-3'}>
        <MemberSidebar member={member} navLinks={navLinks} />
      </div>
      <div className={'col-span-9'}>
        <Card className={'w-full mt-10 h-[80vh]'}>{children}</Card>
      </div>
    </div>
  );
};

export default Layout;
