import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Import CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'DreamRiver';
  farmhouseVideo = '/assets/videos/farmhouse.mp4';
  currentVideo: string = this.farmhouseVideo;
  showImage: boolean = true; // Initially show the image

  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    // Show the image for 10 seconds after the page loads
    setTimeout(() => {
      this.showImage = true; // Hide the image after 10 seconds
      this.playVideo(); // Start playing the video
    }, 10000); // 10 seconds delay
  }

  playVideo(): void {
    // Ensure the video element exists and play the video
    if (this.videoPlayer && this.videoPlayer.nativeElement instanceof HTMLVideoElement) {
      this.videoPlayer.nativeElement.play().catch(error => {
        console.error('Error attempting to play the video:', error);
      });
    } else {
      console.error('Video player is not defined or not an HTMLVideoElement');
    }
  }

  onVideoEnd(): void {
    // When the video ends, show the image again
    this.showImage = true;
  }
}
