import { NgModule } from '@angular/core';

import { PlaneacionGobSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PlaneacionGobSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PlaneacionGobSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PlaneacionGobSharedCommonModule {}
