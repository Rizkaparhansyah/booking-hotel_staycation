export default number => {
    const formatNumbering = new Intl.NumberFormat("en");
  return formatNumbering.format(number);
}
