const showPriceHistory = productPrice => {
    const sorted = productPrice.sort((onePrice, nextPrice) => {
      const onePriceDate = new Date(onePrice.date);
      const nextPriceDate = new Date(nextPrice.date);
      return nextPriceDate - onePriceDate;
    });
    return sorted;
  };
  
  export default showPriceHistory;
  