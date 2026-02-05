import { Component } from '@angular/core';

@Component({
  selector: 'app-about-usabout-us-rate',
  imports: [],
  templateUrl: './about-usabout-us-rate.html',
  styleUrl: './about-usabout-us-rate.css',
})
export class AboutUsaboutUsRate {
  values = [
    {
      icon: 'fa-solid fa-bullseye', // Target icon for Quality First
      title: 'الجودة أولاً',
      desc: 'محتوى مدروس ومكتوب بخيرة',
      active: false,
    },
    {
      icon: 'fa-solid fa-bolt', // Bolt icon for Practical Focus
      title: 'تركيز عملي',
      desc: 'أمثلة واقعية يمكنك تطبيقها اليوم',
      active: true, // This one is highlighted in the design
    },
    {
      icon: 'fa-solid fa-handshake', // Handshake icon for Community
      title: 'المجتمع',
      desc: 'تعلم مع آلاف المصورين',
      active: false,
    },
    {
      icon: 'fa-solid fa-rotate', // Rotate/Sync icon for Always Updated
      title: 'دائماً محدث',
      desc: 'أحدث السجالات وأفضل الممارسات',
      active: false,
    },
  ];
}
