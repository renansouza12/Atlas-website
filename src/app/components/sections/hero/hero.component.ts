import { Component,OnInit } from '@angular/core';
import { gsap } from "gsap";
import SplitType from 'split-type';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss','hero.responsive.component.scss'],
})
export class HeroComponent implements OnInit {
  ngOnInit(): void {
    const myTitle = new SplitType(".title");

    gsap.from('.char',{
      opacity:0,
      stagger:.2,
      delay:.5,
      duration: .7,
      y:100
    })

  }

}
