import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [DatePipe]
})
export class Tab3Page {
  public fav: any;
  constructor(private datePipe: DatePipe) {
    const favString = localStorage.getItem('fav');
    this.fav = favString ? JSON.parse(favString) : null;
    console.log(this.fav)
  }

  formatDate (dateString: string): string {
    return this.datePipe.transform(dateString, "dd MMM yyyy")!;
  };

  formatHour (dateString: string): string {
    return this.datePipe.transform(dateString, "hh:mm")!;
  }

  
}
