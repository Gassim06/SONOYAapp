import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dis',
    loadChildren: () => import('./accueil2/disclamer/dis/dis.module').then( m => m.DisPageModule)
  },
  {
    path: 'ins',
    loadChildren: () => import('./accueil2/inscription/ins/ins.module').then( m => m.InsPageModule)
  },
  {
    path: 'ins2',
    loadChildren: () => import('./accueil2/inscription2/ins2/ins2.module').then( m => m.Ins2PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'discussion/:id',
    loadChildren: () => import('./discussion/discussion/discussion.module').then( m => m.DiscussionPageModule)
  },
  {
    path: 'recrut',
    loadChildren: () => import('./offre/recrut/recrut/recrut.module').then( m => m.RecrutPageModule)
  },
  {
    path: 'list-recrut',
    loadChildren: () => import('./offre/liseRecrut/list-recrut/list-recrut.module').then( m => m.ListRecrutPageModule)
  },
  {
    path: 'searchjob',
    loadChildren: () => import('./offre/Searchjob/searchjob/searchjob.module').then( m => m.SearchjobPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
