// src/newsData.js
export const news = [
  {
    id: "1",
    title: "뉴욕 연준 소비자 기대 설문조사",
    date: "6월 10, 2024",
    source: "financialjuice.com",
    tags: ["US Bonds", "US Indexes", "USD"],
    content: "Detailed information about the 뉴욕 연준 소비자 기대 설문조사...",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: "2",
    title: "CMS Energy 이사, 회사 주식 14만 3천 달러 매각",
    date: "June 10, 2024",
    source: "investing.com",
    tags: ["Company News", "Stocks"],
    content: "Detailed information about CMS Energy 이사 주식 매각...",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: "3",
    title: "아메리칸스코퍼레이션, 자회사 아메리칸가본사 특별배당 배당기일 조정",
    date: "June 10, 2024",
    source: "investing.com",
    tags: ["Dividends", "Corporate Actions"],
    content: "Detailed information about 아메리칸스코퍼레이션 배당기일 조정...",
    image: "https://via.placeholder.com/600x400",
  },
];

export const additionalNews = Array.from({ length: 250 }, (_, i) => ({
  id: `${i + 4}`,
  title: `News Title ${i + 4}`,
  date: `Date ${i + 4}`,
  source: `Source ${i + 4}`,
  tags: ["Tag1", "Tag2"],
  content: `Detailed information about News Title ${i + 4}`,
  image: "https://via.placeholder.com/600x400",
}));

export const allNews = [...news, ...additionalNews];
