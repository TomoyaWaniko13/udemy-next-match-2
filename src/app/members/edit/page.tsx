import { CardBody, CardHeader, Divider } from '@nextui-org/react';
import EditForm from '@/app/members/edit/EditForm';
import { getAuthUserId } from '@/app/actions/authActions';
import { getMemberByUserId } from '@/app/actions/memberActions';
import { notFound } from 'next/navigation';

const MemberEditPage = async () => {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);

  if (!member) return notFound();

  return (
    <>
      <CardHeader className={'text-2xl font-semibold text-secondary'}>MemberEditPage</CardHeader>
      <Divider />
      <CardBody>
        <EditForm member={member} />
      </CardBody>
    </>
  );
};

export default MemberEditPage;
