import * as dayjs from "dayjs";

interface ICommentInfo {
    id: number
    comment: string
    avatar: string
    nickName: string
    time: dayjs.Dayjs | null
}

export type {ICommentInfo}
