import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'ip-app-footer'
})
export class IpAppFooter {
    @Prop()
    backgroundColor: string = '#F2EFE3';
    @Prop()
    margin: string = '6em 0 6em 0';
    render() {
        return (
            <div class="o-footer">
                <div class="container">
                    <div class="row">
                        <div class="twelve column">
                            <div class="row">
                                <div class="four columns offset-by-two">
                                    <div class="twelve columns label" style={{ marginTop: '80px' }}>Geen 18, Geen alcohol.</div>
                                    <div class="row">
                                        <div class="six columns" style={{ marginTop: '32px' }}>
                                            <div class="twelve columns label">Klantenservice</div>
                                            <div class="twelve columns label">Privacy</div>
                                            <div class="twelve columns label">Algemene voorwaarden</div>
                                        </div>
                                        <div class="six columns" style={{ marginTop: '32px' }}>
                                            <div class="twelve columns label">Klantenservice</div>
                                            <div class="twelve columns label">Privacy</div>
                                            <div class="twelve columns label">Algemene voorwaarden</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="four columns">
                                    <div class="twelve columns label" style={{ marginTop: '80px' }}>Copyright © 2020 mybnb Alle rechten voorbehouden</div>
                                    <div class="twelve columns label" style={{ marginTop: '32px' }}>Gratis verzending vanaf 12 flessen of 100 euro – Op werkdagen besteld voor 11 uur is morgen in huis</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

