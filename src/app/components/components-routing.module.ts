import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components-page/components.container.component';
import { ButtonComponent } from './button/button.component';
import { HierarchicalTreeDocComponent } from './hierarchical-tree/hierarchical-tree.component';

const routes: Routes = [
    {
        path: 'components',
        component: ComponentsComponent,
        children: [
            { path: '', component: ButtonComponent },
            { path: 'button', component: ButtonComponent },
            { path: 'hierarchical-tree', component: HierarchicalTreeDocComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
