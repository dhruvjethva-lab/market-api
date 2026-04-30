export default async function handler(req, res) {
  try {
    const response = await fetch(
  "https://yahoo-finance15.p.rapidapi.com/api/v1/markets/quote?symbols=%5ENSEI,%5ENSEBANK,%5EBSESN",
      {
        method: "GET",
        headers: {
          headers: {
  "X-RapidAPI-Key": "def87488efmsh4220ccf1af1f7d3p16c92bjsn9d9c353fdbb7",
  "X-RapidAPI-Host": "yahoo-finance15.p.rapidapi.com"
        }
      }
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: "API failed",
      details: error.message
    });
  }
}
