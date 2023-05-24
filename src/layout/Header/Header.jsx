import styles from './styles.module.sass';
import { useState } from 'react';
import logo from '../../assets/images/logo-header.svg';
import { NavBlock } from '../../components/NavBlock/NavBlock';
import { ContactsList } from '../../components/ContactsList/ContactsList';
import useMediaQuery from '../../utils/useMediaQuery';
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu';
import { AddressMenu } from '../../components/AddressMenu/AddressMenu';

export const Header = () => {
  const isTablet = useMediaQuery('(max-width: 950px)');
  const [isBurgerOff, setIsBurgerOff] = useState(true);
  const [isAddressOff, setIsAddressOff] = useState(true);

  const handleClick = () => {
    setIsBurgerOff(!isBurgerOff);
  };

  const handleClickAddress = () => {
    setIsAddressOff(!isAddressOff);
  };

  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="Логотип центра речи Татьяны Горячкиной"
        className={styles.logo}
      />
      {isTablet ? (
        <button
          className={isBurgerOff ? styles.burgerBtn : styles.burgerBtnClose}
          onClick={handleClick}
        />
      ) : (
        <NavBlock header="true" />
      )}
      {isTablet ? (
        <address className={styles.address}>
          <a className={styles.link} href="tel:+79683829463" rel="noreferrer">
            <div className={styles.iconPhone} />
            +7 (968) 382 94 63
          </a>
          <button
            type="button"
            className={styles.btnContacts}
            onClick={handleClickAddress}
          />
        </address>
      ) : (
        <ContactsList />
      )}

      <BurgerMenu isBurgerOff={isBurgerOff} setIsBurgerOff={setIsBurgerOff} />
      <AddressMenu
        isAddressOff={isAddressOff}
        setIsAddressOff={setIsAddressOff}
      />
    </header>
  );
};
