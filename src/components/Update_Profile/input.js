import React, { useEffect, useState } from 'react';
import { Upload } from 'antd';
import './style.css';
// import "./global.scss";

const ImageUpload = ({
  handleUploadImage,
  className = 'img-profile',
  filesPath,
  uploadContent,
  onRemoveImage,
  accept = 'image/*',
}) => {
  const [imageUrl, setImageUrl] = useState();

  const getBase64 = img => {
    const reader = new FileReader();
    reader.onload = function () {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(img);
  };

  const removeImage = () => {
    setImageUrl('');
    handleUploadImage('');
    onRemoveImage && onRemoveImage();
  };

  const props = {
    name: 'image',
    beforeUpload: () => {
      return false;
    },
    showUploadList: false,
    onChange: info => {
      handleUploadImage(info.file);
      getBase64(info.file);
    },
    accept,
  };

  useEffect(() => {
    setImageUrl(filesPath);
  }, [filesPath]);

  const renderUploadContent = () => {
    if (uploadContent) return uploadContent;
    return (
      <div>
        <div>+</div>
      </div>
    );
  };

  const renderInputUpload = () => {
    return (
      <Upload {...props} listType="picture-card" className={className}>
        {renderUploadContent()}
      </Upload>
    );
  };

  return (
    <div>
      {!imageUrl ? (
        renderInputUpload()
      ) : (
        <div>
          <div>
            <span>
              <img src={imageUrl} alt="" />
            </span>
          </div>
          <span>
            <button className='remove-img' type="button" onClick={removeImage}>
              X
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
