import { ComponentsComponent } from './components-page/components.container.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
    imports: [
        ComponentsRoutingModule
    ],
    declarations: [
        ComponentsComponent
    ],
    providers: [
    ],
    exports: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule { }
