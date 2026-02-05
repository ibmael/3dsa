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

  generateTeamMembers() {
    const baseMembers = [
      {
        name: 'إبراهيم حسن',
        role: 'مصور طبيعة',
        image: '../../../../assets/photo-1543610892-0b1f7e6d8ac1.jpg', // Placeholder, using generic names if assets don't exist
      },
      {
        name: 'محمد علي',
        role: 'مصور بورتريه',
        image: 'assets/images/team-2.jpg',
      },
      {
        name: 'سالم أحمد',
        role: 'مصور محترف',
        image: 'assets/images/team-3.jpg',
      },
    ];

    // Generate 30 members (10 rows * 3 columns)
    for (let i = 0; i < 30; i++) {
      const base = baseMembers[i % 3];
      this.teamMembers.push({
        name: base.name,
        role: base.role,
        image: base.image, // In a real app, we'd vary this
        id: i,
      });
    }
  }
}
