const markets = [
  {
    id: 1,
    title: "Industry",
    content:
      "Softcode Analytics Limited is a data driven company followed by AI implementations and innovations. It operates and competes fiercely in the Data Analytics, Data Outsourcing and the Geo spatial Analytics Industry.",
  },
  {
    id: 2,
    title: "Factors and Key Drivers",
    content:
      "The major factors driving the growth of the market are the advent of machine learning and Artificial Intelligence (AI). An increase in the efficiency of tools, products specialization in data processing and the rapid development of algorithms.",
  },
  {
    id: 3,
    title: "Trends",
    content:
      "The rise of adaptive artificial intelligence (AI systems), such as AI engineering that drives growth and innovation is the latest trends in data analytics. Prioritizing data literacy and putting in places strategies to address the scarcity of data and analytics talent.",
  },
];

const MarketSize = () => {
  return (
    <div className="market-size-section">
      <div className="container">
        <div className="market-header">
          <div className="market-heads">
            <h5>Market Size</h5>
            <h2>Our Clients Come From Everywhere</h2>
          </div>
          <p>
            Data Analytics Market will Hit USD 346.24 Billion by 2030, growing
            at a 30.7% CAGR. The data analytics outsourcing market is expected
            to reach USD 9.46 billion by 2026 at a CAGR of 21.5%. Geospatial
            analytics Market is poised to grow by $ 80. 74 billion during
            2022-2026 at a CAGR of 16
          </p>
        </div>
        <div className="market-boxes">
          {markets.map((market) => (
            <div key={market.id} className="market-box">
              <h4>{market.title}</h4>
              <p>{market.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketSize;
