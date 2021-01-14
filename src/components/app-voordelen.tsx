import { Component, h } from '@stencil/core';

@Component({
  tag: 'ip-app-voordelen'
})
export class IpAppVoordelen {
  render() {
    return (
      <div>
        <div class="overlay active"></div>
        <div class="container">
          <div class="row">
            <div class="twelve column">

              <h1>Voordelen</h1>
              <stencil-route-link url="/">Go to home page</stencil-route-link>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

