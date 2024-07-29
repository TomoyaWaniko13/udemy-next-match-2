import { CardBody, CardHeader, Divider, Image } from '@nextui-org/react';
import { getAuthUserId } from '@/app/actions/authActions';
import { getMemberPhotosByUserId } from '@/app/actions/memberActions';

const PhotosPage = async () => {
  const userId = await getAuthUserId();
  const photos = await getMemberPhotosByUserId(userId);

  return (
    <>
      <CardHeader className={'text-2xl font-semibold text-secondary'}>Edit profile</CardHeader>
      <Divider />
      <CardBody>
        <div className={'grid grid-cols-5 gap-3 p-5'}>
          {photos &&
            photos.map((photo) => (
              <div key={photo.id} className={'relative'}>
                <Image height={220} width={220} src={photo.url} alt={'Image'} />
              </div>
            ))}
        </div>
      </CardBody>
    </>
  );
};

export default PhotosPage;
