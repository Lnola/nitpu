import React, { useRef, useState } from 'react';

import { Burger, Menu } from 'components/common/Dashboard';

import { useOnClickOutside } from 'utils/hooks/useOnClickOutside';

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </div>
  );
};

export default Dashboard;
