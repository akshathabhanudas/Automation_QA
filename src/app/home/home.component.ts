import { Component, OnInit } from '@angular/core';
import { DisplayTestCasesComponent } from '../display-test-cases/display-test-cases.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Automation-QA';
  dropdownList : any;
  dropdownSettings : any;
  i : any;

  ngOnInit(){
    this.dropdownList = this.getData();
    this.dropdownSettings={
       singleSelection : false,
       idField : 'item_id',
       textField : 'item_text',
       selectAlltext : 'Select All',
       unSelectAlltext : 'UnSelect All'
     };
      
  }
  
  onItemSelect(item: any) {
    var button = document.getElementById("button");
    console.log(item);
    if(item.item_id == 1){
      console.log('item '+ item.item_id+' displayed')
    }
    else if (item.item_id == 2) {
      console.log('item '+ item.item_id+' displayed')
    } 
    else if (item.item_id == 3) {
      console.log('item '+ item.item_id+' displayed')
    }else {
      console.log('item '+ item.item_id+' displayed')
    }
  // for(this.i=0;this.i<Event.length;this.i++){
   if(Event.length !== 0){
     console.log(this.i)
     console.log("Enable Button");
     console.log(button)
    button?.removeAttribute("disabled")  ;   
    }

  //} 
}


  onSelectAll(item : any){
    console.log(item)
    var button = document.getElementById("button");
    if(Event.length !== 0){
      console.log("Enable Button");
      console.log(button)
     button?.removeAttribute("disabled")  ;   
   }
 
  }

onItemDeSelect(item: any) {
  console.log('onItemDeSelect', item);
}

onUnSelectAll() {
  console.log('onUnSelectAll fires');
  var button = document.getElementById("button");
  button?.toggleAttribute("disabled")
}
    getData(){
      return [
        {item_id : 1, item_text : 'GL Cube'},
        {item_id : 2, item_text : 'PNL Cube'},
        {item_id : 3, item_text : 'DropDown Menu 1'},
        {item_id : 4, item_text : 'DropDown Menu 2'}
      ]

      }

}
