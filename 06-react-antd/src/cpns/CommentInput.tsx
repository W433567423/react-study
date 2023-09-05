import React, {PureComponent} from 'react';
import {Button, Input} from 'antd';
import * as dayjs from "dayjs";
import {ICommentInfo} from "../type.ts";


interface IPropsType {
    submitComment: (info: ICommentInfo) => void
}

interface IStateType {
    comment: string

}

class CommentInput extends PureComponent<IPropsType, IStateType> {

    constructor(props: IPropsType) {
        super(props);
        this.state = {
            comment: ''
        }
    }

    render() {
        return (
            <div>
                <Input.TextArea value={this.state.comment} rows={4} cols={30} onInput={(e) => this.inputChange(e)}/>
                <Button onClick={() => this.addComment()} type="primary" style={{marginTop: "12px"}}>添加评论</Button>
            </div>
        );
    }

    inputChange(e: React.FormEvent<HTMLTextAreaElement>) {
        this.setState({comment: (e.target as any).value})
    }

    addComment() {
        const commentInfo: ICommentInfo = {
            id: dayjs().valueOf(),
            comment: this.state.comment,
            avatar: 'https://wtututu.top/upload/d6c315a9-29a8-4dcf-b688-db05935bdaaf.png',
            nickName: 'tutu',
            time: dayjs()
        }
        this.props.submitComment(commentInfo)
        this.setState({comment: ''})
    }
}


export default CommentInput;
