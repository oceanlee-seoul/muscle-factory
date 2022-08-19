const quotes = [
  {
    quote: "무엇인가 시작하려면 입을 다물고 몸을 움직여라",
    author: "월트 디즈니",
  },
  {
    quote: "위대함을 원한다면 그 위대함 속에 시간을 담으면 됩니다.",
    author: "랄프 로렌",
  },
  {
    quote: "한계는 저 하늘 너머야 너는 알지 계속 달려야하는 걸",
    author: "노토리어스 비아이지",
  },
  {
    quote: "게으름은 인간을 패배하게 만드는 주범이다.",
    author: "알베르 카뮈",
  },
  {
    quote: "한 번 포기하면 습관이 된다. 절대 포기하지 말아라.",
    author: "마이클 조던",
  },
  {
    quote:
      "세상에 단 한 가지 불가능한 것이 있다면, 그것은 포기하지않는 남자를 꺾는 것이다.",
    author: "코너 맥그리거",
  },
  {
    quote: "시간이 없습니다. 누군가를 위해 당신의 삶을 버리지 마세요.",
    author: "스티브 잡스",
  },
  {
    quote: "행동이 따르지 않는 한 말은 쓸데없는 짓이다.",
    author: "체 게바라",
  },
  {
    quote:
      "우리는 이론을 만들지 말아야 한다. 우리가 해야 할 일은 오직 행동이다.",
    author: "체 게바라",
  },
  {
    quote: "모든 성취의 시작점은 갈망이다.",
    author: "나폴레옹",
  },
  {
    quote: "마치지 않고 죽어도 되는 일만 내일로 미뤄라.",
    author: "파블로 피카소",
  },
  {
    quote: "성공한 전사는 면도날 같은 초점을 지닌 평범한 사람이다.",
    author: "브루스 리",
  },
  {
    quote: "왔노라, 보았노라, 이겼노라.",
    author: "줄리어스 시저",
  },
  {
    quote: "현실은 틀렸다. 당신의 꿈이 진짜다.",
    author: "투팍",
  },
  {
    quote:
      "나와의 싸움에서 이기는 것, 중요하다. 하지만 매번 내게 싸움을 걸 수 있는 용기. 그것이 더 중요하다.",
    author: "매니 패퀴아오",
  },
  {
    quote: "간단해요. 흔들리면, 그것은 지방입니다.",
    author: "아놀드 슈왈제네거",
  },
  {
    quote:
      "우리는 이론을 만들지 말아야 한다. 우리가 해야 할 일은 오직 행동이다.",
    author: "체 게바라",
  },
];

const quote = document.querySelector(".footer span:first-child");
const author = document.querySelector(".footer span:last-child");

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQoute.quote;
author.innerText = todaysQoute.author;
