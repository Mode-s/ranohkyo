import type { ImageMetadata } from 'astro';
import { siteConfig } from './site';

//　ロゴ画像
import logoImg from '../assets/images/logo.svg';

//　メニュー / プランイメージ画像
import item01 from '../assets/images/logo.png';
import item02 from '../assets/images/logo.png';
import item03 from '../assets/images/logo.png';
import item04 from '../assets/images/logo.png';
import item05 from '../assets/images/logo.png';

type Logo = { src: ImageMetadata; alt: string; href: string };
type NavItem = { label: string; href: string };
type Item = { image: ImageMetadata; name: string; price?: string; description?: string };

export const content = {
  header: {
    logo: {
      src: logoImg,
      alt: siteConfig.name,
      href: "/",
    } satisfies Logo,
    nav: [
      { label: "料金",   href: "#" },
      { label: "お部屋",    href: "#" },
      { label: "基本情報",    href: "#" },
      { label: "アクセス",  href: "#" },
      { label: "お問い合わせ", href: "#" },
    ] satisfies NavItem[],
  },
  //　メニュー
  menu: {
    title: "お部屋",
    items: [
      { image: item01, name: "商品A", price: "10", description: "あ" },
      { image: item02, name: "商品B", price: "20", description: "い" },
      { image: item03, name: "商品C", price: "30", description: "う" },
      { image: item04, name: "商品D", price: "40", description: "え" },
      { image: item05, name: "商品E", price: "50", description: "お" },
    ] satisfies Item[],
  },
} as const;