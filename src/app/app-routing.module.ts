import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lupa',
    loadChildren: () => import('./lupa/lupa.module').then( m => m.LupaPageModule)
  },
  {
    path: 'tambah',
    loadChildren: () => import('./tambah/tambah.module').then( m => m.TambahPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'keluhan',
    loadChildren: () => import('./keluhan/keluhan.module').then( m => m.KeluhanPageModule)
  },
  {
    path: 'p-keluhan',
    loadChildren: () => import('./p-keluhan/p-keluhan.module').then( m => m.PKeluhanPageModule)
  },
  {
    path: 'r-keluhan',
    loadChildren: () => import('./r-keluhan/r-keluhan.module').then( m => m.RKeluhanPageModule)
  },
  {
    path: 'rate',
    loadChildren: () => import('./rate/rate.module').then( m => m.RatePageModule)
  },
  {
    path: 'ganti-sandi',
    loadChildren: () => import('./ganti-sandi/ganti-sandi.module').then( m => m.GantiSandiPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'ubah-profil',
    loadChildren: () => import('./ubah-profil/ubah-profil.module').then( m => m.UbahProfilPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
