import { ComponentsComponent } from './components-page/components.container.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentsDetailComponent } from './components-detail/components-detail.component';


@NgModule({
    imports: [
        ComponentsRoutingModule
    ],
    declarations: [
        ComponentsComponent,
        ComponentsDetailComponent
    ],
    providers: [
    ],
    exports: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule { }
