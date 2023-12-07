import { Component,OnInit } from '@angular/core';
import Lenis from '@studio-freight/lenis'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    // smooth scroll
    const lenis = new Lenis()

    lenis.on('scroll', (e:any) => {
      console.log(e)
    })

    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
      }
  
}
