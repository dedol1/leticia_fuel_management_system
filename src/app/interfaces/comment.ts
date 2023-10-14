export interface comment {
  id: string,
  comment: string,
  userName: string,
  userId: string,
  projectTimelineId: string,
  projectTimelineTitle: string,
  prettyTime: string,
}

export interface createCommentPayload {
  userId: string,
  projectTimelineId: string,
  comment: string,
}
