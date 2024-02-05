import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {};

const MasterPageLayout = (props: Props) => {
  return (
    <><Outlet /></>
  );
};

export default MasterPageLayout;