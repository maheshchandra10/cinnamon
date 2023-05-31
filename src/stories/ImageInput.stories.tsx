import { useState } from 'react';
import { ImageInput } from '../lib-components/ImageInput';
import './storiesGlobals.css';

export default {
  title: 'Components/ImageInput',
  component: ImageInput
};

export const Default = () => {
  const [file, setFile] = useState<File>(new File([''], 'exemplo.png'));
  return (
    <div style={{ width: '10rem', padding: '1rem' }}>
      <ImageInput setFile={setFile} id='image-input-test' />

      <div
        style={{
          width: '10rem',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          paddingTop: '4rem',
        }}
      >
        <span>Nome do arquivo:</span>
        <span>{file.name}</span>
      </div>
    </div>
  );
};
