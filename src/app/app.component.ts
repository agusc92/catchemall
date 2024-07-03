import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'catchEmAll';
  logo : string ='assets/media/pokebolas.png';
  logo2 : string ='assets/media/pokemon-logo.webp';
  logoFacebook : string ='assets/media/facebook.png';
  logoInstagram : string ='assets/media/instagram.png';
  logoLinkedin : string ='assets/media/linkedin.png';
}
