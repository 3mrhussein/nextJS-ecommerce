/* eslint-disable no-unused-vars */
import { IconType } from 'react-icons';

export type IButtonIcon = {
  icon: IIcon;
  onClick?: () => void;
};

export type ILinkIcon = {
  icon: IIcon;
  href: 'string';
};

interface IIcon {
  iconBadge?: IIconBadge;
  icon: IconType;
  type: IconTypes;
}

type IIconBadge = {
  textColor?: string;
  backgroundColor?: string;
  padding?: number;
  textContent?: string;
};

export enum IconTypes {
  Button = 'button',
  Link = 'link',
  Static = 'static',
}
