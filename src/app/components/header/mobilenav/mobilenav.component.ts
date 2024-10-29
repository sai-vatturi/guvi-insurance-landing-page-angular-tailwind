import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-mobile-nav',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './mobilenav.component.html',
	styleUrls: ['./mobilenav.component.css']
})
export class MobileNavComponent {
	@Input() isOpen = false;
	@Output() closeMenu = new EventEmitter<void>();

	dropdownStates: { [key: string]: boolean } = {
		home: false,
		pages: false,
		insurances: false,
		blog: false
	};

	toggleDropdown(key: string) {
		this.dropdownStates[key] = !this.dropdownStates[key];
	}
}
