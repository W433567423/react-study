import {PureComponent} from 'react';
import {ICommentInfo} from "../type";
import {Avatar, Button} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
// @ts-ignore
import style from './style.module.css'
import axios from "axios";

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

    componentDidMount() {
        axios({
            url: 'https://ah.wtututu.top/login', method: "POST", data: {
                username: "tutu",
                password: "123456"
            }
        })
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
                                    <span className={style.commentNick}>{e.nickName}</span>
                                    <span className={style.commentTime}>{e.time?.format('YYYY-MM-DD')}</span>
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
