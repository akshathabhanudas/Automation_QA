import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-display-test-cases',
  templateUrl: './display-test-cases.component.html',
  styleUrls: ['./display-test-cases.component.css']
})
export class DisplayTestCasesComponent implements OnInit {
  title = 'Automation-QA';
   testCases: string[] = ['Test Case 1', 'Test Case 2', 'Test Case 3','Test Case 4','Test Case 5','Test Case 6','Test Case 7','Test Case 8','Test Case 9','Test Case 10',];
  dropdownList : any;
  // foods: string[] = ['Mango','Banana']
  dropdownSettings : any;
  i : any
  constructor() { }



  ngOnInit(): void {
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
    // if(item.item_id == 1){
    //   console.log('item '+ item.item_id+' displayed')
    // }
    // else if (item.item_id == 2) {
    //   console.log('item '+ item.item_id+' displayed')
    // } 
    // else if (item.item_id == 3) {
    //   console.log('item '+ item.item_id+' displayed')
    // }else {
    //   console.log('item '+ item.item_id+' displayed')
    // }
   for(this.i=0;this.i<Event.length;this.i++){
   if(Event.length !== 0){
     console.log("in for loop ",this.i)
     console.log("Enable Button");
     console.log(button)
    button?.removeAttribute("disabled")  ;   
    }

  } 
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
        {item_id : 1, item_text : 'Test Case 1'},
        {item_id : 2, item_text : 'Test Case 2'},
        {item_id : 3, item_text : 'Test Case 3'},
        {item_id : 4, item_text : 'Test Case 4'},
        {item_id : 5, item_text : 'Test Case 5'},
        {item_id : 6, item_text : 'Test Case 6'},
        {item_id : 7, item_text : 'Test Case 7'},
        {item_id : 8, item_text : 'Test Case 8'},
        {item_id : 9, item_text : 'Test Case 9'},
        {item_id : 10, item_text : 'Test Case 10'},
      ]

      }
}
