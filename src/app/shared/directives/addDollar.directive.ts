import { Directive, ElementRef, Input, Renderer2, OnInit, HostBinding } from '@angular/core';

@Directive({ selector: '[appDollar]' })
export class DollarDirective implements OnInit {
    private isActive_: boolean;
    @Input('appDollar') requiredLicense: number;
    elem: HTMLElement;

    constructor(el: ElementRef, private ren: Renderer2) {
        if (el && el.nativeElement) {
            this.elem = el.nativeElement;
            this.highlight('red');
        }
    }


    @Input()
    @HostBinding('class.isActive')
    set isActive(val: boolean) {
        //randomly adds 'isActive' class
        //when isActive is set TRUE
        if (Math.floor(Math.random() * 10) + 1 > 5) {
            this.isActive_ = true;
        } else {
            this.isActive_ = false;
        }
    }
    get isActive(): boolean {
        return this.isActive_;
    }

    private highlight(color: string) {
        this.elem.style.backgroundColor = color;
    }

    private checkScore(element: HTMLElement) {
        if (this.requiredLicense > 1) {
            this.highlight('green');

            const span = this.ren.createElement('span');
            this.ren.addClass(span, 'dollar');
            span.title = 'Pay your debts !';
            const text = this.ren.createText('[$]');
            this.ren.appendChild(span, text);
            const parent = this.ren.parentNode(element);
            this.ren.appendChild(parent, span);
        }
    }

    ngOnInit():void {
        if (this.elem && this.elem instanceof HTMLAnchorElement) {
            this.checkScore(this.elem);
        }
    }


}