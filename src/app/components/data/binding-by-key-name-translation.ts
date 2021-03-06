export const BINDING_BY_KEY_NAME_TRANSLATIONS = [
    {
        "name": "src",
        "type": "folder",
        "exampleType": "key-name",
        "childrens": [
            {
                "name": "app",
                "type": "folder",
                "childrens": [
                    {
                        "name": "global",
                        "type": "folder",
                        "childrens": [
                            {
                                "name": "global.component.ts",
                                "type": "file",
                                "active": true,
                                "contentType": 'typescript',
                                "ref": "key-name",
                                "content": "import { Component } from \"@angular\/core\";\r\nimport { translate } from \"@rxweb\/translate\";\r\n\r\n@Component({\r\n  templateUrl: \".\/global.component.html\",\r\n})\r\nexport class GlobalComponent {\r\n  \r\n  @translate()\r\n  multilingualContent: { [key: string]: any };\r\n\r\n  keys: any[] = ['bindingByKeyNameLabel','text.bindingByKeyNameDescription'];\r\n\r\n}"
                            },
                            {
                                "name": "global.component.html",
                                "type": "file",
                                "ref": "key-name",
                                "contentType": 'html',
                                "content": "<div *ngFor=\"let item of keys; let i = index\">\r\n\t<div class=\"work-sanslight m-2\">\r\n\t\t<p [class.example-title]=\"i == 0\" [class.px-lg-3]=\"i != 0\">{{multilingualContent.get(item)}}<\/p>\r\n\t<\/div>\r\n<\/div>"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "assets",
                "type": "folder",
                "childrens": [
                    {
                        "name": "i18n",
                        "type": "folder",
                        "childrens": [
                            {
                                "name": "en",
                                "type": "folder",
                                "childrens": [
                                    {
                                        "name": "global.en.json",
                                        "type": "file",
                                        "contentType": 'json',
                                        "ref": "key-name",
                                        "content": "{\r\n  \"bindingByKeyNameLabel\": \"Clean Architecture\",\r\n  \"text\":{\r\n    \"bindingByKeyNameDescription\": \"RxWeb follows design principles that produce code with clear separation of concerns. This results in well-structured code that is easily testable.\"\r\n  }\r\n}"
                                    }
                                ]
                            },
                            {
                                "name": "fr",
                                "type": "folder",
                                "childrens": [
                                    {
                                        "name": "global.fr.json",
                                        "type": "file",
                                        "contentType": 'json',
                                        "ref": "key-name",
                                        "content": "{\r\n  \"bindingByKeyNameLabel\": \"Architecture propre\",\r\n  \"text\": {\r\n    \"bindingByKeyNameDescription\": \"RxWeb suit les principes de conception qui produisent du code avec une s\u00E9paration claire des pr\u00E9occupations. Il en r\u00E9sulte un code bien structur\u00E9 qui est facilement testable.\"\r\n  }\r\n}"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "rxweb.module.ts",
                "contentType": 'typescript',
                "type": "file", "ref": "key-name",
                "content": "import { NgModule } from '@angular\/core'; \r\nimport { RxTranslateModule } from '@rxweb\/translate' \r\n \r\n@NgModule({ \r\n    imports: [ \r\n        RxTranslateModule.forRoot({ \r\n            cacheLanguageWiseObject: true, \r\n            globalFilePath: 'assets\/i18n\/{{language-code}}\/global.{{language-code}}.json', \r\n               }) \r\n    ], \r\n    exports: [RxTranslateModule], \r\n}) \r\nexport class RxWebModule { }\r\n\r\n\/\/ Import this RxWebModule in your root module",
            }
        ]
    }
]

