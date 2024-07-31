'use client';

import { Photo } from '@prisma/client';
import { CldImage } from 'next-cloudinary';
import { Image } from '@nextui-org/react';

type Props = {
  photo: Photo | null;
};

const MemberImage = ({ photo }: Props) => {
  return (
    <div>
      {photo?.publicId ? (
        <CldImage
          alt={'Image of member'}
          src={photo.publicId}
          width={220}
          height={220}
          crop={'fill'}
          gravity={'faces'}
          className={'rounded-xl'}
        />
      ) : (
        <Image width={220} height={220} src={photo?.url || '/images/user.png'} alt={'Image of user'} />
      )}
    </div>
  );
};

export default MemberImage;
