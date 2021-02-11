import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { BooksService } from "src/app/service/books.service";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"],
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  bookData: AddBookData;
  formAdded = false;

  constructor(
    private booksService: BooksService,
    private fb: FormBuilder,
    private router:Router, private route:ActivatedRoute
  ) {
    // create object of AppBookData class
    this.bookData = new AddBookData();
  }

  ngOnInit() {
    this.addBookForm = this.fb.group({
      // id: ['',Validators.required],
      bookName: ['',Validators.required],
      authorName: ['',Validators.required],
      discription: ['',Validators.required],
    })
  }

  // onClick save book call to the service function
  onClickAddBook() {
    const bookInComingData=this.addBookForm.value
    this.bookData=bookInComingData;
    this.formAdded = true;
    this.booksService.saveBook(this.bookData);

    // to remove message "Add book successfully" after 2 second
    setTimeout(() => {
      this.formAdded = false;
    this.router.navigate(['../showbooks'],{relativeTo:this.route});
    }, 2000);
    this.addBookForm.reset();
  }
}

// create class as model
export class AddBookData {
  id: string;
  bookName: string;
  authorName: string;
  discription: string;
}
