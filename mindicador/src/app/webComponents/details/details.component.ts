import { Component, OnInit } from '@angular/core';
import { DetailsServiceService} from '../../services/details-service.service';
import { ObjToArrayPipe } from '../../obj-to-array.pipe';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [DetailsServiceService]
})
export class DetailsComponent implements OnInit {

  uniques:Array<any>
  series:Array<any>

  constructor( private detailsService: DetailsServiceService, private activated: ActivatedRoute) {
    
    this.activated.paramMap.subscribe(data => {
      const id = data.get('id')
      this.detailsService.getDetails(id).subscribe( (res:any) => {
        let tmp = [];
        res.serie.map(x => {
          console.log(x);
          tmp.push(x);
        })

        console.log('Res', res);
        this.series = tmp
      })
    })

   }

  ngOnInit(): void {
  }

}
