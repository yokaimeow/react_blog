import { Avatar, Divider } from 'antd'
import '../static/style/components/author.css'

const Author = () => {
  return(
    <div className="author-div comm-box">
      <div><Avatar size={100} src="https://www.diyimei.net/upload/2018/1523807721171765.jpg" /></div>
      <div className="author-introduction">
        Let's Go!
        <Divider>社交账号</Divider>
        <Avatar size={28} icon="github" className="account" />
      </div>
    </div>
  )
}

export default Author
