/*
chatgpt
✅ ดี
9 = พระเกตุ (โชคเคราะห์, พลังเร้นลับ, ปกป้อง)

11 = ราชาโชค (โชคดีแบบไม่เหนื่อย)

13 = มหาอุจจ์ (ความสูงส่ง, เกียรติยศ)

14 = จักรพรรดิ (ความสำเร็จ, ความยิ่งใหญ่)

15 = กำลังของดาวจันทร์ (เมตตา, ความอ่อนโยน, ศิลปะ ฯลฯ)

16 = โสฬส (ความอุดมสมบูรณ์, ความสุข)

17 = กำลังดาวพุธ (สติปัญญา, การสื่อสารดี)

18 = มหาจักรพรรดิ (อำนาจ, ความยิ่งใหญ่สูงสุด)

19 = กำลังดาวพฤหัสฯ (ความรู้, ครู, ศีลธรรม)

21 = กำลังดาวศุกร์ (ความรัก, ศิลปะ, การเงิน)

⚖️ ปานกลาง
3 = อังคารเล็ก (พลังงาน, ความกล้า แต่มีความรุนแรง)

4 = พุธเล็ก (สติปัญญา แต่ยังไม่มั่นคง)

5 = พฤหัสฯ เล็ก (ธรรมะ แต่ยังไม่เข้มแข็ง)

6 = ศุกร์เล็ก / กำลังพระอาทิตย์ (เสน่ห์, ความมั่นใจแต่ไม่ถึงจุดสูงสุด)

7 = เสาร์เล็ก (ความหนักแน่นแต่ยังไม่สมบูรณ์)

8 = ราหู / กำลังอังคาร (พลังแฝง, การเปลี่ยนแปลง, เสี่ยงทั้งดีและร้าย)

10 = กำลังดาวเสาร์ (สุขุม, รอบคอบ แต่ช้าและเหนื่อย)


❌ แย่
20 = เสาร์กำลังสอง (ความทุกข์มาก, ผิดหวัง, ขมขื่น)

12 = ราหู (มัวเมา, ลุ่มหลง แต่มีเสน่ห์แบบอันตราย)



*/

/*
copilot
ดี
9: พระเกตุ = การส่งเสริมเร่งเร้า, จิตวิญญาณที่ปกป้อง, โชคเคราะห์ที่อุบัติโดยไม่คาดหมาย, ต่างชาติต่างถิ่น, พลังเร้นลับ, อานุภาพที่มองไม่เห็น, ความเปลี่ยนแปลง
11: ราชาโชค (การมีโชคโดยไม่เหนื่อยมาก), สองเท่า (Double), ความซ้ำซาก
13: มหาอุจจ์ : ความสูงส่ง, พลังหนุน, ความใสสว่าง, เกียรติยศชื่อเสียง, จำนวนมาก
14: จักรพรรดิ : ความยิ่งใหญ่ (ไม่สูงสุด), ความสำเร็จ, ความมาก
15: กำลังของดาวจันทร์ (ความหมายเดียวกับดาวจันทร์)
16: โสฬส : ความอุดมสมบูรณ์, ความสุข, สุรุ่ยสุร่าย
18: มหาจักรพรรดิ : ความยิ่งใหญ่สมอัตภาพ, สิ่งสูงสุด, จมไม่ลง, อำนาจ, ความมากมาย
19: กำลังดาวพฤหัสฯ (ความหมายเดียวกับดาวพฤหัสฯ)
21: กำลังดาวศุกร์ (ความหมายเดียวกับดาวศุกร์) ความรัก, การเงิน, ความสนุกสนานร่าเริง, ความสวยงาม, ศิลปะ
ปานกลาง
3: อังคารเล็ก
4: พุธเล็ก
5: พฤหัสฯ เล็ก
6: ศุกร์เล็ก / กำลังพระอาทิตย์
7: เสาร์เล็ก
8: ราหู / กำลังดาวอังคาร
10: กำลังดาวเสาร์ (หมายถึงพระเสาร์น่ะแหละ), ความทุกข์, ความเหนื่อยยาก, ความเนิ่นช้า, ความเก่าแก่, ความสุขุมรอบคอบ
17: กำลังดาวพุธ (ความหมายเดียวกับดาวพุธ)
แย่
12: ราหู : ความลุ่มหลงมัวเมา, อบายมุข, ความมืดมัว
20: เสาร์กำลังสอง : ความเหนื่อยยากมาก, ทุกข์หนัก, ผิดหวังขมขื่น


*/

const birthdaydate = document.getElementById("birthdaydate");
const number7base4_1 = document.getElementById("number7base4_1");
const number7base4_2 = document.getElementById("number7base4_2");
const number7base4_3 = document.getElementById("number7base4_3");
const number7base4_4 = document.getElementById("number7base4_4");
const number7base4_5 = document.getElementById("number7base4_5");
const number7base4_6 = document.getElementById("number7base4_6");
const number7base4_7 = document.getElementById("number7base4_7");
const colorcircle = document.getElementById("circle");

// array number
const arrGreenNumber = ["9", "11", "13", "14", "15", "16", "18", "19", "21"];
const arrYellowNumber = ["3", "4", "5", "6", "7", "8", "10", "17"];
const arrRedNumber = ["12", "20"];

//all fn

const test = () => {
  console.log("click test");
};

const currentDate = (selector) => {
  const currenttime = new Date();
  switch (selector) {
    case "day":
      return currenttime.getDate();
    case "month":
      return currenttime.getMonth() + 1; // +1 เพราะ getMonth() เริ่มที่ 0
    case "year":
      return currenttime.getFullYear() + 543;
    case "current":
      return currenttime;
    default:
      return "Invalid type"; // กรณีที่ไม่ได้ใส่ค่าที่ถูกต้อง
  }
};

const lifeCirclecal = () => {
  //get value form HTMLtag

  const birthdaydate = document.getElementById("birthdaydate").value;

  const number7base4_1 = document.getElementById("number7base4_1").value;
  const number7base4_2 = document.getElementById("number7base4_2").value;
  const number7base4_3 = document.getElementById("number7base4_3").value;
  const number7base4_4 = document.getElementById("number7base4_4").value;
  const number7base4_5 = document.getElementById("number7base4_5").value;
  const number7base4_6 = document.getElementById("number7base4_6").value;
  const number7base4_7 = document.getElementById("number7base4_7").value;

  const arrnumber7base4 = [
    number7base4_1,
    number7base4_2,
    number7base4_3,
    number7base4_4,
    number7base4_5,
    number7base4_6,
    number7base4_7,
  ];

  const year1 = document.getElementById("year1");
  const year2 = document.getElementById("year2");
  const year3 = document.getElementById("year3");
  const year4 = document.getElementById("year4");
  const year5 = document.getElementById("year5");
  const year6 = document.getElementById("year6");
  const year7 = document.getElementById("year7");

  //logic cal year loop

  const arrYear = [year1, year2, year3, year4, year5, year6, year7];

  const stepLoop =
    (currentDate("year") - (new Date(birthdaydate).getFullYear() + 543)) % 7;

  const startLoop = currentDate("year") - (stepLoop - 1);

  for (let i = 0; i < 7; i++) {
    console.log(
      startLoop + i,
      startLoop + i - (new Date(birthdaydate).getFullYear() + 543)
    );
    arrYear[i].innerHTML = `${startLoop + i}, ${
      startLoop + i - (new Date(birthdaydate).getFullYear() + 543)
    }`;
  }

  //logic find 7 colors

  /*style="
  background: conic-gradient(
    yellow 0deg 51.42deg,
    yellow 51.42deg 102.84deg,
    green 102.84deg 154.26deg,
    green 154.26deg 205.68deg,
    green 205.68deg 257.1deg,
    red 257.1deg 308.52deg,
    green 308.52deg 0deg
  );"*/

  let colorResult = [];

  arrnumber7base4.forEach((num) => {
    if (arrGreenNumber.includes(num)) {
      colorResult.push("green");
    } else if (arrYellowNumber.includes(num)) {
      colorResult.push("yellow");
    } else if (arrRedNumber.includes(num)) {
      colorResult.push("red");
    }
  });

  console.log(colorResult);

  colorcircle.setAttribute(
    "style",
    `background: conic-gradient( ${colorResult[0]} 0deg 51.42deg, ${colorResult[1]} 51.42deg 102.84deg, ${colorResult[2]} 102.84deg 154.26deg, ${colorResult[3]} 154.26deg 205.68deg, ${colorResult[4]} 205.68deg 257.1deg, ${colorResult[5]} 257.1deg 308.52deg, ${colorResult[6]} 308.52deg 0deg);`
  );
  //block refresh
  return false;
  //console.log(stepLoop);
};
