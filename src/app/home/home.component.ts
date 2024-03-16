import { Component, OnInit, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private meta = inject(Meta)

  ngOnInit(): void {
    this.seoMetaTags();
  }

  seoMetaTags() {
    // HTML Meta Tags
    this.meta.updateTag({ name: 'title', content: 'Test Title 2' })
    this.meta.updateTag({ name: 'description', content: 'This is a test description for Set 2.' })
    this.meta.updateTag({ name: 'keywords', content: 'test, meta, tags, set2' })

    // Facebook Meta Tags
    this.meta.updateTag({ property: 'og:url', content: 'https://www.test2.com/' })
    this.meta.updateTag({ property: 'og:type', content: 'website' })
    this.meta.updateTag({ property: 'og:title', content: 'Test Title 2' })
    this.meta.updateTag({ property: 'og:description', content: 'This is a test description for Set 2.' })
    this.meta.updateTag({ property: 'og:image', content: 'https://www.test2.com/test-image2.jpg' })

    // Twitter Meta Tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' })
    this.meta.updateTag({ property: 'twitter:domain', content: 'test2.com' })
    this.meta.updateTag({ property: 'twitter:url', content: 'https://www.test2.com/' })
    this.meta.updateTag({ name: 'twitter:title', content: 'Test Title 2' })
    this.meta.updateTag({ name: 'twitter:description', content: 'This is a test description for Set 2.' })
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.test2.com/test-image2.jpg' })
  }
}
