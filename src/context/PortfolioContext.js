import React, { createContext, useState, useEffect, useContext } from "react";
import staticPortfolio from "../portfolio";

const PortfolioContext = createContext();

export const usePortfolio = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        // In local development, use localhost:5000, in production use relative path
        const apiUrl =
          process.env.NODE_ENV === "development"
            ? "http://localhost:5000/api/portfolio"
            : "/api/portfolio";

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch from API");
        }
        const data = await response.json();
        setPortfolioData(data);
      } catch (err) {
        console.warn(
          "Backend API error, falling back to static portfolio data:",
          err
        );
        setPortfolioData(staticPortfolio);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolioData, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const withPortfolio = (Component) => {
  return (props) => {
    const portfolio = usePortfolio();
    return <Component {...props} portfolio={portfolio} />;
  };
};
