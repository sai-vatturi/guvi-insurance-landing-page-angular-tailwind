// whyus.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-whyus',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './whyus.component.html',
	styleUrl: './whyus.component.css'
})
export class WhyusComponent {
	features = [
		{
			title: 'Protective Protection',
			icon: '✓'
		},
		{
			title: 'Money Back Guarantee',
			icon: '✓'
		},
		{
			title: 'Homeowner Insurance',
			icon: '✓'
		},
		{
			title: 'Partnership System',
			icon: '✓'
		},
		{
			title: 'Consultations',
			icon: '✓'
		},
		{
			title: 'Safety Ensure',
			icon: '✓'
		}
	];
}
