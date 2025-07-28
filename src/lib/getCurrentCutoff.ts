export const getCurrentCutoff = () => {
  const currentDate = new Date().getDate();

  // If date is from 25th onwards, cutoff should be "second", otherwise "first"
  const defaultCutoff = currentDate >= 25 ? "2nd" : "1st";

  return defaultCutoff;
};
