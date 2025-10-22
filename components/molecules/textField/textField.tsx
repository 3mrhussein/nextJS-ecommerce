import React, { InputHTMLAttributes } from 'react';
import styles from './textField.module.scss';
import { FiSearch } from 'react-icons/fi';
interface TextFieldProps {
  id: string;
  label?: string;
}

const TextField: React.FC<TextFieldProps & InputHTMLAttributes<HTMLInputElement>> = ({ id, label, ...props }) => {
  return (
    <div className={styles.textFieldContainer}>
      <div className={styles.inputContainer}>
        <input type="text" required={true} id={id} className={styles.input} {...props} />
        <button className={styles.icon}>
          <FiSearch />
        </button>
        {label && !props.placeholder && (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        )}
      </div>
    </div>
  );
};

export default TextField;
