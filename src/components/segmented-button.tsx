import { useState } from "react";
import { RuxSegmentedButton, RuxInput, RuxButton } from "@astrouxds/react";

export const SegmentedButton = () => {
  const [dataArr, setDataArr] = useState([
    {
      selected: true,
      label: "One",
    },
    {
      label: "Two",
    },
    {
      label: "Three",
    },
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (str: string) => {
    const strObj = { label: str };
    setDataArr(() => [...dataArr, strObj]);
  };
  return (
    <div>
      <RuxSegmentedButton data={dataArr} />
      <RuxInput
        onRuxchange={(e: CustomEvent<HTMLRuxInputElement>) => {
          const target = e.target as HTMLInputElement;
          setInputVal(target.value);
        }}
      />
      <RuxButton onClick={() => handleSubmit(inputVal)}>Submit</RuxButton>
    </div>
  );
};
