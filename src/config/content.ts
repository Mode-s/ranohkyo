import type { ImageMetadata } from 'astro';
import { siteConfig } from './site';

//　ロゴ画像
import logoImg from '../assets/images/logo.svg';

//　メニュー / プランイメージ画像
import item01 from '../assets/images/in-room02.png';
import item02 from '../assets/images/in-room08.png';
import item03 from '../assets/images/in-room16.png';
import item04 from '../assets/images/in-room17.png';
import item05 from '../assets/images/in-room04.png';

type Logo = { src: ImageMetadata; alt: string; href: string };
type NavItem = { label: string; href: string };
type Item = { image: ImageMetadata; name: string; price?: string; description?: string };
type Room = { name: string; bedType: string; price: number; description: string };
type Amenity = { label: string; icon: string };

export const content = {
  header: {
    logo: {
      src: logoImg,
      alt: siteConfig.name,
      href: "/",
    } satisfies Logo,
    nav: [
      { label: "料金",   href: "#price" },
      { label: "お部屋",    href: "#rooms" },
      { label: "基本情報",    href: "#info" },
      { label: "アクセス",  href: "#access" },
      { label: "お問い合わせ", href: "#contact" },
    ] satisfies NavItem[],
  },
  //　メニュー
  menu: {
    title: "お部屋",
    items: [
      { image: item01, name: "シングルルーム", price: "￥12,000～", description: "ベッドタイプ：シングル" },
      { image: item02, name: "ツインルーム", price: "￥14,500～", description: "ベッドタイプ：シングル２台" },
      { image: item03, name: "ツインルーム", price: "￥14,500～", description: "ベッドタイプ：シングル２台" },
      { image: item04, name: "ツインルーム", price: "￥14,500～", description: "ベッドタイプ：シングル２台" },
      { image: item05, name: "トリプルルーム", price: "￥15,000～", description: "布団" },
    ] satisfies Item[],
  },
  price: {
    rooms: [
      { name: 'シングル', bedType: 'シングルベッド', price: 12000, description: '※料金はご宿泊日・シーズン・予約状況により変動いたします。' },
      { name: 'ツイン', bedType: 'シングルベッド２台', price: 14500, description: '※料金はご宿泊日・シーズン・予約状況により変動いたします。' },
      { name: 'トリプル', bedType: '布団３組', price: 15000, description: '※料金はご宿泊日・シーズン・予約状況により変動いたします。' },
    ] satisfies Room[],
    amenities: [
      { label: '寝室のドアの鍵', icon: 'mdi:door-closed-lock' },
      { label: 'Wi-Fi', icon: 'mdi:wifi' },
      { label: '洗濯機 / 乾燥機', icon: 'mdi:washing-machine' },
      { label: 'キッチン', icon: 'mdi:stove' },
      { label: 'エアコン', icon: 'mdi:air-conditioner' },
      { label: '冷蔵庫', icon: 'mdi:fridge' },
      { label: 'ヘアドライヤー', icon: 'mdi:hair-dryer' },
    ] satisfies Amenity[],
  },
} as const;