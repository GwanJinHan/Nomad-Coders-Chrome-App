const clock = document.querySelector("h2#clock");
const date = document.querySelector("#date");

const days = ["일", "월", "화", "수", "목", "금", "토"];

function getClock() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;

  date.innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  const year = time.getFullYear();
  const month = time.getMonth();
  const dates = time.getDate();
  const day = time.getDay();
  date.innerText = `${year}년 ${month + 1}월 ${dates}일 ${days[day]}요일`;
}

getClock();
setInterval(getClock, 1000);
