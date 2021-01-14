import { Component, h } from '@stencil/core';

@Component({
  tag: 'ip-app-aanmelden'
})
export class IpAppAanmelden {
  render() {
    return (
      <div class="background background__vineyard001">
        <div class="container">
        <div class="row">
          
          <div class="six columns offset-by-three">
              
              <div id="mc_embed_signup" class="card card__signup">
                <form action="https://koesveld.us7.list-manage.com/subscribe/post?u=2a91a33d2ac968f3cba847e84&amp;id=dd9cbbad75" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">
                  {/* <stencil-route-link url="/">Go to home page</stencil-route-link> */}
                    <h2>Inschrijven</h2>
                    <div><p>Schrijf je in op onze exclusieve wijnlijst.</p></div>
                    <div class="mc-field-group">
                      <input type="email" value="" name="EMAIL" class="required email full-width" id="mce-EMAIL" placeholder="Emailadres"/>
                    </div>
                    <div class="mc-field-group">
                      <input type="text" value="" name="FNAME" class="full-width" id="mce-FNAME" placeholder="Naam"/>
                    </div>
                    <div class="mc-field-group">
                      <input type="text" value="" name="LNAME" class="full-width" id="mce-LNAME" placeholder="Achternaam"/>
                    </div>
                    
                  	<div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style={{ display: 'none' }}></div>
                      <div class="response" id="mce-success-response" style={{ display: 'none' }}></div>
                    </div>
                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_2a91a33d2ac968f3cba847e84_dd9cbbad75" tabindex="-1" value="" /></div>
                    <div class="clear"><input type="submit" value="Inschrijven" name="subscribe" id="mc-embedded-subscribe" class="btn-primary" /></div>
                  </div>
                </form>
              </div>

          </div>
        </div>
        </div>
      </div>
    );
  }
}

