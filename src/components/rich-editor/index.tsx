import React, { useRef } from "react";

import JoditEditor from "jodit-react";

interface RichTextEditorProps {
  value: string;
  onChange: (newContent: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  const editor = useRef(null);

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    height: 400,
    uploader: {
      insertImageAsBase64URI: true,
    },
    events: {
      afterInsertImage: (image: HTMLImageElement) => {
        console.log(image);
      },
    },
  };

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      onBlur={(newContent) => onChange(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => {}}
    />
  );
};

export default RichTextEditor;
