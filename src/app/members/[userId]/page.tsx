import { getMemberByUserId } from '@/app/actions/memberActions';
import { notFound } from 'next/navigation';

const MembersDetailedPage = async ({ params }: { params: { userId: string } }) => {
  const member = await getMemberByUserId(params.userId);

  if (!member) return notFound();

  return <div>{member.name}</div>;
};

export default MembersDetailedPage;
