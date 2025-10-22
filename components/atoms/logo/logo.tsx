import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo.jpeg';
import styles from './logo.module.scss';
const Logo = () => {
  return (
    <Link href="/">
      <Image className={styles.image} src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;
