import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  
  @Input()
  photoCover:string = 'https://carrosbemmontados.com.br/wp-content/uploads/2023/12/Nissan-Skyline-GT-R-R34-4.jpg'
  @Input()
  contentTitle:string = 'Meu Artigo'
  @Input()
  contentDescription:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aperiam, labore at placeat deleniti blanditiis, id obcaecati dolore velit libero unde accusamus aliquid illum aspernatur totam laboriosam reiciendis suscipit in.'
  private id:string | null = "0";
  constructor(private route: ActivatedRoute){
        
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
  }

  setValuesToComponente(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle =  result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    
  }

}
