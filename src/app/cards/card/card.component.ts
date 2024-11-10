import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cards = [
    {
      title: 'Relax in Our Cozy Bedroom',
      content: 'Experience comfort and tranquility in our beautifully designed bedroom. This cozy space features:',
      features: [
        'Luxurious bedding for a restful night\'s sleep',
        'Stunning views of the surrounding nature',
        'Easy access to modern amenities',
        'Air conditioning and heating for year-round comfort'
      ],
      image: 'assets/images/img.jfif',
      showFullContent: false
    },
    {
      title: 'Stunning Swimming Pool',
      content: 'Our luxurious swimming pool is the perfect oasis for guests looking to unwind and enjoy their holiday.Experience the serene ambiance with features such as:',
      features: [
        'Refreshing crystal-clear water for a rejuvenating swim',
        'Sun loungers around the pool for sunbathing and relaxation',
        'A scenic view of the surrounding landscape, perfect for picturesque moments',
        'Whether you’re swimming, lounging, our swimming pool offers an idyllic setting for your vacation.Book your stay today and make unforgettable memories'
      ],
      image: 'assets/images/img1.jfif',
      showFullContent: false
    },
    {
      title: 'Our Night Swimming Pool',
      content: 'As the sun sets, our swimming pool transforms into a magical oasis illuminated by twinkling lights. Enjoy a serene atmosphere with features such as:',
      features: [
        'Beautiful ambient lighting creating a tranquil evening ambiance',
        'Relaxing water features that enhance the soothing sounds of water',
        'Perfect for romantic evenings or family fun after dark',
        'Book your stay at our farmhouse and create unforgettable memories under the stars!'
       ],
      image: 'assets/images/img2.jfif',
      showFullContent: false
    },
    {
      title: 'Experience Tranquility at Dream River Farmhouse',
      content: 'Nestled in the heart of nature, Dream River Farmhouse offers a serene escape from the hustle and bustle of city life. Explore our beautiful property, where comfort meets nature in perfect harmony. Whether you are looking for a relaxing holiday or a fun-filled weekend getaway, our farmhouse is the ideal retreat.',
      image: 'assets/images/img3.jfif',
      showFullContent: false
    },
    {
      title: 'Modern Comfort at Our Farmhouse',
      content: 'Experience the allure of countryside living with the perfect blend of rustic charm and modern amenities. Our farmhouse exterior is designed to captivate with',
      image: 'assets/images/img4.jfif',
      showFullContent: false
    },
    {
      title: 'Stroll Through Our Lush Garden',
      content: 'Discover tranquility in our beautifully landscaped garden, a perfect escape for nature lovers and relaxation seekers. Features of our garden include:\n- Diverse array of colorful flowers and plants that bloom throughout the seasons\n- Serene walking paths that invite peaceful strolls and contemplation\n- Cozy seating areas surrounded by nature, ideal for reading or enjoying a cup of tea\n- Children\'s play area where little ones can explore and have fun\nWhether you\'re looking to unwind in a peaceful setting or capture beautiful moments for your social media, our garden offers the perfect backdrop. Book your stay at our farmhouse and immerse yourself in the beauty of nature!',
      image: 'assets/images/img5.jfif',
      showFullContent: false
    }
  ];

  toggleContent(card: any) {
    card.showFullContent = !card.showFullContent; // Toggle the value
  }
}
