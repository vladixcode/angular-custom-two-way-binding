import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Custom two-way binding
  @Input({ required: true }) size!: { width: string; height: string }
  @Output() sizeChange = new EventEmitter<{ width: string; height: string }>()

  onReset() {
    this.sizeChange.emit({
      width: '300',
      height: '300',
    })
  }
}
