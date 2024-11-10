import { Component, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements AfterViewInit {
  title = 'Welcome to Our Farmhouse';
  content = `
    Our farmhouse is the perfect getaway for families and friends looking to unwind and connect with nature.
    Nestled in the heart of the countryside, our property offers a unique experience that combines comfort and
    the beauty of the great outdoors.

    We are passionate about providing our guests with an unforgettable stay, whether it's a weekend retreat
    or a longer vacation. Enjoy stunning views, fresh air, and the serenity of rural life.

    Come and make memories at our farmhouse, where relaxation and adventure await!
  `;
  imageUrl = 'assets/images/img2.jfif';
  farmhouseVideo = '/assets/videos/farmhouse.mp4';
  currentVideo: string = this.farmhouseVideo;
  showImage: boolean = true; // Initially show the image
  videoPaused: boolean = true; // To track if video is paused

  @ViewChild('videoPlayer', { static: false }) videoPlayer?: ElementRef<HTMLVideoElement>;

  constructor(private meta: Meta, private titleService: Title, private cdr: ChangeDetectorRef) {
    this.titleService.setTitle('About Us - Your Farmhouse Rental');
    this.meta.addTags([
      { name: 'description', content: 'Discover our beautiful farmhouse, perfect for family holidays and retreats. Enjoy nature, comfort, and unforgettable memories.' },
      { name: 'keywords', content: 'farmhouse rental, holiday home, countryside retreat, family getaway, nature accommodation' }
    ]);
  }

  ngAfterViewInit(): void {
    // Wait for the view to be fully initialized
    setTimeout(() => {
      this.showImage = false;
      this.cdr.detectChanges();
    }, 100); // Adding a short delay to ensure video element is rendered
  }

  playVideo(): void {
    const videoElement = this.videoPlayer?.nativeElement;
    if (videoElement) {
      videoElement.play().then(() => {
        this.videoPaused = false;
      }).catch(error => {
        console.error('Error attempting to play the video:', error);
      });
    } else {
      console.error('Video player is not defined or not an HTMLVideoElement');
    }
  }

  pauseVideo(): void {
    const videoElement = this.videoPlayer?.nativeElement;
    if (videoElement) {
      videoElement.pause();
      this.videoPaused = true;
    }
  }

  togglePlayPause(): void {
    const videoElement = this.videoPlayer?.nativeElement;
    if (videoElement) {
      if (this.videoPaused) {
        this.playVideo();
      } else {
        this.pauseVideo();
      }
    }
  }

  onVideoEnd(): void {
    this.showImage = true;
    this.videoPaused = true;
    this.cdr.detectChanges();
  }
}
