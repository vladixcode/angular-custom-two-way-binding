/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line prettier/prettier
import {
  Component,
  EventEmitter,
  Input,
  model,
  Output
} from '@angular/core'
@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Custom two-way binding with Decorators for Angular < 17.2
  // @Input({ required: true }) size!: { width: string; height: string }
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>()

  // Custom two-way binding with model() function for Angular >= 17.2
  size = model.required<{ width: string; height: string }>()

  onReset() {
    // this.sizeChange.emit({
    //   width: '300',
    //   height: '300',
    // })

    this.size.set({
      width: '300',
      height: '300',
    })
  }
}
