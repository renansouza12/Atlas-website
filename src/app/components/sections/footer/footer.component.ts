import { Component,OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'footer',
        start:"top center",
        end:"bottom center",
        scrub:true,
      }
    })
    tl.from('#footer_txt',{
      x:-300,
      opacity:0
    }) 
    tl.to('#footer_txt',{
      x:0,
      opacity:1,
      duration:3
    })
  }

}
