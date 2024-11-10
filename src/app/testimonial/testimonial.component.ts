import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;
@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})

export class TestimonialComponent implements AfterViewInit, OnDestroy {
  testimonials = [
    {
      image: 'assets/userimg/client1.jpeg',
      name: 'Namrta rokade',
      text: 'A wonderful family getaway! The kids loved exploring the garden, and we enjoyed peaceful mornings surrounded by nature. Dream River Farmhouse is a true slice of paradise. We’ll definitely be back!'
    },
    {
      image: 'assets/userimg/client2.jfif',
      name: 'Aniket vartak',
      text: 'An unforgettable weekend! The farmhouse was perfect for our friends birthday celebration. We loved the outdoor barbecue area and cozy living spaces. Highly recommended for group getaways'
    },
    {
      image: 'assets/userimg/client3.jfif',
      name: 'Sameer Waghmare',
      text: 'From the moment I arrived, I felt at home. The cozy bedroom and serene surroundings made it a perfect retreat. Thank you for the warm hospitality!'
    },
    {
      image: 'assets/userimg/client4.jfif',
      name: 'Sumit gaikwad',
      text: 'A fantastic holiday! The kids loved exploring the beautiful grounds, and we appreciated the comfort and tranquility. Dream River Farmhouse is a hidden gem we can’t wait to revisit.'
    },
    {
      image: 'assets/userimg/client5.jfif',
      name: 'Prem sonawne',
      text: 'Dream River Farmhouse was the perfect spot for our family vacation. The outdoor spaces are amazing, from the lush gardens to the peaceful walking trails. We had quality family time, and the kids had a blast exploring the property. Highly recommend for family getaways!'
    }
  ];

  private carousel: any;
  private autoScrollInterval: any;

  ngAfterViewInit(): void {
    // Initialize the Bootstrap carousel
    const carouselElement = document.getElementById('testimonialCarousel');
    if (carouselElement) {
      this.carousel = new bootstrap.Carousel(carouselElement, {
        interval: false
      });
      this.startAutoScroll();
    }
  }

  ngOnDestroy(): void {
    // Clean up the interval on component destruction
    this.stopAutoScroll();
  }

  // Start the auto-scroll interval
  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.carousel.next(); // Move to the next slide
    }, 6000); // Change slide every 3 seconds
  }

  // Stop the auto-scroll interval
  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    }
  }

  // Manual control of carousel, with auto-scroll reset
  onNext() {
    this.carousel.next();
    this.resetAutoScroll();
  }

  onPrev() {
    this.carousel.prev();
    this.resetAutoScroll();
  }

  // Reset the auto-scroll interval
  resetAutoScroll() {
    this.stopAutoScroll();
    this.startAutoScroll();
  }
}
