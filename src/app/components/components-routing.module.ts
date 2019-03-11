import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components-page/components.container.component';
import { ComponentsDetailComponent } from './components-detail/components-detail.component';
import { ButtonComponent } from './button/button.component';

const routes: Routes = [
    {
        path: 'components',
        component: ComponentsComponent,
    },
    {
        path: 'components/:type',
        component: ButtonComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
