import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-navlinks',
	standalone: true,
	imports: [CommonModule], // Ensure CommonModule is imported here
	templateUrl: './navlinks.component.html',
	styleUrls: ['./navlinks.component.css']
})
export class NavlinksComponent {}
