import React, { useRef, useState } from 'react';

import { Burger, Menu } from 'components/common/Dashboard';

import { useOnClickOutside } from 'utils/hooks/useOnClickOutside';

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <aside ref={ref}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </aside>
  );
};

export default Dashboard;
