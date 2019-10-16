import React, { useState, useEffect } from "react";
import getService from "../util/service";
import Title from "./title";

const HelloWorld = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const quotesResponse = await getService("/quotes");

      setQuotes(quotesResponse.quotes);
    };

    fetchQuotes();
  }, []);

  let dataToRender = quotes.map(quote => {
    return <Title key={quote._id} {...getTitleProps(quote)} />;
  });

  return dataToRender;
};

const getTitleProps = quote => {
  return {
    title: quote.author
  };
};

export default HelloWorld;
