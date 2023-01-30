const fetchWord = async (): Promise<string> => {
  const response: Response = await fetch('http://localhost:3003/app');
  return response.text();
};

export default fetchWord;
