import { Component, OnInit } from "@angular/core";
import { of, from } from "rxjs";
import { map, tap, take } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";

  ngOnInit() {
    let fruits: string[] = ["Apple", "Orange", "Banana"];
    of(2, 4, 6, 8).subscribe(console.log);

    from([20, 15, 10, 5])
      .pipe(
        tap(item => console.log("emitted item", { item })),
        map(item => item * 2),
        map(item => item - 10),
        map(item => {
          if (item === 0) {
            throw new Error("0 detected");
          }
          return item;
        })
      )
      .subscribe(
        item => console.log("resulting item.. ", { item }),
        err => console.error("error occurred ", { err }),
        () => console.log("complete")
      );

    of(fruits).subscribe(
      fruit => console.log("resulting item.. ", { fruit }),
      err => console.error("error occurred ", { err }),
      () => console.log("complete")
    );
  }
}
