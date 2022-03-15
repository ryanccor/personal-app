import type { NextPage, GetServerSideProps } from 'next';
import Image, { ImageProps } from 'next/image';
import styles from './index.module.scss'
import Logo from '../../public/images/logo_alana_15.svg'
import { AppProps } from 'next/app';

type ImgProps = ImageProps & {
  style: string
}

export const Img = ({ src, alt, style }: ImgProps ) =>{  

  return (
    <div className={style}>
      <Image
        src={src}
        alt={alt}
      ></Image>
    </div>
)}
