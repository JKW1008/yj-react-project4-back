export const getJoongufoods = async (req, res) => {
  fetch(
    "https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=%EC%A4%91%EA%B5%AC",
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      res.json({ ok: "true", data });
    });
};
