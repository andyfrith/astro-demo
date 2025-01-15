import { useState } from "react";
import { RuxInput } from "@astrouxds/react";

export const NameInput = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <RuxInput
        onRuxchange={(e: CustomEvent<HTMLRuxInputElement>) => {
          const target = e.target as HTMLInputElement;
          console.log(`Here is e.target.value: ${target.value}`);
        }}
        onRuxinput={(e: CustomEvent<HTMLRuxInputElement>) => {
          const target = e.target as HTMLInputElement;
          setName(target.value);
        }}
        label={"Name"}
        type="text"
        data-testid="name-input"
        value={name}
      />
    </div>
  );
};
