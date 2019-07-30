import { Component, OnInit, Input} from '@angular/core';
  

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  @Input()  title:string;
  @Input() theme:string;
  isCollapsed:boolean=false;
 hbr(){
   this.isCollapsed = !this.isCollapsed;

 }


  constructor() { }

  ngOnInit() {
  }

}
