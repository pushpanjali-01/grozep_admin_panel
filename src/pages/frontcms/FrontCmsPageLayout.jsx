import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {};

const FrontCmsPageLayout = (props: Props) => {
  return (
    <><Outlet /></>
  );
};

export default FrontCmsPageLayout;