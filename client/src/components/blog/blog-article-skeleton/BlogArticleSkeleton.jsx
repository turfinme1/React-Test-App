import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React from "react";
import { Card, Skeleton } from "antd";
import styles from "./BlogArticleSkeleton.module.css";

const { Meta } = Card;

export default function BlogArticleSkeleton({ cardsToRender }) {
  return Array(cardsToRender)
    .fill(0)
    .map((card, i) => (
      <Card
        key={i}
        hoverable
        style={{
          width: 500,
        }}
        cover={
          <Skeleton.Image style={{height:350, width:500}} loading active>
          </Skeleton.Image>
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading active avatar>
            <Meta/>
        </Skeleton>
      </Card>
    ));
}
