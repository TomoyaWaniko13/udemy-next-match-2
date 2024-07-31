'use client';

import { CldUploadButton, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import { HiPhoto } from 'react-icons/hi2';

type Props = {
  // 画像のアップロードが成功した後に実行されるコールバック関数。
  // CloudinaryUploadWidgetResults 型の result パラメータを受け取ります。これは
  // Cloudinary のアップロードウィジェットから返される結果オブジェクトです。
  onUploadImage: (result: CloudinaryUploadWidgetResults) => void;
};

const ImageUploadButton = ({ onUploadImage }: Props) => {
  return (
    <CldUploadButton
      options={{ maxFiles: 1 }}
      onSuccess={onUploadImage}
      signatureEndpoint={'/api/sign-image'}
      uploadPreset={'nm-demo'}
      className={'flex items-center gap-2 bg-secondary text-white rounded-lg py-2 px-4 hover:bg-secondary/70'}
    >
      <HiPhoto size={28} />
      Upload new image
    </CldUploadButton>
  );
};

export default ImageUploadButton;
