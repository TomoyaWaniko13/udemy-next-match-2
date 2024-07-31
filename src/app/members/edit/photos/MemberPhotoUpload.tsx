'use client';

import ImageUploadButton from '@/components/ImageUploadButton';
import { useRouter } from 'next/navigation';
import { CloudinaryUploadWidgetResults } from 'next-cloudinary';
import { addImage } from '@/app/actions/userActions';
import { toast } from 'react-toastify';

const MemberPhotoUpload = () => {
  const router = useRouter();

  // 画像のアップロードが成功した後に実行されるコールバック関数
  const onAddImage = async (result: CloudinaryUploadWidgetResults) => {
    // result.info が存在し(null, undefinedではない)、オブジェクト型であるかチェック
    // 後続の処理（result.info.secure_url や result.info.public_id にアクセスすること）が安全に行えることを確認するためのもの
    if (result.info && typeof result.info === 'object') {
      await addImage(result.info.secure_url, result.info.public_id);
      router.refresh();
    } else {
      toast.error('Problem adding image');
    }
  };

  return (
    <div className={'pt-5 pl-5'}>
      <ImageUploadButton onUploadImage={onAddImage} />
    </div>
  );
};

export default MemberPhotoUpload;
