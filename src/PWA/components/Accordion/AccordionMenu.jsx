import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const AccordionMenu = ({ data }) => {
  const [openId, setOpenId] = useState(null);

  return data.map((item, id) => (
    <AccordionItem
      isOpen={id === openId}
      onClick={() => (id === openId ? setOpenId(null) : setOpenId(id))}
      key={id}
      title={item.title}
      subtitle={item.subtitle}
      img={item.img}
    />
  ));
};

export default AccordionMenu;
