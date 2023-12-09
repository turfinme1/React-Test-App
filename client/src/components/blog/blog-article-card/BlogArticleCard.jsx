import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import styles from "./BlogArticleCard.module.css";

const { Meta } = Card;
// da se mahnat props i da se simulira nov fetch za tqh kato se natisne karti4kata za more info
export default function BlogArticleCard({
  title, description, articleText, imgUrl, _id, _ownerId, _createdOn,
}) {
  return (
    <Card hoverable
      style={{
        width:500,
      }}
      cover={
        <img className={styles.cardImg}
          alt={title}
          src={imgUrl}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
      className={styles.cardBody}
        avatar={
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        }
        title={title}
        description={description}
      />
    </Card>
  );
}
