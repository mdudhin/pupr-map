import React, { useMemo, useRef, useState } from "react";
import {
  mockData,
  mockData1,
  mockData2,
  mockData3,
} from "../../services/mock-data";

import JoditEditor from "jodit-react";
import RichTextEditor from "../../components/rich-editor";
import { useParams } from "react-router-dom";

const WorkDetail = () => {
  const { id } = useParams();
  const [content, setContent] = useState<string>("");

  console.log({ content });

  const data = () => {
    console.log(id);

    if (id === "1") {
      return mockData1;
    } else if (id === "2") {
      return mockData2;
    } else {
      return mockData3;
    }
  };
  return (
    // <div>
    //   <h1>Rich Text Editor using Jodit</h1>
    //   <RichTextEditor value={content} onChange={setContent} />
    //   <div>
    //     <h2>Content Output:</h2>
    //     <div dangerouslySetInnerHTML={{ __html: content }} />
    //   </div>
    // </div>
    <div
      className="bg-gray-50 p-6 rounded-sm min-h-screen"
      dangerouslySetInnerHTML={{ __html: data() }}
    />
  );
};

export default WorkDetail;
