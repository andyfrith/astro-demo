import { useRef } from "react";
import { RuxTree, RuxTreeNode, RuxButton } from "@astrouxds/react";

export const Tree = () => {
  const treeRef = useRef(null);
  const setFirst = (node) => {
    node.current.setSelected(true);
  };
  return (
    <div>
      <RuxTree>
        <RuxTreeNode ref={treeRef}>Hello</RuxTreeNode>
        <RuxTreeNode>World</RuxTreeNode>
      </RuxTree>
      <RuxButton onClick={() => setFirst(treeRef)}>
        Set First Selected
      </RuxButton>
    </div>
  );
};
