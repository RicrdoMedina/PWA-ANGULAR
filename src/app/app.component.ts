import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

// Services
import { NotesService } from './services/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'pwa';
  panelOpenState: boolean = false;
  categories: any = ['Trabajo', 'Personal'];
  nota : any = {};
  constructor(private swUpdate: SwUpdate, private notesService: NotesService){
  }
  ngOnInit(): void{
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((v) => {
        if (confirm('Actualización disponible, deseas obtenerla?')) {
          window.location.reload();
        }
      });
    }
  }
  guardarNota() {
    console.log(this.nota)
    this.nota.id = Date.now()
    console.log(this.nota)
    //this.notesService.createNote(this.nota)
  }
}




