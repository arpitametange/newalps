import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('sidebar') sidebarElement: ElementRef<HTMLElement> | any;

  ngAfterViewInit(): void {
    // This lifecycle hook ensures the view is fully initialized before trying to access the element
    if (this.sidebarElement) {
      this.sidebarElement.nativeElement.style.display = 'none'; // Hide sidebar initially
    }
  }

  showSidebar(): void {
    if (this.sidebarElement) {
      this.sidebarElement.nativeElement.style.display = 'flex';
      setTimeout(() => {
        this.sidebarElement.nativeElement.style.transform = 'translateX(0)';
      }, 10);
    }
  }

  closeSidebar(): void {
    if (this.sidebarElement) {
      this.sidebarElement.nativeElement.style.transform = 'translateX(100%)';
      setTimeout(() => {
        this.sidebarElement.nativeElement.style.display = 'none';
      }, 300);
    }
  }

}
