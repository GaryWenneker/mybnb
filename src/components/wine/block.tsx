import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'ip-wine-block'
})
export class IpWineBlock {

    @Prop()
    intro: string;

    @Prop()
    title: string;
    
    render() {
        return (
            <div class="o-wine o-wine-block-item row">
                <div class="o-wine-block-item__image"></div>
                <div class="o-wine-block-item__block">
                    <div class="o-wine-block-item__intro">{this.intro}</div>
                    <div class="o-wine-block-item__title">{this.title}</div>
                    <div class="o-wine-block-item__price">{`€21,25`}</div>
                    <div class="o-wine-block-item__itemsleft">8 flessen over</div>
                    <div class="o-wine-block-item__button">Inschrijven</div>
                    <div class="o-wine-block-item__link">
                        <stencil-route-link url="/">Bekijken</stencil-route-link>
                    </div>
                </div>
            </div>
        );
    }
}

