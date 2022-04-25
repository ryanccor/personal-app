import styles from './index.module.scss'
import { PropsWithChildren, ReactNode } from 'react';

export const Card = (props : PropsWithChildren<ReactNode>) => {
  return(
    <div className={styles.card}>
      { props.children }
    </div>
  )
}