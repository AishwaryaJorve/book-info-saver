import { Component, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Books } from "src/app/model/Books.model";
import { BooksService } from "src/app/service/books.service";

@Component({
  selector: "app-show-books",
  templateUrl: "./show-books.component.html",
  styleUrls: ["./show-books.component.css"],
})
export class ShowBooksComponent implements OnInit {
  searchData:string;
  bookNameForSearch:string='';
  allBooks: Books[] = [];
  constructor(
    private books: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //when load page should display all book
    this.fetchBooksFromBooksService();
    // this.searchBookByName();
  }

  //called to the fetchAllBooksFromAPI() of service method
  fetchBooksFromBooksService() {
    this.allBooks = this.books.fetchAllBooksFromAPI();
  }

  //called to the deleteBookbyId() of the service method
  onDeleteClickDeleteBook(id: any) {
    this.books.deleteBookbyId(id)
    setTimeout(()=>{
    this.fetchBooksFromBooksService();
    },1000)
  }

  searchBookByName(){
    this.allBooks = this.books.getBookByBookName(this.bookNameForSearch);
    console.log(this.allBooks);
  }
}
