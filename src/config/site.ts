export const siteConfig = {
  name: "嵐扇居", //　企業名、店舗名
  title: "嵐扇居",
  description: "ディスクリプション文",
  url: "https://example.com",      // 本番URL（OGPの絶対パス生成にも使う）
  ogImage: "/ogp.png",
  lang: "ja",
  locale: "ja_JP",
  // SNS
  sns: {
    x: "", //　x - URL
    instagram: "", //　instagram - URL
    line: "", //　line - URL
    facebook: "", //　facebook - URL
  },

  //　基本情報
  shop: {
    tel: {
      display: "090-9017-9000", //　表示用
      link: "09090179000", //　tel：リンク用（ハイフンなし）
    },
    email: "", //　メールアドレス
    address: "〒616-0004 京都府京都市西京区嵐山中尾下町32-5", //　住所
    access: "阪急嵐山駅徒歩3分", //　最寄駅
    checkin: "15:00から22:00まで", //　営業時間
    checkout: "05:00から11:00まで", //　定休日
    reservationUrl: "", //　予約ページURL
    website: "",        //　ホームページURL（別サイトがある場合）
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.886476838116!2d135.679517!3d35.009546799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001075396f2d771%3A0x82f1e7f0dcba1705!2z44CSNjE2LTAwMDQg5Lqs6YO95bqc5Lqs6YO95biC6KW_5Lqs5Yy65bWQ5bGx5Lit5bC-5LiL55S677yT77yS4oiS77yV!5e0!3m2!1sja!2sjp!4v1782200679828!5m2!1sja!2sjp", //　Googleマップ埋め込み用のURL
  },
} as const;