import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'ip-usp-counter'
})
export class IpUspCounter {
    @Prop()
    count: string = '1';
    @Prop()
    backgroundColor: string = 'transparent';
    @Prop()
    margin: string = '0 0 0 0';
    render() {
        return (
            <div class="o-usp-counter" style={{ backgroundColor: this.backgroundColor, margin: this.margin }}>
                <div class="row">
                    <div class="one-third column o-usp-counter__count">
                        {this.count}
                    </div>
                    <div class="two-third column o-usp-counter__intro">
                        <slot/>
                    </div>
                </div>
            </div>
        );
    }
}

