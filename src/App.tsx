import React from 'react';

type Props = {
  title: string;
}

const App: React.FunctionComponent<Props> = (props) => {
  const { title } = props;
  return <div>{title}</div>;
};

export default App;
