import React from 'react';
import { IButtonIcon, IconTypes, ILinkIcon } from './icon.types';

type IconProps = IButtonIcon | ILinkIcon;

const Icon: React.FC<IconProps> = (props) => {
  const { icon } = props;

  return <div className="icon-warpper">{icon.iconBadge && <div className="icon-badge"></div>}</div>;
};

export default Icon;
