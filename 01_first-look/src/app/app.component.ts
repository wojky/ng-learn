import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <header>
      <h1>First look! 👀</h1>
    </header>

    <h3>Lekcje</h3>
    <ol>
      <li>Angular wprowadzenie</li>
    </ol>
  `,
  styles: [
    `
      h3 {
        margin-top: 1rem;
      }

      ol {
        padding-left: 1rem;
      }
    `,
  ],
})
export class AppComponent {}
