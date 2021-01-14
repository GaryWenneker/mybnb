import { Component, h } from '@stencil/core';

@Component({
  tag: 'ip-app-faq'
})
export class IpAppFaq {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="twelve column">

            <h1>FAQ</h1>
            <stencil-route-link url="/">Go to home page</stencil-route-link>

          </div>
        </div>
      </div>
    );
  }
}

