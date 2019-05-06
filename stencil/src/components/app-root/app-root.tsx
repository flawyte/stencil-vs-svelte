import { h, Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false
})
export class AppRoot {
  render() {
    return (
      <h1>Hello <span style={{ color: 'gold' }}>Stencil</span>!</h1>
    );
  }
}
