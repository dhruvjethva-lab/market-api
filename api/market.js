export default async function handler(req, res) {
  try {
    const url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=%5ENSEI,%5ENSEBANK,%5EBSESN";

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch data",
      details: error.message
    });
  }
}
