import JoditEditor from "jodit-react";
import { useMemo, useState } from "react";
type TItem = {
  item: string;
};
const ReportEditor = ({ item }: TItem) => {
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
        value={content}
        config={config}
        onChange={(newContent) => setContent(newContent)} // update content on every change
      />
    </div>
  );
};

export default ReportEditor;
