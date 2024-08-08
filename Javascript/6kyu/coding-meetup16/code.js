function askForMissingDetails(list) {
  return list
    .map(dev => {
      const missingDetail = Object.entries(dev).find(([key, value]) => value === null || value === '');
      if (missingDetail) {
        const [property] = missingDetail;
        return { 
          ...dev, 
          question: `Hi, could you please provide your ${property}.` 
        };
      }
      return null;
    })
    .filter(dev => dev !== null);
}