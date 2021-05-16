import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CoutriesComponent } from './coutries/coutries.component';
import { HistoryComponent } from './history/history.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../../_shared/shared/shared.module';
import { UpdateComponent } from './update/update.component';
import { ApiService } from '../../_services/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/_interceptor/token.interceptor';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';



@NgModule({
  declarations: [
    MainComponent,
    CoutriesComponent,
    HistoryComponent,
    StatisticsComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    NgxUiLoaderModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[ApiService,
    { provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
    multi:true},

    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '522082763360-db83ie1mel5gjnj3j4ones10vojn200j.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }  
  ]
})
export class MainModule { }
