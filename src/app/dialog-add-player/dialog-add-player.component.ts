import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogContent, MatFormFieldModule, MatInputModule, FormsModule, MatDialogClose, MatDialogActions],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  name: string = '';
  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>,public dialog: MatDialog) {}

  onNoClick(){
    this.dialogRef.close();
  }
}

