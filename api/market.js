export default async function handler(req, res) {

  const url = "https://yahoo-finance15.p.rapidapi.com/api/v1/markets/quote?symbols=%5ENSEI,%5ENSEBANK,%5EBSESN,NIFTYMIDCAP150.NS,NIFTYSMLCAP250.NS,%5ECRSLDX,%5EINDIAVIX";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "def87488efmsh4220ccf1af1f7d3p16c92bjsn9d9c353fdbb7",
      "X-RapidAPI-Host": "yahoo-finance15.p.rapidapi.com"
    }
  });

  const data = await response.json();

  res.status(200).json(data);
}