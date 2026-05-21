import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss'],
})
export class GetConfirmComponent implements OnInit {
getmsg!:string
  constructor(private _matdialog:MatDialogRef<GetConfirmComponent>
    
  ) { }

  ngOnInit(): void {
  }

  OnClick(flag:boolean){
      this._matdialog.close(flag)
  }

}
