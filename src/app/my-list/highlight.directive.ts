import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseover')
  onHover() {
    this.renderer.addClass(this.elRef.nativeElement, 'active');
  }

  @HostListener('mouseout')
  onRemoveMouse() {
    this.renderer.removeClass(this.elRef.nativeElement, 'active');
  }

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() { }

}
