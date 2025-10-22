import Logo from '@/components/atoms/logo/logo';
import TextField from '@/components/molecules/textField/textField';
import React from 'react';
import styles from './header.module.scss';
const Header = () => {
  return (
    <header>
      <div className={styles['header-main']}>
        <div className={styles['header-logo']}>
          <Logo />
        </div>
        <div className={styles['header-search']}>
          <TextField id="header-search" label="Search ecommerce" />
        </div>
      </div>
    </header>
  );
};

export default Header;
