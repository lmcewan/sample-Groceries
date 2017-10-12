// Snapshot the ~/app.css and the theme
import * as application from "application";
import "ui/styling/style-scope"; // When required, wires for application events.
global.registerModule("app.css", () => require("~/app.css"));
global.registerModule("platform.css", () => require("~/platform.css"));
application.loadAppCss();

require("./vendor-platform");

require("reflect-metadata");
require("@angular/platform-browser");
require("@angular/core");
require("@angular/common");
require("@angular/forms");
require("@angular/http");
require("@angular/router");

require("nativescript-angular/platform-static");
require("nativescript-angular/forms");
require("nativescript-angular/router");
