import { ReactNode } from 'react';
import { getUserById } from '@/app/actions/authActions';
import { notFound } from 'next/navigation';
import MemberSidebar from '@/app/members/MemberSidebar';
import { getMemberByUserId } from '@/app/actions/memberActions';
import { Card } from '@nextui-org/react';

const Layout = async ({ children, params }: { children: ReactNode; params: { userId: string } }) => {
  const member = await getMemberByUserId(params.userId);
  if (!member) return notFound();

  return (
    <div className={'grid grid-cols-12 gap-5 h-[80vh]'}>
      <div className={'col-span-3'}>
        <MemberSidebar member={member} />
      </div>
      <div className={'col-span-9'}>
        <Card className={'w-full mt-10 h-[80vh]'}>{children}</Card>
      </div>
    </div>
  );
};

export default Layout;
