import * as React from 'react';

interface IProps {
  compiler: string
  framework: string
};

export default class App extends React.Component<IProps, any> {

  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
  }
};
