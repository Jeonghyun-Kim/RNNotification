const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('ko-kr', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export default formatDate;
