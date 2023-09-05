import {PureComponent} from 'react';
import {ICommentInfo} from "../type.ts";
import {Avatar, Button} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import style from './style.module.css'

interface IPropsType {
    list: ICommentInfo[]
    delComment: (id: number) => void
}

interface IStateType {
}

class CommentItem extends PureComponent<IPropsType, IStateType> {
    constructor(props: IPropsType) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                {this.props.list.map((e) => (
                    <div key={e.id}>
                        <div className={style.commentBody}>
                            <Avatar className={style.commentAvatar} size="large"
                                    src={e.avatar}/>

                            <div className={style.commentInner}>
                                <div>
                                    <text className={style.commentNick}>{e.nickName}</text>
                                    <text className={style.commentTime}>{e.time?.format('YYYY-MM-DD')}</text>
                                </div>
                                <p className={style.commentText}>{e.comment}</p>
                                <Button className={style.commentButton} type="text" icon={<DeleteOutlined/>}
                                        onClick={() => this.props.delComment(e.id)}>
                                    删除
                                </Button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        );
    }

}


export default CommentItem;
