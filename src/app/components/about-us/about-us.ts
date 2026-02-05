import { Component } from '@angular/core';
import { AboutUsaboutUsHero } from './about-usabout-us-hero/about-usabout-us-hero';
import { AboutUsaboutUsRate } from './about-usabout-us-rate/about-usabout-us-rate';
import { AboutUsaboutUsTeam } from './about-usabout-us-team/about-usabout-us-team';
import { AboutUsaboutUsContact } from './about-usabout-us-contact/about-usabout-us-contact';

@Component({
  selector: 'app-about-us',
  imports: [AboutUsaboutUsHero, AboutUsaboutUsRate, AboutUsaboutUsTeam, AboutUsaboutUsContact],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {}
