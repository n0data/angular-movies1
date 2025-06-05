import { Component, inject, Input } from '@angular/core';
import { PaginationDTO } from '../../models/PaginationDTO';
import { CRUD_SERVICE_TOKEN } from '../../providers/providers';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-index-entities',
  standalone: true,
  imports: [],
  templateUrl: './index-entities.component.html',
  styleUrl: './index-entities.component.css'
})
// TDTO znaci da mozemo da koristimo genericke tipove??tako nesto
export class IndexEntitiesComponent<TDTO> {
  CRUDService = inject(CRUD_SERVICE_TOKEN) as any;

    entities!: TDTO[];
  
    pagination: PaginationDTO = {page: 1, recordsPerPage: 5};
    totalRecordsCount!: number;

  @Input()
  columnsToDisplay = ['id', 'name', 'actions'];

  constructor (){
    this.loadRecords();
  }
   
  loadRecords(){
      this.CRUDService.getPaginated(this.pagination).subscribe((response: HttpResponse<TDTO[]>) => {
      this.entities = response.body as TDTO[];
      const header = response.headers.get('total-records-count') as string;
      this.totalRecordsCount = parseInt(header,10);
  
    })
  }

  updatePagination(data: PageEvent){
    this.pagination = {page: data.pageIndex +1, recordsPerPage: data.pageSize};
    this.loadRecords();
  }

  delete(id:number){
  this.CRUDService.delete(id).subscribe(()=> {
    this.loadRecords();

  });
}

// ovo je genericna komponent klasa koja ce da zameni sve index stranice za actore i zanrove, jer prijakzuje samo tabelu
// service smo zamenili CRUDServicom provajder koji zamenjuje genresDTO i actorDTO sa TDTO






}
