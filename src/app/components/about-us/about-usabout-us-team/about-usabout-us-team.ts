import { Component } from '@angular/core';

@Component({
  selector: 'app-about-usabout-us-team',
  imports: [],
  templateUrl: './about-usabout-us-team.html',
  styleUrl: './about-usabout-us-team.css',
})
export class AboutUsaboutUsTeam {
  teamMembers: any[] = [];

  constructor() {
    this.generateTeamMembers();
  }

  // --- Team Data Generation ---
  generateTeamMembers() {
    this.teamMembers = [
      {
        id: 1,
        name: 'إبراهيم حسن',
        role: 'مصور طبيعة',
        image: 'assets/photo-1543610892-0b1f7e6d8ac1.jpg',
      },
      {
        id: 2,
        name: 'محمد علي',
        role: 'مصور بورتريه',
        image: 'assets/photo-1500648767791-00dcc994a43e.jpg',
      },
      {
        id: 3,
        name: 'سالم أحمد',
        role: 'مصور محترف',
        image: 'assets/photo-1472099645785-5658abf4ff4e.jpg',
      },
    ];

    for (let i = 0; i < 30; i++) {
      const base = this.teamMembers[i % 3];
      this.teamMembers.push({
        name: base.name,
        role: base.role,
        image: base.image,
        id: i,
      });
    }
  }
}
