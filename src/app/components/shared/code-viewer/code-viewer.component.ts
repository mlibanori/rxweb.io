import { Component, Input, OnInit, HostListener, Inject } from '@angular/core';

import 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-markup-templating';

import { CODE_EXAMPLES, EXAMPLE_TITLES, CODE_EXAMPLE_TITLES } from '../../rxweb-translate/const/code-examples';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';

declare var Prism: any;
declare const $: any;
@Component({
    selector:'app-code-viewer',
    templateUrl: './code-viewer.component.html'
})
export class CodeViewerComponent implements OnInit {
    @Input() type: any;
    @Input() identifier: string;
    code: string;
    codeBuilder: any[];
    codes: Array<any>;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private router: Router
    ) {}

    ngOnInit() {
        setTimeout(() => {
            Prism.languages.html = Prism.languages.markup;
            let codeText = new Array<string>();
            let codes = new Array<any>();
            Object.keys(CODE_EXAMPLES[this.type]).forEach(t => {
                let code = CODE_EXAMPLES[this.type][t];
                if (t == "json"){
                    if(this.router.url.includes('/fr/'))
                        code = code["fr"];
                    else
                        code = code["en"];
                }

                if(t == "typescript") {
                    EXAMPLE_TITLES[t] = code['module'] ? 'MODULE' : code["service"] ? 'SERVICE' : EXAMPLE_TITLES[t]
                    code = code['module'] ? code["module"] : code["service"] ? code["service"] : code
                }

                if(t == "ts") {
                    EXAMPLE_TITLES[t] = code['route'] ? 'ROUTING' : code["service"] ? 'SERVICE' : EXAMPLE_TITLES[t]
                    code = code['route'] ? code["route"] : code["service"] ? code["service"] : code
                }
                    
                    
                codeText.push(`<div  class="code-div" >`);
                codeText.push(`<div class="code-section">`)
                codes.push({type:t, title: EXAMPLE_TITLES[t], code: Prism.highlight((code), Prism.languages[t])})
                codeText.push(`<div class="float-right font-size-eight ">${EXAMPLE_TITLES[t]}</div>`)
                codeText.push('<pre class="pre-code features-pre-code"><code innerHTML="' + Prism.highlight((code), Prism.languages[t]) + '</code></pre>')
                codeText.push(`</div>`)
                codeText.push(`</div>`)
            })
            this.codes = codes;
            var template = `<div class="popover max-width-popover" ><div class="arrow max-width-popover" ></div><div class="popover-header">Popover title</div><div class="popover-body max-width-popover padding-zero"><div class="popover-content max-width-popover"></div></div></div>`
            
            //$(`#col-${this.type}`).mouseout((e) => {
            //    console.log(e)
            //})
            $(`#${this.type}`).popover({
                title: `<b>${CODE_EXAMPLE_TITLES[this.type]}</b><i class="float-right fa fa-times" onclick="$('#${this.type}').popover('hide');"></i>`,
                content: codeText.join(''),
                template: template,
                placement: "right",
                trigger: 'click',
                html: true
            });
        }, 500);
    }

    @HostListener('window:scroll', [])
    onWindowScroll($event) {
        console.log("scrolling...");
        // $(this.type).popover('hide');
    }

}
