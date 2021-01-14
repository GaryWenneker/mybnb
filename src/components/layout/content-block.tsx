import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'ip-content-block'
})
export class IpAppHoe {
    @Prop()
    backgroundColor: string = '#ffffff';
    @Prop()
    margin: string = '6em 0 6em 0';
    render() {
        return (
            <div class="o-content-block" style={{ backgroundColor: this.backgroundColor, margin: this.margin }}>
                <div class="container">
                    <div class="row">
                        <div class="twelve column">
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

