import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnDestroy {
  @Output() formChange = new EventEmitter<string>();
  searchForm: UntypedFormGroup;
  subscriptions: Subscription[];

  constructor(private formBuilder: UntypedFormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });

    this.subscriptions = [
      this.searchForm.controls.search.valueChanges.subscribe(value => this.formChange.emit(value))
    ];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
