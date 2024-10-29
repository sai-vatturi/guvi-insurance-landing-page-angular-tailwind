import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutComponent } from './components/about/about.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { WhyusComponent } from './components/whyus/whyus.component';
import { ExpertComponent } from './components/expert/expert.component';
import { ReviewComponent } from './components/review/review.component';
import { BlogandnewsComponent } from './components/blogandnews/blogandnews.component';
import { ReadyComponent } from './components/ready/ready.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    AboutComponent,
    InsuranceComponent,
    WhyusComponent,
    ExpertComponent,
    ReviewComponent,
    BlogandnewsComponent,
    ReadyComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'insurance-website';
}
