import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subsicribe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './subsicribe.html',
  styleUrl: './subsicribe.css',
})
export class Subsicribe {
  email = '';

  onSubmit(): void {
    if (this.email.trim()) {
      // Placeholder: in a real app you would call an API here
      this.email = '';
    }
  }
}
