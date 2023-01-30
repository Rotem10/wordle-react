const getWord = async (): Promise<string> => {
  const response: Response = await fetch('http://localhost:3003/app');
  return response.text();
};

export default getWord;
