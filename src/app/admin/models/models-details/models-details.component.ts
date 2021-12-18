import { Component, OnInit } from '@angular/core';
import { ModelsService } from '../../services/models.service';

@Component({
  selector: 'app-models-details',
  templateUrl: './models-details.component.html',
  styleUrls: ['./models-details.component.css']
})
export class ModelsDetailsComponent implements OnInit {

  constructor(private _ModelsService:ModelsService) { }
Models:any
  ngOnInit(): void {
    this.listModels()
  }
  listModels(){
this._ModelsService.listModels().subscribe((res)=>{
  $(function () {
    $('table').DataTable();
  });
console.log(res);
this.Models=res;

},(err)=>{
console.log(err)
})
  }
}
