import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './services/employee.service';


// Personal Access Token: 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

// Task manager UI :- CSS grid/ Flex  -> one project
// Random password generator          -> Another module for proj 2
// Animated button                    -> Reusable entity
// Voulme Unit meter (Analog)         -> Another module for proj 1
// Clubhouse clone                    -> Another Project
// Job Recruiter Dashboard            -> Another module from proj 1


export function createTranslateLoader(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader, // exported factory function needed for AoT compilation
        deps: [HttpClient]
      }
    }),
    HttpClientModule
  ],
  providers:  [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
