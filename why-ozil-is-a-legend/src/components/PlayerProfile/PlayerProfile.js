
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PlayerProfile = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Mesut Özil</Card.Title>
                            <Card.Text>
                                Mesut Özil (prononciation turque : [meˈsut œˈzil], prononcé en allemand : [ˈmeːzut ˈøːzil]), né le 15 octobre 1988 à Gelsenkirchen en Allemagne de l'Ouest, est un footballeur international allemand d'origine turque.

                                Comparé à Diego1, son prédécesseur au Werder Brême, ou encore à Lionel Messi2, il était considéré comme un grand espoir allemand, devenant ainsi le symbole de cette talentueuse génération allemande lors du Mondial 2010.

                                Grâce à ses performances lors de ce Mondial, il est remarqué par plusieurs grands clubs européens, et signe au Real Madrid lors du mercato estival de 2010. Ses qualités techniques et sa précision de passe l'amènent souvent à être décrit comme l'un des meilleurs milieux de terrain au monde.

                                Özil est titulaire dans la formation qui remporte la Coupe du monde 2014 au Brésil.

                                Avec Arsenal, lors de la saison 2015-2016, il devient le meilleur passeur de Premier League et d'Europe avec 19 passes décisives, finissant à une longueur du record historique détenu par une autre légende des Gunners, Thierry Henry.

                                Il est transféré au mercato de janvier 2021 au Fenerbahçe SK où ses débuts sont difficiles après dix mois sans compétition. Au mois de juillet 2022, Fenerbahçe SK résilie officiellement le contrat de Mesut Özil. Il s'engage alors dans la foulée avec un autre club turc : İstanbul Başakşehir FK. Le 22 mars 2023, il annonce sa retraite sportive.

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PlayerProfile;
