export const getJoonguFoods = async (req, res) => {
  console.log("api");
  await fetch(
    "https://api.odcloud.kr/api/15052602/v1/uddi:855807e2-fe8a-4e47-8a5a-ce1894e410d7_201909031553?page=1&perPage=10&serviceKey=%2F8u%2Fpq1M69Ku5DaSfGjicd5scPxmXt6bgQv4uB64DCNv9lk6hjU6K5i6a0H1h6CZEXJldL0xHU9fdWSFNjyUAA%3D%3D"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      res.send(data);
    });
};
