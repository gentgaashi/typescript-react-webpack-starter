import * as React from 'react';

interface HelloProps {
  compiler: string
  framework: string
};

export default class App extends React.Component<HelloProps, any> {

  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
  }
};
