import { ElementRef, Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { PageViewerComponent } from "src/app/components/shared/page-viewer/page-viewer.component";
import { ActivatedRoute } from "@angular/router";

import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
import { environment } from 'src/environments/environment';
import { ApplicationBroadcaster } from '@rx/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  templateUrl: './page.component.html',
  entryComponents: [PageViewerComponent],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('500ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('500ms', style({opacity: 0}))
        ])
      ]
    )
  ],
})
export class PageComponent implements OnInit {
  links:any;
  showComponent: boolean = false;
  options: any = { responseType: 'text' };
  codeContent: any = "";
  jsonContent: any = "";
  activeTab: string = "";
  dynamicElement:string;
  element: HTMLElement;
  typeName: string;
  gitUrl:string;
  validationName: string;
  showViewer: boolean = false;
  templateDrivenType: string = "directives";
  showExample: boolean = true;
  mainType: string;
  rightSidebarLinks:any;
  constructor(
    private http: HttpClient, private elementRef: ElementRef,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private applicationBroadcaster:ApplicationBroadcaster,
    private sanitizer: DomSanitizer
  ) {
 this.applicationBroadcaster.topSubject.subscribe(t=>{
      this.rightSidebarLinks = t.rightSidebarLinks;
      this.gitUrl =  t.gitDocPath;
    })

    this.element = elementRef.nativeElement as HTMLElement;
    activatedRoute.params.subscribe(t => {
      if (t["typeName"])
        this.typeName = t["typeName"];
      if (t["templateDrivenType"])
        this.templateDrivenType = t["templateDrivenType"];
      this.bind();
    })
    activatedRoute.queryParams.subscribe(params => {
      if (params.showExample)
        this.showExample = params.showExample == "true" ? true : false;
      else
        this.showExample = true;
      this.bind();
    });
  }
  ngOnInit(): void {
    this.http.get('assets/json/rxweb-links.json?v=' + environment.appVersion).subscribe((response: any) => {    
      this.links = response;
    });
  }

  nextLink()
  {
    var currentObjIndex = this.links.findIndex(a => a.link ==  location.pathname);
    if(currentObjIndex != undefined)
    {
     currentObjIndex++;
     var nextObj = this.links[currentObjIndex];
     this.router.navigate([nextObj.link]);    
    }
  }

  previousLink()
  {
    var currentObjIndex = this.links.findIndex(a => a.link ==  location.pathname);
    if(currentObjIndex != undefined)
    {
     currentObjIndex--;
     var nextObj = this.links[currentObjIndex];
     this.router.navigate([nextObj.link]);    
    }
  }
  bind() {
    this.showViewer = false;
    let splitedArray = location.pathname.split('/');
    this.mainType = splitedArray[1];
    this.validationName = splitedArray[2];
    let titleString = "";
    let codeUri = "";
    let htmlUri = ""
    if (this.mainType != "reactive-dynamic-forms" && this.mainType != "rxweb-storage" && this.mainType != "rxweb-localization" && this.mainType != "rxweb-router" &&  this.mainType != "vue"  && this.mainType != "rxweb-http" && this.mainType != "rxweb-generics" && this.mainType != "rxweb-sanitizers") {
      switch (splitedArray[3]) {
        case "decorators":
          codeUri = 'assets/json/generator/' + this.validationName + '/' + this.typeName + '.json?v=' + environment.appVersion;
          htmlUri = 'assets/json/generator/' + this.validationName + '/' + this.validationName + '-' + this.typeName + '.json?v=' + environment.appVersion;
          titleString = "decorator";
          break;
        case "validators":
          codeUri = 'assets/json/generator/' + this.validationName + '/' + this.typeName + '.json?v=' + environment.appVersion;
          htmlUri = 'assets/json/generator/' + this.validationName + '/' + this.validationName + '-' + this.typeName + '.json?v=' + environment.appVersion;
          titleString = "validator";
          break;
        case "template-driven":
          codeUri = 'assets/json/generator/' + this.validationName + '/' + this.typeName + '-' + this.templateDrivenType + '.json?v=' + environment.appVersion;
          if (this.templateDrivenType == "decorators")
            htmlUri = 'assets/json/generator/' + this.validationName + '/' + this.typeName + '/' + this.validationName + '-validation-' + this.templateDrivenType + '.json?v=' + environment.appVersion;
          else if (this.templateDrivenType == "directives")
            htmlUri = 'assets/json/generator/' + this.validationName + '/' + this.typeName + '/' + this.validationName + '-validation-' + this.templateDrivenType + '.json?v=' + environment.appVersion;
          titleString = "template-driven";
          break;
      }
      document.title = splitedArray[2]+ " - RxWeb Docs" ;
    }
    else if(this.mainType == "vue"){
      let vuesSplitedArray = location.pathname.split('/');
      codeUri = 'assets/json/generator/' + vuesSplitedArray[3] + '/'+  'decorators' + '.json';
      htmlUri = 'assets/json/generator/vue/'  + vuesSplitedArray[3]  + '/'+ vuesSplitedArray[3] + '-' + 'vue' + '.json';
      titleString = "validator";
      document.title = splitedArray[3]+ " - RxWeb Docs" ;
    }
    else{
    
      let dynamicsplitedArray = location.pathname.split('/');
      codeUri = 'assets/json/generator/' + dynamicsplitedArray[3] + '/'+  'validators' + '.json';
      htmlUri = 'assets/json/generator/'  + dynamicsplitedArray[3]  + '/'+ dynamicsplitedArray[3] + '-' + 'validators' + '.json';
      titleString = "validator";
      document.title = splitedArray[3]+ " - RxWeb Docs" ;
    }

      this.http.get(codeUri, this.options).subscribe(response => {
        this.codeContent = JSON.parse(response.toString());   
        if(this.router.url.includes("vue")){
           this.codeContent.htmlContent = this.codeContent.htmlContent.replace("Through Angular FormBuilder service we create FormGroup in the component.","");
           this.codeContent.htmlContent = this.codeContent.htmlContent.replace("Next, we need to write html code.","");
        }       
        this.http.get(htmlUri, this.options).subscribe((responseObj: object) => {
          this.jsonContent = JSON.parse(responseObj.toString());
          this.showComponent = true;
          this.activeTab = splitedArray[3];
          this.applicationBroadcaster.topSubject.next({...this.codeContent,activeTab:this.activeTab,mainType:this.mainType,validationName:this.validationName,templateDrivenType:this.templateDrivenType})
          this.showViewer = true;
        });
      });
  }

  route(typeName: string, templateDrivenType?: string) {
   
    if (templateDrivenType)
    {
      this.router.navigate(['/', this.mainType, this.validationName, typeName, templateDrivenType])
      this.templateDrivenType = templateDrivenType;  
    }
    else
      this.router.navigate(['/', this.mainType, this.validationName, typeName])
  }
  scrollTo(section) {
    window.location.hash = section;
  }


  routeExample() {
    this.showExample = !this.showExample;
    var splitedArray = location.pathname.split('/');
    if (splitedArray[4])
      this.router.navigate(['/', splitedArray[1], splitedArray[2], splitedArray[3], splitedArray[4]], { queryParams: { showExample: this.showExample }, replaceUrl: false });
    else
      this.router.navigate(['/', splitedArray[1], splitedArray[2], splitedArray[3]], { queryParams: { showExample: this.showExample }, replaceUrl: false });
  }
}
