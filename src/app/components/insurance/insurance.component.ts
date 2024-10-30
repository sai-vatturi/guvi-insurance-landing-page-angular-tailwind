// insurance.component.ts
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-insurance',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './insurance.component.html',
	styleUrl: './insurance.component.css'
})
export class InsuranceComponent {
	@ViewChild('scrollContainer') scrollContainer!: ElementRef;

	images: string[] = ['services-1.jpg', 'services-2.jpg', 'services-3.jpg', 'services-4.jpg', 'services-5.jpg', 'services-6.jpg'];

	titles: string[] = ['Business Insurance', 'Vehicle Insurance', 'Car Insurance', 'Life Insurance', 'Health Insurance', 'Property Insurance'];

	categories: string[] = ['BUSINESS', 'VEHICLE', 'CAR', 'LIFE', 'HEALTH', 'PROPERTY'];

	getTitle(index: number): string {
		return this.titles[index] || 'Insurance Service';
	}

	getCategory(index: number): string {
		return this.categories[index] || 'GENERAL';
	}

	scrollNext(): void {
		const container = this.scrollContainer.nativeElement;
		const cardWidth = container.querySelector(':scope > div').offsetWidth + 24; // width + gap
		container.scrollBy({ left: cardWidth, behavior: 'smooth' });
	}

	scrollPrev(): void {
		const container = this.scrollContainer.nativeElement;
		const cardWidth = container.querySelector(':scope > div').offsetWidth + 24; // width + gap
		container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
	}
}
