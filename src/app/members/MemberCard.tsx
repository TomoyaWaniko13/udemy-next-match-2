import { Member } from '@prisma/client';
import { Card, CardFooter, Image } from '@nextui-org/react';

type Props = {
  member: Member;
};

export async function MemberCard({ member }: Props) {
  return (
    <Card fullWidth>
      <Image
        isZoomed={true}
        alt={member.name}
        width={300}
        src={member.image || '/images/user.png'}
        className={'aspect-square object-over'}
      />
      <CardFooter>
        <div className={'flex flex-col text-white'}>
          <span className={'font-semibold'}>{member.name}</span>
          <span className={'text-sm'}>{member.city}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
