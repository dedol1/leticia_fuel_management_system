export interface ProjectTimeline {
    id: string,
    title: string,
    description: string,
    fromDate: string,
    toDate: string
}

export interface projectTimelinePayload {
    title: string,
    description: string,
    fromDate: string,
    toDate: string
}

export interface  updateProjectTimelinePayload {
    timelineId: string,
    title: string,
    description: string,
    fromDate: string,
    toDate: string
}


