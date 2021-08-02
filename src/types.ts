export interface Show {
      id: string,
      name: string,
      image: {
        medium?: string
      }
      rating: {
        average: number
      }
      network: {
        name: string
      },
      schedule: {
        days: Array<string>
      },
      status: string,
      genres: Array<string>
  }

  export interface Series {
    show: Show
  }