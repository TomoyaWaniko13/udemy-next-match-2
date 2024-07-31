import { CardBody, CardHeader, Divider, Image } from '@nextui-org/react';
import { getAuthUserId } from '@/app/actions/authActions';
import { getMemberPhotosByUserId } from '@/app/actions/memberActions';
import StartButton from '@/components/StartButton';
import DeleteButton from '@/components/DeleteButton';
import MemberPhotoUpload from '@/app/members/edit/photos/MemberPhotoUpload';
import MemberImage from '@/components/MemberImage';

const PhotosPage = async () => {
  const userId = await getAuthUserId();
  const photos = await getMemberPhotosByUserId(userId);

  return (
    <>
      <CardHeader className={'text-2xl font-semibold text-secondary'}>Edit profile</CardHeader>
      <Divider />
      <CardBody>
        <MemberPhotoUpload />
        <div className={'grid grid-cols-5 gap-3 p-5'}>
          {photos &&
            photos.map((photo) => (
              <div key={photo.id} className={'relative w-[220px] h-[220px]'}>
                <MemberImage photo={photo} />
                <div className={'absolute top-3 left-3 z-50'}>
                  <StartButton selected={false} loading={false} />
                </div>
                <div className={'absolute top-3 right-3 z-50'}>
                  <DeleteButton loading={false} />
                </div>
              </div>
            ))}
        </div>
      </CardBody>
    </>
  );
};

export default PhotosPage;
