import { CardBody, CardHeader, Divider, Image } from '@nextui-org/react';
import { getAuthUserId } from '@/app/actions/authActions';
import { getMemberByUserId, getMemberPhotosByUserId } from '@/app/actions/memberActions';
import StartButton from '@/components/StartButton';
import DeleteButton from '@/components/DeleteButton';
import MemberPhotoUpload from '@/app/members/edit/photos/MemberPhotoUpload';
import MemberImage from '@/components/MemberImage';
import MemberPhotos from '@/components/MemberPhotos';

const PhotosPage = async () => {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);
  const photos = await getMemberPhotosByUserId(userId);

  return (
    <>
      <CardHeader className={'text-2xl font-semibold text-secondary'}>Edit profile</CardHeader>
      <Divider />
      <CardBody>
        <MemberPhotoUpload />
        <MemberPhotos photos={photos} editing={true} mainImageUrl={member?.image} />
      </CardBody>
    </>
  );
};

export default PhotosPage;
