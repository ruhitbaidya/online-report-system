import JoditEditor from "jodit-react";
import { useMemo, useRef, useState } from "react";
type TItem = {
  item: string;
};
const ReportEditor = ({ item }: TItem) => {
  const editor = useRef(null);
  const [content, setContent] = useState<string>(
    `<h3 style="text-align: center;"><strong>${item}</strong></h3>`
  );
  const config = useMemo(
    () => ({
      readonly: false,
      height: 400, // increase this number to get more writing space
      placeholder: "Start typing here...",
    }),
    []
  );
  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)} // update content on every change
      />
      <div className="mt-[10px] flex justify-end items-center">
        <button className="px-[32px] py-[9px] border rounded-lg bg-gray-700 text-white">
          Save Report
        </button>
      </div>
    </div>
  );
};

export default ReportEditor;
