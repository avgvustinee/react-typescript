import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
.listGroup
    list-style: none;
    padding: 0;
`;

interface ListitemProps {
  active: boolean;
}

const Listitem = styled.li<ListitemProps>`
  padding: 10px 0;
  background: ${(props)=>(props.active ? "blue" : "none") }
`;

// props
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  // hook
  //arr[0] // variable (selectedIndex)
  //arr[1] // updater function (setSelectedIndex)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <Listitem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </Listitem>
        ))}
      </List>
    </>
  );
};

export default ListGroup;
