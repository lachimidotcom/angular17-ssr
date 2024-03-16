import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular17-ssr';

  private meta = inject(Meta)

  ngOnInit(): void {
    this.seoMetaTags();
  }

  seoMetaTags() {
    // HTML Meta Tags
    this.meta.updateTag({ name: 'title', content: 'Test Title 3' })
    this.meta.updateTag({ name: 'description', content: 'This is a test description for Set 3.' })
    this.meta.updateTag({ name: 'keywords', content: 'test, meta, tags, set3' })

    // Facebook Meta Tags
    this.meta.updateTag({ property: 'og:url', content: 'https://www.test3.com/' })
    this.meta.updateTag({ property: 'og:type', content: 'website' })
    this.meta.updateTag({ property: 'og:title', content: 'Test Title 3' })
    this.meta.updateTag({ property: 'og:description', content: 'This is a test description for Set 3.' })
    this.meta.updateTag({ property: 'og:image', content: 'https://www.test3.com/test-image3.jpg' })

    // Twitter Meta Tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' })
    this.meta.updateTag({ property: 'twitter:domain', content: 'test3.com' })
    this.meta.updateTag({ property: 'twitter:url', content: 'https://www.test3.com/' })
    this.meta.updateTag({ name: 'twitter:title', content: 'Test Title 3' })
    this.meta.updateTag({ name: 'twitter:description', content: 'This is a test description for Set 3.' })
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.test3.com/test-image3.jpg' })
  }
}
