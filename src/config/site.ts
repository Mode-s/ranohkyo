export const siteConfig = {
  name: "嵐扇居", //　企業名、店舗名
  title: "嵐扇居",
  description: "京都・嵐山の宿泊施設「嵐扇居」。阪急嵐山駅徒歩3分。シングル・ツイン・トリプルの客室をご用意し、Wi-Fi・キッチン・洗濯機など設備も充実。竹林や渡月橋への観光拠点としてご利用いただけます。",
  url: "https://ranohkyo.pages.dev/",      // 本番URL（OGPの絶対パス生成にも使う）
  ogImage: "/ogp.png",
  lang: "ja",
  locale: "ja_JP",
  // SNS
  sns: {
    x: "", //　x - URL
    instagram: "", //　instagram - URL
    line: "", //　line - URL
    facebook: "", //　facebook - URL
    booking: "https://www.booking.com/hotel/jp/lan-weng-ju-ranoukiyo-ranohkyo-jing-du-shi.ja.html?aid=356980&label=gog235jc-10CAsodUIqbGFuLXdlbmctanUtcmFub3VraXlvLXJhbm9oa3lvLWppbmctZHUtc2hpSBVYA2h1iAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAKPlenRBsACAdICJDMyZDc3ZGQzLTQwODUtNGU1My1hMzgyLTA5YmYwMDIwODJlZtgCAeACAQ&sid=685169c01fbff11bf1389711a5923753&checkin=2026-06-24&checkout=2026-06-25&dest_id=-235402&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&soh=1&sr_order=popularity&srepoch=1782205095&srpvid=d5033f085bac00a7&type=total&ucfs=1&#no_availability_msg",
    airbnb: "https://www.airbnb.jp/rooms/960704929704328758?source_impression_id=p3_1782205124_P3fHv-dpVLgz21al",
    trivago: "https://www.trivago.jp/ja/oar/%E3%83%99%E3%83%83%E3%83%89-%E3%82%A2%E3%83%B3%E3%83%89-%E3%83%96%E3%83%AC%E3%83%83%E3%82%AF%E3%83%95%E3%82%A1%E3%82%B9%E3%83%88-%E5%B5%90%E7%BF%81%E5%B1%85%E3%82%89%E3%82%93%E3%81%8A%E3%81%86%E3%81%8D%E3%82%87-ranohkyo-%E4%BA%AC%E9%83%BD?search=100-40286096",
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