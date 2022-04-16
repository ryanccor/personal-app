import styles from './index.module.scss'
import { SearchBtn } from '../SearchBtn';
import { PropsWithChildren, ReactNode, ReactPropTypes } from 'react';

export const Card = (props : PropsWithChildren<ReactNode>) => {
  return(
    <div className={styles.card}>
      { props.children }
    </div>
  )
}