import { Component,Input,OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() id!:number;
  @Input()  imageCard!:string;

  ngOnInit(): void {
    
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.card',
        start:'-20% center',
        end:'bottom center',
        scrub:true
      }
    })

    tl.from('.card',{
      opacity:0,
      y:400
      
    })
    tl.to('.card',{
      stagger:0.2,
      duration:.5,
      opacity:1,
      y:-70
    })

  }
}
