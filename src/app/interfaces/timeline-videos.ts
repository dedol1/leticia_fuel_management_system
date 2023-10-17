export interface DownloadUrl {
    id: string;
    size: string;
    url: string;
  }

  export interface VideoMediaItem {
    id: string;
    mediaType: string;
    privacy: string;
    mediaTitle: string;
    description: string;
    displayVideoUrl: string;
    downloadUrls: DownloadUrl[];
    videoReportingType: string;
  }

  export interface TimelineVideos {
    [key: string]: VideoMediaItem[];
  }
