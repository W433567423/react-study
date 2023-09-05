import CommentItem from "./cpns/CommentItem.tsx";
import CommentInput from "./cpns/CommentInput.tsx";
import {PureComponent} from "react";
import {ICommentInfo} from "./type.ts";
import * as dayjs from "dayjs";

interface IPropsType {
}

interface IStateType {
    commentList: Array<ICommentInfo>
}

class App extends PureComponent<IPropsType, IStateType> {
    constructor(props: IPropsType) {
        super(props);
        this.state = {
            commentList: [{
                id: dayjs().valueOf(),
                comment: '属性将使按钮适合其父宽度',
                avatar: 'https://wtututu.top/upload/d6c315a9-29a8-4dcf-b688-db05935bdaaf.png',
                nickName: 'tutu',
                time: dayjs()
            }]
            // commentInfo:
        }
    }

    render() {
        return (<div style={{width: "320px"}}>
            <CommentItem list={this.state.commentList} delComment={(id: number) => this.delComment(id)}/>
            <CommentInput submitComment={(info: ICommentInfo) => this.addComment(info)}/>
        </div>)
    }

    addComment(info: ICommentInfo) {
        this.setState({commentList: [...this.state.commentList, info]})
    }

    delComment(id: number) {
        this.setState({commentList: this.state.commentList.filter(e => e.id !== id)})
    }
}

export default App;
