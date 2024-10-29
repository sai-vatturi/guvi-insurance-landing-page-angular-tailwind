import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MobileNavComponent } from './mobilenav/mobilenav.component';
import { NavlinksComponent } from './navlinks/navlinks.component';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [CommonModule, NavlinksComponent, MobileNavComponent],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	isMobileMenuOpen = false;

	toggleMobileMenu() {
		this.isMobileMenuOpen = !this.isMobileMenuOpen;
	}
}
