import { Component, OnInit } from '@angular/core';
import { DetailsServiceService} from '../../services/details-service.service';
import { ObjToArrayPipe } from '../../obj-to-array.pipe';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [DetailsServiceService]
})
export class DetailsComponent implements OnInit {

  indicators:Array<any>

  constructor( private detailsService: DetailsServiceService ) {
    this.detailsService.getDetails().subscribe( (res:any) => {
      console.log('Res', res);
      this.indicators = res
    })
   }

  ngOnInit(): void {
  }

}
