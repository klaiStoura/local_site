System.config({
  "transpiler": "ts",
  "typescriptOptions": {
    "target": "es5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true
  },
  "bundles": {
    "https://unpkg.com/rxjs-system-bundle@5.5.6/Rx.system.min.js": [
      "rxjs",
      "rxjs/*",
      "rxjs/operator/*",
      "rxjs/operators/*",
      "rxjs/observable/*",
      "rxjs/scheduler/*",
      "rxjs/symbol/*",
      "rxjs/add/operator/*",
      "rxjs/add/observable/*",
      "rxjs/add/observable/dom/*",
      "rxjs/util/*"
    ],
    "https://www.telerik.com/kendo-angular-ui/npm/node_modules/@progress/kendo-drawing/dist/systemjs/kendo-drawing.js": [
      "@progress/kendo-drawing",
      "@progress/kendo-drawing/*"
    ],
    "https://www.telerik.com/kendo-angular-ui/npm/node_modules/@progress/kendo-charts/dist/systemjs/kendo-charts.js": [
      "@progress/kendo-charts"
    ],
    "https://www.telerik.com/kendo-angular-ui/npm/node_modules/@progress/kendo-angular-charts/dist/systemjs/kendo-angular-charts.js": [
      "@progress/kendo-angular-charts"
    ],
    "https://www.telerik.com/kendo-angular-ui/npm/node_modules/@progress/kendo-angular-gauges/dist/systemjs/kendo-angular-gauges.js": [
      "@progress/kendo-angular-gauges"
    ],
    "https://www.telerik.com/kendo-angular-ui/npm/node_modules/@progress/kendo-angular-resize-sensor/dist/systemjs/kendo-angular-resize-sensor.js": [
      "@progress/kendo-angular-resize-sensor"
    ],
    "https://www.telerik.com/kendo-angular-ui/npm/node_modules/@telerik/kendo-intl/dist/systemjs/kendo-intl.js": [
      "@telerik/kendo-intl"
    ],
    "https://www.telerik.com/kendo-angular-ui/npm/node_modules/@progress/kendo-angular-intl/dist/systemjs/kendo-angular-intl.js": [
      "@progress/kendo-angular-intl"
    ]
  },
  "meta": {
    "typescript": {
      "exports": "ts"
    },
    "*.json": {
      "loader": "systemjs-json-plugin"
    }
  },
  "map": {
    "app": "app",
    "systemjs-json-plugin": "https://unpkg.com/systemjs-plugin-json@0.3.0",
    "@telerik": "https://www.telerik.com/kendo-angular-ui/npm/node_modules/@telerik",
    "@progress": "https://www.telerik.com/kendo-angular-ui/npm/node_modules/@progress",
    "cldr-data": "https://www.telerik.com/kendo-angular-ui/npm/node_modules/cldr-data",
    "@angular": "https://unpkg.com/@angular",
    "angular2-in-memory-web-api": "https://unpkg.com/angular2-in-memory-web-api",
    "api-ai-javascript": "https://unpkg.com/api-ai-javascript@2.0.0-beta.21/index.js",
    "marked": "https://unpkg.com/marked@0.3.19/lib/marked.js",
    "hammerjs": "https://unpkg.com/hammerjs@2.0.8",
    "pako": "https://unpkg.com/pako@1.0.5",
    "ts": "https://unpkg.com/plugin-typescript@5.3.3/lib/plugin.js",
    "tslib": "https://unpkg.com/tslib@1.7.1",
    "typescript": "https://unpkg.com/typescript@2.4.2/lib/typescript.js",
    "adaptivecards": "https://unpkg.com/adaptivecards@1.0.0/lib/adaptivecards.js",
    "botframework-directlinejs": "https://unpkg.com/botframework-directlinejs@0.9.15/built/directLine.js",
    "@angular/common/http": "https://unpkg.com/@angular/common@5.2.2/bundles/common-http.umd.js",
    "@angular/platform-browser/animations": "https://unpkg.com/@angular/platform-browser@5.2.2/bundles/platform-browser-animations.umd.js",
    "@angular/animations/browser": "https://unpkg.com/@angular/animations@5.2.2/bundles/animations-browser.umd.js",
    "@angular/common": "https://unpkg.com/@angular/common@5.2.2",
    "@angular/compiler": "https://unpkg.com/@angular/compiler@5.2.2",
    "@angular/forms": "https://unpkg.com/@angular/forms@5.2.2",
    "@angular/core": "https://unpkg.com/@angular/core@5.2.2",
    "@angular/platform-browser": "https://unpkg.com/@angular/platform-browser@5.2.2",
    "@angular/platform-browser-dynamic": "https://unpkg.com/@angular/platform-browser-dynamic@5.2.2",
    "@angular/router": "https://unpkg.com/@angular/router@5.2.2",
    "@angular/upgrade": "https://unpkg.com/@angular/upgrade@5.2.2"
  },
  "packages": {
    "app": {
      "main": "./main.ts",
      "defaultExtension": "ts"
    },
    "rxjs": {
      "defaultExtension": false
    },
    "pako": {
      "defaultExtension": "js",
      "main": "./index.js"
    },
    "@angular/common": {
      "main": "/bundles/common.umd.js"
    },
    "@angular/compiler": {
      "main": "/bundles/compiler.umd.js"
    },
    "@angular/forms": {
      "main": "bundles/forms.umd.js",
      "defaultExtension": "js"
    },
    "@angular/core": {
      "main": "/bundles/core.umd.js"
    },
    "@angular/platform-browser": {
      "main": "/bundles/platform-browser.umd.js"
    },
    "@angular/platform-browser-dynamic": {
      "main": "/bundles/platform-browser-dynamic.umd.js"
    },
    "@angular/router": {
      "main": "/bundles/router.umd.js"
    },
    "@angular/upgrade": {
      "main": "/bundles/upgrade.umd.js"
    },
    "@angular/animations": {
      "main": "/bundles/animations.umd.js"
    },
    "@progress/kendo-angular-buttons": {
      "main": "dist/cdn/js/kendo-angular-buttons.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-l10n": {
      "main": "dist/cdn/js/kendo-angular-l10n.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-inputs": {
      "main": "dist/cdn/js/kendo-angular-inputs.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-dropdowns": {
      "main": "dist/cdn/js/kendo-angular-dropdowns.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-popup": {
      "main": "dist/cdn/js/kendo-angular-popup.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-data-query": {
      "main": "dist/cdn/js/kendo-data-query.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-file-saver": {
      "main": "dist/npm/main.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-conversational-ui": {
      "main": "dist/cdn/js/kendo-angular-conversational-ui.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-dateinputs": {
      "main": "dist/cdn/js/kendo-angular-dateinputs.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-date-math": {
      "main": "dist/cdn/js/kendo-date-math.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-dialog": {
      "main": "dist/cdn/js/kendo-angular-dialog.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-grid": {
      "main": "dist/cdn/js/kendo-angular-grid.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-excel-export": {
      "main": "dist/cdn/js/kendo-angular-excel-export.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-label": {
      "main": "dist/cdn/js/kendo-angular-label.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-layout": {
      "main": "dist/cdn/js/kendo-angular-layout.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-menu": {
      "main": "dist/cdn/js/kendo-angular-menu.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-tooltip": {
      "main": "dist/cdn/js/kendo-angular-tooltip.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-toolbar": {
      "main": "dist/cdn/js/kendo-angular-toolbar.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-ripple": {
      "main": "dist/cdn/js/kendo-angular-ripple.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-scrollview": {
      "main": "dist/cdn/js/kendo-angular-scrollview.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-sortable": {
      "main": "dist/cdn/js/kendo-angular-sortable.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-treeview": {
      "main": "dist/cdn/js/kendo-angular-treeview.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-upload": {
      "main": "dist/cdn/js/kendo-angular-upload.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-pdf-export": {
      "main": "dist/cdn/js/kendo-angular-pdf-export.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-react-inputs": {
      "main": "dist/cdn/js/kendo-react-inputs.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-react-dateinputs": {
      "main": "dist/cdn/js/kendo-react-dateinputs.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-react-popup": {
      "main": "dist/cdn/js/kendo-react-popup.js",
      "defaultExtension": "js"
    },
    "@progress/kendo-angular-intl": {
      "defaultExtension": "js"
    }
  }
});