import React from "react";
import { Select, Typography, Row, Col, Card } from 'antd';
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Title } = Typography;
const { Option } = Select;

const News = ( {simplified} ) => {
    const {data: cryptoNews } = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency', count: simplified ? 6: 12});
    if (!cryptoNews?.data?.items) return 'Loading...';

    return (
        <Row gutter={[24, 24]}>
            {cryptoNews.data.items.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.link} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>
                                    {news.title}
                                </Title>
                            </div>
                        </a>
                    </Card>
                </Col>
                ))}
        </Row>
    )
};

export default News;