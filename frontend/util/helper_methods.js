export const _parseDate = dateString => {
  let months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  };

  let year = dateString.slice(0,4);
  let month = months[parseInt(dateString.slice(5,7))];

  return `${month}, ${year}`;
};
