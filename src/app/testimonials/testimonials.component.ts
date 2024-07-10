import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../services/testimonial.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials: any[] = [];

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit(): void {
    this.testimonials = this.testimonialService.getTestimonial();

  }

}
